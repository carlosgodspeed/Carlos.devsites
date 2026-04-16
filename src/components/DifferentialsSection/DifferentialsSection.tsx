import { CheckCircle2, Zap, Users, Wrench } from "lucide-react";
import "./DifferentialsSection.css";

const DifferentialsSection = () => {
  const differentials = [
    { icon: CheckCircle2, title: "Qualidade do Código", description: "Código limpo, bem documentado e seguindo as melhores práticas de desenvolvimento para garantir manutenibilidade." },
    { icon: Zap, title: "Alta Performance", description: "Aplicações otimizadas para carregamento rápido, SEO e excelente experiência do usuário em qualquer dispositivo." },
    { icon: Users, title: "Foco no Cliente", description: "Comunicação transparente, acompanhamento contínuo e entregas alinhadas com as necessidades reais do seu negócio." },
    { icon: Wrench, title: "Soluções Sob Medida", description: "Cada projeto é único. Desenvolvemos soluções personalizadas que se adaptam perfeitamente aos seus objetivos." },
  ];

  return (
    <section className="differentials">
      <div className="differentials__orb-1" />
      <div className="differentials__orb-2" />

      <div className="container">
        <div className="differentials__inner">
          <div>
            <div className="differentials__content-header">
              <span className="section-label">Por que nos escolher</span>
              <p className="section-description" style={{ margin: 0 }}>
                Não entregamos apenas código — <span className="gradient-text">entregamos soluções</span> que geram <span className="gradient-text">resultados. </span>
                Conheça o que nos torna diferentes.
              </p>
            </div>

            <div className="differentials__list">
              {differentials.map((item, index) => (
                <div key={item.title} className={`differentials__item animate-slide-left delay-${index + 1}`}>
                  <div className="differentials__item-icon">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="differentials__item-title">{item.title}</h3>
                    <p className="differentials__item-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="differentials__visual animate-slide-right delay-2">
            <div className="differentials__code-card">
              <div className="differentials__code-dots">
                <div className="differentials__code-dot differentials__code-dot--red" />
                <div className="differentials__code-dot differentials__code-dot--yellow" />
                <div className="differentials__code-dot differentials__code-dot--green" />
              </div>
              <div className="differentials__code-content">
                <div>
                  <span className="differentials__code-keyword">const</span>{" "}
                  <span className="differentials__code-var">projeto</span>{" "}
                  <span className="differentials__code-punct">=</span>{" "}
                  <span className="differentials__code-bracket">{"{"}</span>
                </div>
                <div style={{ paddingLeft: "1.5rem" }}>
                  <span className="differentials__code-var">qualidade</span>
                  <span className="differentials__code-punct">:</span>{" "}
                  <span className="differentials__code-string">"excelência"</span>
                  <span className="differentials__code-punct">,</span>
                </div>
                <div style={{ paddingLeft: "1.5rem" }}>
                  <span className="differentials__code-var">performance</span>
                  <span className="differentials__code-punct">:</span>{" "}
                  <span className="differentials__code-string">"otimizada"</span>
                  <span className="differentials__code-punct">,</span>
                </div>
                <div style={{ paddingLeft: "1.5rem" }}>
                  <span className="differentials__code-var">suporte</span>
                  <span className="differentials__code-punct">:</span>{" "}
                  <span className="differentials__code-string">"dedicado"</span>
                  <span className="differentials__code-punct">,</span>
                </div>
                <div style={{ paddingLeft: "1.5rem" }}>
                  <span className="differentials__code-var">resultado</span>
                  <span className="differentials__code-punct">:</span>{" "}
                  <span className="differentials__code-bool">true</span>
                </div>
                <div>
                  <span className="differentials__code-bracket">{"}"}</span>
                  <span className="differentials__code-punct">;</span>
                </div>
              </div>
              <div className="differentials__code-glow-1" />
              <div className="differentials__code-glow-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
