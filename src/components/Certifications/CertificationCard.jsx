import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FiCalendar } from "react-icons/fi";

const styles = {
  justify: { textAlign: "justify" },
  img: {
    maxWidth: "60em",
    maxHeight: "40em",
    objectFit: "contain",
  },
};

function CertificationCard({ data }) {
  const {
    image = "",
    link = "",
    certificationName = "",
    provider = "",
    expiry = "",
    issued = "",
  } = data;
  return (
    <Card className="project-card-view" style={{ alignItems: "center" }}>
      <Card.Img style={styles.img} variant="top" src={image} alt="card-img" />
      <Card.Body>
        <Button
          onClick={() => {
            window.open(link, "_blank");
          }}
          target="_blank"
          variant="outline-dark"
          className="text-white"
        >
          <Card.Title>{certificationName}</Card.Title>
        </Button>
        <Card.Subtitle className="mb-2 fs-6">{provider}</Card.Subtitle>
        <Card.Subtitle className="mb-2">
          <FiCalendar className="mx-2" />
          {`${issued} - ${expiry}`}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
export default CertificationCard;
