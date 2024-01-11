import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";
import DATA from "../../CV_DATA.json";

const styles = {
  row: { justifyContent: "center", paddingBottom: "10px" },
  whiteText: { color: "white" },
};

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {`My Professional `}
          <strong className="purple">{`Experience`} </strong>
        </h1>
        <p
          style={styles.whiteText}
        >{`List of organizations I got opportunity to work with`}</p>
        <Row style={styles.row}>
          {DATA.experience.map((i) => (
            <Col key={i.companyName} md={6} className="project-card">
              <ExperienceCard data={i} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
