import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import DATA from "../../CV_DATA.json";

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
              Optimistic front end engineer offering 5 years of experience
              providing high-impact mobile & web application engineering
              solutions for diverse industry verticals that include
              <b className="purple">
                AI-powered retail intelligence, fintech, e-commerce, CMS &
                healthcare.
              </b>
              <br />
              <br />
              Demonstrated leadership and proven expertise in developing and
              deploying apps across web,{" "}
              <b className="purple">Android & iOS platforms.</b>
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
