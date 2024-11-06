import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroAcademicCap } from '@ng-icons/heroicons/outline';
import { TopNavbarWebComponent } from './shared/components/top-navbar/top-navbar-web/top-navbar-web.component';
import { TopNavbarMobileComponent } from './shared/components/top-navbar/top-navbar-mobile/top-navbar-mobile.component';
import { SideNavigationItemComponent } from './shared/components/side-navigation-item/side-navigation-item.component';
import { SideNavbarComponent } from './shared/components/side-navbar/side-navbar.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { InputComponent } from './shared/components/input/input.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { SelectionComponent } from './shared/components/selection/selection.component';
import { PanelComponent } from './shared/components/panel/panel.component';
import { WalletComponent } from './shared/components/wallet/wallet.component';
import { TableHeaderComponent } from './shared/components/table-header/table-header.component';
import { TableCellComponent } from './shared/components/table-cell/table-cell.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
