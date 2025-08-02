import NavBar from "@/components/ui/Navbar"
import About from "@/components/ui/About"
import Work from "@/components/ui/Work"
import Bio from "@/components/ui/Bio"
import Loves from "@/components/ui/Loves"
import Web from "@/components/ui/Web"
import Newsletter from "@/components/ui/Newsletter"
import Footer from "@/components/ui/Footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#202023] flex justify-center items-center flex-col">
      <NavBar />
      <div className="w-125 min-h-screen flex flex-col">
        <About />
        <Work />
        <Bio />
        <Loves />
        <Web />
        <Newsletter />
      </div>
      <Footer />
    </main>
  );
}
