import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
  return (
    <>
      <CheckboxPrimitive.Root
        className="w-5 h-5 p-[2px] bg-gray-200 rounded"
        {...props}
      >
        <CheckboxPrimitive.Indicator asChild>
          <Check weight="bold" className="h-4 w-4 text-gray-800" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </>
  );
}