import { ReactNode } from "react";
import "./index.scss";

export interface ButtonProps {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  shape?: "circular" | "rounded" | "square";
  size?: "small" | "medium" | "large";
  appearance?: "subtle" | "outline" | "secondary" | "primary" | "transparent";
  disabled?: boolean;
  children?: string;
}

export default function Button({
  icon,
  iconPosition = "left",
  size = "medium",
  shape = "rounded",
  appearance = "secondary",
  disabled = false,
  children,
}: ButtonProps) {
  const classNames = [shape, size, appearance, disabled && "disabled"]
    .filter(Boolean)
    .map((item) => `fui-button--${item}`);
  const iconWrapper = icon ? <span className="fui-button__icon">{icon}</span> : null;
  return (
    <button className={`fui-button ${classNames.join(" ")}`}>
      {iconPosition === 'left' && iconWrapper}
      {children}
      {iconPosition === 'right' && iconWrapper}
    </button>
  );
}
