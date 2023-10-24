import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";
import { Text } from "./Text";

export interface TextInputRootProps {
  labelText?: string;
  labelFor?: string;
  children: ReactNode;
  className?: string;
  colorLabel?: string;
}

function TextInputRoot({ children, labelFor, labelText, className }: TextInputRootProps) {
  return (
    <label htmlFor={labelFor} className="flex flex-col w-full">
      <Text className={`!${className}`}>{labelText}</Text>
      <div className={`font-poppins ${className} py-4 px-3 h-12 rounded bg-gray-200  w-full focus-within:ring-2 ring-emerald-800 flex items-center gap-3`}>
        {children}
      </div>
    </label>
  );
}

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <>
      <Slot className="w-6 h-6 text-gray-400">{children}</Slot>
    </>
  );
}

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-900 outline-none text-xs placeholder:text-gray-400"
      {...props}
    />
  );
}

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};