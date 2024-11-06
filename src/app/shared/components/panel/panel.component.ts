import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroInformationCircleSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [ButtonComponent, NgIconComponent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
  providers: [
    provideIcons({
      heroInformationCircleSolid,
    }),
  ],
})
export class PanelComponent {}
