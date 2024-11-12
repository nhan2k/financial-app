import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentHeaderComponent } from '../../shared/components/content-header/content-header.component';
import { ContentHeader } from '../../shared/models/interfaces/common';
import { TableHeaderComponent } from '../../shared/components/table-header/table-header.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import {
  ButtonOrder,
  ButtonSize,
  ButtonType,
} from '../../shared/models/enums/button';
import { ButtonConfig } from '../../shared/models/interfaces/button';
import { ButtonContent } from '../../shared/models/enums/button';

@Component({
  selector: 'app-recent-transactions',
  standalone: true,
  imports: [ContentHeaderComponent, TableHeaderComponent, ButtonComponent],
  templateUrl: './recent-transactions.component.html',
  styleUrl: './recent-transactions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentTransactionsComponent {
  contentHeader: ContentHeader = {
    title: 'Recent Transactions',
    desc: '',
  };

  createBtnConfig: ButtonConfig = {
    content: ButtonContent.TextOnly,
    order: ButtonOrder.Primary,
    size: ButtonSize.Small,
    type: ButtonType.Button,
    text: 'Download the Excel File',
  };
}
