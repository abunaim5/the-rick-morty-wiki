// import Image from "next/image";

import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
    <div className='min-h-screen relative object-contain bg-right-bottom bg-no-repeat bg-[#191D29]' style={{ backgroundImage: "url('/images/spiral.png')" }}>
      <div className='h-screen w-full absolute z-10 bg-cover bg-top bg-no-repeat bg-[lightgray]/50' style={{ backgroundImage: "url('/images/banner.png')" }}>
        <div className='absolute w-full h-screen bg-[#191D29]/85 bg-[radial-gradient(90.85%_49.94%_at_50%_50%,rgba(217,217,217,0)_0%,rgba(25,29,41,0.9)_100%)]'>
          <div className='absolute z-20 w-full h-screen opacity-60 bg-[lightgray] bg-no-repeat mix-blend-saturation' style={{ backgroundImage: "url('/images/texture.png')" }} />
        </div>
      </div>
      <div className='w-full absolute right-0 bottom-0 z-10 bg-contain  bg-no-repeat bg-[lightgray]/50' />
      <main className=''>
        <Banner />
        <div className='h-screen'></div>
      </main>
    </div>
  );
}
