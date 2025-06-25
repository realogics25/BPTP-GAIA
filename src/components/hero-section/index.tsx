import { useState } from 'react';
import image from '/Vertigreens-New-Banner-1.jpg';
import { MdCancel } from 'react-icons/md';
import { ContactForm } from '../../App';

const HeroSection = ({
  formSubmitted,
  setFormSubmitted,
}: {
  formSubmitted: boolean;
  setFormSubmitted: (val: boolean) => void;
}) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="pt-10 pb-6 sm:pt-12 sm:pb-8 lg:pb-6 lg:pt-10 bg-white" id='home'>
      {!formSubmitted && showPopup && (
        <div className="fixed inset-0 z-[9999] bg-black/40 flex justify-center items-center p-4">
          <div className="relative w-full max-w-lg bg-white rounded-lg shadow-lg p-4 overflow-y-auto max-h-[90vh]">
            <ContactForm
              onClose={() => setShowPopup(false)}
              setFormSubmitted={setFormSubmitted}
            />
            <MdCancel
              size={24}
              className="absolute top-2 right-2 text-black cursor-pointer"
              onClick={() => setShowPopup(false)}
            />
          </div>
        </div>
      )}
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-1">
        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
          <div className="text-center lg:text-left flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold leading-tight text-primary sm:text-6xl sm:leading-tight lg:leading-20 lg:text-[80px] text-center">
              BPTP Amstoria <br /> Verti-Greens
            </h1>
            <div className='border-y-2 my-4 py-2'>
              <p className='text-center text-2xl font-medium'>2 & 3 BHK Residences Prices Starting at</p>
              <p className='text-center text-4xl font-semibold'>₹3.22 Crores*</p>
            </div>
            <p className='text-center text-xl font-medium'>SECTOR 102, DWARKA EXPRESSWAY, GURUGRAM</p>
            <div className='border text-center inline-block my-2 p-3 rounded-md'>
              <p className='text-center text-xl font-medium'>Pay 20% Every Year For 5 Years</p>
            </div>
            <div className='flex justify-center items-center gap-4 mt-2'>
              <div
                className="border-2 border-black py-2 px-3 rounded-md cursor-pointer bg-black text-white"
                onClick={() => setShowPopup(true)}
              >
                <p className="text-md font-normal">Download Brochure</p>
              </div>
              <a href="tel:+919999221307">
                <div className="border-2 border-black py-2 px-3 rounded-md cursor-pointer bg-black text-white">
                  <p className="text-md font-normal">Call Now : +91 9999221307</p>
                </div>
              </a>
            </div>
          </div>
          <div>
            <img
              className="w-full h-[20rem] md:h-[30rem] object-cover rounded-2xl"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
