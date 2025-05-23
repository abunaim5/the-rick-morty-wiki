import Image from "next/image";
import { FaRegCirclePlay } from "react-icons/fa6";

const Banner = () => {
    const gradientCls = 'bg-gradient-to-r from-[#9DFE00] to-[#14D9E5]'

    return (
        <section className='relative text-white'>
            <div className={`${gradientCls} absolute right-64 bottom-0 w-[171px] h-[282px] rounded-[71px] rotate-[25.82deg]`} />
            
            <div className={`${gradientCls} absolute right-[250px] -bottom-[6px] w-[171px] h-[282px] rounded-[71px] rotate-[25.82deg] blur-2xl opacity-90`} />

            <Image className='absolute right-[170px] bottom-12' width={319} height={180} alt='gun image' src='/images/gun.png' />

            <div className='max-w-fit mx-auto text-9xl font-extrabold uppercase'>
                <div className='relative flex items-baseline gap-3 mb-4'>
                    <Image className='absolute z-10 -top-14 -left-24' width={215} height={215} alt='bubble image' src='/images/bubble.png' />
                    <div className={`${gradientCls} absolute z-10 right-0 top-5 w-12 h-2 rounded-full`} />
                    <span className={`${gradientCls} absolute inset-0 -z-10 opacity-25 rounded blur-3xl`} />
                    <span className='italic'>The</span>
                    <Image width={225} height={145} alt='portal image' src='/images/portal.png' />
                    <h1 className={`${gradientCls} text-transparent bg-clip-text text-nowrap`}>Rick &</h1>
                </div>

                <h1 className={`${gradientCls} text-transparent bg-clip-text`}>Morty <span className='font-bold italic text-white'>wiki</span></h1>
            </div>

            <div className='flex items-center gap-16 max-w-fit mx-auto font-semibold mt-6'>
                <button className={`${gradientCls} flex items-center gap-2 px-6 py-4 text-xl rounded-full`}><FaRegCirclePlay className='text-2xl' /> <span>Watch Now</span></button>
                <p className='max-w-[364px] text-sm text-[#14D9E5]'>Brilliant but boozy scientist Rick hijacks his fretful teenage grandson, Morty, for wild escapades in other worlds and alternate dimensions.</p>
            </div>
        </section>
    );
};

export default Banner;