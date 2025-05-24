import { EpisodeType } from '@/types/types';
import React from 'react';

const PentagonCard = ({ episode }: { episode: EpisodeType }) => {
    return (
        <div className="relative min-w-[360px] min-h-[96px] clip-custom overflow-hidden inline-block snap-start">
            <div className="absolute w-full h-full inset-0 bg-gradient-to-br from-[#15BFFD]/80 to-[#84F729]/80 p-[1px] rounded-[10px] clip-custom">

            </div>
            <div className="min-w-fit min-h-[96px] m-[1px] flex flex-col justify-center px-6 bg-[#1e1f2f]/95 backdrop-blur-sm rounded-[10px] clip-custom font-medium text-white">
                <span>{episode.episode}</span>
                <h5 className='text-2xl'>{episode.name}</h5>
            </div>
        </div>
    );
};

export default PentagonCard;