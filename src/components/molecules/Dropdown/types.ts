import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export type Option = {
  value: string;
  label: string;
};

export type DropdownProps = {
  options: Option[];
  onSelect: (selectedOption: Option) => void;
  label: string;
  icon: IconProp;
};
