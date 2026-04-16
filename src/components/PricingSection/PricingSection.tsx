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
    focus: "Para quem quer começar na internet",
    creation: "80",
    monthly: "30",
    icon: Zap,
    iconClass: "pricing__plan-icon--start",
    features: [
      "Landing page profissional (1 página)",
      "Otimizado para celular",
      "Integração com WhatsApp",
      "Hospedagem inclusa",
    ],
    expanded: {
      description: "Uma landing page simples para apresentar seu serviço e facilitar o contato com clientes.",
      benefits: [
        "Presença online básica",
        "Canal direto de contato",
        "Mais credibilidade inicial",
      ],
      included: [
        "Design responsivo (celular e desktop)",
        "Certificado SSL incluso",
        "Domínio personalizado",
        "Entrega em até 7 dias úteis",
      ],
    } as PlanExpanded,
    whatsappMsg: "Olá! Quero começar com o plano Básico.",
    highlighted: false,
  },
  {
    name: "Profissional",
    focus: "Um site para apresentar melhor seu negócio",
    creation: "150",
    monthly: "50",
    icon: TrendingUp,
    iconClass: "pricing__plan-icon--negocio",
    badge: "🔥 Mais escolhido",
    features: [
      "Site com até 3 páginas",
      "Layout profissional",
      "Integração com WhatsApp",
      "SEO básico (Google)",
    ],
    expanded: {
      description: "Um site simples e organizado para apresentar melhor seus serviços e gerar mais confiança.",
      benefits: [
        "Melhor apresentação do negócio",
        "Mais confiança para o cliente",
        "Informações bem organizadas",
      ],
      included: [
        "Até 3 páginas (ex: início, serviços, contato)",
        "Design responsivo",
        "Formulário de contato",
        "Otimizado para celular",
        "Entrega em até 10 dias úteis",
      ],
    } as PlanExpanded,
    whatsappMsg: "Olá! Quero um site com o plano Profissional.",
    highlighted: true,
  },
  {
    name: "Completo",
    focus: "Um site mais completo e estruturado",
    creation: "220",
    monthly: "80",
    icon: Layers,
    iconClass: "pricing__plan-icon--pro",
    features: [
      "Site com até 5 páginas",
      "Design mais trabalhado",
      "Melhor experiência do usuário",
      "Mais recursos e seções",
    ],
    expanded: {
      description: "Um site mais completo para empresas que querem apresentar melhor seus serviços e ter mais presença online.",
      benefits: [
        "Mais autoridade no mercado",
        "Melhor experiência para o visitante",
        "Mais possibilidades de conteúdo",
      ],
      included: [
        "Até 5 páginas personalizadas",
        "Galeria de imagens ou portfólio",
        "Integração com redes sociais",
        "SEO básico aplicado",
        "Animações leves",
        "Entrega em até 15 dias úteis",
      ],
    } as PlanExpanded,
    whatsappMsg: "Olá! Quero um site mais completo com o plano Completo.",
    highlighted: false,
  },
  {
    name: "Premium",
    focus: "Tudo que seu negócio precisa no digital",
    creation: "350",
    monthly: "120",
    icon: Crown,
    iconClass: "pricing__plan-icon--premium",
    badge: "👑 Premium",
    features: [
      "Site completo + recursos avançados",
      "Alterações contínuas (uso justo)",
      "Suporte prioritário",
      "Melhorias e ajustes mensais",
    ],
    expanded: {
      description: "Plano mais completo, com mais recursos, suporte contínuo e maior flexibilidade para o seu site.",
      benefits: [
        "Mais controle e possibilidades",
        "Site sempre atualizado",
        "Suporte contínuo",
      ],
      included: [
        "Páginas ilimitadas",
        "Sistema de agendamento ou orçamento",
        "Painel administrativo simples",
        "SEO otimizado",
        "Relatórios mensais",
        "Entrega em até 20 dias úteis",
      ],
      extras: [
        "Suporte prioritário via WhatsApp",
        "Ajustes estratégicos quando necessário",
      ],
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
                Criamos sob medida para o seu negócio. Fale comigo e receba um orçamento rápido.
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
