import { Header } from "@/components/ui/header";
import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { Footer } from "@/components/ui/footer";
import { Planet } from "@/components/ui/planet";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        {/* Decorative planets */}
        <Planet
          type="earth"
          size={350}
          position={{ top: "5%", right: "-5%" }}
          glow={true}
        />
        <Planet
          type="mars"
          size={120}
          position={{ bottom: "30%", left: "-3%" }}
          glow={true}
        />
        <Planet
          type="gas-giant"
          size={200}
          position={{ bottom: "-10%", right: "15%" }}
          glow={true}
        />

        <HeroSection />
        <FeaturesSection />
        {/* We'll add more sections later */}
      </main>
      <Footer />
    </>
  );
}
