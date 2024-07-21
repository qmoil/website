import Frame1 from '../assets/Frame1.svg';
import Frame2 from '../assets/Frame2.svg';
import Frame3 from '../assets/Frame3.svg';
import Frame4 from '../assets/Frame4.svg';

import { useState } from 'react';

interface OurBusinessProps {
  isService?: boolean;
}

const ourBusinessObj = [
  {
    img: Frame3,
    h1: 'Diesel Supply',
    p: 'High-quality diesel fuel sourced from reputable suppliers. Competitive pricing to ensure cost savings for our customers.',
  },
  {
    img: Frame2,
    h1: 'Distribution Services',
    p: 'Timely and efficient delivery to retailers, industries, households, hotels, and restaurants. Flexible delivery schedules to accommodate diverse customer needs.',
  },
  {
    img: Frame1,
    h1: 'Customers Services',
    p: 'High-quality diesel fuel sourced from reputable suppliers. Competitive pricing to ensure cost savings for our customers.',
  },
  {
    img: Frame4,
    h1: 'Gas Distribution',
    p: "At Q&M Gas, we're committed to delivering top-quality gas products and exceptional service. Experience the convenience of reliable gas delivery, competitive pricing, and unmatched customer support.",
  },
];

const OurBusiness = ({ isService }: OurBusinessProps) => {
  const [ourBusiness] = useState(ourBusinessObj);

  return (
    <div className="text-[#090916] p-5 md:p-10">
      {!isService ? (
        <div className="text-5xl font-bold mb-6">
          <h1 className="text-center">Our Business</h1>
        </div>
      ) : (
        <h1 className="font-bold text-center mb-5 md:mb-10 text-4xl md:text-6xl">
          Our Services
        </h1>
      )}

      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-4 gap-8">
        {ourBusiness.map((business, index) => (
          <div
            key={index}
            className="border text-[#312F2F] p-2 rounded-lg shadow-md"
          >
            <div className="mb-2">
              <img
                src={business.img}
                alt=""
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
            <div className=" p-4 font-bold font-sourceSan text-[#312F2F]">
              <h1 className="text-2xl mb-4 text-[#0C0C0C]">{business.h1}</h1>
              <p className="text-xs">{business.p}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View with Horizontal Scrolling */}
      <div className="md:hidden flex flex-col gap-4">
        {ourBusiness.map((business, index) => (
          <div
            key={index}
            className="border text-[#312F2F] p-4 rounded-lg mr-4 min-w-72"
          >
            <div className="mb-2">
              <img
                src={business.img}
                alt=""
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
            <div className=" p-4 font-bold font-sourceSan text-[#312F2F]">
              <h1 className="text-2xl mb-4">{business.h1}</h1>
              <p className="text-xs">{business.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBusiness;
