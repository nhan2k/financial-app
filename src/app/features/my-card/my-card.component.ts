import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentHeaderComponent } from '../../shared/components/content-header/content-header.component';
import { ContentHeader } from '../../shared/models/interfaces/common';

@Component({
  selector: 'app-my-card',
  standalone: true,
  imports: [ContentHeaderComponent],
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyCardComponent {
  contentHeader: ContentHeader = {
    title: 'My Card',
    desc: 'Keep track your financial plan',
  };
}
