import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { MissionVision } from "@/components/site/MissionVision";
import { Committees } from "@/components/site/Committees";
import { Schedule } from "@/components/site/Schedule";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Committees />
      <Schedule />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
