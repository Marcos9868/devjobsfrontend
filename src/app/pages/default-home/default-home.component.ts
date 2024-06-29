import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.scss'],
  imports: [NgOptimizedImage, MenubarModule],
  standalone: true
})
export class DefaultHomeComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [

      {
        label: 'Register',
        icon: 'pi pi-user-plus',
        items: [
          {
            label: 'As a Freelancer',
            icon: 'pi pi-briefcase'
          },
          {
            label: 'As a Client',
            icon: 'pi pi-users'
          },
          {
            label: 'As a Candidate',
            icon: 'pi pi-id-card'
          }
        ]
      },

    ];
  }
}
