import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Col, Container, Row } from "react-bootstrap";

import DATA from "../../CV_DATA.json";
import { FaLinkedinIn } from "react-icons/fa";
import React from "react";
import Tilt from "react-parallax-tilt";
import homeLogo from "../../Assets/home-main.svg";

function Intro() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A brief <span className="purple"> INTRODUCTION </span> of myself
            </h1>
            <p className="home-about-body">
              Results-driven frontend and mobile engineer with 6+ years of experience
              building scalable, high-performance applications across mobile, web,
              and smart TV platforms. Experienced in leading engineering teams,
              architecting production-grade systems, and delivering end-to-end
              solutions from concept to global release.
              <b className="purple">
                {" "}
                Expertise spans AI-enabled consumer platforms, fintech applications,
                digital health solutions, gamified engagement systems, and enterprise
                CMS ecosystems.
              </b>
              <br />
              <br />
              Proven track record of launching and scaling products across
              <b className="purple"> iOS, Android, Web, and Smart TV platforms</b>
              while driving engineering excellence, performance optimization,
              and data-driven product improvements.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={homeLogo} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACT DETAILS</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={DATA.contact.find((i) => i.type === "github").url}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={DATA.contact.find((i) => i.type === "twitter").url}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={DATA.contact.find((i) => i.type === "linkedin").url}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={DATA.contact.find((i) => i.type === "instagram").url}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Intro;
