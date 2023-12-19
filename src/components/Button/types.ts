export interface IButton {
  onClick?: () => void;
  value: string;
  variant?: 1 | 2;
  width?: string;
  height?: string;
  fontSize?: string;
}
