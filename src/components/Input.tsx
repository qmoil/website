import { ChangeEvent, FocusEventHandler, HTMLInputTypeAttribute } from 'react';

type InputProps = {
  type: HTMLInputTypeAttribute;
  name: string;
  value?: string | ReadonlyArray<string> | number;
  placeholder?: string;
  isSelect?: boolean;
  classDefinition?: string;
  id?: string;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  changed?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string | boolean;
};

export default function Input({
  type,
  name,
  value,
  placeholder,
  isSelect,
  classDefinition,
  changed,
  error,
  id,
  onBlur,
}: InputProps) {
  return (
    <div>
      {/* <label htmlFor={label}> {label} </label> */}
      <input
        className={
          classDefinition
            ? classDefinition
            : ' bg-white h-12 border gap-2 border-solid border-gray-500 flex justify-between text-black w-full px-5 py-3'
        }
        type={type}
        id={id}
        onBlur={onBlur}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={changed}
      />
      {isSelect && (
        <img
          src="src/assets/arrow.svg"
          alt=""
          className="w-3 h-3 mr-5 flex items-center   "
        />
      )}
      <span className="text-[red] text-xs lg:text-sm">{error}</span>
    </div>
  );
}
