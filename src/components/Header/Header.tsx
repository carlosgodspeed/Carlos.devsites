import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Instagram } from "lucide-react";
import avatar from "@/assets/carlosdev-logo.png";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Por que ter", href: "#porque" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/carlosgodspeed", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/carlos-henrique-4805b31b1/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/carlos.devsites/", label: "Instagram" },
  ];

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="container">
        <div className="header__inner">
          <a href="#inicio" className="header__logo">
            <img src={avatar} alt="Speed Web Tecnologia" className="header__avatar" />
          </a>

          <nav className="header__nav">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="header__nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <div className="header__socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header__social-link"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <a href="#contato" className="glow-button">Fale Conosco</a>
          </div>

          <button
            className="header__mobile-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`header__mobile-menu ${isMobileMenuOpen ? "header__mobile-menu--open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="header__mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="header__mobile-socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="header__social-link"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          <div className="header__mobile-cta">
            <a href="#contato" className="glow-button" onClick={() => setIsMobileMenuOpen(false)}>
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
