import aboutImage from '/about-image.jpg';
import Button from '../button';
import { ContactForm } from '../../App';
import { MdCancel } from 'react-icons/md';
import { useState } from 'react';

const AboutUs = ({
  formSubmitted,
  setFormSubmitted,
}: {
  formSubmitted: boolean;
  setFormSubmitted: (val: boolean) => void;
}) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="w-full relative py-14 lg:pb-20 px-5 lg:px-0 bg-black" id="about">
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

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${aboutImage})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 rounded-2xl mx-auto flex flex-col gap-y-5 justify-center items-center">
        <h3 className="text-3xl md:text-4xl lg:text-5xl max-w-xl lg:max-w-3xl mx-auto font-bold text-white text-center">
          Lutyens’ charm reimagined along Dwarka Expressway
        </h3>
        <p className="text-sm md:text-md text-white max-w-lg mx-auto text-center">
          Nestled in Sector 102 along the thriving Dwarka Expressway, Amstoria Verti-Greens offers seamless connectivity to Delhi and Gurugram, ensuring effortless access to life’s finest luxuries while reclaiming precious time.
        </p>
        <Button
          //@ts-ignore
          onClick={() => setShowPopup(true)}
          title="Download Brochure"
        />
      </div>
    </section>
  );
};

export default AboutUs;
