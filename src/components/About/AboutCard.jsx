import React from "react";
import Card from "react-bootstrap/Card";
import { PiDotOutlineFill } from "react-icons/pi";

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
            Enjoying the parenthood of being a proud FATHER of my little
            princess. Moreover, an <span className="purple"> OPTIMIST</span>
            <br />
            <br />
            I pursued my PG Degree from Vellore Institute of Technology,
            Tamilnadu, India
            <br />
            <br />
            Some of the key achievements include:-
            <ul>
              <li className="about-activity">
                <PiDotOutlineFill /> Established and implemented a comprehensive
                testing strategy, reducing post-release issues by 20%.
              </li>
              <li className="about-activity">
                <PiDotOutlineFill /> Successfully rolled-out multiple apps on
                Google Play & Apple store, meeting the industry standards that
                include best practices not limited to linting, folder structure
                and performance optimizations.
              </li>
              <li className="about-activity">
                <PiDotOutlineFill /> Fostered a culture of writing
                self-explanatory code and the usage of JSDoc and imparted
                continuous learning habits among the team members.
              </li>
            </ul>
            <br />
            <br />
            Being a javascript enthusiast, I prefer full stack javascript
            engineering, providing solutions to the engineering problems and I would
            indulge in these for replenishment:-
          </p>
          <ul>
            <li className="about-activity">
              <PiDotOutlineFill /> Pushing hobby projects to Github to explore
              the technologies such as React Native, React, Flutter.
            </li>
            <li className="about-activity">
              <PiDotOutlineFill /> Cricket and Football
            </li>
            <li className="about-activity">
              <PiDotOutlineFill /> Writing Tech Blogs, cooking
            </li>
            <li className="about-activity">
              <PiDotOutlineFill /> Bike riding
            </li>
          </ul>

          <p style={{ color: "#0165FC" }}>
            Self confidence + motivation = SUCCESS
          </p>
          <footer className="blockquote-footer">Balamurugan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
