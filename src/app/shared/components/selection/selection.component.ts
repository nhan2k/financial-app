import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectionComponent {}
