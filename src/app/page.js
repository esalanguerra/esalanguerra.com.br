"use client";

import { Container } from 'react-bootstrap';
import Image from 'next/image';
import Perfil from './assets/eu.png';
import ContactSection from './components/ContactSection';
import eu from './components/Eu';
import TechnologyCarousel from './components/Carousel';
import ProjectSection from './components/ProjectSection';

export default function Home() {
  return (
    <>
      {/* Seção Home */}
      <section id="home" className="text-center py-5 bg-light">
        <Container>
          <div className="d-flex justify-content-center mb-4">
            <Image
              src={Perfil}
              alt="Minha Foto"
              width={300}
              height={300}
              className="rounded-circle shadow"
            />
          </div>
          <h1 className="mt-4 mb-2 text-primary">Olá, eu sou {eu.nome}</h1>
          <h2 className="mb-3">{eu.title}</h2>
          <p className="lead text-muted">{eu.description}</p>
        </Container>
      </section>

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
