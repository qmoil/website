import serviceHeader from '../assets/serviceHeader.svg';
import OurBusiness from '../components/OurBusiness';
import PageHeader from '../components/PageHeader';

const Services = () => {
  return (
    <div className="xs:mt-20 sm:mt-24 pt-12 md:mt-28 flex flex-col gap-8">
      <PageHeader
        description="At Q and M Gas, we're committed to being your one-stop shop for all things diesel. We offer a comprehensive suite of services designed to streamline your operations and ensure you have the fuel you need, when you need it."
        image={serviceHeader}
        title={`Powering Your Success: Q and M Gas Services`}
      />
      <div className="md:px-8">
        <OurBusiness />
      </div>
    </div>
  );
};

export default Services;
