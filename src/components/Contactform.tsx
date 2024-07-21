import Button from './Button';
import Input from './Input';
import ContactIMage from '../assets/contact_image.svg';
import Mobile from '../assets/mobile.svg';
import Email from '../assets/email.svg';
import TextAreaInput from './TextAreaInput';
import { Formik } from 'formik';
import { useRef, useState } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

const scriptUrl = import.meta.env.VITE_CONTACT_FORM_SCRIPT_URL;

const formContact = [
  { logo: Mobile, title: 'PHONE', value: '09063119291' },
  { logo: Email, title: 'EMAIL', value: 'qmoilandgas@gmail.com' },
];

export default function Contactform() {
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef(null);

  const initialState = {
    name: '',
    email: '',
    phone: '',
    enquiries: '',
  };

  const validate = (values: typeof initialState) => {
    const errors: {
      name?: string;
      phone?: string;
      email?: string;
      enquiries?: string;
    } = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length < 1) {
      errors.name = 'Must be a valid name';
    }

    if (!values.phone) {
      errors.phone = 'Required';
    } else if (values.phone?.length < 8) {
      errors.phone =
        'Invalid phone number format try this format +234 81x xxx xxx x';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (values.enquiries && values.enquiries.length < 3) {
      errors.enquiries = 'Must be at least 3 characters long ';
    }
    return errors;
  };

  const handleDisable = (
    values: typeof initialState,
    isSubmitting: boolean
  ) => {
    return (
      isSubmitting ||
      values.name?.length === 0 ||
      values.email?.length === 0 ||
      values.phone?.length === 0 ||
      values.enquiries?.length === 0
    );
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center pt-[60px]">
          <FadeLoader
            color={'#e64d15'}
            loading={loading}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <Formik
          initialValues={initialState}
          validate={validate}
          onSubmit={async (_, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            setLoading(true);

            fetch(scriptUrl, {
              method: 'POST',
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              body: new FormData(formRef.current!),
            })
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              .then((_) => {
                console.log('SUCCESSFULLY SUBMITTED');
                setLoading(false);
                setSubmitting(false);
                resetForm({ values: initialState });
              })
              .catch(() => {
                setLoading(false);
                setSubmitting(false);
              });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur,
            isSubmitting,
            // setFieldValue,
          }) => (
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

                <form
                  className="gap-5 flex flex-col mt-6"
                  onSubmit={handleSubmit}
                  ref={formRef}
                >
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    value={values.name}
                    onBlur={handleBlur}
                    changed={handleChange}
                    error={errors.name && touched.name && errors.name}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={values.email}
                    changed={handleChange}
                    onBlur={handleBlur}
                    error={errors.email && touched.email && errors.email}
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={values.phone}
                    changed={handleChange}
                    onBlur={handleBlur}
                    error={errors.phone && touched.phone && errors.phone}
                  />
                  <TextAreaInput
                    classDef="w-[100%]"
                    name="enquiries"
                    placeholder="How can i partner with you?"
                    value={values.enquiries}
                    changed={handleChange}
                    onBlur={handleBlur}
                    error={
                      errors.enquiries && touched.enquiries && errors.enquiries
                    }
                  />

                  <Button
                    title="Send"
                    disabled={handleDisable(values, isSubmitting)}
                    classDefinition="bg-black hover:bg-[#242442] text-white h-12 border px-5 py-3 gap-2 border-solid border-gray-500 font-bold text-base"
                  />

                  <div className="flex flex-col md:flex-row md:justify-between gap-3 mt-5">
                    {formContact.map((contact) => (
                      <div
                        className="flex gap-2 items-center font-bold text-[#05050B]"
                        key={contact.title}
                      >
                        <img
                          src={contact.logo}
                          alt="logo"
                          className="w-7 h-7"
                        />
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
          )}
        </Formik>
      )}
    </>
  );
}
