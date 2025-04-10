import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-table-cell',
  standalone: true,
  imports: [],
  templateUrl: './table-cell.component.html',
  styleUrl: './table-cell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableCellComponent {}
