// import Image from "next/image";

import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
    <div className='min-h-screen object-contain bg-right-bottom bg-no-repeat bg-[#191D29]' style={{ backgroundImage: "url('/images/spiral.png')" }}>
      <main className=''>
        <Banner />
        <div className='h-screen'></div>
      </main>
    </div>
  );
}
