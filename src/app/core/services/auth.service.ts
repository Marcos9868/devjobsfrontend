import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import {
  ApiResponse,
  LoginPayload,
  RegisterPayload,
  User,
} from '../models/commom.model';
import { map, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = signal<boolean>(false);

  router = inject(Router);
  constructor(private _http: HttpClient) {
    if (this.getUserToken()) {
      this.isLoggedIn.update(() => true);
    }
  }

  register(payload: RegisterPayload) {
    return this._http.post<ApiResponse<User>>(
      `http://localhost:30001/auth/register`,
      payload
    );
  }

  login(payload: LoginPayload) {
    return this._http
      .post<ApiResponse<User>>(`http://localhost:30001/auth/login`, payload)
      .pipe(
        tap((response) => console.log('Server response:', response)),
        map((response: ApiResponse<User>) => {
          if (response.token) {
            localStorage.setItem('USER_TOKEN', response.token);
            this.isLoggedIn.update(() => true);
          } else {
            console.log('Response did not contain status or token:', response);
          }
          return response;
        })
      );
  }

  getUserToken() {
    return localStorage.getItem('USER_TOKEN');
  }

  logout() {
    localStorage.removeItem('USER_TOKEN');
    this.isLoggedIn.update(() => false);
    this.router.navigate(['/login']);
  }
}
