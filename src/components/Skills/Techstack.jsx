import { BiLogoRedux, BiLogoTypescript, BiTestTube } from "react-icons/bi";
import { Col, Row } from "react-bootstrap";
import { DiAndroid, DiCss3, DiHtml5 } from "react-icons/di";
import {
  DiGit,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiReact,
} from "react-icons/di";
import {
  SiEslint,
  SiFastlane,
  SiFirebase,
  SiIos,
  SiJest,
  SiMixpanel,
  SiMysql,
  SiXcode,
} from "react-icons/si";

import { AiOutlineExperiment } from "react-icons/ai";
import React from "react";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6>React</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>Javascript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <h6>HTML 5</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h6>CSS 3</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoTypescript />
        <h6>Typescript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoRedux />
        <h6>Redux</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEslint />
        <h6>Eslint</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXcode />
        <h6>XCode</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
        <h6>Android</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIos />
        <h6>iOS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMixpanel />
        <h6>Mixpanel</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastlane />
        <h6>Fastlane</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJest />
        <h6>Jest</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6>NodeJS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h6>MongoDB</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6>Git</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h6>Firebase</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <h6>MySQL</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiTestTube />
        <h6>Detox</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineExperiment />
        <h6>Growthbook</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
