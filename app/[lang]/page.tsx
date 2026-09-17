import GlassBar from "@/components/GlassBar";
import Hero from "@/components/Hero";
import HeroStripes from "@/components/HeroStripes";
import Partners from "@/components/Partners";
import Steps from "@/components/Steps";
import Waitlist from "@/components/Waitlist";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black">
      <GlassBar />
      <section className="relative h-screen overflow-hidden">
        <HeroStripes />
        <div className="relative z-10">
          <Hero />
        </div>
        <Partners />
      </section>
      <Steps />
      <Waitlist />
      <Faq />
      <Footer />
    </main>
  );
}
