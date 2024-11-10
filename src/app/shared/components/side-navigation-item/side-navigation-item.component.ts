import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroChatBubbleOvalLeftEllipsisSolid,
  heroCog8ToothSolid,
} from '@ng-icons/heroicons/solid';
import { NavigationItem, StringOrNumber } from '../../models/interfaces/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-navigation-item',
  standalone: true,
  imports: [NgIconComponent, RouterModule],
  templateUrl: './side-navigation-item.component.html',
  styleUrl: './side-navigation-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideIcons({
      heroChatBubbleOvalLeftEllipsisSolid,
      heroCog8ToothSolid,
    }),
  ],
})
export class SideNavigationItemComponent {
  @Input() item?: NavigationItem;
  @Input() sign?: StringOrNumber;
}
