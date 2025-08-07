import CraftzDog from '@/public/craftzdog.jpg'
import Image from 'next/image';

export default function About() {
  return (
    <main className='text-black dark:text-white '>
      <div className="w-full h-70 flex flex-col text-center justify-center items-center">
        No idea on how to do the 3d voxel dog.. Sorry...😥
      </div>
      <div className="px-8 py-3 text-center flex justify-center items-center rounded-lg dark:bg-[#313134] bg-[#f5efe8] text-md">
        Hello, I&apos;m an indie app developer based in Japan!
      </div>
      <div className='mb-6 mt-4 w-full h-50 md:h-25 md:flex'>
        <div className='w-full h-25 flex flex-col justify-center '>
          <span className='font-bold text-3xl md:text-[40px]'>
            Takuya Matsuyama
          </span>
          <span className='text-sm'>
            Digital Craftsman ( Artist / Developer / Designer )
          </span>
        </div>
        <div className='flex justify-center items-center'>
          <Image
            src={CraftzDog}
            width={120}
            height={120}
            alt='Matsuyama-sensei'
            className='mt-2 border-2 border-white rounded-full'
          />
        </div>
      </div>
    </main>

  )

}
