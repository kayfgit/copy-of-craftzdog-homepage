import Link from 'next/link';
import { Twitter, Instagram, Github } from '@/components/Icons'
import thumbYoutube from '@/public/youtube.png'
import thumbInkdrop from '@/public/inkdrop-banner.jpg'
import Image from 'next/image';

export default function Web() {
  return (
    <div className="text-black dark:text-white max-sm:mb-10 w-full h-full sm:h-105 flex justify-start items-center flex-col">
      <span className="text-lg self-start font-bold underline decoration-4 decoration-zinc-600 underline-offset-6">
        On the web
      </span>
      <ul className="my-4 w-full h-40 text-[#319795] dark:text-[#81e6d9] ">
        <li className="w-full h-10 flex justify-start items-center">
          <Link href="https://github.com/craftzdog">
            <button className="duration-200 px-4 py-2 rounded-lg hover:bg-[#2c3838] cursor-pointer">
              <Github className='inline mr-3 mb-0.5' fill='currentColor' />
              @craftzdog
            </button>
          </Link>
        </li>
        <li className="w-full h-10 flex justify-start items-center">
          <Link href="https://twitter.com/inkdrop_app">
            <button className="duration-200 px-4 py-2 rounded-lg hover:bg-[#2c3838] cursor-pointer">
              <Twitter fill='currentColor' className='inline mr-3 mb-0.5' />
              @inkdrop_app (English)
            </button>
          </Link>
        </li>
        <li className="w-full h-10 flex justify-start items-center">
          <Link href="https://twitter.com/craftzdog">
            <button className="duration-200 px-4 py-2 rounded-lg hover:bg-[#2c3838] cursor-pointer">
              <Twitter fill='currentColor' className='inline mr-3 mb-0.5' />
              @craftzdog (日本語)
            </button>
          </Link>
        </li>
        <li className="w-full h-10 flex justify-start items-center">
          <Link href="https://instagram.com/craftzdog">
          </Link>
          <button className="duration-200 px-4 py-2 rounded-lg hover:bg-[#2c3838] cursor-pointer">
            <Instagram className='inline mr-3 mb-0.5 ' fill='currentColor' />
            @craftzdog
          </button>
        </li>
      </ul>

      <section className='max-sm:flex-col flex justify-between items-center w-full h-full gap-2'>
        <Link href="https://www.youtube.com/devaslife">
          <div className='cursor-pointer w-60 h-45 flex justify-center items-center flex-col'>
            <Image
              src={thumbYoutube}
              width={999}
              height={999}
              alt='a'
              className='w-full h-full rounded-xl mb-2'
            />
            <div className='flex justify-center items-center flex-col w-full h-10 '>
              <p>Dev as Life</p>
              <p className='font-light text-sm'>My YouTube channel ({'>'}200k subs)</p>
            </div>
          </div>
        </Link>
        <Link href="https://www.inkdrop.app/">
          <div className='cursor-pointer w-60 h-45 flex justify-center items-center flex-col'>
            <Image
              src={thumbInkdrop}
              width={999}
              height={999}
              alt='a'
              className='w-full h-full rounded-xl mb-2'
            />
            <div className='flex justify-center items-center flex-col w-full h-10 '>
              <p>Inkdrop</p>
              <p className='font-light text-sm'>A Markdown note-taking app</p>
            </div>
          </div>
        </Link>
      </section>

    </div>
  )
}
