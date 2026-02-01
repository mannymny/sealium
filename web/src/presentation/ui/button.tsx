import * as React from "react";
import { cn } from "./utils";
import { buttonStyles } from '../styles/button.styles';

type ButtonVariant = keyof typeof buttonStyles.variants;
type ButtonSize = keyof typeof buttonStyles.sizes;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      data-slot="button"
      className={cn(buttonStyles.base, buttonStyles.variants[variant], buttonStyles.sizes[size], className)}
      {...props}
    />
  );
}

export { Button };
