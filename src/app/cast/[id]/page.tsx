'use client'
import { CharacterType, EpisodeType } from '@/types/types';
import Image from 'next/image';
import React, { use, useEffect, useState } from 'react';
import { FaGlobeAsia } from 'react-icons/fa';
import { IoMaleSharp } from 'react-icons/io5';
import { PiStarFourFill } from 'react-icons/pi';
import { RiAndroidFill, RiExternalLinkFill, RiHeart2Fill, RiMapPinRangeFill, RiMenuFold2Fill } from 'react-icons/ri';

type CastId = {
    params: Promise<{ id: string }>
};

const Cast = ({ params }: CastId) => {
    const [character, setCharacter] = useState<CharacterType | null>(null);
    const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
    const { id } = use(params);


    const bgCls = 'p-[1px] rounded-lg bg-gradient-to-br from-[#15BFFD]/35 to-[#84F729]/35';

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await res.json();
                setCharacter(data);
            } catch (err) {
                console.error('Error', err);
            }
        }

        fetchCharacter();
    }, [id]);

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const episodeApis = character?.episode ?? [];
                const data = await Promise.all(
                    episodeApis.map(url => fetch(url).then(res => res.json()))
                );
                setEpisodes(data);
            } catch (err) {
                console.error('Error', err);
            }
        }

        if (character?.episode) {
            fetchEpisodes();
        }
    }, [character?.episode]);

    return (
        <div className='min-h-screen relative bg-[#191D29] px-6 lg:px-[100px] overflow-clip'>

            {/* background layer */}
            <div className='h-full absolute inset-0 z-10 bg-cover bg-top bg-no-repeat' style={{ backgroundImage: "url('/images/details-banner.png')" }} />
            <div className='h-full absolute inset-0 z-20 bg-[#191D29]/65 bg-[radial-gradient(90.85%_49.94%_at_50%_50%,rgba(217,217,217,0)_0%,rgba(25,29,41,0.9)_100%)]' />
            <div className='h-screen absolute inset-0 z-20 opacity-60 bg-[lightgray] bg-no-repeat mix-blend-saturation' style={{ backgroundImage: "url('/images/texture.png')" }} />

            {/* background blue gradient */}
            <span className='w-[356px] h-[356px] absolute -right-24 top-1/2 transform -translate-y-1/2 z-30  rounded-full blur-[175px] bg-[#2A3E84]' />
            <span className='w-[356px] h-[356px] absolute -left-24 -bottom-60 z-30  rounded-full blur-[175px] bg-[#2A3E84]' />

            {/* background stars */}
            <PiStarFourFill className='absolute top-[760px] left-20 z-40 transform rotate-[170deg] text-2xl text-[#15BFFD]' />
            <PiStarFourFill className='absolute bottom-20 left-[420px] z-40 transform rotate-[170deg] text-xs text-[#15BFFD]' />
            <PiStarFourFill className='absolute bottom-[450px] right-14 z-40 transform rotate-[170deg] text-2xl text-[#15BFFD]' />

            {/* front content layer */}
            <div className='relative flex flex-col xl:flex-row items-center justify-between gap-4 md:gap-10 z-30 pt-20 lg:pt-[216px] pb-10 md:pb-20'>
                <div className='mt-16 flex items-center gap-12'>
                    <h1 className='max-h-fit hidden xl:block text-8xl font-extrabold text-outline transform rotate-180' style={{ writingMode: 'vertical-lr' }}>{character?.name}</h1>
                    <div className='flex-1'>
                        <h3 className='text-2xl md:text-5xl text-center font-semibold text-[#14D9E5]'>{character?.name}</h3>
                        <div className={`${bgCls} mt-8`}>
                            <div className='p-7 md:p-[50px] backdrop-blur-md rounded-lg bg-[#1e1f2f]/80'>
                                {character?.image ? (<Image className='w-44 md:w-full object-cover rounded-lg' height={300} width={300} sizes='' alt={`Image of ${character?.name}`} src={character?.image} />) : ('')}
                            </div>
                        </div>
                    </div>
                    {/* middle border */}
                    <div className='hidden xl:block w-[1px] mt-20 ml-32 h-80 bg-gradient-to-br from-[#84F729]/35 to-[#15BFFD]/35' />
                </div>

                <div className='text-white space-y-4 md:space-y-10 max-w-[800px]'>
                    <div className='flex items-center gap-4 md:gap-10 w-full'>
                        <div className={`${bgCls} w-full`}>
                            <div className='px-3 py-2 md:px-8 md:py-4 backdrop-blur-md rounded-lg bg-[#1e1f2f]/80'>
                                <RiHeart2Fill className='text-xl md:text-5xl text-[#84F729]' />
                                <p className='text-xs md:text-xl mt-4'>Status</p>
                                <h5 className='text-base md:text-[40px] leading-6 md:leading-[60px]'>{character?.status}</h5>
                            </div>
                        </div>
                        <div className={`${bgCls} w-full`}>
                            <div className='px-3 py-2 md:px-8 md:py-4 backdrop-blur-md rounded-lg bg-[#1e1f2f]/80'>
                                <RiAndroidFill className='text-xl md:text-5xl text-[#84F729]' />
                                <p className='text-xs md:text-xl mt-4'>Species</p>
                                <h5 className='text-base md:text-[40px] leading-6 md:leading-[60px]'>{character?.species}</h5>
                            </div>
                        </div>
                        <div className={`${bgCls} w-full`}>
                            <div className='px-3 py-2 md:px-8 md:py-4 backdrop-blur-md rounded-lg bg-[#1e1f2f]/80'>
                                <IoMaleSharp className='text-xl md:text-5xl text-[#84F729]' />
                                <p className='text-xs md:text-xl mt-4'>Gender</p>
                                <h5 className='text-base md:text-[40px] leading-6 md:leading-[60px]'>{character?.gender}</h5>
                            </div>
                        </div>
                    </div>

                    <div className={`${bgCls} w-full`}>
                        <div className='px-3 py-2 md:px-8 md:py-4 backdrop-blur-md rounded-lg bg-[#1e1f2f]/80'>
                            <FaGlobeAsia className='text-xl md:text-5xl text-[#84F729]' />
                            <p className='text-xs md:text-xl mt-4'>Origin</p>
                            <div className='flex items-center justify-between text-2xl my-1 md:my-4'>
                                <h5 className='text-base md:text-[40px] leading-6 md:leading-[60px]'>{character?.origin.name}</h5>
                                <RiExternalLinkFill className='text-sm md:text-2xl' />
                            </div>
                        </div>
                    </div>
                    <div className={`${bgCls} w-full`}>
                        <div className='px-3 py-2 md:px-8 md:py-4 backdrop-blur-md rounded-lg bg-[#1e1f2f]/80'>
                            <RiMapPinRangeFill className='text-xl md:text-5xl text-[#84F729]' />
                            <p className='text-xs md:text-xl mt-4'>Last Known Location</p>
                            <div className='flex items-center justify-between text-2xl my-1 md:my-4'>
                                <h5 className='text-base md:text-[40px] leading-6 md:leading-[60px]'>{character?.location.name}</h5>
                                <RiExternalLinkFill className='text-sm md:text-2xl' />
                            </div>
                        </div>
                    </div>
                    <div className={`${bgCls} w-full`}>
                        <div className='px-3 py-2 md:px-8 md:py-4 backdrop-blur-md rounded-lg bg-[#1e1f2f]/80 overflow-hidden'>
                            <RiMenuFold2Fill className='text-xl md:text-5xl text-[#84F729]' />
                            <p className='text-xs md:text-xl mt-4 mb-9'>Episode(S)</p>
                            <ul className='list-disc text-base md:text-[40px] leading-6 md:leading-[60px] font-semibold pl-7 md:pl-14 max-h-[300px] overflow-y-auto lg:scrollbar'>
                                {
                                    episodes.map(episode => <li key={episode.id}>{episode.name}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cast;