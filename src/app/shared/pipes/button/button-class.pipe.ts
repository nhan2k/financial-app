import { Pipe, PipeTransform } from '@angular/core';
import { ButtonConfig } from '../../models/interfaces/button';
import {
  ButtonContent,
  ButtonOrder,
  ButtonSize,
} from '../../models/enums/button';

@Pipe({
  name: 'buttonClass',
  standalone: true,
})
export class ButtonClassPipe implements PipeTransform {
  transform(value: ButtonConfig, classCheck: string): unknown {
    if (
      value.content === ButtonContent.IconText &&
      value.order === ButtonOrder.Primary &&
      value.size === ButtonSize.Big
    ) {
      return classCheck === 'primary-icon-text-big';
    }

    if (
      value.content === ButtonContent.IconText &&
      value.order === ButtonOrder.Outline &&
      value.size === ButtonSize.Big
    ) {
      return classCheck === 'outline-icon-text-big';
    }

    if (
      value.content === ButtonContent.IconText &&
      value.order === ButtonOrder.Primary &&
      value.size === ButtonSize.Big
    ) {
      return classCheck === 'primary-icon-text-big';
    }

    return false;
  }
}
