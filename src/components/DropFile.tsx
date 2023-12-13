import { useState } from "react";
import { Text } from "./Text";
import { useDropzone } from "react-dropzone";
import { FieldInputProps } from "react-final-form";

export interface DropFileProps extends FieldInputProps<any> {
  labelText?: string;
  labelStyle?: string;
  error?: string | undefined;
}

export function DropFile({
  labelStyle,
  labelText,
  error,
  ...props
}: DropFileProps) {
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: ([file]) => {
      setSelectedFileName(file.name);
      props.onChange(file);
    },
  });

  return (
    <div>
      <div className="flex gap-4">
        <Text className={`${labelStyle}`}>{labelText}</Text>
        <Text size="xm" className="text-red-600">
          {error}
        </Text>
      </div>
      <div
        {...getRootProps()}
        className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
      >
        {selectedFileName ? (
          <span className="font-bold text-gray-600 text-lg h-fit flex self-center">
            {selectedFileName}
          </span>
        ) : (
          <span className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span className="font-medium text-gray-600">
              Arraste seus arquivos aqui, ou{" "}
              <span className="text-blue-600 underline">busque-os</span>
            </span>
          </span>
        )}

        <input {...getInputProps()} />
      </div>
    </div>
  );
}
