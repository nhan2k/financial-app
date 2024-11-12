import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentHeaderComponent } from '../../shared/components/content-header/content-header.component';
import { ContentHeader } from '../../shared/models/interfaces/common';
import { SelectionComponent } from '../../shared/components/selection/selection.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ButtonConfig } from '../../shared/models/interfaces/button';
import {
  ButtonContent,
  ButtonSize,
  ButtonType,
} from '../../shared/models/enums/button';
import { ButtonOrder } from '../../shared/models/enums/button';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroChevronRightSolid,
  heroEllipsisVerticalSolid,
} from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-my-card',
  standalone: true,
  imports: [
    ContentHeaderComponent,
    SelectionComponent,
    ButtonComponent,
    NgIconComponent,
  ],
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideIcons({
      heroEllipsisVerticalSolid,
      heroChevronRightSolid,
    }),
  ],
})
export class MyCardComponent {
  contentHeader: ContentHeader = {
    title: 'My Card',
    desc: 'Keep track your financial plan',
  };

  config: ButtonConfig = {
    content: ButtonContent.IconOnly,
    order: ButtonOrder.Primary,
    size: ButtonSize.Small,
    type: ButtonType.Button,
    icon: 'heroArrowRightSolid',
  };

  configLookMore: ButtonConfig = {
    content: ButtonContent.TextOnly,
    order: ButtonOrder.Outline,
    size: ButtonSize.Small,
    type: ButtonType.Button,
    text: 'Look More',
  };
}
