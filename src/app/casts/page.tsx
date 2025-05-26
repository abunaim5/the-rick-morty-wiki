'use client'
import MeetCastCard from '@/components/MeetCastCard/MeetCastCard';
import { CharacterType } from '@/types/types';
import useCharacters from '@/utils/useCharacters';
import React from 'react';

const Casts = () => {
    const characters = useCharacters();

    return (
        <div className='min-h-screen relative bg-[#191D29] px-6 lg:px-[100px]'>

            {/* background layer */}
            <div className='h-full absolute inset-0 z-10 bg-cover bg-top bg-no-repeat' style={{ backgroundImage: "url('/images/casts-banner.png')" }} />
            <div className='h-full absolute inset-0 z-20 bg-[#191D29]/65 bg-[radial-gradient(90.85%_49.94%_at_50%_50%,rgba(217,217,217,0)_0%,rgba(25,29,41,0.9)_100%)]' />
            <div className='h-screen absolute inset-0 z-20 opacity-60 bg-[lightgray] bg-no-repeat mix-blend-saturation' style={{ backgroundImage: "url('/images/texture.png')" }} />

            {/* front content layer */}
            <div className='relative z-30 pt-[148px] lg:pt-[216px]'>
                <h1 className='text-3xl md:text-4xl lg:text-6xl font-semibold text-[#14D9E5]'>The Cast</h1>
                <div className='mt-8 md:mt-16 pb-10 md:pb-28 grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 items-center gap-4 md:gap-8 lg:gap-11'>
                    {
                        characters.map((character: CharacterType) => <MeetCastCard key={character.id} character={character} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Casts;