import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroWalletSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideIcons({
      heroWalletSolid,
    }),
  ],
})
export class WalletComponent {}
