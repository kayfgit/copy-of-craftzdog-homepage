import Image from "next/image";
import Paw from '../../public/paw.svg'
import Github from '../../public/github.svg'
import Sun from '@/public/sun.svg'
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="sticky top-0 left-0 w-full h-15 backdrop-blur-2xl flex justify-center items-center text-white  gap-12">
      <Link href="https://www.craftz.dog/">
        <span className="group cursor-pointer font-bold">
          <Image
            src={Paw}
            width={20}
            height={20}
            alt=""
            className="group-hover:-rotate-25 duration-300 -rotate-40 inline mr-1 mb-0.5"
          />
          Takuya Matsuyama
        </span>
      </Link>
      <ul className="flex gap-6 cursor-pointer ">
        <Link href="https://www.craftz.dog/works">
          <li className="hover:underline">
            Works
          </li>
        </Link>
        <Link href="https://store.craftz.dog/">
          <li className="hover:underline">
            Wallpapers
          </li>
        </Link>
        <Link href="https://www.craftz.dog/posts">
          <li className="hover:underline">
            Posts
          </li>
        </Link>
        <Link href="https://uses.craftz.dog/">
          <li className="hover:underline">
            Uses
          </li>
        </Link>
        <Link href="https://github.com/craftzdog/craftzdog-homepage">
          <li className="hover:underline">
            <span className="group cursor-pointer">
              <Image
                src={Github}
                width={20}
                height={20}
                alt=""
                className="inline mr-1 mb-0.5"
              />
              Source
            </span>
          </li>
        </Link>
      </ul>
      <button className="flex justify-center items-center w-10 h-10 bg-[#fbd38d] rounded-lg cursor-pointer hover:bg-orange-300 duration-200">
        <Image
          src={Sun}
          width={25}
          height={25}
          alt='Matsuyama-sensei'
        />
      </button>
    </div>
  )
}
