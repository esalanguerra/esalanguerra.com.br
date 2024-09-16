"use client";

import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Image from 'next/image';
import Perfil from './assets/eu.png';
import ContactSection from './components/ContactSection';
import eu from './components/Eu';
import TechnologyCarousel from './components/Carousel';
import ProjectSection from './components/ProjectSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home" className="text-center py-5">
        <Container>
          <div className="d-flex justify-content-center mb-4">
            <Image
              src={Perfil}
              alt="Minha Foto"
              width={300}
              height={300}
              className="rounded-circle"
            />
          </div>
          <h1 className="mt-4">Olá, eu sou {eu.nome}</h1>
          <h2>{eu.title}</h2>
          <p>{eu.description}</p>
        </Container>
      </section>

      <section id="development" className="py-5">
        <Container>
          <h2>Desenvolvimento Web</h2>
          <p>Desenvolvemos soluções tecnológicas robustas e escaláveis para atender às suas necessidades de negócios.</p>
        </Container>
      </section>

      <section id="consulting" className="bg-light py-5">
        <Container>
          <h2>Consultoria</h2>
          <p>Oferecemos consultoria especializada para ajudar você a alcançar seus objetivos de negócios com eficiência.</p>
        </Container>
      </section>

      <ProjectSection />

      <ContactSection />

      <section id="techs" className="py-5">
        <Container>
          <h2>Tecnologias</h2>
          <TechnologyCarousel />
        </Container>
      </section>
    </>
  );
}
