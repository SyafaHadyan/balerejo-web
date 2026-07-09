import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import GreetingSection from "@/components/sections/GreetingSection";
import VideoSection from "@/components/sections/VideoSection";
import InfoSection from "@/components/sections/InfoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar activePage="beranda" />
      <main>
        <HeroSection />
        <StatsBar />
        <GreetingSection />
        <VideoSection />
        <InfoSection />
      </main>
      <Footer />
    </>
  );
}
