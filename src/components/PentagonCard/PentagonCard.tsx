import { EpisodeType, LocationType } from '@/types/types';
import React from 'react';

const PentagonCard = ({ data }: { data: EpisodeType | LocationType }) => {
    return (
        <div className="relative min-w-[360px] min-h-[96px] clip-custom overflow-hidden inline-block snap-start">
            <div className="absolute w-full h-full inset-0 bg-gradient-to-br from-[#15BFFD]/35 to-[#84F729]/35 p-[1px] rounded-lg clip-custom">

            </div>
            <div className="min-w-fit min-h-[96px] m-[1px] flex flex-col justify-center px-6 bg-[#1e1f2f]/80 backdrop-blur-sm rounded-lg clip-custom font-medium text-white">
                {'episode' in data ? <span>{data.episode}</span> : <span>{`#${data.id}`}</span>}
                <h5 className='text-2xl'>{data.name}</h5>
            </div>
        </div>
    );
};

export default PentagonCard;