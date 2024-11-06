import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroPlusSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  providers: [
    provideIcons({
      heroPlusSolid,
    }),
  ],
})
export class ButtonComponent {}
