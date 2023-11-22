import { TextareaHTMLAttributes } from "react";
import { Text } from "./Text";
import clsx from "clsx";

export interface TextAreaInputProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
        labelText?: string;
        labelFor?: string;
        className?: string;
        error?: string;
     }

export function TextAreaInput({labelFor, labelText, error, className, ...props}: TextAreaInputProps) {
    return (
        <label htmlFor={labelFor} className="flex flex-col w-full">
            <div className="flex gap-4">
            <Text>{labelText}</Text>
            <Text size="xm" className="text-red-600">{error}</Text>
            </div>
            <textarea
                className={clsx("font-poppins py-4 px-3 rounded outline-none bg-gray-200 h-56 w-full focus-within:ring-2 ring-emerald-800 text-gray-900 resize-none",
                className
              )}
                {...props}
            />
        </label>
    );
}
