import { ArrowRight, Code2, Sparkles } from "lucide-react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg-gradient" />
      <div className="hero__orb-1" />
      <div className="hero__orb-2" />
      <div className="hero__orb-3" />
      <div className="hero__grid" />

      <div className="hero__content">
        <br/>
        <br/>
        <h1 className="hero__title animate-fade-in-up delay-1">
          Soluções digitais sob medida para o seu <span className="gradient-text">negócio</span>
        </h1>
        <p className="hero__subtitle animate-fade-in-up delay-2">
          <span className="gradient-text">Sites, sistemas e landing pages</span> desenvolvidos com foco em performance, experiência e crescimento.
        </p>
        <div className="hero__cta animate-fade-in-up delay-3">
          <a href="#contato" className="glow-button">
            Solicitar Orçamento
            <ArrowRight size={18} />
          </a>
          <a href="#projetos" className="glow-button-outline">
            <Code2 size={18} />
            Ver Projetos
          </a>
        </div>

        <div className="hero__stats animate-fade-in-up delay-5">
          <div className="hero__stat">
            <div className="hero__stat-value">10+</div>
            <div className="hero__stat-label">Projetos Entregues</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-value">3+</div>
            <div className="hero__stat-label">Anos de Experiência</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-value">100%</div>
            <div className="hero__stat-label">Clientes Satisfeitos</div>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-indicator">
          <div className="hero__scroll-dot" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
