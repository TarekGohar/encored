import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "default"
  | "primary"
  | "secondary"
  | "destructive"
  | "outline"
  | "ghost"
  | "link";
type ButtonSize = "default" | "sm" | "md" | "lg" | "icon";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

interface ButtonAsButton
  extends BaseButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  href?: never;
}

interface ButtonAsLink
  extends BaseButtonProps,
    Omit<React.ComponentProps<typeof Link>, keyof BaseButtonProps> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

// Helper function to get variant classes
const getVariantClasses = (variant: ButtonVariant = "default"): string => {
  const variants = {
    default:
      "bg-neutral-900/10 text-[#ffffff] hover:bg-black/2",
    primary:
      "text-black hover:text-black/50",
    secondary:
      "bg-[#ffffff]/5 text-[#ffffff] border-[#ffffff]/0 hover:bg-[#ffffff]/10 hover:border-[#ffffff]/20",
    destructive:
      "bg-red-50 text-red-600 border-red-200 hover:bg-red-100 hover:border-red-300 dark:bg-red-950 dark:text-red-400 dark:border-red-800 dark:hover:bg-red-900 dark:hover:border-red-700",
    outline:
      "bg-theme-background text-theme-foreground border-theme-border hover:bg-theme-background-light hover:border-theme-foreground/20",
    ghost:
      "bg-transparent text-theme-foreground border-transparent hover:bg-theme-foreground/5 hover:border-theme-border",
    link: "bg-transparent text-black border-transparent underline-offset-4 hover:underline hover:bg-black/5",
  };
  return variants[variant];
};

// Helper function to get size classes
const getSizeClasses = (size: ButtonSize = "default"): string => {
  const sizes = {
    default: "px-0 py-2",
    sm: "px-3 py-1.5",
    md: "px-5 py-2",
    lg: "px-8 py-2.5",
    icon: "h-10 w-10",
  };
  return sizes[size];
};

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    className,
    variant,
    size,
    loading = false,
    leftIcon,
    rightIcon,
    children,
    ...restProps
  } = props;

  const baseClasses = cn(
    // Base styles
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-light transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 gap-2",
    // Variant styles
    getVariantClasses(variant),
    // Size styles
    getSizeClasses(size),
    // Loading styles
    loading && "opacity-50 cursor-not-allowed",
    className
  );

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {leftIcon && !loading && leftIcon}
      {children}
      {rightIcon && !loading && rightIcon}
    </>
  );

  // If href is provided, render as Link
  if ("href" in restProps && restProps.href) {
    const { href, ...linkProps } = restProps as ButtonAsLink;
    return (
      <Link
        href={href}
        className={baseClasses}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...linkProps}>
        {content}
      </Link>
    );
  }

  // Otherwise render as button
  const { disabled, ...buttonProps } = restProps as ButtonAsButton;
  return (
    <button
      className={baseClasses}
      disabled={disabled || loading}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...buttonProps}>
      {content}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
export type { ButtonProps };
