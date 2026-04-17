import React, { useState } from 'react';
import bannerImg from './assets/banner.png';

const ProjectCard = ({ title, icon, point, tech, description, link, onClick, delay }) => (
  <div className={`card animate-fade-in ${delay}`}>
    <div className="card-header">
      <div className="card-icon">{icon}</div>
    </div>
    <div className="card-body">
      <div className="card-title">{title}</div>
      <div className="card-point">
        <span>📊</span> {point} — {tech}
      </div>
      <p className="card-description">{description}</p>
      {link !== "#" ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-btn">
          Abrir {title.split(' ')[0]} ({tech})
        </a>
      ) : (
        <button className="card-btn" onClick={onClick}>
          Ver Borrador AI
        </button>
      )}
    </div>
  </div>
);

const ToggleItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`toggle-list ${isOpen ? 'open' : ''}`}>
      <div className="toggle-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="toggle-icon">▶</span>
        <span className="toggle-title">{title}</span>
      </div>
      <div className="toggle-content">{children}</div>
    </div>
  );
};

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        </div>
      </div>
    </div>
  );
};

function App() {
  const [selectedContent, setSelectedContent] = useState(null);

  const reflectionDraft = `**REFLEXIÓN ARGUMENTADA: Pertinencia de los Modelos de Liderazgo en Contextos de Alta Presión**

**Introducción**
En contextos de alta presión, caracterizados por la incertidumbre y la crisis, el liderazgo se convierte en el pilar fundamental para guiar a los grupos hacia metas compartidas.

**1. Enfoque de Rasgos**
La resiliencia y la integridad son primordiales. Un líder debe poseer empatía para mantener la armonía emocional del equipo en crisis.

**2. Enfoque de Comportamiento**
La toma de decisiones ágil y la comunicación efectiva son determinantes. Evaluar riesgos y orientar con claridad es vital.

**3. Enfoque de Contingencia**
No hay un estilo único. En crisis extremas, el liderazgo autocrático/directivo asegura rapidez, mientras que el liderazgo situacional permite adaptarse a la incertidumbre.

**Conclusión**
El liderazgo pertinente combina la resiliencia innata con una toma de decisiones informada y una profunda capacidad de adaptación al entorno cambiante.`;

  return (
    <div className="app-container">
      <header className="banner">
        <img src={bannerImg} alt="Leadership Banner" />
        <div className="banner-overlay">
          <h1 className="banner-title">Portafolio de Liderazgo: Actividad N° 02</h1>
          <p className="banner-subtitle">Grupo #. Apellidos y Nombres, Asignatura</p>
        </div>
      </header>

      <main className="main-content">
        <div className="page-header animate-fade-in">
          <h2 className="page-title">
            <span>💡</span> Liderazgo: Modelos y Estilos
          </h2>
          <div className="welcome-box">
            <p className="welcome-text">
              ¡Conexión NotebookLM establecida! He analizado tus fuentes y generado borradores para las tareas pendientes. 
              Haz clic en "Ver Borrador AI" en las tarjetas de abajo.
            </p>
          </div>
        </div>

        <section>
          <div className="gallery-nav animate-fade-in delay-1">
            <span className="active">📦 Galería Directa</span>
            <span>🤖 Asistente NotebookLM</span>
          </div>

          <div className="grid">
            <ProjectCard 
              title="Mapas Conceptuales y Mentales"
              icon="🕸️"
              point="Points 1 & 5"
              tech="Prezi"
              description="Enfoques de Liderazgo & Actitudes del Líder."
              link="https://prezi.com/view/fn2Bnwn7rPpuRhIoBb2Y/?referral_token=IOHVN7lnB3FN"
              delay="delay-1"
            />
            <ProjectCard 
              title="Cuadro Comparativo de Estilos"
              icon="📋"
              point="Point 2"
              tech="Genially"
              description="Tarea, Relaciones y Mixtos con ejemplos."
              link="https://view.genially.com/69e17c774e4104b2992bd8b4"
              delay="delay-2"
            />
            <ProjectCard 
              title="Estudio de Caso Práctico"
              icon="💼"
              point="Point 3"
              tech="Prezi"
              description="Caso Ecuatoriano: Liderazgo Situacional en una Institución específica."
              link="https://prezi.com/view/09nv8XX7dQJYAZqWoyPt/?referral_token=GzHVnelnB3FN"
              delay="delay-3"
            />
            <ProjectCard 
              title="Reflexión Argumentada"
              icon="🧠"
              point="Point 4"
              tech="NotebookLM"
              description="Reflexión sobre modelos en alta presión generada por AI."
              link="#"
              onClick={() => setSelectedContent({ title: "Borrador AI: Reflexión Argumentada", content: reflectionDraft })}
              delay="delay-4"
            />
          </div>
        </section>

        <section className="bibliography animate-fade-in delay-4">
          <h3 className="section-title">💡 BIBLIOGRAFÍA ACADÉMICA</h3>
          <ToggleItem title="Fuentes Primarias (NotebookLM)">
            Lussier, R. N., & Achua, C. F. (2016). Liderazgo: Teoría, aplicación y desarrollo de habilidades.
          </ToggleItem>
        </section>
      </main>

      <Modal 
        isOpen={!!selectedContent} 
        onClose={() => setSelectedContent(null)}
        title={selectedContent?.title}
        content={selectedContent?.content || ""}
      />
    </div>
  );
}

export default App;
