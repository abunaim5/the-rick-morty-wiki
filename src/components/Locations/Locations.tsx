'use client'
import { LocationType } from "@/types/types";
import useLocations from "@/utils/useLocations";
import { useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import PentagonCard from "../PentagonCard/PentagonCard";

const Locations = () => {
    const locations: LocationType[] = useLocations();
    const scrollRef = useRef<HTMLDivElement>(null);
    const [atStart, setAtStart] = useState<boolean>(true);
    const [atEnd, setAtEnd] = useState<boolean>(false);

    const handleScroll = (direction: 'left' | 'right') => {
        const el = scrollRef.current;
        if (!el) return;
        const scrollAmount = direction === 'left' ? -400 : 400;
        el.scrollBy({ left: scrollAmount, behavior: 'smooth' });

        setTimeout(() => {
            setAtStart(el.scrollLeft <= 0);
            setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
        }, 200);
    };

    return (
        <section className='pb-[70px] mx-[75px] text-white'>
            <h3 className='text-2xl font-medium'>Locations</h3>

            <div className='relative mt-9'>
                {/* scroll buttons */}
                {!atStart && (<button onClick={() => handleScroll('left')} className='absolute z-50 -left-6 top-1/2 transform -translate-y-1/2 text-3xl p-2 rounded-full bg-white text-[#9DFE00]'><MdKeyboardArrowLeft /></button>)}
                {!atEnd && (<button onClick={() => handleScroll('right')} className='absolute z-50 -right-6 top-1/2 transform -translate-y-1/2 text-3xl p-2 rounded-full bg-white text-[#9DFE00]'><MdKeyboardArrowRight /></button>)}

                {/* content */}
                <div ref={scrollRef} className='overflow-x-auto whitespace-nowrap space-x-8 snap-x snap-mandatory scrollbar-hide'>
                    {
                        locations.map((location: LocationType) => <PentagonCard key={location.id} data={location} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Locations;