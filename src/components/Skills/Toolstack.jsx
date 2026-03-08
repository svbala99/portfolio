import { Col, Row } from "react-bootstrap";
import {
  SiAmazonaws,
  SiAndroidstudio,
  SiMacos,
  SiPostman,
  SiSlack,
  SiVercel,
  SiVisualstudiocode
} from "react-icons/si";

import React from "react";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <h6>MacOS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
        <h6>Android Studio</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6>VS Code</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h6>Postman</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <h6>Slack</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <h6>AWS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h6>Vercel</h6>
      </Col>
    </Row>
  );
}

export default Toolstack;
