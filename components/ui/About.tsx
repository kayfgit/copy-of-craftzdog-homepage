import CraftzDog from '@/public/craftzdog.jpg'
import Image from 'next/image';

export default function About() {
  return (
    <>
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
      <div className='mb-6 mt-4 w-full h-25 flex text-white'>
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
            className='mt-2 border-2 border-white rounded-full'
          />
        </div>
      </div>
    </>

  )

}
