'use client'
import Image from "next/image";
import Link from "next/link";
import { FaRegCirclePlay } from "react-icons/fa6";

const Banner = () => {
    const gradientCls = 'bg-gradient-to-r from-[#9DFE00] to-[#14D9E5]'

    return (
        <section className='relative text-white px-4 overflow-x-clip'>
            {/* gun box */}
            <div className={`${gradientCls} absolute right-0 md:right-20 lg:right-0 xl:right-6 2xl:right-[250px] bottom-16 md:-bottom-[6px] w-[64px] h-[105px] md:w-28 md:h-48 lg:w-36 lg:h-52 xl:w-[171px] xl:h-[282px] rounded-[71px] rotate-[25.82deg] blur-2xl opacity-90`} />

            <div className={`${gradientCls} absolute right-0 md:right-20 lg:right-0 xl:right-5 2xl:right-64 bottom-16 md:bottom-0 w-[64px] h-[105px] md:w-28 md:h-48 lg:w-36 lg:h-52 xl:w-[171px] xl:h-[282px] rounded-[71px] rotate-[25.82deg]`} />

            <Image className='w-[119px] md:w-48 lg:w-60 xl:w-[319px] absolute -right-8 md:right-6 lg:-right-16 xl:-right-[70px] 2xl:right-[170px] bottom-20 md:bottom-12' width={400} height={200} alt='gun image' src='/images/gun.png' />

            {/* text content box */}
            <div className='flex items-center justify-start lg:justify-center'>
                <div className='text-[40px] md:text-7xl lg:text-8xl xl:text-9xl font-extrabold uppercase'>
                    <div className='relative flex items-baseline gap-3 mb-0 md:mb-4'>
                        <Image className='w-[52px] md:w-32 lg:w-48 xl:w-[215px] absolute z-10 -top-3 md:-top-9 lg:-top-10 xl:-top-14 -left-5 md:-left-14 lg:-left-24' width={300} height={300} alt='bubble image' src='/images/bubble.png' />
                        <div className={`${gradientCls} hidden lg:block absolute z-10 right-0 -top-5 lg:top-7 xl:top-5 w-12 h-2 rounded-full`} />
                        <span className={`${gradientCls} absolute inset-0 -z-10 opacity-25 rounded blur-3xl`} />
                        <span className='italic'>The</span>
                        <Image className='w-[69px] md:w-32 lg:w-48 xl:w-[225px]' width={300} height={300} alt='portal image' src='/images/portal.png' />
                        <h1 className={`${gradientCls} text-transparent bg-clip-text text-nowrap`}>Rick &</h1>
                    </div>

                    <h1 className={`${gradientCls} text-transparent bg-clip-text`}>Morty <span className='font-bold italic text-white'>wiki</span></h1>
                </div>
            </div>


            <div className='flex flex-col-reverse lg:flex-row items-start justify-center lg:items-center gap-8 lg:gap-16 font-semibold mt-3 md:mt-6'>
                <Link href='https://youtu.be/KQ9Cgdsa9tc?si=XcmuQBYrBIcUkKCj'  target='_blank' className={`${gradientCls} flex items-center gap-2 px-4 py-3 md:px-6 md:py-4 text-xs md:text-xl rounded-full`}><FaRegCirclePlay className='text-sm md:text-2xl' /> <span>Watch Now</span></Link>
                <p className='max-w-[260px] md:max-w-[364px] text-[10px] md:text-sm text-[#14D9E5]'>Brilliant but boozy scientist Rick hijacks his fretful teenage grandson, Morty, for wild escapades in other worlds and alternate dimensions.</p>
            </div>
        </section>
    );
};

export default Banner;