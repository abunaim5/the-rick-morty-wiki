// import Image from "next/image";

import Banner from "@/components/Banner/Banner";
import Episodes from "@/components/Episodes/Episodes";
import MeetCast from "@/components/MeetCast/MeetCast";

export default function Home() {
  return (
    <div className='min-h-screen relative object-contain bg-right-bottom bg-no-repeat bg-[#191D29]' style={{ backgroundImage: "url('/images/spiral.png')" }}>

      {/* background layer */}
      <div className='h-screen absolute inset-0 z-10 bg-cover bg-top bg-no-repeat' style={{ backgroundImage: "url('/images/banner.png')" }} />
      <div className='h-screen absolute inset-0 z-20 bg-[#191D29]/85 bg-[radial-gradient(90.85%_49.94%_at_50%_50%,rgba(217,217,217,0)_0%,rgba(25,29,41,0.9)_100%)]' />
      <div className='h-screen absolute inset-0 z-20 opacity-60 bg-[lightgray] bg-no-repeat mix-blend-saturation' style={{ backgroundImage: "url('/images/texture.png')" }} />

      {/* front content layer */}
      <div className='relative z-30 pt-[235px]'>
        <Banner />
        <MeetCast />
        <Episodes />
      </div>
    </div>
  );
}
