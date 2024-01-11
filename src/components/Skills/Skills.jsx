import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle.jsx";
import Github from "./Github.jsx";
import Techstack from "./Techstack.jsx";
import Toolstack from "./Toolstack.jsx";

function Skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skills </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default Skills;
