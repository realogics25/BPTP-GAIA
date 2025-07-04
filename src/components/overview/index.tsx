import { IoAirplaneOutline, IoNewspaperOutline } from "react-icons/io5";
import { BsBuilding, BsTextarea } from "react-icons/bs";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { RiUserCommunityLine } from "react-icons/ri";
import { useState } from "react";
import { FaCircleChevronRight } from "react-icons/fa6";
import { LuSchool } from "react-icons/lu";
import { MdCancel, MdOutlineDirectionsRailwayFilled } from "react-icons/md";
import { GiRoad } from "react-icons/gi";
import { ContactForm } from "../../App";


const Overview = ({
    formSubmitted,
    setFormSubmitted,
}: {
    formSubmitted: boolean;
    setFormSubmitted: (val: boolean) => void;
}) => {

    const [activeTab, setActiveTab] = useState<string>("about");
    const tabs = [
        { id: "about", label: "About Project" },
        { id: "floorPlan", label: "Floor Plan" },
        { id: "landmarks", label: "Landmarks" },
        { id: "connectivity", label: "Connectivity" },
        { id: "nearbyLocalities", label: "Nearby Localities" },
    ];

    const [popupImage, setPopupImage] = useState<string | null>(null);
    const openImage = (src: string) => setPopupImage(src);
    const closePopup = () => setPopupImage(null);
    const [showPopup, setShowPopup] = useState(false);


    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-1" id="overview">
            {formSubmitted && popupImage && (
                <div
                    className="fixed inset-0 bg-black/75 flex items-center justify-center z-[999]"
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
            <h5 className="mb-7 text-primary text-4xl sm:text-5xl font-semibold leading-tight text-center">
                Overview
            </h5>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-2">
                <div className="col-span-2 mb-2 md:mb-0">
                    <div className="flex flex-wrap justify-center items-center gap-3 mb-5">
                        {tabs.map((tab) => (
                            <div
                                key={tab.id}
                                className={`border-2 border-black py-2 px-3 rounded-md cursor-pointer ${activeTab === tab.id ? "bg-black text-white" : "bg-white text-black"
                                    }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <p className="text-md font-semibold">{tab.label}</p>
                            </div>
                        ))}
                    </div>
                    {
                        activeTab === "about" ? <AboutProject /> : null
                    }
                    {
                        activeTab === "floorPlan" ? <FloorPlan openImage={openImage} setShowPopup={setShowPopup} /> : null
                    }
                    {
                        activeTab === "landmarks" ? <Landmarks /> : null
                    }
                    {
                        activeTab === "connectivity" ? <Connectivity /> : null
                    }
                    {
                        activeTab === "nearbyLocalities" ? <NearbyLocalities /> : null
                    }
                </div>
                <OverviewImageSection />
            </div>
        </div>
    )
}

export default Overview;

const OverviewImageSection = () => {
    const [selectedImage, setSelectedImage] = useState<string>(
        "https://www.bptpgaia.com/Bowling-Alley.jpg"
    );

    const thumbnails = [
        "https://www.bptpgaia.com/Bowling-Alley.jpg",
        "https://www.bptpgaia.com/Co-working.jpg",
        "https://www.bptpgaia.com/Library-Lounge.jpg",
        "https://www.bptpgaia.com/Yoga-Sky.jpg",
    ];

    return (
        <div className="w-full">
            <div className="w-[95%] h-[18rem] mx-auto mb-5">
                <img
                    src={selectedImage}
                    alt="Overview"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
            <div className="grid grid-cols-4 gap-3 px-4">
                {thumbnails.map((img, idx) => (
                    <div key={idx} className="w-full h-20">
                        <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover rounded-lg cursor-pointer"
                            onClick={() => setSelectedImage(img)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};



const AboutProject = () => {
    return (
        <div className=" border p-4 bg-white border-gray-400 rounded-lg">
            <h2 className="text-2xl font-semibold text-black text-left mb-5 mt-2">About Project</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                <div className="border p-4 border-gray-400 rounded-lg">
                    <div className="flex justify-between mb-1 items-center">
                        <p className="text-lg font-medium text-textPrimary">Total Area</p>
                        <BsTextarea size={20} className="text-textPrimary" />
                    </div>
                    <p className="text-textSecondary text-md">9.43 Acres</p>
                </div>
                <div className="border p-4 border-gray-400 rounded-lg">
                    <div className="flex justify-between mb-1 items-center">
                        <p className="text-lg font-medium text-textPrimary">Tower Height</p>
                        <AiOutlineColumnHeight size={20} className="text-textPrimary" />
                    </div>
                    <p className="text-textSecondary text-md">Ground + 45</p>
                </div>
                <div className="border p-4 border-gray-400 rounded-lg">
                    <div className="flex justify-between mb-1 items-center">
                        <p className="text-lg font-medium text-textPrimary">Total Towers</p>
                        <BsBuilding size={20} className="text-textPrimary" />
                    </div>
                    <p className="text-textSecondary text-md">3</p>
                </div>
                <div className="border p-4 border-gray-400 rounded-lg">
                    <div className="flex justify-between mb-1 items-center">
                        <p className="text-lg font-medium text-textPrimary">Total Units</p>
                        <p><RiUserCommunityLine size={20} className="text-textPrimary" /></p>
                    </div>
                    <p className="text-textSecondary text-md">531 Approx</p>
                </div>
                <div className="border p-4 border-gray-400 rounded-lg">
                    <div className="flex justify-between mb-1 items-center">
                        <p className="text-lg font-medium text-textPrimary">RERA Registration Certificate No.</p>
                        <IoNewspaperOutline size={20} className="text-textPrimary" />
                    </div>
                    <p className="text-textSecondary text-md break-words">RC/REP/HARERA/GGM/963/695/2025/66</p>
                </div>
            </div>
        </div>
    )
}

const FloorPlan = ({
    openImage,
    setShowPopup,
}: {
    openImage: (src: string) => void;
    setShowPopup: (val: boolean) => void;
}) => {
    return (
        <div className=" border p-4 bg-white border-gray-400 rounded-lg">
            <h2 className="text-2xl font-semibold text-black text-left mb-5 mt-2">Floor Plan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                <div className="w-full h-28 bg-white rounded-xl p-3 flex items-start gap-3 border border-gray-400">
                    <div
                        className="w-[30%] h-full border rounded-xl cursor-pointer"
                        onClick={() => {
                            setShowPopup(true)
                            openImage("/type-1.jpg")
                        }}
                    >
                        <img src="/type-1.jpg" alt="" className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div>
                        <p className="text-lg text-textSecondary font-medium">Type 1, Corner Unit</p>
                        <p className="text-xl text-textPrimary font-semibold">1689.74 Sq.ft | 3 BHK</p>
                    </div>
                </div>
                <div className="w-full h-28 bg-white rounded-xl p-3 flex items-start gap-3 border border-gray-400">
                    <div
                        className="w-[30%] h-full border rounded-xl cursor-pointer"
                        onClick={() => {
                            setShowPopup(true)
                            openImage("/type-2.jpg")
                        }}
                    >
                        <img src="/type-2.jpg" alt="" className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div>
                        <p className="text-lg text-textSecondary font-medium">Type 2</p>
                        <p className="text-xl text-textPrimary font-semibold">1621.67 Sq.ft | 3 BHK</p>
                    </div>
                </div>
                {/* <div className="w-full h-28 bg-white rounded-xl p-3 flex items-start gap-3 border border-gray-400">
                    <div
                        className="w-[30%] h-full border rounded-xl cursor-pointer"
                        onClick={() => {
                            setShowPopup(true)
                            openImage("https://cms.bptp.com/wp-content/uploads/2025/02/2.jpg")
                        }}
                    >
                        <img src="https://cms.bptp.com/wp-content/uploads/2025/02/2.jpg" alt="" className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div>
                        <p className="text-lg text-textSecondary font-medium">Super Area</p>
                        <p className="text-xl text-textPrimary font-semibold">2050 Sq.ft | 3 BHK</p>
                    </div>
                </div>
                <div className="w-full h-28 bg-white rounded-xl p-3 flex items-start gap-3 border border-gray-400">
                    <div
                        className="w-[30%] h-full border rounded-xl cursor-pointer"
                        onClick={() => {
                            setShowPopup(true)
                            openImage("https://cms.bptp.com/wp-content/uploads/2025/02/2.jpg")
                        }}
                    >
                        <img src="https://cms.bptp.com/wp-content/uploads/2025/02/2.jpg" alt="" className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div>
                        <p className="text-lg text-textSecondary font-medium">Super Area</p>
                        <p className="text-xl text-textPrimary font-semibold">2050 Sq.ft | 3 BHK</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

const Landmarks = () => {
    return (
        <div className=" border p-4 bg-white border-gray-400 rounded-lg">
            <h2 className="text-2xl font-semibold text-black text-left mb-5 mt-2">Landmarks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                <div className="border p-4 border-gray-400 rounded-lg">
                    <div className="flex justify-between mb-1 items-center">
                        <p className="text-lg font-medium text-textPrimary">Educational Institute </p>
                        <LuSchool size={20} className="text-textPrimary" />
                    </div>
                    <p className="text-textSecondary text-md"> Gurugram Global Heights School <b>(5 min)</b></p>
                </div>
                <div className="border p-4 border-gray-400 rounded-lg">
                    <div className="flex justify-between mb-1 items-center">
                        <p className="text-lg font-medium text-textPrimary">Transportation Hub</p>
                        <MdOutlineDirectionsRailwayFilled size={20} className="text-textPrimary" />
                    </div>
                    <p className="text-textSecondary text-md">Gurgaon Railway Station <b>(10 min)</b></p>
                </div>
                <div className="border p-4 border-gray-400 rounded-lg">
                    <div className="flex justify-between mb-1 items-center">
                        <p className="text-lg font-medium text-textPrimary">Airport</p>
                        <IoAirplaneOutline size={20} className="text-textPrimary" />
                    </div>
                    <p className="text-textSecondary text-md">Indira Gandhi International Airport <b>(25 mins)</b></p>
                </div>
            </div>
        </div>
    )
}

const NearbyLocalities = () => {
    return (
        <div className=" border p-4 bg-white border-gray-400 rounded-lg">
            <h2 className="text-2xl font-semibold text-black text-left mb-5 mt-2">Near Localities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                <div className="border p-4 border-gray-400 rounded-lg">
                    <div className="flex justify-between mb-1 items-center">
                        <p className="text-lg font-medium text-textPrimary">Basai Road, Gurgaon</p>
                        <GiRoad size={20} className="text-textPrimary" />
                    </div>
                </div>
                <div className="border p-4 border-gray-400 rounded-lg">
                    <div className="flex justify-between mb-1 items-center">
                        <p className="text-lg font-medium text-textPrimary">Sector 101, Gurgaon</p>
                        <MdOutlineDirectionsRailwayFilled size={20} className="text-textPrimary" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Connectivity = () => {
    return (
        <div className=" border p-4 bg-white border-gray-400 rounded-lg">
            <h2 className="text-2xl font-semibold text-black text-left mb-5 mt-2">Connectivity</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                <div className="border p-4 border-gray-400 rounded-lg">
                    <div className="flex items-center mb-1 gap-2">
                        <div>
                            <FaCircleChevronRight size={20} className="text-textPrimary" />
                        </div>
                        <p className="text-textSecondary text-md">Connected via upcoming New Metro Line</p>
                    </div>
                    <div className="flex items-center mb-1 gap-2">
                        <div>
                            <FaCircleChevronRight size={20} className="text-textPrimary" />
                        </div>
                        <p className="text-textSecondary text-md">Direct Connectivity to Sohna Road & Golf Course Road</p>
                    </div>
                </div>
                <div className="border p-4 border-gray-400 rounded-lg">
                    <div className="flex items-center mb-1 gap-2">
                        <div>
                            <FaCircleChevronRight size={20} className="text-textPrimary" />
                        </div>
                        <p className="text-textSecondary text-md">Quick Accessible from NH8 Expressway</p>
                    </div>
                    <div className="flex items-center mb-1 gap-2">
                        <div>
                            <FaCircleChevronRight size={20} className="text-textPrimary" />
                        </div>
                        <p className="text-textSecondary text-md">15 mins Away from KMP Expressway</p>
                    </div>
                </div>
                <div className="border p-4 border-gray-400 rounded-lg">
                    <div className="flex items-center mb-1 gap-2">
                        <div>
                            <FaCircleChevronRight size={20} className="text-textPrimary" />
                        </div>
                        <p className="text-textSecondary text-md">10 min Drive from Hero Honda Chowk</p>
                    </div>
                    <div className="flex items-center mb-1 gap-2">
                        <div>
                            <FaCircleChevronRight size={20} className="text-textPrimary" />
                        </div>
                        <p className="text-textSecondary text-md">10 Km away from IMT Manesar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}