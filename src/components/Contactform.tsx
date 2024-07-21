import Button from './Button';
import Input from './Input';
import ContactIMage from '../assets/contact_image.svg';
import Mobile from '../assets/mobile.svg';
import Email from '../assets/email.svg';
import TextAreaInput from './TextAreaInput';

const formContact = [
  { logo: Mobile, title: 'PHONE', value: '09063119291' },
  { logo: Email, title: 'EMAIL', value: 'qmoilandgas@gmail.com' },
];

export default function Contactform() {
  return (
    <div
      id="contact"
      className="md:items-center md:grid md:grid-cols-2 px-5 py-8 gap-10"
    >
      <div>
        <div className="flex flex-col gap-5 px-2 text-center">
          <h1 className="font-bold text-4xl md:text-6xl text-[#090916]">
            Get in Touch
          </h1>
          <p className="font-bold text-base text-[#646262]">
            We're here to answer your questions and discuss your needs.
          </p>
        </div>

        <form className="gap-5 flex flex-col mt-6">
          <Input type="text" name="name" placeholder="Name *" />
          <Input type="email" name="email" placeholder="Email *" />
          <Input type="tel" name="phone" placeholder="Phone Number *" />
          <TextAreaInput
            classDef="w-[100%]"
            name="moreInfo"
            placeholder="How can i partner with you?"
          />

          <Button
            title="Send"
            classDefinition="bg-black hover:bg-[#242442] text-white h-12 border px-5 py-3 gap-2 border-solid border-gray-500 font-bold text-base"
          />

          <div className="flex flex-col md:flex-row md:justify-between gap-3 mt-5">
            {formContact.map((contact) => (
              <div
                className="flex gap-2 items-center font-bold text-[#05050B]"
                key={contact.title}
              >
                <img src={contact.logo} alt="logo" className="w-7 h-7" />
                <div className="text-xs leading-tight">
                  <p className="whitespace-nowrap">{contact.title}</p>
                  <p className="break-words">{contact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
      <div className="mt-8 md:mt-0">
        <img
          src={ContactIMage}
          alt="contact"
          className="object-cover object-center w-full h-full"
        />
      </div>
    </div>
  );
}
