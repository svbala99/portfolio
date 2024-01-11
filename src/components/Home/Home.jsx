import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import DATA from '../../CV_DATA.json';
import Particle from "../Particle.jsx";
import Intro from "./Intro.jsx";
import Type from "./Type.jsx";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                This is
                <strong className="main-name">{` ${DATA.firstName}`}</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={myImg}
                alt="my-pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Intro />
    </section>
  );
}

export default Home;
