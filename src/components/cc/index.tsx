import { Card, CardContent } from "../../components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../components/ui/carousel"

import img1 from '/img-1.jpg';
import img2 from '/img-2.png';
import img3 from '/img-3.jpg';
import img4 from '/img-4.jpg';
import img5 from '/img-5.png';
import img6 from '/img-6.jpg';
import img7 from '/img-7.jpg';
import img8 from '/img-8.jpg';
import img9 from '/img-9.jpg';
import img10 from '/img-10.jpg';
import img11 from '/img-11.jpg';
import img12 from '/img-12.jpg';

const featuresList = [
    { image: img1, title: 'Fine Dining Restaurant' },
    { image: img2, title: 'Swimming Pools' },
    { image: img3, title: 'Cigar Lounge' },
    { image: img4, title: 'Luxury Private Theatre' },
    { image: img5, title: 'Sports Courts' },
    { image: img6, title: 'Games Lounge' },
    { image: img7, title: 'Sports Bar' },
    { image: img8, title: 'Family Arcade Zone' },
    { image: img9, title: 'Banquet Hall & Function Room' },
    { image: img10, title: 'Business Centre' },
    { image: img11, title: 'Pilates Studio' },
    { image: img12, title: 'Cooking Studio' },
];

export function CarouselSpacing() {
    return (
        <div className="flex items-center justify-center">
            <Carousel className="px-4 mx-auto w-[78%] md:w-2xl lg:w-5xl sm:px-6 lg:px-1">
                <CarouselContent className="-ml-1">
                    {featuresList.map((feature, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 group"> {/* group for hover control */}
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center py-0 bg-[#000] rounded-xl relative overflow-hidden">
                                        {/* Image with opacity transition */}
                                        <img
                                            src={feature.image}
                                            alt=""
                                            className="w-full h-full object-cover rounded-xl opacity-95 group-hover:opacity-50 transition-opacity duration-300"
                                        />
                                        {/* Title only visible on hover */}
                                        <p className="text-white font-semibold text-2xl absolute text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {feature.title}
                                        </p>
                                        <div className="absolute w-full bg-black bottom-0 text-center py-[2px] md:hidden">
                                            <p className="text-white font-medium text-md">
                                                {feature.title}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
