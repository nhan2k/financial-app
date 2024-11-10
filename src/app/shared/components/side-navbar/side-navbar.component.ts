import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TopNavbarMobileComponent } from '../top-navbar/top-navbar-mobile/top-navbar-mobile.component';
import { SideNavigationItemComponent } from '../side-navigation-item/side-navigation-item.component';
import { NavigationItem } from '../../models/interfaces/common';
import { NgIconComponent } from '@ng-icons/core';
import { ButtonComponent } from '../button/button.component';
import { ButtonConfig } from '../../models/interfaces/button';
import {
  ButtonContent,
  ButtonOrder,
  ButtonSize,
  ButtonType,
} from '../../models/enums/button';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [
    TopNavbarMobileComponent,
    SideNavigationItemComponent,
    NgIconComponent,
    ButtonComponent,
  ],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavbarComponent {
  itemsHeader: NavigationItem[] = [
    {
      link: '/my-wallet',
      label: 'My Wallet',
      icon: 'heroChatBubbleOvalLeftEllipsisSolid',
    },
    {
      link: '/my-card',
      label: 'My Card',
      icon: 'heroChatBubbleOvalLeftEllipsisSolid',
    },
    {
      link: '/finance-chart',
      label: 'Finance Chart',
      icon: 'heroChatBubbleOvalLeftEllipsisSolid',
    },
    {
      link: '/recent-transactions',
      label: 'Recent Transactions',
      icon: 'heroChatBubbleOvalLeftEllipsisSolid',
      sign: '12',
    },
  ];

  itemsFooter: NavigationItem[] = [
    {
      link: '/setting',
      label: 'Setting',
      icon: 'heroCog8ToothSolid',
    },
    {
      link: '/profile',
    },
  ];

  buttonConfig: ButtonConfig = {
    order: ButtonOrder.Primary,
    content: ButtonContent.IconOnly,
    size: ButtonSize.Small,
    type: ButtonType.Button,
    icon: 'heroBars3Solid',
  };
}
