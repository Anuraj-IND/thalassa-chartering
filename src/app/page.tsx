import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyIncworx from '@/components/WhyIncworx';
import AmbitionBand from '@/components/AmbitionBand';
import CharteringSection from '@/components/CharteringSection';
import ProjectsSection from '@/components/ProjectsSection';
import DivisionsSection from '@/components/DivisionsSection';
import GlobalPresence from '@/components/GlobalPresence';
import LeadershipSection from '@/components/LeadershipSection';
import Sustainability from '@/components/Sustainability';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <WhyIncworx />
        <AmbitionBand />
        <CharteringSection />
        <ProjectsSection />
        <DivisionsSection />
        <GlobalPresence />
        <LeadershipSection />
        <Sustainability />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
