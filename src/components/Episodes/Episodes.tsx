'use client'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import PentagonCard from "../PentagonCard/PentagonCard";
import { useRef, useState } from "react";
import useEpisodes from "@/utils/useEpisodes";
import { EpisodeType } from "@/types/types";

const Episodes = () => {
    const episodes: EpisodeType[] = useEpisodes();
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);
    const [atStart, setAtStart] = useState<boolean>(true);
    const [atEnd, setAtEnd] = useState<boolean>(false);

    // handle scroll with button
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

    // handle drag to scroll
    const handleMouseDown = (e: React.MouseEvent) => {
        const el = scrollRef.current;
        if (!el) return;
        setIsDragging(true);
        setStartX(e.pageX - el.offsetLeft);
        setScrollLeft(el.scrollLeft);
    };

    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!isDragging || !scrollRef.current) return;
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 3;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    }

    return (
        <section className='pb-8 md:pb-24 mx-4 lg:mx-[75px] text-white'>
            <h3 className='text-base md:text-2xl font-medium'>Episodes</h3>

            <div className='relative mt-4 md:mt-9'>
                {/* scroll buttons */}
                {!atStart && (<button onClick={() => handleScroll('left')} className='absolute z-50 left-0 md:-left-6 top-1/2 transform -translate-y-1/2 text-2xl md:text-3xl p-[5px] md:p-2 rounded-full bg-white text-[#9DFE00]'><MdKeyboardArrowLeft /></button>)}
                {!atEnd && (<button onClick={() => handleScroll('right')} className='absolute z-50 right-0 md:-right-6 top-1/2 transform -translate-y-1/2 text-2xl md:text-3xl p-[5px] md:p-2 rounded-full bg-white text-[#9DFE00]'><MdKeyboardArrowRight /></button>)}

                {/* content */}
                <div
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    className='cursor-grab active:cursor-grabbing scroll-smooth select-none overflow-x-auto whitespace-nowrap space-x-4 md:space-x-8 snap-x snap-mandatory scrollbar-hide'
                >
                    {
                        episodes.map((episode: EpisodeType) => <PentagonCard key={episode.id} data={episode} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Episodes;