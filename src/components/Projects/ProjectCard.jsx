import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsPerson } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
import { SiIos } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";

const styles = {
  justify: { textAlign: "left" },
  mobileImg: {
    maxWidth: "30em",
    maxHeight: "50em",
    objectFit: "contain",
    padding: "1em",
  },
  webImg: {
    maxWidth: "75em",
    maxHeight: "50em",
    objectFit: "contain",
    padding: "1em",
  },
};

function ProjectCard({ data }) {
  return (
    <Card
      key={data.projectName}
      className="project-card-view"
      style={{ alignItems: "center" }}
    >
      <Card.Title className="mt-4">{data?.projectName}</Card.Title>
      <Card.Subtitle className="my-2">
        <BsPerson className="mx-2" />
        {data.role}
      </Card.Subtitle>
      <Card.Body>
        <ul>
          {data.accomplishments.map((item) => (
            <li key={item}>
              <Card.Text style={styles.justify}>{item}</Card.Text>
            </li>
          ))}
        </ul>
      </Card.Body>
      <div style={{ flexDirection: "row" }}>
        {data?.playstore && (
          <Button
            onClick={() => {
              window.open(data.playstore, "_blank");
            }}
            target="_blank"
            className="rounded-circle"
            variant="primary"
            style={{ marginRight: "10px" }}
          >
            <DiAndroid />
          </Button>
        )}
        {data?.appstore && (
          <Button
            onClick={() => {
              window.open(data.appstore, "_blank");
            }}
            target="_blank"
            className="rounded-circle"
            variant="primary"
            style={{ marginRight: "10px" }}
          >
            <SiIos />
          </Button>
        )}
        {data?.website && (
          <Button
            onClick={() => {
              window.open(data.website, "_blank");
            }}
            target="_blank"
            className="rounded-circle"
            variant="primary"
            style={{ marginRight: "10px" }}
          >
            <SlGlobe />
          </Button>
        )}
      </div>
      <div style={{ flexDirection: "row" }}>
        {data?.images?.map((i) => (
          <Card.Img
            key={i}
            variant="top"
            style={data?.website ? styles.webImg : styles.mobileImg}
            src={i}
            alt="card-img"
          />
        ))}
      </div>
    </Card>
  );
}
export default ProjectCard;
