// src/components/Desktop2.js
import Rectangle65 from "../assets/Rectangle665.svg";
import Frame1 from '../assets/Frame1.svg';
import Frame2 from '../assets/Frame2.svg';
import Frame3 from '../assets/Frame3.svg';
import { useState } from "react";

const ourBusinessObj = [{
  img: Frame3,
  h1: "Diesel Supply",
  p: "High-quality diesel fuel sourced from reputable suppliers. Competitive pricing to ensure cost savings for our customers."
},
{
  img: Frame2,
  h1: "Diesel Supply",
  p: "High-quality diesel fuel sourced from reputable suppliers. Competitive pricing to ensure cost savings for our customers."
},
{
  img: Frame1,
  h1: "Diesel Supply",
  p: "High-quality diesel fuel sourced from reputable suppliers. Competitive pricing to ensure cost savings for our customers."
}]

const Desktop2 = () => {
  const [ourBusiness, setOurBusiness] = useState(ourBusinessObj);

  return (
    <div className="mt-28 px-8">
      <div className="text-center px-8">
        <h1 className="text-5xl text-[#1C1B42] mb-8">Your Reliable Partner in Nigeria's Energy Future</h1>
        <p className="text-xl font-light mb-16">
          A dedicated and reliable diesel distribution and supply company targeting retailers,
          industries, households, hotels, and restaurants in Lagos. With a commitment to
          offering the best prices, unparalleled services, and top quality products.
        </p>
      </div>
      <div className="flex justify-center mb-16">
        <img src={Rectangle65} alt="Rectangle" className="w-full max-w-4xl" />
      </div>
      <div className="text-center mb-16">
        <h2 className="text-4xl mb-4">About M and Q</h2>
        <p className="text-lg">
          Founded in [Year], Q and M Gas began with a vision to revolutionize the diesel supply chain in Nigeria.
          We recognized the need for a dependable provider that prioritizes customer satisfaction. Since then,
          we've grown into a trusted partner for businesses of all sizes, powering their operations and driving their success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-center">
        <div>
          <h2 className="text-4xl mb-4">VISION</h2>
          <p className="text-lg">
            To be the go-to diesel distribution and supply company in Lagos, known for superior service,
            competitive pricing, and product excellence.
          </p>
        </div>
        <div>
          <h2 className="text-4xl mb-4">MISSION</h2>
          <p className="text-lg">
            To provide cost-effective, reliable, and timely diesel distribution services, ensuring customer
            satisfaction and contributing to the energy needs of Lagos.
          </p>
        </div>
      </div>

      <div className="text-center mb-16">
        <h1 className="text-5xl mb-8">Our Business</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ourBusiness.map((business, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <div className="mb-4">
                <img src={business.img} alt="" className="w-full h-48 object-cover" />
              </div>
              <h1 className="text-2xl mb-4">{business.h1}</h1>
              <p>{business.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Desktop2;