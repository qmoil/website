type InputProps = {
  type: string;
  name: string;
  value?: string;
  placeholder?: string;
  isSelect?: boolean;
  classDefinition?: string;
};

export default function Input({
  type,
  name,
  value,
  placeholder,
  isSelect,
  classDefinition,
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
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
      />
      {isSelect && (
        <img
          src="src/assets/arrow.svg"
          alt=""
          className="w-3 h-3 mr-5 flex items-center   "
        />
      )}
    </div>
  );
}
