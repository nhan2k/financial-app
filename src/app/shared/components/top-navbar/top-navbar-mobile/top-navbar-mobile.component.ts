import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBars3BottomRightMini } from '@ng-icons/heroicons/mini';

@Component({
  selector: 'app-top-navbar-mobile',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './top-navbar-mobile.component.html',
  styleUrl: './top-navbar-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideIcons({
      heroBars3BottomRightMini,
    }),
  ],
})
export class TopNavbarMobileComponent {}
