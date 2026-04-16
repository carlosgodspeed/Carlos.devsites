import { ExternalLink, Github } from "lucide-react";
import projectFlynet from "@/assets/project-flynet.jpeg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Museu Nacional",
      category: "Landing Page",
      description: "Landing Page inspirada em museus reais, o projeto explora design moderno e navegação intuitiva, simulando uma experiência digital completa.",
      image: projectFlynet,
      link: "https://github.com/carlosgodspeed/projeto-museu",
      github: "https://github.com/carlosgodspeed/projeto-museu",
    },
    {
      title: "Suprema Jurídica",
      category: "Site Institucional",
      description: "Website profissional para escritório de advocacia com foco em conversão e credibilidade digital.",
      image: projectEcommerce,
      link: "https://lading-page-advocacia.vercel.app/",
      github: "https://github.com/carlosgodspeed/Lading-page-Advocacia",
    },
    {
      title: "Gestão de Estoque",
      category: "Sistema Web",
      description: "Sistema completo de gestão de estoque com controle de produtos, movimentações e relatórios em tempo real.",
      image: projectDashboard,
      link: "https://nuclestock.vercel.app/",
      github: "https://github.com/carlosgodspeed/NucleStock",
    },
  ];

  return (
    <section id="projetos" className="projects">
      <div className="projects__bg" />
      <div className="container">
        <div className="projects__header">
          <span className="section-label">Portfólio</span>
          <h2 className="section-title">
            Projetos que <span className="gradient-text">entregamos</span>
          </h2>
          <p className="section-description">
            Conheça alguns dos projetos que desenvolvemos.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <div key={project.title} className={`projects__card animate-fade-in-up delay-${index + 1}`}>
              <div className="projects__image-wrapper">
                <img src={project.image} alt={project.title} className="projects__image" />
                <div className="projects__image-overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="projects__overlay-btn projects__overlay-btn--primary">
                    <ExternalLink size={14} /> Ver Site
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__overlay-btn projects__overlay-btn--outline">
                    <Github size={14} /> Código
                  </a>
                </div>
              </div>
              <div className="projects__info">
                <span className="projects__category">{project.category}</span>
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__desc">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
