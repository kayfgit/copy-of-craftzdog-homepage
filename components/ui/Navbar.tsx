'use client'
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import Sun from '@/public/sun.svg'
import { Moon, Paw, Github } from "../Icons";
import Link from "next/link";
import MenuToggle from "../MenuToggle";
import { useTheme } from 'next-themes'

export default function NavBar() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="text-black dark:text-white sticky top-0 left-0 w-full h-15 backdrop-blur-xl flex justify-between  md:justify-center items-center gap-12">
      <Link href="https://www.craftz.dog/">
        <span className="group px-4 md:px-0 cursor-pointer font-bold">
          <Paw className="group-hover:rotate-0 -rotate-20 duration-300 inline mr-1 mb-1" />
          Takuya Matsuyama
        </span>
      </Link>
      <ul className="gap-6 cursor-pointer hidden md:flex">
        <Link href="https://www.craftz.dog/works">
          <li className="hover:underline ">
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
            <span className="group cursor-pointer text-black dark:text-white">
              <Github fill="currentColor" className="inline mr-1 mb-0.5" />
              Source
            </span>
          </li>
        </Link>
      </ul>
      <div className="p-2 self-end flex gap-2 ">

        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={theme} style={{ display: 'inline-block' }} initial={{ y: -20, opacity: 0 }} animate={{ y: 5, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.2 }}>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="relative w-10 h-10 bg-[#805ad5] dark:bg-[#fbd38d] rounded-sm cursor-pointer hover:bg-[#6b46c1] dark:hover:bg-[#f6ad55] duration-200">
              <Image
                src={Sun}
                width={25}
                height={25}
                alt="a"
                className="absolute inset-0 m-auto opacity-0 dark:opacity-100"
              />
              <Moon fill="#fff" className="absolute inset-0 m-auto dark:opacity-0 " />
            </button>
          </motion.div>
        </AnimatePresence>

        <MenuToggle />

      </div>
    </div>
  )
}
