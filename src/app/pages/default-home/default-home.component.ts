import { Component, OnInit, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.scss'],
  imports: [NgOptimizedImage, MenubarModule, ButtonModule],
  standalone: true,
})
export class DefaultHomeComponent implements OnInit {
  items: MenuItem[] | undefined;

  authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Register',
        icon: 'pi pi-user-plus',
        items: [
          {
            label: 'As a Freelancer',
            icon: 'pi pi-briefcase',
          },
          {
            label: 'As a Client',
            icon: 'pi pi-users',
          },
          {
            label: 'As a Candidate',
            icon: 'pi pi-id-card',
          },
        ],
      },
    ];
  }
}
