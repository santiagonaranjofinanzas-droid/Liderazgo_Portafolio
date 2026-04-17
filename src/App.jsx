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
          Abrir {title.split(' ')[0]}
        </a>
      ) : (
        <button className="card-btn" onClick={onClick}>
          Ver Contenido
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

  const groupMembers = [
    "José Ignacio Chico Coronel",
    "Jeniffer Katherin Chorlango Oña",
    "Daniela Alejandra Espín Chávez",
    "Santiago Alejandro Naranjo Reyes",
    "Leidy Marilyn Velasco Vergara"
  ];

  return (
    <div className="app-container">
      {/* Banner Section */}
      <header className="banner">
        <img src={bannerImg} alt="Leadership Banner" />
        <div className="banner-overlay">
          <div className="header-badge">Grupo 5 • NRC: 29950</div>
          <h1 className="banner-title">Portafolio de Liderazgo</h1>
          <div className="member-list">
            {groupMembers.join(' | ')}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="page-header animate-fade-in">
          <h2 className="page-title">
            <span>💡</span> Liderazgo: Modelos y Estilos
          </h2>
          <div className="welcome-box">
            <p className="welcome-text">
              Bienvenida, Docente. Este portafolio centraliza el desarrollo de la Actividad N° 02, 
              donde exploramos los diversos enfoques de liderazgo aplicados a contextos reales.
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <section>
          <div className="gallery-nav animate-fade-in delay-1">
            <span className="active">📦 Galería de Actividades</span>
          </div>

          <div className="grid">
            <ProjectCard 
              title="Mapas Conceptuales y Mentales"
              icon="🕸️"
              point="Actividad 1 & 5"
              tech="Prezi"
              description="Análisis visual de los enfoques y actitudes del liderazgo contemporáneo."
              link="https://prezi.com/view/fn2Bnwn7rPpuRhIoBb2Y/?referral_token=IOHVN7lnB3FN"
              delay="delay-1"
            />
            <ProjectCard 
              title="Cuadro Comparativo de Estilos"
              icon="📋"
              point="Actividad 2"
              tech="Genially"
              description="Comparativa de estilos transaccionales, transformacionales y situacionales."
              link="https://view.genially.com/69e17c774e4104b2992bd8b4"
              delay="delay-2"
            />
            <ProjectCard 
              title="Estudio de Caso Práctico"
              icon="💼"
              point="Actividad 3"
              tech="Prezi"
              description="Aplicación del liderazgo situacional en una institución del sector público."
              link="https://prezi.com/view/09nv8XX7dQJYAZqWoyPt/?referral_token=GzHVnelnB3FN"
              delay="delay-3"
            />
            <ProjectCard 
              title="Reflexión Argumentada"
              icon="🧠"
              point="Actividad 4"
              tech="Ensayo"
              description="Análisis crítico sobre la pertinencia de modelos en contextos de alta presión."
              link="#"
              onClick={() => setSelectedContent({ title: "Ensayo: Reflexión Argumentada", content: reflectionDraft })}
              delay="delay-4"
            />
          </div>
        </section>

        {/* Bibliography Section */}
        <section className="bibliography animate-fade-in delay-4">
          <h3 className="section-title">📚 BIBLIOGRAFÍA ACADÉMICA</h3>
          <ToggleItem title="Bibliografía Básica (Normas APA)">
            Lussier, R. N., & Achua, C. F. (2016). Liderazgo: Teoría, aplicación y desarrollo de habilidades. 6ta Edición. Cengage Learning.
          </ToggleItem>
          <ToggleItem title="Recursos Complementarios">
            Material de estudio proporcionado por la Universidad, casos de gestión y modelos de contingencia.
          </ToggleItem>
        </section>
      </main>

      <footer className="footer animate-fade-in delay-4">
        <p>© 2026 Universidad - Departamento de Ciencias Humanas y Sociales</p>
      </footer>

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
