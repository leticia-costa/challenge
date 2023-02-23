import { ReactNode } from "react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export type ButtonProps = {
  children: ReactNode;
  icon?: IconProp;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};
