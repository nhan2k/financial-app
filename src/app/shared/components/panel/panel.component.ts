import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroInformationCircleSolid } from '@ng-icons/heroicons/solid';
import { ButtonConfig } from '../../models/interfaces/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [ButtonComponent, NgIconComponent, CommonModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideIcons({
      heroInformationCircleSolid,
    }),
  ],
})
export class PanelComponent {
  @Input() config?: ButtonConfig;
}
