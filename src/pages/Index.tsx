import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import WhySiteSection from "@/components/WhySiteSection/WhySiteSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import DifferentialsSection from "@/components/DifferentialsSection/DifferentialsSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";

const Index = () => {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhySiteSection />
        <ProjectsSection />
        <DifferentialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
