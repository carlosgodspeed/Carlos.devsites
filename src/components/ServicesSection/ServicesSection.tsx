import { useState } from "react";
import { Globe, Layout, Code, Rocket, Settings, Layers } from "lucide-react";
import ServiceDetailModal from "../ServiceDetailModal/ServiceDetailModal";
import "./ServicesSection.css";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    { icon: Globe, title: "Sites Institucionais", description: "Sites profissionais e responsivos que transmitem credibilidade e fortalecem a presença digital da sua empresa." },
    { icon: Layout, title: "Landing Pages", description: "Páginas de alta conversão focadas em captura de leads e vendas, com design persuasivo e otimizado." },
    { icon: Layers, title: "Sistemas Web", description: "Aplicações web completas para gestão de processos, CRM, ERPs e soluções sob medida para seu negócio." },
    { icon: Code, title: "Aplicações Front-end", description: "Interfaces modernas e interativas utilizando as tecnologias mais avançadas do mercado." },
    { icon: Rocket, title: "E-commerce", description: "Lojas virtuais completas com gestão de produtos, pagamentos integrados e experiência de compra otimizada." },
    { icon: Settings, title: "Manutenção e Otimização", description: "Suporte contínuo, atualizações de segurança e melhorias de performance para manter seu projeto sempre atualizado." },
  ];

  return (
    <section id="servicos" className="services">
      <div className="container">
        <div className="services__header">
          <span className="section-label">Nossos Serviços</span>
          <h2 className="section-title">
            Soluções completas para sua{" "}
            <span className="gradient-text">presença digital</span>
          </h2>
          <p className="section-description">
            Do conceito à implementação, oferecemos um portfólio completo de 
            serviços para atender todas as necessidades do seu projeto.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <button
              key={service.title}
              onClick={() => setSelectedService(service.title)}
              className={`services__card animate-fade-in-up delay-${index + 1}`}
            >
              <div className="services__card-icon">
                <service.icon size={28} />
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
              <span className="services__card-link">Saiba mais →</span>
            </button>
          ))}
        </div>
      </div>

      <ServiceDetailModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        serviceTitle={selectedService || ""}
      />
    </section>
  );
};

export default ServicesSection;
