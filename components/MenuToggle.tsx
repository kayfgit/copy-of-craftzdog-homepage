'use client'

import { useState } from "react"
import { MenuIcon } from "./Icons"
import Link from "next/link"

export default function MenuToggle() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-black dark:text-white text-2xl font-bold flex md:hidden justify-center items-center w-10 h-10 border-1 border-zinc-700 rounded-md cursor-pointer hover:bg-zinc-700/90 hover:border-zinc-500 duration-200 translate-y-1">
        <MenuIcon stroke='currentColor' />
      </button>

      {isOpen && (
        <div className="border-1 border-zinc-500 flex flex-col justify-center items-start absolute top-15 right-2 rounded-xl w-50 h-65 shadow-2xl bg-white dark:bg-[#2d3748]">
          <Link href='https://www.craftz.dog/'>
            <button className="text-lg w-50 h-10 hover:bg-zinc-500/20 duration-200 cursor-pointer flex items-center px-4 hover:underline">
              About
            </button>
          </Link>
          <Link href="https://www.craftz.dog/works">
            <button className="text-lg w-50 h-10 hover:bg-zinc-500/20 duration-200 cursor-pointer flex items-center px-4 hover:underline">
              Works
            </button>
          </Link>
          <Link href="https://store.craftz.dog/">
            <button className="text-lg w-50 h-10 hover:bg-zinc-500/20 duration-200 cursor-pointer flex items-center px-4 hover:underline">
              Wallpapers
            </button>
          </Link>
          <Link href="https://www.craftz.dog/posts">
            <button className="text-lg w-50 h-10 hover:bg-zinc-500/20 duration-200 cursor-pointer flex items-center px-4 hover:underline">
              Posts
            </button>
          </Link>
          <Link href="https://uses.craftz.dog/">
            <button className="text-lg w-50 h-10 hover:bg-zinc-500/20 duration-200 cursor-pointer flex items-center px-4 hover:underline">
              Uses
            </button>
          </Link>
          <Link href="https://github.com/craftzdog/craftzdog-homepage">
            <button className="text-lg w-50 h-10 hover:bg-zinc-500/20 duration-200 cursor-pointer flex items-center px-4 hover:underline">
              View Source
            </button>
          </Link>
        </div>
      )}
    </main>
  )
}
