import { ArrowRight, Sparkles } from "lucide-react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero__noise" />
      <div className="hero__vignette" />

      <div className="hero__content">
        <h1 className="hero__title animate-fade-in-up delay-2">
          A presença digital que sua marca <span className="gradient-text">merece</span>.
        </h1>

        <p className="hero__subtitle animate-fade-in-up delay-3">
          Criamos <span className="hero__highlight">sites, landing pages e sistemas</span> sob medida —
          projetados para impressionar, converter e elevar o padrão do seu negócio.
        </p>

        <div className="hero__cta animate-fade-in-up delay-4">
          <a href="#contato" className="glow-button">
            <Sparkles size={18} />
            Iniciar meu projeto
            <ArrowRight size={18} />
          </a>
          <a href="#projetos" className="glow-button-outline">
            Ver portfólio
          </a>
        </div>

        <div className="hero__divider animate-fade-in delay-5" />

        <div className="hero__stats animate-fade-in-up delay-6">
          <div className="hero__stat">
            <div className="hero__stat-value">10+</div>
            <div className="hero__stat-label">Projetos entregues</div>
          </div>
          <div className="hero__stat-sep" />
          <div className="hero__stat">
            <div className="hero__stat-value">3+</div>
            <div className="hero__stat-label">Anos de experiência</div>
          </div>
          <div className="hero__stat-sep" />
          <div className="hero__stat">
            <div className="hero__stat-value">100%</div>
            <div className="hero__stat-label">Clientes satisfeitos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
