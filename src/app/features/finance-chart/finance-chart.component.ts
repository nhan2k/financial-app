import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-finance-chart',
  standalone: true,
  imports: [],
  templateUrl: './finance-chart.component.html',
  styleUrl: './finance-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinanceChartComponent {}
