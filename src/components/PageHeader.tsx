interface PageHeaderProps {
  title: string;
  description: string;
  image: string;
}

const PageHeader = ({ description, image, title }: PageHeaderProps) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-center px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#1C1B42] mb-4 sm:mb-8 font-bold">
          {title}
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-light">
          {description}
        </p>
      </div>
      <div className="flex justify-center">
        <img src={image} alt="Rectangle" className="w-full" />
      </div>
    </div>
  );
};

export default PageHeader;
