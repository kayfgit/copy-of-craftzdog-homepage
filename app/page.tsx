import CraftzDog from '@/public/craftzdog.jpg'
import NavBar from "@/components/ui/Navbar";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#202023] flex justify-center items-center flex-col">
      <NavBar />
      <div className="w-120 h-300 flex flex-col">
        <div className="w-full h-70 flex flex-col justify-center items-center">
          <Image
            src={CraftzDog}
            width={130}
            height={130}
            alt='a'
          />
          WIP 😉
        </div>
        <div className="px-8 py-3 text-white flex justify-center items-center rounded-lg bg-[#313134]">
          Hello, I&apos;m an indie app developer based in Japan!
        </div>
        <div className='w-full bg-white h-25 flex justify-center'>
          <div className='w-95 h-25 bg-zinc-400 flex flex-col justify-center '>
            <span className='font-bold text-4xl'>
              Takuya Matsuyama
            </span>
            <span className=''>
              Digital Craftsman ( Artist / Developer / Designer )
            </span>
          </div>
          <Image
            src={CraftzDog}
            width={100}
            height={100}
            alt='a'
            className=' border-2 border-white rounded-full'
          />
        </div>
      </div>
    </main>
  );
}
