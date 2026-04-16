import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import "./ServiceDetailModal.css";

const WHATSAPP_NUMBER = "5513981120655";

interface ServiceDetail {
  title: string;
  description: string;
  benefits: string[];
  features: string[];
  technologies?: string[];
  callToAction: string;
  whatsappMsg: string;
}

const serviceDetails: Record<string, ServiceDetail> = {
  "Sites Institucionais": {
    title: "Sites Institucionais",
    description: "Um site institucional é a vitrine digital da sua empresa. Ele apresenta quem você é, o que faz e como pode ajudar seus clientes.",
    benefits: ["Credibilidade e profissionalismo para sua marca", "Presença digital para seus clientes", "Autoridade no seu segmento de mercado", "Canal direto de comunicação com o público", "Posicionamento nos mecanismos de busca (Google)"],
    features: ["Página inicial com apresentação impactante", "Seção Sobre a Empresa", "Página de Serviços ou Produtos detalhados", "Galeria de Projetos ou Portfólio", "Formulário de Contato integrado", "Integração com redes sociais", "Blog ou área de notícias (opcional)"],
    technologies: ["Design responsivo (mobile-first)", "Otimização SEO avançada", "Hospedagem em nuvem de alta disponibilidade", "Certificado SSL de segurança"],
    callToAction: "Solicitar Orçamento para Site Institucional",
    whatsappMsg: "Olá! Tenho interesse em um Site Institucional. Gostaria de saber mais!",
  },
  "Landing Pages": {
    title: "Landing Pages",
    description: "Landing pages são páginas focadas em conversão. Diferente de um site tradicional, elas têm um único objetivo: transformar visitantes em leads ou clientes.",
    benefits: ["Alta taxa de conversão de visitantes em leads", "Ideal para campanhas de marketing e anúncios", "Comunicação focada e sem distrações", "Métricas claras de performance", "Retorno sobre investimento mensurável"],
    features: ["Headline persuasiva e impactante", "Copywriting estratégico focado em conversão", "Formulários otimizados para captura de leads", "Integração com WhatsApp Business", "Botões de call-to-action estratégicos", "Prova social (depoimentos, logos de clientes)", "Contagem regressiva para ofertas"],
    technologies: ["Design responsivo e carregamento rápido", "Integração com Google Analytics", "Integração com CRMs e ferramentas de e-mail", "Hospedagem otimizada para campanhas"],
    callToAction: "Solicitar Orçamento para Landing Page",
    whatsappMsg: "Olá! Tenho interesse em uma Landing Page. Gostaria de saber mais!",
  },
  "Sistemas Web": {
    title: "Sistemas Web",
    description: "Sistemas web são aplicações desenvolvidas sob medida para automatizar e otimizar os processos do seu negócio.",
    benefits: ["Automação de processos repetitivos", "Centralização de informações em um único lugar", "Acesso de qualquer lugar com internet", "Redução de erros humanos", "Escalabilidade conforme o crescimento da empresa"],
    features: ["Dashboards e painéis administrativos personalizados", "Gestão de usuários com níveis de permissão", "Relatórios e exportação de dados", "Fluxos de trabalho automatizados", "Integrações com outros sistemas via API", "Notificações e alertas em tempo real", "Histórico e auditoria de ações"],
    technologies: ["Arquitetura moderna e escalável", "Banco de dados seguro e otimizado", "APIs RESTful para integrações", "Autenticação segura (2FA disponível)", "Backup automático de dados", "Monitoramento de performance"],
    callToAction: "Solicitar Orçamento para Sistema Web",
    whatsappMsg: "Olá! Tenho interesse em um Sistema Web. Gostaria de saber mais!",
  },
  "Aplicações Front-end": {
    title: "Aplicações Front-end",
    description: "Aplicações front-end são interfaces modernas e interativas que proporcionam experiências de usuário excepcionais.",
    benefits: ["Experiência de usuário superior", "Interfaces rápidas e responsivas", "Design moderno e interativo", "Compatibilidade entre todos os dispositivos", "Manutenção simplificada com código organizado"],
    features: ["Componentização para reusabilidade", "Animações e transições fluidas", "Estado global gerenciado eficientemente", "Temas customizáveis (dark/light mode)", "Acessibilidade (WCAG compliance)", "Performance otimizada (lazy loading, code splitting)", "PWA - Progressive Web App (opcional)"],
    technologies: ["React.js / Vue.js / Angular", "TypeScript para código mais seguro", "Tailwind CSS / Styled Components", "State management (Redux, Zustand, Pinia)", "Testes automatizados", "CI/CD para deploy contínuo"],
    callToAction: "Solicitar Orçamento para Aplicação Front-end",
    whatsappMsg: "Olá! Tenho interesse em uma Aplicação Front-end. Gostaria de saber mais!",
  },
  "E-commerce": {
    title: "E-commerce",
    description: "Lojas virtuais completas para você vender online. Desenvolvemos e-commerces que oferecem uma experiência de compra otimizada.",
    benefits: ["Vendas 24 horas por dia, 7 dias por semana", "Alcance clientes em todo o Brasil (ou mundo)", "Gestão centralizada do seu negócio", "Análise detalhada de vendas e comportamento", "Escalabilidade para crescer junto com você"],
    features: ["Catálogo de produtos com filtros avançados", "Carrinho de compras intuitivo", "Checkout otimizado para conversão", "Múltiplas formas de pagamento", "Cálculo automático de frete", "Gestão de estoque em tempo real", "Cupons de desconto e promoções", "Área do cliente (pedidos, favoritos)"],
    technologies: ["Plataformas: WooCommerce, Shopify ou custom", "Gateways: Stripe, PagSeguro, Mercado Pago", "Integração com Correios e transportadoras", "ERP e sistemas de gestão", "SSL e conformidade PCI-DSS", "CDN para carregamento rápido de imagens"],
    callToAction: "Solicitar Orçamento para E-commerce",
    whatsappMsg: "Olá! Tenho interesse em um E-commerce. Gostaria de saber mais!",
  },
  "Manutenção e Otimização": {
    title: "Manutenção e Otimização",
    description: "Seu site ou sistema precisa de cuidados contínuos para funcionar perfeitamente.",
    benefits: ["Site sempre atualizado e seguro", "Correção rápida de problemas", "Performance otimizada continuamente", "Suporte técnico quando você precisar", "Evolução constante do seu projeto"],
    features: ["Atualizações de segurança regulares", "Backup automático de dados", "Monitoramento de uptime 24/7", "Correção de bugs e erros", "Otimização de velocidade de carregamento", "Relatórios mensais de performance", "Suporte via chat, e-mail ou telefone", "Implementação de novas funcionalidades"],
    technologies: ["Ferramentas de monitoramento avançado", "CDN para distribuição de conteúdo", "Otimização de banco de dados", "Compressão de imagens e assets", "Cache inteligente", "Análise de Core Web Vitals"],
    callToAction: "Solicitar Orçamento para Manutenção",
    whatsappMsg: "Olá! Tenho interesse em Manutenção e Otimização. Gostaria de saber mais!",
  },
};

