import NavBar from "@/components/ui/Navbar"
import About from "@/components/ui/About"
import Work from "@/components/ui/Work"
import Bio from "@/components/ui/Bio"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#202023] flex justify-center items-center flex-col">
      <NavBar />
      <div className="w-125 h-300 flex flex-col">
        <About />
        <Work />
        <Bio />
      </div>
    </main>
  );
}
