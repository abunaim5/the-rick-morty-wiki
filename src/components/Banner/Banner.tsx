import Image from "next/image";

const Banner = () => {
    return (
        <section className='h-screen relative bg-cover bg-top bg-no-repeat bg-[lightgray]/50' style={{ backgroundImage: "url('/images/banner.png')" }}>
            <div className='absolute w-full h-screen bg-[#191D29]/90 bg-[radial-gradient(90.85%_49.94%_at_50%_50%,rgba(217,217,217,0)_0%,rgba(25,29,41,0.9)_100%)]'>
                <div className='absolute w-full h-screen opacity-60 bg-[lightgray] bg-no-repeat mix-blend-saturation' style={{ backgroundImage: "url('/images/texture.png')" }} />
            </div>
            <Image className='absolute left-1/2 transform -translate-x-1/2 top-14' width={227} height={100} alt='logo' src='/images/logo.png' />
            <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-white text-2xl text-center'>The Rick & Morty</h1>
            </div>
        </section>
    );
};

export default Banner;