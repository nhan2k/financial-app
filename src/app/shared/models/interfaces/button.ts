import {
  ButtonContent,
  ButtonOrder,
  ButtonSize,
  ButtonType,
} from '../enums/button';

export interface ButtonConfig {
  content: ButtonContent;
  size: ButtonSize;
  order: ButtonOrder;
  type: ButtonType;
  icon?: string;
}
