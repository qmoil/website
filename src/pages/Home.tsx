import HomeImage from '../assets/home_image.svg';
import HomeImage2 from '../assets/home_image2.svg';
import Button from '../components/Button';
import Contactform from '../components/Contactform';
import OurBusiness from '../components/OurBusiness';
import Strategy from '../components/Strategy';

const Home = () => {
  return (
    <div className="mt-20 sm:mt-24 md:mt-28 flex flex-col">
      <div
        className="h-[400px] md:h-[500px] w-full bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url("${HomeImage}")` }}
      >
        <div className=" p-5 md:p-11 mx-5 md:mx-11 rounded-md">
          <h1 className="text-4xl md:text-6xl leading-tight md:leading-tight font-bold">
            Fueling the Future Powering Progress.
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Decades of experience delivering safe, efficient, and sustainable
            solutions.
          </p>
          <Button
            title="Learn More"
            classDefinition="mt-6 bg-[#ddd8cb] hover:bg-[#FECA38] px-8 md:px-12 py-4 md:py-6 text-[#090916] font-bold text-sm md:text-xl rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:m-auto lg:px-16 lg:justify-between gap-6 lg:gap-10 px-4 sm:px-8 bg-[#FECA38] py-9 md:py-12 text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold  text-[#1C1B42]">
          <h2>Q&M Oil </h2>
          <h2>and Gas</h2>
        </div>
        <p className="text-base sm:text-lg font-thin lg:w-3/5">
          A dedicated and reliable diesel distribution and supply company
          targeting retailers, industries, households, hotels, and restaurants
          in Lagos. With a commitment to offering the best prices, unparalleled
          services, and top quality products.
        </p>
      </div>
      <img src={HomeImage2} alt="" className="object-cover md:h-96 w-full" />
      <div className="px-5 md:px-8 my-8">
        <OurBusiness />
      </div>
      <div className="md:px-8">
        <Strategy />
      </div>
      <div>
        <Contactform />
      </div>
    </div>
  );
};

export default Home;
