import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroPlusSolid,
  heroBars3Solid,
  heroArrowRightSolid,
} from '@ng-icons/heroicons/solid';
import {
  ButtonContent,
  ButtonOrder,
  ButtonSize,
} from '../../models/enums/button';
import { ButtonConfig } from '../../models/interfaces/button';
import { CommonModule } from '@angular/common';
import { ButtonClassPipe } from '../../pipes/button/button-class.pipe';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgIconComponent, CommonModule, ButtonClassPipe],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  providers: [
    provideIcons({
      heroPlusSolid,
      heroBars3Solid,
      heroArrowRightSolid,
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() config?: ButtonConfig;

  transformType(): string {
    let result = 'button ';
    if (
      this.config?.content === ButtonContent.IconText &&
      this.config?.order === ButtonOrder.Primary &&
      this.config?.size === ButtonSize.Big
    ) {
      result += 'primary icon text big';
    }

    if (
      this.config?.content === ButtonContent.TextOnly &&
      this.config?.order === ButtonOrder.Primary &&
      this.config?.size === ButtonSize.Small
    ) {
      result += 'primary text-only small';
    }

    if (
      this.config?.content === ButtonContent.IconText &&
      this.config?.order === ButtonOrder.Primary &&
      this.config?.size === ButtonSize.Big
    ) {
      result += 'primary icon text big';
    }

    if (
      this.config?.content === ButtonContent.TextOnly &&
      this.config?.order === ButtonOrder.Primary &&
      this.config?.size === ButtonSize.Big
    ) {
      result += 'primary text-only big';
    }

    if (
      this.config?.content === ButtonContent.IconText &&
      this.config?.order === ButtonOrder.Primary &&
      this.config?.size === ButtonSize.Small
    ) {
      result += 'primary icon text small';
    }

    if (
      this.config?.content === ButtonContent.IconOnly &&
      this.config?.order === ButtonOrder.Primary &&
      this.config?.size === ButtonSize.Small
    ) {
      result += 'primary icon-only small';
    }

    if (
      this.config?.content === ButtonContent.IconOnly &&
      this.config?.order === ButtonOrder.Primary &&
      this.config?.size === ButtonSize.Big
    ) {
      result += 'primary icon-only big';
    }

    if (
      this.config?.content === ButtonContent.IconText &&
      this.config?.order === ButtonOrder.Outline &&
      this.config?.size === ButtonSize.Big
    ) {
      result += 'outline icon text big';
    }

    if (
      this.config?.content === ButtonContent.IconText &&
      this.config?.order === ButtonOrder.Outline &&
      this.config?.size === ButtonSize.Small
    ) {
      result += 'outline icon text small';
    }

    if (
      this.config?.content === ButtonContent.TextOnly &&
      this.config?.order === ButtonOrder.Outline &&
      this.config?.size === ButtonSize.Big
    ) {
      result += 'outline text-only big';
    }

    if (
      this.config?.content === ButtonContent.TextOnly &&
      this.config?.order === ButtonOrder.Outline &&
      this.config?.size === ButtonSize.Small
    ) {
      result += 'outline text-only small';
    }

    if (
      this.config?.content === ButtonContent.IconOnly &&
      this.config?.order === ButtonOrder.Outline &&
      this.config?.size === ButtonSize.Small
    ) {
      result += 'outline icon-only small';
    }

    if (
      this.config?.content === ButtonContent.IconOnly &&
      this.config?.order === ButtonOrder.Outline &&
      this.config?.size === ButtonSize.Big
    ) {
      result += 'outline icon-only big';
    }

    return result;
  }

  transformSize() {
    if (
      this.config?.content === ButtonContent.IconOnly &&
      this.config?.size === ButtonSize.Big
    ) {
      return '32';
    } else if (
      this.config?.content === ButtonContent.IconOnly &&
      this.config?.size === ButtonSize.Small
    ) {
      return '18';
    }
    if (this.config?.size === ButtonSize.Big) {
      return '24';
    }
    return '16';
  }
}
