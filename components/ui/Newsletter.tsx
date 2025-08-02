import Link from 'next/link';
import Github from '../../public/github.svg'
import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="w-full h-45 flex justify-start items-center flex-col">
      <span className="self-start text-white font-bold underline decoration-4 decoration-zinc-600 underline-offset-6">
        Newsletter
      </span>
      <p className="text-white text-md/6 my-4 text-justify">
        Join me on a behind-the-scenes coding journey. Weekly updates on projects, tutorials and videos
      </p>
      <Link href="https://www.devas.life/">
        <button className="cursor-pointer hover:bg-[#81e6f9] rounded-lg bg-[#81e6d9] font-bold px-4 py-2 flex gap-3 mt-2">
          <Image
            src={Github}
            width={20}
            height={20}
            alt=""
            className="inline mr-1 mb-0.5"
          />
          Sign up my newsletter here
        </button>
      </Link>
    </div>
  )
}
