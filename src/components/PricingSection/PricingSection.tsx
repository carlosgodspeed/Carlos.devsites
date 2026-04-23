import { useState, useEffect } from "react";
import { Check, ArrowRight, MessageCircle, Zap, TrendingUp, Layers, Crown, CheckCircle, X } from "lucide-react";
import avatar from "@/assets/avatar.jpg";
import "./PricingSection.css";

const WHATSAPP_NUMBER = "5513981120655";

interface PlanExpanded {
  description: string;
  benefits: string[];
  included: string[];
  extras?: string[];
}

const plans = [
  {
    name: "Básico",
    focus: "Ideal para quem quer começar na internet",
    creation: "80",
    monthly: "30",
    icon: Zap,
    iconClass: "pricing__plan-icon--start",
    features: [
      "Landing page profissional",
      "Até 2 alterações por mês",
      "Hospedagem inclusa",
      "Suporte básico",
    ],
    expanded: {
      description: "Perfeito para quem está começando e quer marcar presença online de forma profissional.",
      benefits: ["Presença digital profissional", "Credibilidade para seu negócio", "Visibilidade no Google"],
      included: ["Design responsivo (celular e desktop)", "Certificado SSL incluso", "Domínio personalizado (ajuda na configuração)", "Entrega em até 7 dias úteis"],
    } as PlanExpanded,
    whatsappMsg: "Olá! Tenho interesse no plano Básico.",
    highlighted: false,
  },
  {
    name: "Profissional",
    focus: "Para atrair mais clientes todos os dias",
    creation: "120",
    monthly: "50",
    icon: TrendingUp,
    iconClass: "pricing__plan-icon--negocio",
    badge: "🔥 Mais escolhido",
    features: [
      "Landing page otimizada para conversão",
      "Até 4 alterações por mês",
      "Integração com WhatsApp",
      "Apareça melhor no Google (SEO básico)",
    ],
    expanded: {
      description: "Focado em gerar clientes reais para o seu negócio com técnicas de conversão.",
      benefits: ["Mais leads e clientes", "Melhor posicionamento no Google", "Comunicação direta via WhatsApp"],
      included: ["Copywriting persuasivo incluso", "Formulário de captura de leads", "Integração com Google Analytics", "Botões de CTA estratégicos", "Entrega em até 10 dias úteis"],
      extras: ["Relatório de performance mensal", "Suporte prioritário"],
    } as PlanExpanded,
    whatsappMsg: "Olá! Quero saber mais sobre o plano Profissional.",
    highlighted: true,
  },
  {
    name: "Completo",
    focus: "Para quem quer um site mais completo",
    creation: "200",
    monthly: "80",
    icon: Layers,
    iconClass: "pricing__plan-icon--pro",
    features: [
      "Site com várias páginas",
      "Até 10 alterações por mês",
      "Design mais profissional",
      "Melhor experiência para o cliente",
    ],
    expanded: {
      description: "Um site completo e robusto para empresas que querem se destacar online.",
      benefits: ["Múltiplas páginas para cada serviço", "Visual profissional e moderno", "Experiência otimizada para o visitante"],
      included: ["Até 5 páginas personalizadas", "Animações e transições modernas", "Blog ou área de notícias (opcional)", "Galeria de fotos/portfólio", "Integração com redes sociais", "Entrega em até 15 dias úteis"],
    } as PlanExpanded,
    whatsappMsg: "Olá! Tenho interesse no plano Completo.",
    highlighted: false,
  },
  {
    name: "Premium",
    focus: "Para quem quer crescer de verdade e ter tudo",
    creation: "300",
    monthly: "120",
    icon: Crown,
    iconClass: "pricing__plan-icon--premium",
    badge: "👑 Plano Premium",
    features: [
      "Tudo do plano Profissional + Completo",
      "Alterações ilimitadas (uso justo)",
      "Atendimento prioritário",
      "Melhorias contínuas no site",
    ],
    expanded: {
      description: "O pacote definitivo para quem quer dominar o digital e ter suporte total.",
      benefits: ["Crescimento contínuo garantido", "Suporte VIP e prioritário", "Site sempre evoluindo"],
      included: ["Páginas ilimitadas", "Sistema de agendamento ou orçamento", "Painel administrativo simplificado", "Relatórios mensais de performance", "Entrega em até 20 dias úteis"],
      extras: ["Suporte prioritário via WhatsApp", "Consultoria de marketing digital básica"],
    } as PlanExpanded,
    whatsappMsg: "Olá! Quero o plano Premium.",
    highlighted: true,
  },
];