const getWhatsAppUrl = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
}

const ServiceDetailModal = ({ isOpen, onClose, serviceTitle }: ServiceDetailModalProps) => {
  const service = serviceDetails[serviceTitle];
  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="modal__content">
        <DialogHeader className="modal__header">
          <DialogTitle className="modal__title gradient-text">{service.title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="modal__scroll">
          <div className="modal__body">
            <p className="modal__description">{service.description}</p>

            <div className="modal__section">
              <h4 className="modal__section-title">Benefícios</h4>
              <ul className="modal__list">
                {service.benefits.map((b, i) => (
                  <li key={i} className="modal__list-item">
                    <CheckCircle size={18} className="modal__check-icon" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal__section">
              <h4 className="modal__section-title">O que está incluído</h4>
              <ul className="modal__list">
                {service.features.map((f, i) => (
                  <li key={i} className="modal__list-item">
                    <CheckCircle size={18} className="modal__check-icon" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {service.technologies && (
              <div className="modal__section">
                <h4 className="modal__section-title">Tecnologias e Diferenciais</h4>
                <ul className="modal__list">
                  {service.technologies.map((t, i) => (
                    <li key={i} className="modal__list-item">
                      <CheckCircle size={18} className="modal__check-icon" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <a
              href={getWhatsAppUrl(service.whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button modal__cta"
            >
              <MessageCircle size={18} />
              {service.callToAction}
              <ArrowRight size={16} />
            </a>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailModal;
