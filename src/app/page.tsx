import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyIncworx from '@/components/WhyIncworx';
import GlobalPresence from '@/components/GlobalPresence';
import ProjectsSection from '@/components/ProjectsSection';
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
        <GlobalPresence />
        <ProjectsSection />
        <LeadershipSection />
        <Sustainability />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
