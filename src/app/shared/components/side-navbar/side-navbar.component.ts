import { Component } from '@angular/core';
import { TopNavbarMobileComponent } from '../top-navbar/top-navbar-mobile/top-navbar-mobile.component';
import { SideNavigationItemComponent } from '../side-navigation-item/side-navigation-item.component';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [TopNavbarMobileComponent, SideNavigationItemComponent],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss',
})
export class SideNavbarComponent {}
