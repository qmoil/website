import Rectangle65 from '../assets/Rectangle665.svg';
import VM from '../assets/VM.svg';
import Target from '../assets/Target-001.svg';
import Target002 from '../assets/Target-002.svg';
import OurBusiness from '../components/OurBusiness';
import BulletPoint from '../components/BulletPoint';
import PageHeader from '../components/PageHeader';
import Contactform from '../components/Contactform';
import { motion } from 'framer-motion';
import { LEFT_TO_RIGHT, TOP_TO_BOTTOM } from '../utils/animation-constants';

const bulletPoints = [
  {
    mainPoint: 'Reliability You Can Count On:',
    secondaryPoint: `We understand the importance of uninterrupted operations. That's why
we prioritize timely deliveries and consistent fuel quality.`,
  },
  {
    mainPoint: `Commitment to Efficiency:`,
    secondaryPoint: `We optimize our logistics to ensure cost-effective solutions and minimize fuel waste.`,
  },
  {
    mainPoint: `Unwavering Customer Focus:`,
    secondaryPoint: `Your satisfaction is our top priority. We provide dedicated support and personalized attention to all our clients.`,
  },
  {
    mainPoint: `Investing in Nigeria's Future:`,
    secondaryPoint: `We are committed to supporting the nation's economic growth and development by providing reliable energy solutions.`,
  },
];

interface CardProps {
  title: string;
  content: string;
  backgroundImage: string;
  targetImage: string;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  backgroundImage,
  targetImage,
}) => (
  <div
    className="max-w-[538px] max-h-[538px] bg-cover flex flex-col items-center justify-center bg-center border rounded-lg p-10 pt-20 gap-6 text-[#0E0E21]"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <img src={targetImage} alt="target icon" className="w-24 h-24" />
    <h2 className="text-3xl sm:text-4xl font-bold text-center">{title}</h2>
    <p className="text-base sm:text-lg font-bold text-center font-sourceSan">
      {content}
    </p>
  </div>
);

const About = () => {
  return (
    <div className="mt-20 sm:mt-24 pt-12 md:mt-28 flex flex-col gap-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={TOP_TO_BOTTOM}
        transition={{ duration: 1.0 }}
      >
        <PageHeader
          description="A dedicated and reliable diesel distribution and supply company
          targeting retailers, industries, households, hotels, and restaurants
          in Lagos. With a commitment to offering the best prices, unparalleled
          services, and top quality products."
          image={Rectangle65}
          title={`Your Reliable Partner in Nigeria's Energy Future`}
        />
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row md:m-auto md:px-16 md:justify-between gap-6 md:gap-10 px-4 sm:px-8 py-9 text-center"
        initial="hidden"
        whileInView="visible"
        variants={LEFT_TO_RIGHT}
        transition={{ duration: 1.0 }}
      >
        <div className="flex flex-col items-center gap-4 text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1C1B42]">
          <h2>About Q and M</h2>
          <p className="text-base sm:text-lg font-thin px-5 font-sourceSan text-[#3D3B3B]">
            Founded in 2024, Q & M Oil and Gas began with a vision to
            revolutionize the diesel supply chain in Nigeria. We recognized the
            need for a dependable provider that prioritizes customer
            satisfaction. Since then, we've grown into a trusted partner for
            businesses of all sizes, powering their operations and driving their
            success.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="text-white text-center md:px-8"
        initial="hidden"
        whileInView="visible"
        variants={LEFT_TO_RIGHT}
        transition={{ duration: 1.0 }}
      >
        <div className="flex flex-col md:flex md:flex-row gap-5 md:gap-20 mx-20 justify-center text-[#0E0E21]">
          <Card
            targetImage={Target}
            title="VISION"
            content="To be the go-to diesel distribution and supply company in Lagos, known for superior service, competitive pricing, and product excellence."
            backgroundImage={VM}
          />
          <Card
            targetImage={Target002}
            title="MISSION"
            content="To provide cost-effective, reliable, and timely diesel distribution services, ensuring customer satisfaction and contributing to the energy needs of Lagos."
            backgroundImage={VM}
          />
        </div>
      </motion.div>
      <motion.div
        className="md:px-8"
        initial="hidden"
        whileInView="visible"
        variants={LEFT_TO_RIGHT}
        transition={{ duration: 1.0 }}
      >
        <OurBusiness />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={LEFT_TO_RIGHT}
        transition={{ duration: 1.0 }}
      >
        <BulletPoint
          title="Why Choose Q & M Oil and Gas?"
          points={bulletPoints}
        />
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

export default About;
