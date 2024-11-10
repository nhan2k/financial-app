import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowsPointingOutSolid,
  heroInboxSolid,
  heroQuestionMarkCircleSolid,
} from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-top-navbar-web',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './top-navbar-web.component.html',
  styleUrl: './top-navbar-web.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideIcons({
      heroInboxSolid,
      heroArrowsPointingOutSolid,
      heroQuestionMarkCircleSolid,
    }),
  ],
})
export class TopNavbarWebComponent {}
