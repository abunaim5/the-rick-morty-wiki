'use client'
import useCharacters from "@/utils/useCharacters";
import MeetCastCard from "../MeetCastCard/MeetCastCard";
import { CharacterType } from "@/types/types";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const MeetCast = () => {
    const characters: CharacterType[] = useCharacters();
    const scrollRef = useRef<HTMLDivElement>(null);
    const [atStart, setAtStart] = useState<boolean>(true);
    const [atEnd, setAtEnd] = useState<boolean>(false);
    const router = useRouter();

    const handleScroll = (direction: 'left' | 'right') => {
        const el = scrollRef.current;
        if (!el) return;
        const scrollAmount = direction === 'left' ? -300 : 300;
        el.scrollBy({ left: scrollAmount, behavior: 'smooth' });

        setTimeout(() => {
            setAtStart(el.scrollLeft <= 0);
            setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
        }, 200);
    };

    return (
        <section className='pb-8 md:pb-24 mx-4 md:mx-[75px] mt-14 md:mt-[85px]'>
            <div className='flex items-center justify-between text-white'>
                <h3 className='text-base md:text-2xl font-medium'>Meet The Cast</h3>
                <button onClick={() => router.push('/casts')} className='text-xs md:text-lg px-4 md:px-6 py-1 md:py-[10px] rounded-lg border border-[#9DFE00]'>View All</button>
            </div>
            <div className='relative mt-4 md:mt-9'>
                {/* scroll buttons */}
                {!atStart && (<button onClick={() => handleScroll('left')} className='absolute z-50 left-0 md:-left-6 top-1/2 transform -translate-y-1/2 text-2xl md:text-3xl p-[5px] md:p-2 rounded-full bg-white text-[#9DFE00]'><MdKeyboardArrowLeft /></button>)}
                {!atEnd && (<button onClick={() => handleScroll('right')} className='absolute z-50 right-0 md:-right-6 top-1/2 transform -translate-y-1/2 text-2xl md:text-3xl p-[5px] md:p-2 rounded-full bg-white text-[#9DFE00]'><MdKeyboardArrowRight /></button>)}

                {/* content */}
                <div ref={scrollRef} className='overflow-x-auto whitespace-nowrap space-x-4 md:space-x-8 snap-x snap-mandatory scrollbar-hide'>
                    {
                        characters.map((character: CharacterType) => <div key={character.id} className='w-36 md:w-[290px] inline-grid snap-start'><MeetCastCard character={character} /></div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default MeetCast;