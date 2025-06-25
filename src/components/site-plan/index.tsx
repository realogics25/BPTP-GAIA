import { useState } from "react";

const SitePlan = () => {
    const [popupImage, setPopupImage] = useState<string | null>(null);

    const openImage = (src: string) => {
        setPopupImage(src);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-1" id="siteplan">
            <h5 className="mb-7 text-white text-4xl sm:text-5xl font-semibold leading-tight text-center">
                Site Plan
            </h5>
            <p className="text-white mx-8 text-lg text-center">
                BPTP has collaborated with over 20 world-class design and engineering experts. This well-curated collaboration ensures meticulous attention to detail and superior execution, setting a new benchmark in contemporary urban living.
            </p>

            <div className="w-full bg-white py-4 mt-4 rounded-2xl">
                <img
                    src="https://lp.bptp.com/AmstoriaVertiGreens.webp"
                    alt=""
                    onClick={() => openImage("https://lp.bptp.com/AmstoriaVertiGreens.webp")}
                    className="w-[90%] md:w-[50%] mx-auto rounded-xl cursor-pointer"
                />
            </div>

            {/* Image Modal */}
            {popupImage && (
                <div
                    className="fixed inset-0 bg-black/75 flex items-center justify-center z-[9999]"
                    onClick={closePopup}
                >
                    <img
                        src={popupImage}
                        alt="Popup"
                        className="max-w-[90%] max-h-[90%] rounded-xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default SitePlan;
