// import Image from "next/image";

import Banner from "@/components/Banner/Banner";
import Episodes from "@/components/Episodes/Episodes";
import Locations from "@/components/Locations/Locations";
import MeetCast from "@/components/MeetCast/MeetCast";
import { PiStarFourFill } from "react-icons/pi";

export default function Home() {
  return (
    <div className='min-h-screen relative object-contain bg-right-bottom bg-no-repeat overflow-clip bg-[#191D29]' style={{ backgroundImage: "url('/images/spiral.png')" }}>

      {/* background layer */}
      <div className='h-screen absolute inset-0 z-10 bg-cover bg-top bg-no-repeat' style={{ backgroundImage: "url('/images/banner.png')" }} />
      <div className='h-screen absolute inset-0 z-20 bg-[#191D29]/85 bg-[radial-gradient(90.85%_49.94%_at_50%_50%,rgba(217,217,217,0)_0%,rgba(25,29,41,0.9)_100%)]' />
      <div className='h-screen absolute inset-0 z-20 opacity-60 bg-[lightgray] bg-no-repeat mix-blend-saturation' style={{ backgroundImage: "url('/images/texture.png')" }} />

      {/* background blue gradient */}
      <span className='w-[356px] h-[356px] absolute -right-24 -top-20 z-30  rounded-full blur-[175px] bg-[#2A3E84]' />
      <span className='w-[356px] h-[356px] absolute -left-24 -bottom-60 z-30  rounded-full blur-[175px] bg-[#2A3E84]' />

      {/* background stars */}
      <PiStarFourFill className='absolute bottom-[500px] right-[47%] z-40 transform rotate-[170deg] text-xs text-[#15BFFD]' />
      <PiStarFourFill className='absolute bottom-64 left-14 z-40 transform rotate-[170deg] text-2xl text-[#15BFFD]' />
      <PiStarFourFill className='absolute bottom-72 right-4 z-40 transform rotate-[170deg] text-2xl text-[#15BFFD]' />

      {/* front content layer */}
      <div className='relative z-30 pt-[114px] md:pt-[235px]'>
        <Banner />
        <MeetCast />
        <Episodes />
        <Locations />
      </div>
    </div>
  );
}
