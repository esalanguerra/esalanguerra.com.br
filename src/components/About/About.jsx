import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre o Meu Trabalho</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Imagem minha, sentado com um laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/dotnet.png")} width={40} alt="Ícone do .NET" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvimento Back-End com .NET</h3>
              <p>
                Especializado em desenvolvimento de aplicações back-end usando a arquitetura .NET, incluindo .NET MVC, .NET Core 5 e .NET WebAPI.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/node.png")} width={40} alt="Ícone do Node.js" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvimento Back-End com Node.js</h3>
              <p>
                Experiência em desenvolvimento de back-end com Node.js, utilizando TypeScript, Express.js, Socket.IO, Nest.js e Fastify.js.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/docker.webp")} width={40} alt="Ícone de DevOps" />
            <div className={styles.aboutItemText}>
              <h3>Engenharia DevOps</h3>
              <p>
                Experiência em DevOps, utilizando Docker, Kubernetes, Helm, Jenkins, GitLab CI/CD e Terraform, Linux, RabbitMQ, Prometheus e Grafana.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/angular.png")} width={40} alt="Ícone de UI" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvimento Front-End</h3>
              <p>
                Foco em desenvolvimento front-end com Angular, Bootstrap 4 e 5, Styled Components, React, TypeScript e Redux.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
