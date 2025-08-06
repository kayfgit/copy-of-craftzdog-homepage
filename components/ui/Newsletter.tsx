import Link from 'next/link';
import { Mail } from '../Icons';

export default function Newsletter() {
  return (
    <div className="text-black dark:text-white w-full h-45 flex justify-start items-center flex-col">
      <span className="text-lg self-start font-bold underline decoration-4 decoration-zinc-600 underline-offset-6">
        Newsletter
      </span>
      <p className="text-md/6 my-4 text-justify">
        Join me on a behind-the-scenes coding journey. Weekly updates on projects, tutorials and videos
      </p>
      <Link href="https://www.devas.life/">
        <button className="text-white dark:text-black duration-200 cursor-pointer hover:bg-[#81c6f9] rounded-lg bg-[#319795] dark:bg-[#81e6d9] font-bold px-4 py-2 flex gap-3 mt-2">
          <Mail fill='currentColor' width={28} height={28} className='inline' />
          Sign up my newsletter here
        </button>
      </Link>
    </div>
  )
}
