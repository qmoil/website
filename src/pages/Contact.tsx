import { motion } from 'framer-motion';
import { TOP_TO_BOTTOM, LEFT_TO_RIGHT } from '../utils/animation-constants';
import Contactform from '../components/Contactform';
import Map from '../components/Map';

const Contact = () => {
  return (
    <div className="mt-20 sm:mt-24 md:mt-28 flex flex-col">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={TOP_TO_BOTTOM}
        transition={{ duration: 1.0 }}
      >
        <Contactform />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={LEFT_TO_RIGHT}
        transition={{ duration: 1.0 }}
      >
        <Map />
      </motion.div>
    </div>
  );
};

export default Contact;
