import CraftzDog from '@/public/craftzdog.jpg'
import NavBar from "@/components/ui/Navbar";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#202023] flex justify-center items-center flex-col">
      <NavBar />
      <div className="w-125 h-300 flex flex-col">
        <div className="w-full h-70 flex flex-col justify-center items-center">
          <Image
            src={CraftzDog}
            width={130}
            height={130}
            alt='a'
          />
          WIP 😉
        </div>
        <div className="px-8 py-3 text-white flex justify-center items-center rounded-lg bg-[#313134] text-md">
          Hello, I&apos;m an indie app developer based in Japan!
        </div>
        <div className='mt-6 w-full h-25 flex text-white'>
          <div className='w-100 h-25 flex flex-col justify-center '>
            <span className='font-bold text-[40px]'>
              Takuya Matsuyama
            </span>
            <span className='text-sm'>
              Digital Craftsman ( Artist / Developer / Designer )
            </span>
          </div>
          <div>
            <Image
              src={CraftzDog}
              width={100}
              height={100}
              alt='Matsuyama-sensei'
              className=' border-2 border-white rounded-full'
            />
          </div>
        </div>
      </div>
    </main>
  );
}
