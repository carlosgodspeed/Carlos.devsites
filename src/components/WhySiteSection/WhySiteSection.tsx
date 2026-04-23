import { TrendingUp, Globe2, Shield, DollarSign, Clock, Award, ArrowRight } from "lucide-react";
import "./WhySiteSection.css";

const WhySiteSection = () => {
  const reasons = [
    {
      icon: Globe2,
      stat: "97%",
      title: "Pesquisam antes de comprar",
      description: "97% dos consumidores buscam informações na internet antes de fechar negócio. Sem presença digital, você é invisível para a maioria do seu público.",
    },
    {
      icon: TrendingUp,
      stat: "+200%",
      title: "Mais credibilidade percebida",
      description: "Empresas com site profissional são vistas como até 3x mais confiáveis. Um site bem feito é o seu melhor vendedor — trabalhando 24h por dia.",
    },
    {
      icon: DollarSign,
      stat: "5x",
      title: "Retorno sobre investimento",
      description: "Uma landing page otimizada pode multiplicar suas conversões. Cada visitante se torna uma oportunidade real de venda.",
    },
    {
      icon: Clock,
      stat: "24/7",
      title: "Vendedor que nunca dorme",
      description: "Seu site atende, qualifica e converte clientes enquanto você descansa, viaja ou foca no que importa.",
    },
    {
      icon: Shield,
      stat: "100%",
      title: "Controle da sua marca",
      description: "Diferente das redes sociais, o site é seu. Você define as regras, o design e a experiência. Sem algoritmos no caminho.",
    },
    {
      icon: Award,
      stat: "Top 1",
      title: "Posição no Google",
      description: "Sites otimizados aparecem nas primeiras buscas. Estar no topo é estar onde o cliente procura — antes da concorrência.",
    },
  ];

  return (
    <section id="porque" className="whysite">
      <div className="whysite__bg" />

      <div className="container">
        <div className="whysite__header">
          <span className="section-label">Por que investir agora</span>
          <h2 className="section-title">
            Sem site, você está <span className="gradient-text-accent">perdendo</span> clientes —
            <br />todos os dias.
          </h2>
          <p className="section-description">
            A internet decide quem cresce e quem fica para trás. Um site profissional
            não é despesa — é o ativo que transforma sua marca em <span className="gradient-text">autoridade</span>.
          </p>
        </div>

        <div className="whysite__grid">
          {reasons.map((r, i) => (
            <article key={r.title} className={`whysite__card animate-fade-in-up delay-${i + 1}`}>
              <div className="whysite__card-top">
                <div className="whysite__icon">
                  <r.icon size={22} />
                </div>
                <div className="whysite__stat">{r.stat}</div>
              </div>
              <h3 className="whysite__title">{r.title}</h3>
              <p className="whysite__desc">{r.description}</p>
              <div className="whysite__shine" />
            </article>
          ))}
        </div>

        <div className="whysite__cta animate-fade-in-up delay-7">
          <div className="whysite__cta-inner">
            <h3 className="whysite__cta-title">
              Cada dia sem um site é um cliente <span className="gradient-text">na mão do concorrente</span>.
            </h3>
            <p className="whysite__cta-desc">
              Não deixe sua marca para depois. Vamos construir, juntos, a presença digital que ela merece.
            </p>
            <a href="#contato" className="glow-button whysite__cta-btn">
              Quero meu site agora
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySiteSection;
