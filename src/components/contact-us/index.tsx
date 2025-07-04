import { useRef, useState } from "react";
import Swal from "sweetalert2";
import { ContactForm } from "../../App";
import { MdCancel } from "react-icons/md";

const ContactUs = ({
    formSubmitted,
    setFormSubmitted,
}: {
    formSubmitted: boolean;
    setFormSubmitted: (val: boolean) => void;
}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement>(null);
    const [showPopup, setShowPopup] = useState(false);

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
                    background: '#000',
                    color: '#fff',
                    didOpen: () => {
                        const popup = Swal.getPopup();
                        if (popup) popup.style.border = '1px solid #fff';
                    }
                });

                const link = document.createElement("a");
                link.href = "/BPTP GAIA RESIDENCES @ AMSTORIA 102.pdf";
                link.download = "BPTP GAIA RESIDENCES @ AMSTORIA 102.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                setFormSubmitted(true);
            }
        } catch (error) {
            console.error("Form submission error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-10 sm:py-12 lg:py-10 bg-white" id="contact">
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
                <h5 className="mb-7 text-primary text-4xl sm:text-5xl font-semibold leading-tight text-center">
                    Contact Us
                </h5>
                <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                    <div>
                        <h2 className="mb-4 text-2xl font-bold text-textPrimary text-center">Fill this form to Proceed.</h2>
                        <form id="contactForm" onSubmit={onSubmit} ref={formRef}>
                            <div className="mb-6 space-y-5">
                                {/* Interest Dropdown */}
                                <div>
                                    <label className="font-medium mb-1 block">Are you interested in BPTP GAIA?</label>
                                    <select name="interest" required className="w-full border border-gray-400 rounded-md py-2 px-3">
                                        <option value="">Select an option</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="Not Sure Yet">Not Sure Yet</option>
                                    </select>
                                </div>

                                {/* Apartment Dropdown */}
                                <div>
                                    <label className="font-medium mb-1 block">What type of apartment are you looking for?</label>
                                    <select name="apartment" required className="w-full border border-gray-400 rounded-md py-2 px-3">
                                        <option value="">Select apartment type</option>
                                        <option value="2 BHK 1652 Sq. Ft.">Type-1 | 1689.74 Sq.ft | 3 BHK </option>
                                        <option value="3 BHK 2460 Sq. Ft.">Type-2 | 1621.67 Sq.ft | 3 BHK  </option>
                                    </select>
                                </div>

                                {/* Visit Plan Dropdown */}
                                <div>
                                    <label className="font-medium mb-1 block">When are you planning to visit the location?</label>
                                    <select name="visit_plan" required className="w-full border border-gray-400 rounded-md py-2 px-3">
                                        <option value="">Select visit plan</option>
                                        <option value="This Week">This Week</option>
                                        <option value="Within 2 Weeks">Within 2 Weeks</option>
                                        <option value="Within a Month">Within a Month</option>
                                    </select>
                                </div>

                                {/* Personal Details */}
                                <div>
                                    <input
                                        type="text"
                                        required
                                        name="name"
                                        placeholder="Name"
                                        className="w-full bg-transparent border border-gray-400 rounded-md py-2 pl-2 pr-4 text-textPrimary"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        required
                                        name="phone"
                                        inputMode="numeric"
                                        pattern="[0-9]{10}"
                                        placeholder="Enter your 10 digit no."
                                        className="w-full bg-transparent border border-gray-400 rounded-md py-2 pl-2 pr-4 text-primary"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        required
                                        name="email"
                                        placeholder="Your email address"
                                        className="w-full bg-transparent border border-gray-400 rounded-md py-2 pl-2 pr-4 text-primary"
                                    />
                                </div>
                            </div>

                            <div className="text-center">
                                <button
                                    disabled={loading}
                                    type="submit"
                                    className={`w-full ${loading ? 'bg-black/35' : 'bg-black'} text-white px-6 py-3 font-xl rounded-md`}>
                                    {loading ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Google Map */}
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.357073202552!2d76.9706299746872!3d28.471513291376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d175834c9de41%3A0x3998a147fb38994f!2sBPTP%20Amstoria%20Verti%20Greens!5e1!3m2!1sen!2sin!4v1750162720079!5m2!1sen!2sin"
                            width="100%"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map Location"
                            className="h-[25rem] md:h-[30rem] rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;