export type StringOrNumber = string | number;

export interface NavigationItem {
  label?: string;
  icon?: string;
  link: string;
  avatar?: string;
  sign?: string;
}

export interface ContentHeader {
  title: string;
  desc: string;
}
