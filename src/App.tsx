import { useRef, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Swal from "sweetalert2";
import { MdCancel } from "react-icons/md";
import Navbar from "./components/navbar/Navbar";
import { Footer } from "./components/footer";
import HeroSection from "./components/hero-section";
import AboutUs from "./components/about-us";
import Overview from "./components/overview";
import SitePlan from "./components/site-plan";
import Features from "./components/features";
import ContactUs from "./components/contact-us";
import { HeroVideoDialogVideo } from "./components/Hero-video-dialog";

export const ContactForm = ({
  onClose,
  setFormSubmitted,
}: {
  onClose: () => void;
  setFormSubmitted: (val: boolean) => void;
}) => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "c13627a6-94dc-410e-96d6-d187227ffa8a");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        formRef.current?.reset();
        Swal.fire({
          title: "Thanks",
          text: "We will contact you soon",
          icon: "success",
          background: "#000",
          color: "#fff",
          didOpen: () => {
            const popup = Swal.getPopup();
            if (popup) popup.style.border = "1px solid #fff";
          },
        });

        const link = document.createElement("a");
        link.href = "/BPTP GAIA RESIDENCES @ AMSTORIA 102.pdf";
        link.download = "BPTP GAIA RESIDENCES @ AMSTORIA 102.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setFormSubmitted(true);
        onClose();
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} ref={formRef} className="space-y-4 w-full">
      <h2 className="text-xl font-semibold text-center">Fill the form to Proceed.</h2>
      <div>
        <label className="block font-medium mb-1">Are you interested in BPTP GAIA??</label>
        <select name="interest" required className="w-full border border-gray-400 rounded-md py-2 px-3">
          <option value="">Select an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Not Sure Yet">Not Sure Yet</option>
        </select>
      </div>
      <div>
        <label className="block font-medium mb-1">What type of apartment are you looking for?</label>
        <select name="apartment" required className="w-full border border-gray-400 rounded-md py-2 px-3">
          <option value="">Select apartment type</option>
          <option value="2 BHK 1652 Sq. Ft.">Type-1 | 1689.74 Sq.ft | 3 BHK</option>
          <option value="3 BHK 2460 Sq. Ft.">Type-2 | 1621.67 Sq.ft | 3 BHK</option>          
        </select>
      </div>
      <div>
        <label className="block font-medium mb-1">When are you planning to visit the location?</label>
        <select name="visit_plan" required className="w-full border border-gray-400 rounded-md py-2 px-3">
          <option value="">Select visit plan</option>
          <option value="This Week">This Week</option>
          <option value="Within 2 Weeks">Within 2 Weeks</option>
          <option value="Within a Month">Within a Month</option>
        </select>
      </div>
      <input
        type="text"
        required
        name="name"
        placeholder="Name"
        className="w-full border border-gray-400 rounded-md py-2 px-3"
      />
      <input
        type="tel"
        required
        name="phone"
        inputMode="numeric"
        pattern="[0-9]{10}"
        placeholder="Enter your 10 digit Mobile No."
        className="w-full border border-gray-400 rounded-md py-2 px-3"
      />
      <input
        type="email"
        required
        name="email"
        placeholder="Email"
        className="w-full border border-gray-400 rounded-md py-2 px-3"
      />
      <button
        disabled={loading}
        type="submit"
        className={`w-full ${loading ? "bg-black/35" : "bg-black"} text-white px-6 py-3 rounded-md`}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

// ✅ AppContent handles shared state
const AppContent = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setShowPopup(false);
      }
    };
    if (showPopup) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPopup]);

  return (
    <div className="bg-white relative">
      {!formSubmitted && showPopup && (
        <div className="fixed inset-0 z-[9999] bg-black/40 flex justify-center items-center p-4">
          <div
            ref={popupRef}
            className="relative w-full max-w-lg bg-white rounded-lg shadow-lg p-4 overflow-y-auto max-h-[90vh]"
          >
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
      <Navbar />
      <HeroSection
        formSubmitted={formSubmitted}
        setFormSubmitted={setFormSubmitted}
      />
      <AboutUs
        formSubmitted={formSubmitted}
        setFormSubmitted={setFormSubmitted}
      />
      <div className="bg-[#f5f5f5] py-10 sm:py-12 lg:py-10">
        <Overview
          formSubmitted={formSubmitted}
          setFormSubmitted={setFormSubmitted}
        />
      </div>
      <div className="bg-[#141414] py-10 sm:py-12 lg:py-10">
        <SitePlan />
      </div>
      <Features />
      <ContactUs
        formSubmitted={formSubmitted}
        setFormSubmitted={setFormSubmitted}
      />
      <HeroVideoDialogVideo />
      <Footer />
    </div>
  );
};

// ✅ Main App Component
const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
