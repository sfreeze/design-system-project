import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-white transition-all disabled:pointer-events-none disabled:bg-primary-200 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer transition-all disabled:text-primary-200",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 hover:bg-primary-700 text-white disabled:bg-primary-200",
        primary_outlined:
          "bg-white border border-primary-500 text-primary-500 hover:text-primary-700 hover:border-primary-700 disabled:border-primary-200 disabled:text-primary-200",
        primary_ghost:
          "bg-transparent text-primary-500 hover:bg-primary-50 disabled:text-primary-200",
        mono: "bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-300 disabled:text-gray-500",
        mono_outlined:
          "bg-white border border-gray-300 text-gray-800 hover:border-gray-700  disabled:text-gray-500",
        mono_ghost:
          "bg-transparent text-gray-800 hover:bg-gray-50 disabled:text-gray-500",
        danger:
          "bg-error-500 text-white hover:bg-error-700 disabled:bg-error-200",
        danger_outlined:
          "bg-white border border-error-500 text-error-500 hover:text-error-700 hover:border-error-700 disabled:border-error-200 disabled:text-error-200",
        danger_ghost:
          "bg-transparent text-error-500 hover:bg-error-50 disabled:text-error-200",
      },
      size: {
        // has-[>svg]:px-2
        xs: "h-6 rounded-sm gap-1 px-3 font-caption1 font-regular [&_svg:not([class*='size-'])]:size-4",
        sm: "h-8 rounded-sm gap-1 px-3 font-body4 font-medium [&_svg:not([class*='size-'])]:size-4",
        md: "h-9 px-4 font-body4 font-bold [&_svg:not([class*='size-'])]:size-5",
        lg: "h-12 px-4 font-body3 font-bold [&_svg:not([class*='size-'])]:size-6",
        xl: "h-14 px-6 font-body3 font-bold [&_svg:not([class*='size-'])]:size-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
