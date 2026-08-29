import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyIncworx from '@/components/WhyIncworx';
import StatsSection from '@/components/StatsSection';
import GlobalPresence from '@/components/GlobalPresence';
import ProjectsSection from '@/components/ProjectsSection';
import LeadershipSection from '@/components/LeadershipSection';
import ClientsPartners from '@/components/ClientsPartners';
import Certifications from '@/components/Certifications';
import Sustainability from '@/components/Sustainability';
import Insights from '@/components/Insights';
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
        <StatsSection />
        <GlobalPresence />
        <ProjectsSection />
        <LeadershipSection />
        <ClientsPartners />
        <Certifications />
        <Sustainability />
        <Insights />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
