import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentHeaderComponent } from '../../shared/components/content-header/content-header.component';
import { ContentHeader } from '../../shared/models/interfaces/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroEllipsisVerticalSolid } from '@ng-icons/heroicons/solid';
import { WalletComponent } from '../../shared/components/wallet/wallet.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ButtonConfig } from '../../shared/models/interfaces/button';
import {
  ButtonContent,
  ButtonOrder,
  ButtonSize,
  ButtonType,
} from '../../shared/models/enums/button';

@Component({
  selector: 'app-my-wallet',
  standalone: true,
  imports: [
    ContentHeaderComponent,
    NgIconComponent,
    WalletComponent,
    ButtonComponent,
  ],
  templateUrl: './my-wallet.component.html',
  styleUrl: './my-wallet.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideIcons({
      heroEllipsisVerticalSolid,
    }),
  ],
})
export class MyWalletComponent {
  contentHeader: ContentHeader = {
    title: 'My Wallet',
    desc: 'Keep track your financial plan',
  };

  walletCards = [1, 2, 3, 4, 5, 6];

  createBtnConfig: ButtonConfig = {
    content: ButtonContent.IconOnly,
    order: ButtonOrder.Primary,
    size: ButtonSize.Small,
    type: ButtonType.Button,
    icon: 'heroPlusSolid',
  };
}
