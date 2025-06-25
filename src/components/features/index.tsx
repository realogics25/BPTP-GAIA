import { CarouselSpacing } from '../cc';


const Features = () => {
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-1 py-10 sm:py-12 lg:py-10" id="features">
            <h5 className="mb-7 text-primary text-4xl sm:text-5xl font-semibold leading-tight text-center">
                Amenities
            </h5>
            <CarouselSpacing/>
            {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {featuresList.map((feature, index) => (
                    <div >
                        <img
                            key={index}
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-48 object-cover rounded-lg mb-1"
                        />
                        <h6 className="text-sm md:text-lg font-semibold text-center">{feature.title}</h6>
                    </div>
                ))}
            </div> */}
        </div>
    )
};

export default Features;