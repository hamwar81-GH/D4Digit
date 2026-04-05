import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import PopularTools from "@/components/sections/PopularTools";
import Blog from "@/components/sections/Blog";
import WhyD4Digit from "@/components/sections/WhyD4Digit";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-hidden selection:bg-primary/30 selection:text-primary">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <PopularTools />
        <WhyD4Digit />
        <Blog />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
