type ButtonProp = {
  title: string;
  colour?: string;
  classDefinition?: string;
};

const Button = ({ title, colour,classDefinition }: ButtonProp) => {
  return (
    <button
      className={classDefinition?classDefinition:`${
        colour ? colour : "bg-[#ddd8cb] hover:bg-yellow-400"
      } text-[#090916] font-bold py-3 px-5 text-xl leading-6 mt-4`}
    >
      {title}
    </button>
  );
};
export default Button;
