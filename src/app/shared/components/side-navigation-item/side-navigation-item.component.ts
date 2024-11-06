import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChatBubbleOvalLeftEllipsisSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-side-navigation-item',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './side-navigation-item.component.html',
  styleUrl: './side-navigation-item.component.scss',
  providers: [
    provideIcons({
      heroChatBubbleOvalLeftEllipsisSolid,
    }),
  ],
})
export class SideNavigationItemComponent {}
