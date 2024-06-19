import Frame1 from '../assets/Frame1.svg';
import Frame2 from '../assets/Frame2.svg';
import Frame3 from '../assets/Frame3.svg';
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
];

const OurBusiness = ({ isService }: OurBusinessProps) => {
  const [ourBusiness] = useState(ourBusinessObj);

  return (
    <div
      className={`${!isService && 'bg-[#FECA38]'} text-[#191406] px-5 md:p-10`}
    >
      {!isService ? (
        <div className="text-5xl font-bold mb-6">
          <h1>Our</h1>
          <h1>Business</h1>
        </div>
      ) : (
        <h1 className="font-bold text-center mb-5 md:mb-10 text-4xl md:text-6xl text-[#090916]">
          Our Services
        </h1>
      )}

      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {ourBusiness.map((business, index) => (
          <div
            key={index}
            className={`${
              isService ? 'bg-[#0E0E21] text-white' : 'bg-[#FFFAEB]'
            } p-4 rounded-lg`}
          >
            <div className="mb-2">
              <img
                src={business.img}
                alt=""
                className="w-full h-48 object-cover"
              />
            </div>
            <div className=" p-4 font-bold">
              <h1 className="text-2xl mb-4">{business.h1}</h1>
              <p className="text-xs">{business.p}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View with Horizontal Scrolling */}
      <div className="md:hidden overflow-x-scroll flex">
        {ourBusiness.map((business, index) => (
          <div
            key={index}
            className={`inline-block ${
              isService ? 'bg-[#0E0E21] text-white' : 'bg-[#FFFAEB]'
            } p-4 rounded-lg mr-4 min-w-72`}
          >
            <div className="mb-2">
              <img
                src={business.img}
                alt=""
                className="w-full h-48 object-cover"
              />
            </div>
            <div className=" p-4 font-bold">
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
