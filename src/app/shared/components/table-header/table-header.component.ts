import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-header',
  standalone: true,
  imports: [],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableHeaderComponent {
  @Input() name?: string;
}
