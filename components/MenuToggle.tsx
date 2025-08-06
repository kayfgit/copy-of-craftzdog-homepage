'use client'

import { useState } from "react"
import { MenuIcon } from "./Icons"

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
        <div className="border-1 border-zinc-500 flex flex-col justify-center items-center absolute top-15 right-2 rounded-xl w-50 h-65 shadow-2xl bg-white dark:bg-[#2d3748]">
          <button className="text-lg w-full h-10 hover:bg-zinc-500/20 duration-200 cursor-pointer flex items-center px-4 hover:underline">
            About
          </button>
          <button className="text-lg w-full h-10 hover:bg-zinc-500/20 duration-200 cursor-pointer flex items-center px-4 hover:underline">
            Works
          </button>
          <button className="text-lg w-full h-10 hover:bg-zinc-500/20 duration-200 cursor-pointer flex items-center px-4 hover:underline">
            Wallpapers
          </button>
          <button className="text-lg w-full h-10 hover:bg-zinc-500/20 duration-200 cursor-pointer flex items-center px-4 hover:underline">
            Posts
          </button>
          <button className="text-lg w-full h-10 hover:bg-zinc-500/20 duration-200 cursor-pointer flex items-center px-4 hover:underline">
            Uses
          </button>
          <button className="text-lg w-full h-10 hover:bg-zinc-500/20 duration-200 cursor-pointer flex items-center px-4 hover:underline">
            View Source
          </button>
        </div>
      )}
    </main>
  )
}
