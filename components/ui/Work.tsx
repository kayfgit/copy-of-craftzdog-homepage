import Link from "next/link";

export default function Work() {
  return (
    <div className="text-black dark:text-white w-full h-full flex justify-start items-center flex-col">
      <span className="text-lg self-start font-bold underline decoration-4 decoration-zinc-600 underline-offset-6">
        Work
      </span>
      <p className="text-md/6 indent-4 my-4 text-justify">
        Takuya is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called <Link href="https://www.craftz.dog/works/inkdrop"><span className="cursor-pointer hover:underline text-[#3d7aed] dark:text-pink-400">Inkdrop</span></Link>. He publishes content for marketing his products and his YouTube channel called <Link href="https://www.youtube.com/devaslife">&ldquo;<span className="cursor-pointer hover:underline text-[#3d7aed] dark:text-pink-400">Dev as Life</span>&rdquo;</Link> has more than 100k subscribers.
      </p>
      <Link href="https://www.craftz.dog/works">
        <button className="dark:text-black text-white duration-200 cursor-pointer hover:bg-[#24706e] hover:dark:bg-[#4fd1c5] rounded-lg bg-[#319795] dark:bg-[#81e6d9] font-semibold px-4 py-2 flex gap-3 mt-2">
          My portfolio <p className="text-sm mt-0.5">{'>'}</p>
        </button>
      </Link>
    </div>
  )
}
