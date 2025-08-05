import Link from "next/link"

export default function Loves() {
  return (
    <div className="w-full h-full flex justify-start items-center flex-col">
      <span className="text-lg self-start text-white font-bold underline decoration-4 decoration-zinc-600 underline-offset-6">
        I ♥
      </span>
      <p className="text-white text-md/6 indent-4 my-4 text-justify">
        Art, Music, <Link href="https://illust.odoruinu.net/"><span className="cursor-pointer hover:underline text-pink-400">Drawing</span></Link>, Playing Drums, <Link href="https://500px.com/p/craftzdog"><span className="cursor-pointer hover:underline text-pink-400">Photography</span></Link>, Leica, Machine Learning
      </p>
    </div>
  )
}
