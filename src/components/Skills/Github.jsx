import React from "react";
import { Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My Github <strong className="purple">Coding activity</strong>
      </h1>
      <GitHubCalendar
        username="svbala99"
        blockSize={15}
        blockMargin={5}
        color="#0165FC"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
