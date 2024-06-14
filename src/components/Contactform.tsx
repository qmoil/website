import Button from "./Button";
import Input from "./Input";

type Contactform = {
  name: string;
  email: string;
  phone: number;
};

type ContactformProps = {
  title: string;
  paragraph: string;
};

export default function Contactform({ title, paragraph }: ContactformProps) {
  return (
    <>
      <div className="w-[545px] h-[497px] gap-10 ">
        <div className="w-[545px] h-[127px] gap-5 ">
          <h1 className="w-[356px] h-[63px] font-bold text-6xl text-[#090916] leading-[73.2px] ">
            {title}
          </h1>
          <p className="w-[545px] h-8 font-bold text-base leading-8 text-[#646262] ">
            {paragraph}
          </p>
        </div>

        <form className="w-[545px] h-[330px] gap-5 flex flex-col ">
          <Input type="text" name="name" placeholder="Name" />

          <Input type="email" name="email" placeholder="EMAIL:" />

          <Input type="tel" name="phone" placeholder="Phone Number:" />

          <Input
            type="select"
            name="how"
            placeholder="How did you find us?"
            isSelect
          />

          <Button
            title="submit"
            classDefinition="bg-[Black] w-[545px] h-12 border px-5 py-3 gap-2 border-solid border-gray-500 "
          />
        </form>
      </div>
    </>
  );
}
