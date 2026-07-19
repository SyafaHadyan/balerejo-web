import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import GreetingSection from "@/components/sections/GreetingSection";
import StatsBar from "@/components/sections/StatsBar";
import VideoSection from "@/components/sections/VideoSection";
import MapSection from "@/components/sections/MapSection";
import InfoSection from "@/components/sections/InfoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar activePage="beranda" />
      <main>
        <HeroSection />
        <GreetingSection />
        <StatsBar />
        <VideoSection />
        <MapSection />
        <InfoSection />
      </main>
      <Footer />
    </>
  );
}
