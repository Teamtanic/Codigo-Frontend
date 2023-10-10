import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface TextProps {
  size?: "xm" | "sm" | "md";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Text({ size = "md", children, asChild, className }: TextProps) {
  const Component = asChild ? Slot : "span";

  return (
    <>
      <Component
        className={clsx(
          "text-gray-900 font-poppins",
          {
            "text-xs": size === "xm",
            "text-sm": size === "sm",
            "text-md": size === "md",
          },
          className
        )}
      >
        {children}
      </Component>
    </>
  );
}