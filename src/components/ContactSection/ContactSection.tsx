import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import "./ContactSection.css";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", projectType: "", description: "",
  });

  const projectTypes = [
    { value: "institutional", label: "Site Institucional" },
    { value: "landing", label: "Landing Page" },
    { value: "portfolio", label: "Portfólio" },
    { value: "webapp", label: "Sistema Web" },
    { value: "frontend", label: "Aplicação Front-end" },
    { value: "other", label: "Outro" },
  ];

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.projectType || !formData.description) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/carlosminibics@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name, email: formData.email,
          company: formData.company || "Não informado",
          projectType: formData.projectType, description: formData.description,
          _subject: "Novo orçamento - Speed Tecnologia", _template: "table", _captcha: "false",
        }),
      });
      if (response.ok) {
        toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        setFormData({ name: "", email: "", company: "", projectType: "", description: "" });
      } else {
        toast.error("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch {
      toast.error("Erro ao enviar mensagem. Verifique sua conexão.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="contact">
      <div className="contact__bg" />
      <div className="container">
        <div className="contact__header">
          <span className="section-label">Contato</span>
          <h2 className="section-title">
            Seu projeto <span className="gradient-text">começa aqui</span>
          </h2>
          <p className="section-description">
            Conte-nos sobre seu <span className="gradient-text">projeto</span> e receba um orçamento personalizado.
            Nossa equipe está pronta para transformar sua ideia em realidade.
          </p>
        </div>

        <div className="contact__form-wrapper">
          <form onSubmit={handleSubmit} className="contact__form animate-fade-in-up">
            <div className="contact__form-row">
              <div className="contact__field">
                <label className="contact__label">
                  Nome <span className="contact__label-required">*</span>
                </label>
                <input
                  className="contact__input"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                />
              </div>
              <div className="contact__field">
                <label className="contact__label">
                  E-mail <span className="contact__label-required">*</span>
                </label>
                <input
                  className="contact__input"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="contact__form-row">
              <div className="contact__field">
                <label className="contact__label">Empresa (opcional)</label>
                <input
                  className="contact__input"
                  placeholder="Nome da sua empresa"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                />
              </div>
              <div className="contact__field">
                <label className="contact__label">
                  Tipo de Projeto <span className="contact__label-required">*</span>
                </label>
                <select
                  className="contact__select"
                  value={formData.projectType}
                  onChange={(e) => handleChange("projectType", e.target.value)}
                  required
                >
                  <option value="">Selecione uma opção</option>
                  {projectTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="contact__field">
              <label className="contact__label">
                Descrição do Projeto <span className="contact__label-required">*</span>
              </label>
              <textarea
                className="contact__textarea"
                placeholder="Conte-nos sobre sua ideia, funcionalidades desejadas, referências visuais, prazo estimado..."
                rows={5}
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className={`glow-button contact__submit ${isSubmitting ? "contact__submit--loading" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="contact__spinner" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Enviar Mensagem
                </>
              )}
            </button>

            <p className="contact__footer-text">
              Responderemos em até 24 horas.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
