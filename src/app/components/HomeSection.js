import Image from "next/image";
import { Container } from "react-bootstrap";
import Perfil from "../assets/eu.png";
import eu from "./Eu";

const HomeSection = () => {
  return (
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
  )
};

export default HomeSection;
