import { ChangeEvent, FocusEventHandler } from 'react';

interface TextAreaInputProps {
  name: string;
  value?: string | ReadonlyArray<string> | number;
  changed?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  classDef?: string;
  id?: string;
  onBlur?: FocusEventHandler<HTMLTextAreaElement> | undefined;
  error?: string | boolean;
}

const TextAreaInput = ({
  name,
  placeholder,
  classDef,
  value,
  changed,
  id,
  onBlur,
  error,
}: TextAreaInputProps) => {
  return (
    <div className="mb-[45px]">
      <textarea
        id={id}
        onBlur={onBlur}
        className={`h-40 px-5 py-3 text-black dark:text-white border border-solid border-gray-500 resize-none ${classDef}`}
        name={name}
        onChange={changed}
        value={value}
        placeholder={placeholder ? placeholder : undefined}
      ></textarea>
      <span className="text-[red]  text-xs lg:text-sm">{error}</span>
    </div>
  );
};

export default TextAreaInput;
