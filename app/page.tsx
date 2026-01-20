import { Hero } from "@/components/HeroSection";
import { Navbar } from "@/components/NavBar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      
        <Hero />
        
        <section className="py-12 md:py-20 bg-[#f9f9f9] px-6 md:px-12 lg:px-24">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              CLOTH <span className="text-primary">GALLERY</span>
            </h2>
          </div>
          
          {/* Example Grid for Gallery Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Gallery items would be mapped here */}
          </div>
        </section>
    </main>
  );
}
