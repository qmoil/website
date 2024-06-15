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
  h1: "Distribution Services",
  p: "Timely and efficient delivery to retailers, industries, households, hotels, and restaurants. Flexible delivery schedules to accommodate diverse customer needs."
},
{
  img: Frame1,
  h1: "Customers Services",
  p: "High-quality diesel fuel sourced from reputable suppliers. Competitive pricing to ensure cost savings for our customers."
}]

const OurBusiness = () => {
  const [ourBusiness, setOurBusiness] = useState(ourBusinessObj);

  return (
    <div className="text-black bg-[#FECA38] text-[#191406] p-10">
      <div className="text-5xl font-bold mb-6">
        <h1>Our</h1>
        <h1>Business</h1>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {ourBusiness.map((business, index) => (
          <div key={index} className="border bg-[#FFFAEB] p-4 rounded-lg">
            <div className="mb-2">
              <img src={business.img} alt="" className="w-full h-48 object-cover" />
            </div>
            <div className='border p-4 font-bold'>
              <h1 className="text-2xl mb-4">{business.h1}</h1>
              <p className='text-xs'>{business.p}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View with Horizontal Scrolling */}
      <div className="md:hidden overflow-x-scroll flex">
        {ourBusiness.map((business, index) => (
          <div key={index} className="inline-block border bg-[#FFFAEB] p-4 rounded-lg mr-4 min-w-72">
            <div className="mb-2">
              <img src={business.img} alt="" className="w-full h-48 object-cover" />
            </div>
            <div className='border p-4 font-bold'>
              <h1 className="text-2xl mb-4">{business.h1}</h1>
              <p className='text-xs'>{business.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurBusiness;
