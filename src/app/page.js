"use client";

import { Container } from 'react-bootstrap';
import ContactSection from './components/ContactSection';
import TechnologyCarousel from './components/Carousel';
import ProjectSection from './components/ProjectSection';
import HomeSection from './components/HomeSection';

export default function Home() {
  return (
    <>
      {/* Seção Home */}
      <HomeSection />

      {/* Seção Desenvolvimento */}
      <section id="development" className="py-5 bg-light">
        <Container>
          <h2 className="section-title text-center mb-4">Desenvolvimento Web</h2>
          <p className="text-center">Desenvolvemos soluções tecnológicas robustas e escaláveis para atender às suas necessidades de negócios.</p>
        </Container>
      </section>

      {/* Seção Consultoria */}
      <section id="consulting" className="py-5">
        <Container>
          <h2 className="section-title text-center mb-4">Consultoria</h2>
          <p className="text-center">Oferecemos consultoria especializada para ajudar você a alcançar seus objetivos de negócios com eficiência.</p>
        </Container>
      </section>

      {/* Seção Projetos */}
      <ProjectSection />

      {/* Seção Contato */}
      <ContactSection />

      {/* Seção Tecnologias */}
      <section id="techs" className="py-5 bg-light">
        <Container>
          <h2 className="section-title text-center mb-4">Tecnologias</h2>
          <TechnologyCarousel />
        </Container>
      </section>
    </>
  );
}
