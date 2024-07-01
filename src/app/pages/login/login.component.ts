import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  profileForm: FormGroup;

  router = inject(Router);

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.profileForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Submitting:', this.profileForm.value);
      this.authService.login(this.profileForm.value).subscribe({
        next: (response) => {
          this.router.navigate(['/home']);
          console.log(response);
        },
        error: (error) => {
          console.error('Login failed', error);
        },
      });
    }
  }
}
