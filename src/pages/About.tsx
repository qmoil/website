import Rectangle65 from '../assets/Rectangle665.svg';
import Mission from '../assets/Mission.svg';
import OurBusiness from '../components/OurBusiness';

const About = () => {
  return (
    <div className="xs:mt-20 sm:mt-24 pt-12 md:mt-28 flex flex-col gap-8">
      <div className="text-center px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#1C1B42] mb-4 sm:mb-8 font-bold">
          Your Reliable Partner in Nigeria's Energy Future
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-light">
          A dedicated and reliable diesel distribution and supply company
          targeting retailers, industries, households, hotels, and restaurants
          in Lagos. With a commitment to offering the best prices, unparalleled
          services, and top quality products.
        </p>
      </div>
      <div className="flex justify-center">
        <img src={Rectangle65} alt="Rectangle" className="w-full" />
      </div>
      <div className="flex flex-col lg:flex-row lg:m-auto lg:px-16 lg:justify-between gap-6 lg:gap-10 px-4 sm:px-8">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1C1B42]">
          <h2>About</h2>
          <h2>M and Q</h2>
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
      <div className="bg-[#FFFAEB] text-[#4C3D11] flex flex-col md:flex-row justify-between md:mx-8 p-6 sm:p-10 pt-10 sm:pt-20 mb-8 border border-b">
        <div className="md:w-1/5 mb-4 lg:mb-0 xs:flex xs:justify-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            Why Choose Q and M Gas?
          </h1>
        </div>
        <div className="hidden md:block md:w-3/5 font-thin flex flex-col gap-2">
          <p>
            <strong className="font-bold">Reliability You Can Count On:</strong>
            We understand the importance of uninterrupted operations. That's why
            we prioritize timely deliveries and consistent fuel quality.
          </p>
          <p>
            <strong className="font-bold">Commitment to Efficiency:</strong>
            We optimize our logistics to ensure cost-effective solutions and
            minimize fuel waste.
          </p>
          <p>
            <strong className="font-bold">Unwavering Customer Focus:</strong>
            Your satisfaction is our top priority. We provide dedicated support
            and personalized attention to all our clients.
          </p>
          <p>
            <strong className="font-bold">
              Investing in Nigeria's Future:
            </strong>
            We are committed to supporting the nation's economic growth and
            development by providing reliable energy solutions.
          </p>
        </div>

        <div className=" m-auto block md:hidden text-center gap-4 font-thin flex flex-col gap-4">
          <div>
            <strong className="font-bold">Reliability You Can Count On:</strong>
            <p>
              We understand the importance of uninterrupted operations. That's
              why we prioritize timely deliveries and consistent fuel quality.
            </p>
          </div>
          <div>
            <strong className="font-bold">Commitment to Efficiency:</strong>
            <p>
              We optimize our logistics to ensure cost-effective solutions and
              minimize fuel waste.
            </p>
          </div>
          <div>
            <strong className="font-bold">Unwavering Customer Focus:</strong>
            <p>
              Your satisfaction is our top priority. We provide dedicated
              support and personalized attention to all our clients.
            </p>
          </div>
          <div>
            <strong className="font-bold">
              Investing in Nigeria's Future:
            </strong>
            <p>
              We are committed to supporting the nation's economic growth and
              development by providing reliable energy solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
