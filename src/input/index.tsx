import clsx from "clsx";
import { ReactNode, useRef } from "react";
import './index.scss';

export interface InputProps {
  className?: string;
  contentBefore?: ReactNode;
  contentAfter?: ReactNode;
  placeholder?: string;
  disabled?: boolean;
  appearance?: "outline" | "underline";
  size?: "small" | "medium" | "large";
  value?: string;
}

export default function Input({
  className,
  contentBefore,
  contentAfter,
  placeholder,
  appearance = "outline",
  disabled = false,
  size = "medium",
  value
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      className={clsx(
        "fui-input",
        `fui-input--${appearance}`,
        `fui-input--${size}`,
        disabled && "fui-input--disabled",
        className
      )}
    >
      <div className="fui-input__inner">
        {contentBefore}
        <input
          ref={inputRef}
          className="fui-input__input"
          placeholder={placeholder}
          value={value}
        />
        {contentAfter}
      </div>
      <div className="fui-input__line" />
    </div>
  );
}
