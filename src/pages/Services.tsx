import serviceHeader from '../assets/serviceHeader.svg';
import BulletPoint from '../components/BulletPoint';
import Contactform from '../components/Contactform';
import OurBusiness from '../components/OurBusiness';
import PageHeader from '../components/PageHeader';

const bulletPoints = [
  {
    mainPoint: 'Uninterrupted Operations: ',
    secondaryPoint: `We understand the critical role diesel plays in your business. We prioritize timely deliveries and maintain consistent fuel quality, so you can operate without disruptions.`,
  },
  {
    mainPoint: `Cost-Effective Solutions: `,
    secondaryPoint: `Our efficient logistics network minimizes fuel waste and keeps your costs down. We offer competitive pricing and can tailor solutions to your specific needs and budget.`,
  },
  {
    mainPoint: `Peace of Mind: `,
    secondaryPoint: `With Q and M Gas, you can focus on what matters most – running your business. We take care of the fuel, ensuring a reliable and stress-free experience.`,
  },
  {
    mainPoint: `Dedicated Partner: `,
    secondaryPoint: `We view ourselves as an extension of your team, committed to your success. We provide ongoing support and work closely with you to understand your evolving needs.`,
  },
];

const Services = () => {
  return (
    <div className="mt-20 sm:mt-24 pt-12 md:mt-28 flex flex-col gap-8">
      <PageHeader
        description="At Q and M Gas, we're committed to being your one-stop shop for all things diesel. We offer a comprehensive suite of services designed to streamline your operations and ensure you have the fuel you need, when you need it."
        image={serviceHeader}
        title={`Powering Your Success: Q and M Gas Services`}
      />
      <div className="md:px-8">
        <OurBusiness isService />
      </div>
      <div>
        <BulletPoint
          title="Benefits of Partnering with Q and M Gas:"
          points={bulletPoints}
        />
      </div>
      <div>
        <Contactform />
      </div>
    </div>
  );
};

export default Services;
