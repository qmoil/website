type CardProps = {
  title: string;
  description: string;
  image: string;
};

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="w-[513px] h-[724px] py-[30px] px-[35px] bg-[#FFFAEB] ">
      <img className="w-[443px] h-[366px]" src={image} alt={title} />
      <div className="w-[443px] h-[298px] px-[22px] py-[20px] gap-[17px] size-full ">
        <div className="w-[202px] h-[65px]  text-[31px] font-[700] leading-[65px] text-left text-black ">
          {title}
        </div>
        <div className="w-[399px] h-[176px]  text-[25px] text-[#191406] font-[700] leading-[44px]  ">
          {description}
        </div>
      </div>
    </div>
  );
}
