import { motion } from 'framer-motion';
import HomeImage from '../assets/home_image.svg';
import HomeImage2 from '../assets/home_about1.svg';
import HomeImage3 from '../assets/home_about2.svg';
import Button from '../components/Button';
import Contactform from '../components/Contactform';
import OurBusiness from '../components/OurBusiness';
import Strategy from '../components/Strategy';
import { PATH } from '../utils/path-constants';
import { useNavigate } from 'react-router-dom';
import {
  TOP_TO_BOTTOM,
  LEFT_TO_RIGHT,
  BOTTOM_TO_TOP,
} from '../utils/animation-constants';

const Home = () => {
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate(`${PATH.SERVICE}`);
  };

  return (
    <div className="mt-20 sm:mt-24 md:mt-28 flex flex-col">
      <motion.div
        className="flex items-center justify-center text-center "
        initial="hidden"
        whileInView="visible"
        variants={TOP_TO_BOTTOM}
        transition={{ duration: 1.0 }}
      >
        <div className="p-5 md:p-11 mx-5 md:mx-11 rounded-md">
          <h1 className="text-4xl md:text-6xl leading-tight font-bold text-[#0E0E21]">
            Fueling the Future Powering Progress.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#3D3B3B] font-sourceSan">
            Decades of experience delivering safe, efficient, and sustainable
            solutions.
          </p>
          <Button
            onclick={handleCheckoutClick}
            title="Learn More"
            classDefinition="mt-6 bg-[#0E0E21] hover:bg-[#242442] px-12 md:px-16 py-4 md:py-6 text-white font-bold text-sm/4 md:text-xl/6 rounded-[100px]"
          />
        </div>
      </motion.div>
      <motion.div
        className="h-[400px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url("${HomeImage}")` }}
        initial="hidden"
        whileInView="visible"
        variants={TOP_TO_BOTTOM}
        transition={{ duration: 1.0 }}
      ></motion.div>
      <motion.div
        className="flex flex-col  gap-5 px-4 sm:px-8 py-9 md:py-12 text-center"
        initial="hidden"
        whileInView="visible"
        variants={LEFT_TO_RIGHT}
        transition={{ duration: 1.0 }}
      >
        <h2 className="text-2xl/10 text-[#3D3B3B] font-bold ">About Us </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0E0E21] font-bold ">
          Q&M Oil and Gas
        </h2>

        <p className="text-base sm:text-lg text-[#191406] font-sourceSan">
          A dedicated and reliable diesel distribution and supply company
          targeting retailers, industries, households, hotels, and restaurants
          in Lagos. With a commitment to offering the best prices, unparalleled
          services, and top quality products.
        </p>
      </motion.div>
      <motion.div className="grid grid-cols-2 gap-2 md:gap-4 mx-4 md:mx-10">
        <motion.img
          src={HomeImage3}
          alt=""
          className="object-cover md:h-96 w-full"
          initial="hidden"
          whileInView="visible"
          variants={TOP_TO_BOTTOM}
          transition={{ duration: 1.0 }}
        />
        <motion.img
          src={HomeImage2}
          alt=""
          className="object-cover md:h-96 w-full"
          initial="hidden"
          whileInView="visible"
          variants={BOTTOM_TO_TOP}
          transition={{ duration: 1.0 }}
        />
      </motion.div>
      <motion.div
        className="my-8"
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
