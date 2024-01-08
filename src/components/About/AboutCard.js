import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Balamurugan V </span>
            from <span className="purple"> Tamilnadu, India.</span>
            <br />
            <br />
            I am currently employed as a Tech Lead at Divum Corporate Services
            Pvt Ltd., Bangalore.
            <br />
            <br />
            I pursued my master's from Vellore Institute of Technology,
            Tamilnadu, India
            <br />
            <br />
            Being a javascript enthusiast, I prefer full stack javascript
            engineering, providing solutions to the engineering problems and I'd
            indulge in these for replenishment:-
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cricket and Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs, cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Bike riding
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Self confidence + motivation = SUCCESS"
          </p>
          <footer className="blockquote-footer">Balamurugan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
