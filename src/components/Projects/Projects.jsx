import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DATA from "../../CV_DATA.json";
import Particle from "../Particle.jsx";
import ProjectCard from "./ProjectCard.jsx";

const styles = {
  row: { justifyContent: "center", paddingBottom: "10px" },
  whiteText: { color: "white" },
};

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {`My Recent `}
          <strong className="purple">{`Works`} </strong>
        </h1>
        <p
          style={styles.whiteText}
        >{`Projects that I contributed to recently`}</p>
        <Row style={styles.row}>
          {DATA.projects.map((i) => (
            <Col key={i.projectName} md={6} className="project-card">
              <ProjectCard data={i} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
