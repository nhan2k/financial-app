import { Component, OnInit } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroInboxSolid,
  heroArrowsPointingOutSolid,
  heroQuestionMarkCircleSolid,
} from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-top-navbar-web',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './top-navbar-web.component.html',
  styleUrl: './top-navbar-web.component.scss',
  providers: [
    provideIcons({
      heroInboxSolid,
      heroArrowsPointingOutSolid,
      heroQuestionMarkCircleSolid,
    }),
  ],
})
export class TopNavbarWebComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
