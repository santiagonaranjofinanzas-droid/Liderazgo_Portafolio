import React, { useState } from 'react';
import bannerImg from './assets/banner.png';
import enfoquesImg from './assets/enfoques.png';
import estilosImg from './assets/estilos.png';
import casoImg from './assets/caso.png';
import reflexionImg from './assets/reflexion.png';
import actitudesImg from './assets/actitudes.png';
import ecuadorImg from './assets/ecuador.png';

const ProjectCard = ({ title, img, point, tech, description, link, onClick, delay }) => (
  <div className={`card animate-fade-in ${delay}`}>
    <div className="card-image-container">
      <img src={img} alt={title} className="card-image" />
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
              presentando una visión integral de los modelos de gestión y estilos de liderazgo actuales.
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
              title="Enfoques de liderazgo"
              img={enfoquesImg}
              point="Mapa conceptual"
              tech="Prezi"
              description="Análisis visual de los marcos teóricos: Rasgos, Comportamiento y Contingencia."
              link="https://prezi.com/view/fn2Bnwn7rPpuRhIoBb2Y/?referral_token=IOHVN7lnB3FN"
              delay="delay-1"
            />
            <ProjectCard 
              title="Estilos de liderazgo"
              img={estilosImg}
              point="Cuadro comparativo"
              tech="Genially"
              description="Comparativa detallada de estilos transaccionales, transformacionales y situacionales."
              link="https://view.genially.com/69e17c774e4104b2992bd8b4"
              delay="delay-2"
            />
            <ProjectCard 
              title="Estudio de caso"
              img={casoImg}
              point="Análisis Práctico"
              tech="Prezi"
              description="Caso institucional aplicado al contexto ecuatoriano y liderazgo situacional."
              link="https://prezi.com/view/09nv8XX7dQJYAZqWoyPt/?referral_token=GzHVnelnB3FN"
              delay="delay-3"
            />
            <ProjectCard 
              title="Reflexión Argumentada"
              img={ecuadorImg}
              point="Liderazgo en Ecuador"
              tech="Microsoft Sway"
              description="Análisis sobre la pertinencia de modelos de liderazgo en contextos de alta presión y su aplicación en el entorno ecuatoriano."
              link="https://sway.cloud.microsoft/zKKRrraGpPdPUFTT?ref=Link"
              delay="delay-4"
            />
            <ProjectCard 
              title="Actitudes de líder y seguidores"
              img={actitudesImg}
              point="Mapa mental"
              tech="MindMeister"
              description="Exploración de la dinámica interactiva entre líderes y sus equipos de trabajo."
              link="https://mm.tt/map/3984713463?t=LJl06llNe5"
              delay="delay-5"
            />
          </div>
        </section>

        {/* Bibliography Section */}
        <section className="bibliography animate-fade-in delay-4">
          <h3 className="section-title">📚 BIBLIOGRAFÍA ACADÉMICA</h3>
          <div className="bib-grid">
            <ul className="bib-list">
              <li>Ekosnegocios. (2022, 30 de marzo). Las 25 mujeres en el Top 100 Líderes empresariales de Ecuador. Ekosnegocios.</li>
              <li>El Universo. (2026, 12 de febrero). Isabel Noboa: 'Un líder no solo guía: habilita, inspira y cuida'. El Universo.</li>
              <li>Nobis Holding. (2023, 25 de octubre). Isabel Noboa Pontón, la empresaria que conjuga templanza y amor por los negocios. Nobis Holding.</li>
              <li>Nobis Holding. (2023, 25 de octubre). Isabel Noboa, la empresaria ecuatoriana referente en el Ranking de las 500 personas más influyentes de América Latina. Nobis Holding.</li>
              <li>Trejo, J. (2026, 21 de marzo). Mapa conceptual de los estilos y características de liderazgo [Presentación]. Prezi.</li>
              <li>Naranjo Reyes, S. A. (2026, 19 de abril). Estilos de Liderazgo en el Contexto Ecuatoriano [Presentación]. Microsoft Sway.</li>
              <li>Naranjo Reyes, S. A. (2026, 19 de abril). Actitudes del líder y seguidores [Mapa mental]. MindMeister.</li>
              <li>Velasco Vergara, L. M. (2026, 17 de abril). Estilos de liderazgo [Presentación interactiva]. Genially.</li>
              <li>Lussier, R. N., & Achua, C. F. (2016). Liderazgo: Teoría, aplicación y desarrollo de habilidades. 6ta Edición. Cengage Learning.</li>
            </ul>
          </div>
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
