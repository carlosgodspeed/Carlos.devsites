import { Target, Eye, Diamond } from "lucide-react";
import "./AboutSection.css";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Desenvolver soluções digitais inovadoras que transformem a maneira como empresas operam e se conectam com seus clientes.",
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser referência em desenvolvimento de software, reconhecida pela excelência técnica e pelo compromisso com o sucesso dos nossos parceiros.",
    },
    {
      icon: Diamond,
      title: "Valores",
      description: "Qualidade, transparência, inovação contínua e foco total na satisfação do cliente são os pilares que guiam todas as nossas entregas.",
    },
  ];

  return (
    <section id="sobre" className="about">
      <div className="about__bg" />
      <div className="container">
        <div className="about__header">
          <span className="section-label">Sobre Nós</span>
          <h2 className="section-title">
            Construindo o Futuro <span className="gradient-text">Digital</span>
          </h2>
          <p className="section-description">
            Criamos <span className="gradient-text">sites e sistemas personalizados</span> focados em performance,
            ajudando empresas a se destacarem no digital e converterem mais <span className="gradient-text">clientes.</span>
          </p>
        </div>

        <div className="about__grid">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`about__card animate-fade-in-up delay-${index + 1}`}
            >
              <div className="about__card-icon">
                <value.icon size={32} />
              </div>
              <h3 className="about__card-title">{value.title}</h3>
              <p className="about__card-desc">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
