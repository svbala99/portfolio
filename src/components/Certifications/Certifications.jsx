import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import CertificationCard from "./CertificationCard";
import DATA from "../../CV_DATA.json";

const styles = {
  row: { justifyContent: "center", paddingBottom: "10px" },
};

function Certifications() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">{`Certifications`} </strong>
        </h1>
        <p className="text-white">{`Professional certifications that I earned`}</p>
        <Row style={styles.row}>
          {DATA.certifications.map((i) => (
            <Col key={i.certificationName} md={6} className="project-card">
              <CertificationCard data={i} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
