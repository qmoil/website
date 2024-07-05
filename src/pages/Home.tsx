import { motion } from 'framer-motion';
import HomeImage from '../assets/home_image.svg';
import HomeImage2 from '../assets/home_image2.svg';
import Button from '../components/Button';
import Contactform from '../components/Contactform';
import OurBusiness from '../components/OurBusiness';
import Strategy from '../components/Strategy';
import { PATH } from '../utils/path-constants';
import { useNavigate } from 'react-router-dom';
import { TOP_TO_BOTTOM, LEFT_TO_RIGHT } from '../utils/animation-constants';

const Home = () => {
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate(`${PATH.SERVICE}`);
  };

  return (
    <div className="mt-20 sm:mt-24 md:mt-28 flex flex-col">
      <motion.div
        className="h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url("${HomeImage}")` }}
        initial="hidden"
        whileInView="visible"
        variants={TOP_TO_BOTTOM}
        transition={{ duration: 1.0 }}
      >
        <div className="p-5 md:p-11 mx-5 md:mx-11 rounded-md">
          <h1 className="text-4xl md:text-6xl leading-tight font-bold">
            Fueling the Future Powering Progress.
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Decades of experience delivering safe, efficient, and sustainable
            solutions.
          </p>
          <Button
            onclick={handleCheckoutClick}
            title="Learn More"
            classDefinition="mt-6 bg-[#ddd8cb] hover:bg-[#FECA38] px-8 md:px-12 py-4 md:py-6 text-[#090916] font-bold text-sm md:text-xl rounded-md"
          />
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col lg:flex-row lg:m-auto lg:px-16 lg:justify-between gap-6 lg:gap-10 px-4 sm:px-8 bg-[#FECA38] py-9 md:py-12 text-center"
        initial="hidden"
        whileInView="visible"
        variants={LEFT_TO_RIGHT}
        transition={{ duration: 1.0 }}
      >
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1B42]">
          <h2>Q&M Oil </h2>
          <h2>and Gas</h2>
        </div>
        <p className="text-base sm:text-lg font-thin lg:w-3/5">
          A dedicated and reliable diesel distribution and supply company
          targeting retailers, industries, households, hotels, and restaurants
          in Lagos. With a commitment to offering the best prices, unparalleled
          services, and top quality products.
        </p>
      </motion.div>
      <motion.img
        src={HomeImage2}
        alt=""
        className="object-cover md:h-96 w-full"
        initial="hidden"
        whileInView="visible"
        variants={TOP_TO_BOTTOM}
        transition={{ duration: 1.0 }}
      />
      <motion.div
        className="px-5 md:px-8 my-8"
        initial="hidden"
        whileInView="visible"
        variants={TOP_TO_BOTTOM}
        transition={{ duration: 1.0 }}
      >
        <OurBusiness />
      </motion.div>
      <motion.div
        className="md:px-8"
        initial="hidden"
        whileInView="visible"
        variants={TOP_TO_BOTTOM}
        transition={{ duration: 1.0 }}
      >
        <Strategy />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={LEFT_TO_RIGHT}
        transition={{ duration: 1.0 }}
      >
        <Contactform />
      </motion.div>
    </div>
  );
};

export default Home;
