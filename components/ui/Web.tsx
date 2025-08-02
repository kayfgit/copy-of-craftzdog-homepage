import Github from '../../public/github.svg'
import Image from "next/image";

export default function Web() {
  return (
    <div className="w-full h-180 flex justify-start items-center flex-col">
      <span className="self-start text-white font-bold underline decoration-4 decoration-zinc-600 underline-offset-6">
        On the web
      </span>
      <ul className="my-4 w-full h-40 text-sky-300 font-bold">
        <li className="w-full h-10 flex justify-start items-center">
          <button className="px-4 py-2 rounded-lg hover:bg-sky-200/50 cursor-pointer">
            <Image
              src={Github}
              width={20}
              height={20}
              alt=""
              className="inline mr-1 mb-0.5"
            />
            @craftzdog
          </button>
        </li>
        <li className="w-full h-10 flex justify-start items-center">
          <button className="px-4 py-2 rounded-lg hover:bg-sky-200/50 cursor-pointer">
            <Image
              src={Github}
              width={20}
              height={20}
              alt=""
              className="inline mr-1 mb-0.5"
            />
            @inkdrop_app (English)
          </button>
        </li>
        <li className="w-full h-10 flex justify-start items-center">
          <button className="px-4 py-2 rounded-lg hover:bg-sky-200/50 cursor-pointer">
            <Image
              src={Github}
              width={20}
              height={20}
              alt=""
              className="inline mr-1 mb-0.5"
            />
            @craftzdog (日本語)
          </button>
        </li>
        <li className="w-full h-10 flex justify-start items-center">
          <button className="px-4 py-2 rounded-lg hover:bg-sky-200/50 cursor-pointer">
            <Image
              src={Github}
              width={20}
              height={20}
              alt=""
              className="inline mr-1 mb-0.5"
            />
            @craftzdog
          </button>
        </li>
      </ul>
      <section className='text-white flex justify-between items-center w-full h-45'>
        <div className='cursor-pointer w-60 h-45 flex justify-center items-center flex-col'>
          <div className='w-full h-35 bg-zinc-400 rounded-xl mb-2'>
          </div>
          <p>Dev as Life <br /></p>
          <p className=' text-sm'>My YouTube channel ({'>'}200k subs)</p>
        </div>
        <div className='cursor-pointer w-60 h-45 flex justify-center items-center flex-col'>
          <div className='w-full h-35 bg-zinc-400 rounded-xl mb-2'>
          </div>
          <p>Inkdrop<br /></p>
          <p className=' text-sm'>A Markdown note-taking app</p>
        </div>
      </section>
    </div>
  )
}