const getWhatsAppUrl = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const PricingSection = () => {
  const [openPlanIndex, setOpenPlanIndex] = useState<number | null>(null);
  const openPlan = openPlanIndex !== null ? plans[openPlanIndex] : null;

  useEffect(() => {
    if (openPlanIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenPlanIndex(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openPlanIndex]);

  return (
    <section id="planos" className="pricing">
      <div className="container">

        <div className="pricing__header">
          <span className="section-label">Planos</span>
          <h2 className="section-title">
            Escolha o plano <span className="gradient-text">ideal para você</span>
          </h2>
          <p className="section-description">
            Comece com o básico e evolua conforme seu negócio cresce. Clique em um plano para ver todos os detalhes.
          </p>
        </div>

        <div className="pricing__grid">
          {plans.map((plan, index) => {
            const IconComp = plan.icon;

            return (
              <div
                key={plan.name}
                role="button"
                tabIndex={0}
                onClick={() => setOpenPlanIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenPlanIndex(index);
                  }
                }}
                className={`pricing__card pricing__card--clickable animate-fade-in-up delay-${index + 1} ${
                  plan.highlighted ? "pricing__card--highlighted" : ""
                }`}
              >
                {plan.badge && (
                  <div className="pricing__badge">{plan.badge}</div>
                )}

                <div className={`pricing__plan-icon ${plan.iconClass}`}>
                  <IconComp size={28} />
                </div>

                <h3 className="pricing__plan-name">{plan.name}</h3>
                <p className="pricing__plan-focus">{plan.focus}</p>

                <div className="pricing__prices">
                  <div className="pricing__price-row">
                    <span className="pricing__price-label">Criação:</span>
                    <span className="pricing__price-value">R${plan.creation}</span>
                  </div>
                  <div className="pricing__price-row">
                    <span className="pricing__price-label">Mensal:</span>
                    <span className={`pricing__price-value pricing__price-value--main ${plan.highlighted ? "pricing__price-value--gradient" : ""}`}>
                      R${plan.monthly}
                    </span>
                    <span className="pricing__price-suffix">/mês</span>
                  </div>
                </div>

                <ul className="pricing__features">
                  {plan.features.map((feature) => (
                    <li key={feature} className="pricing__feature">
                      <Check size={16} className="pricing__feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <span className="pricing__card-hint">Clique para ver detalhes →</span>

                <a
                  href={getWhatsAppUrl(plan.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`pricing__cta ${plan.highlighted ? "glow-button" : "glow-button-outline"}`}
                >
                  <MessageCircle size={16} />
                  Começar agora
                  <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>

        <div className="pricing__disclaimer">
          <div className="pricing__disclaimer-card">
            <p className="pricing__disclaimer-text">
              <strong>⚠️ Sobre as alterações:</strong>{" "}
              Incluem melhorias contínuas no site. Novas funcionalidades podem ser
              adicionadas conforme necessidade.
            </p>
          </div>
        </div>

        <div className="pricing__custom">
          <div className="pricing__custom-card animate-fade-in-up">
            <div className="pricing__custom-content">
              <img src={avatar} alt="Speed Web Tecnologia" className="pricing__custom-avatar" />
              <h3 className="pricing__custom-title">
                Precisa de algo <span className="gradient-text">personalizado</span>?
              </h3>
              <p className="pricing__custom-desc">
                Criamos um site sob medida para o seu negócio. Fale comigo e receba um orçamento rápido.
              </p>
              <a
                href={getWhatsAppUrl("Olá! Quero um orçamento personalizado para meu site.")}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button"
              >
                <MessageCircle size={20} />
                Falar no WhatsApp
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* ===== MODAL ===== */}
      {openPlan && (
        <div
          className="pricing__overlay"
          onClick={() => setOpenPlanIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Detalhes do plano ${openPlan.name}`}
        >
          <div
            className={`pricing__dialog ${openPlan.highlighted ? "pricing__dialog--highlighted" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="pricing__dialog-close"
              onClick={() => setOpenPlanIndex(null)}
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            <div className="pricing__dialog-header">
              <div className={`pricing__plan-icon ${openPlan.iconClass}`}>
                <openPlan.icon size={28} />
              </div>
              <h3 className="pricing__dialog-title">{openPlan.name}</h3>
              <p className="pricing__dialog-focus">{openPlan.focus}</p>

              <div className="pricing__dialog-prices">
                <div className="pricing__price-row">
                  <span className="pricing__price-label">Criação:</span>
                  <span className="pricing__price-value">R${openPlan.creation}</span>
                </div>
                <div className="pricing__price-row">
                  <span className="pricing__price-label">Mensal:</span>
                  <span className={`pricing__price-value pricing__price-value--main ${openPlan.highlighted ? "pricing__price-value--gradient" : ""}`}>
                    R${openPlan.monthly}
                  </span>
                  <span className="pricing__price-suffix">/mês</span>
                </div>
              </div>
            </div>

            <div className="pricing__dialog-body">
              <p className="pricing__modal-desc">{openPlan.expanded.description}</p>

              <div className="pricing__modal-section">
                <h4 className="pricing__modal-section-title">Benefícios</h4>
                <ul className="pricing__modal-list">
                  {openPlan.expanded.benefits.map((b, i) => (
                    <li key={i} className="pricing__modal-list-item">
                      <CheckCircle size={15} className="pricing__modal-check" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing__modal-section">
                <h4 className="pricing__modal-section-title">O que está incluído</h4>
                <ul className="pricing__modal-list">
                  {openPlan.expanded.included.map((f, i) => (
                    <li key={i} className="pricing__modal-list-item">
                      <CheckCircle size={15} className="pricing__modal-check" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {openPlan.expanded.extras && (
                <div className="pricing__modal-section">
                  <h4 className="pricing__modal-section-title">Diferenciais</h4>
                  <ul className="pricing__modal-list">
                    {openPlan.expanded.extras.map((e, i) => (
                      <li key={i} className="pricing__modal-list-item">
                        <CheckCircle size={15} className="pricing__modal-check" />
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <a
              href={getWhatsAppUrl(openPlan.whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className={`pricing__cta ${openPlan.highlighted ? "glow-button" : "glow-button-outline"}`}
            >
              <MessageCircle size={16} />
              Começar agora
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default PricingSection;
