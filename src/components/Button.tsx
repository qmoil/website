type ButtonProp = {
  title: string;
  colour?: string;
  classDefinition?: string;
  onclick?: () => void;
  disabled?: boolean;
};

const Button = ({
  title,
  colour,
  classDefinition,
  disabled,
  onclick,
}: ButtonProp) => {
  return (
    <button
      className={
        classDefinition
          ? classDefinition
          : `${
              colour ? colour : 'bg-[#ddd8cb] hover:bg-[#FECA38]'
            } text-[#090916] font-bold py-3 px-5 text-xl leading-6 mt-4 rounded-md`
      }
      onClick={disabled ? undefined : onclick}
    >
      {title}
    </button>
  );
};
export default Button;
