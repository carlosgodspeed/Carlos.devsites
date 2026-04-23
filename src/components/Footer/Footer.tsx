import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react";
import avatar from "@/assets/carlosdev-logo.png";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Por que ter", href: "#porque" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ];

  const services = [
    { label: "Sites Institucionais", href: "#servicos" },
    { label: "Landing Pages", href: "#servicos" },
    { label: "Sistemas Web", href: "#servicos" },
    { label: "E-commerce", href: "#servicos" },
    { label: "Manutenção", href: "#servicos" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/carlosgodspeed", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/carlos-henrique-4805b31b1/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/carlos.devsites/", label: "Instagram" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <a href="#inicio" className="footer__brand-link">
              <img src={avatar} alt="Speed Web Tecnologia" className="footer__avatar" />
            </a>
          </div>

          <div>
            <h4 className="footer__heading">Links Rápidos</h4>
            <ul className="footer__links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__heading">Serviços</h4>
            <ul className="footer__links">
              {services.map((service) => (
                <li key={service.label}>
                  <a href={service.href} className="footer__link">{service.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__heading">Contato</h4>
            <ul className="footer__contact-info">
              <li>speedtecnologiaweb@gmail.com</li>
              <li>+55 (13) 98112-0655</li>
            </ul>
            <div className="footer__location-badge">
              🌐 Atendimento online em todo o Brasil
            </div>
            <div className="footer__socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Direitos Reservados a{" "} 
            <span className="footer__copyright-name">Carlos Dev.</span>
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="footer__back-top"
            aria-label="Voltar ao topo"
          >
            Voltar ao topo
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
