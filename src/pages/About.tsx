import Rectangle65 from '../assets/Rectangle665.svg';
import Mission from '../assets/Mission.svg';
import OurBusiness from '../components/OurBusiness';
import BulletPoint from '../components/BulletPoint';
import PageHeader from '../components/PageHeader';
import Contactform from '../components/Contactform';

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

const About = () => {
  return (
    <div className="mt-20 sm:mt-24 pt-12 md:mt-28 flex flex-col gap-8">
      <PageHeader
        description="A dedicated and reliable diesel distribution and supply company
          targeting retailers, industries, households, hotels, and restaurants
          in Lagos. With a commitment to offering the best prices, unparalleled
          services, and top quality products."
        image={Rectangle65}
        title={`Your Reliable Partner in Nigeria's Energy Future`}
      />
      <div className="flex flex-col md:flex-row md:m-auto md:px-16 md:justify-between gap-6 md:gap-10 px-4 sm:px-8 py-9 text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1C1B42]">
          <h2>About</h2>
          <h2>Q and M</h2>
        </div>
        <p className="text-base sm:text-lg font-thin lg:w-3/5">
          Founded in [Year], Q and M Gas began with a vision to revolutionize
          the diesel supply chain in Nigeria. We recognized the need for a
          dependable provider that prioritizes customer satisfaction. Since
          then, we've grown into a trusted partner for businesses of all sizes,
          powering their operations and driving their success.
        </p>
      </div>
      <div className="text-white text-center md:px-8">
        <div className="bg-[#1C1B42] flex flex-col lg:flex-row justify-between items-center px-8 sm:px-12 lg:px-20 py-16 sm:py-24 lg:py-32">
          <h2 className="text-3xl sm:text-4xl font-bold lg:w-1/5">VISION</h2>
          <p className="text-base sm:text-lg font-bold lg:w-3/5">
            To be the go-to diesel distribution and supply company in Lagos,
            known for superior service, competitive pricing, and product
            excellence.
          </p>
        </div>
        <div
          className="bg-cover items-center bg-center flex flex-col lg:flex-row justify-between px-8 sm:px-12 lg:px-20 py-16 sm:py-24 lg:py-32"
          style={{ backgroundImage: `url(${Mission})` }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold lg:w-1/5">MISSION</h2>
          <p className="text-base sm:text-lg font-bold lg:w-3/5">
            To provide cost-effective, reliable, and timely diesel distribution
            services, ensuring customer satisfaction and contributing to the
            energy needs of Lagos.
          </p>
        </div>
      </div>
      <div className="md:px-8">
        <OurBusiness />
      </div>
      <div>
        <BulletPoint title="Why Choose Q and M Gas?" points={bulletPoints} />
      </div>
      <div>
        <Contactform />
      </div>
    </div>
  );
};

export default About;
