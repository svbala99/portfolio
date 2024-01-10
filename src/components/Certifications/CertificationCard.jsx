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
  return (
    <Card className="project-card-view" style={{ alignItems: "center" }}>
      <Card.Img
        style={styles.img}
        variant="top"
        src={data?.image}
        alt="card-img"
      />
      <Card.Body>
        <Button
          onClick={() => {
            window.open(data.link, "_blank");
          }}
          target="_blank"
          variant="outline-dark"
          className="text-white"
        >
          <Card.Title>{data.certificationName}</Card.Title>
        </Button>
        <Card.Subtitle className="mb-2 fs-6">{data.provider}</Card.Subtitle>
        <Card.Subtitle className="mb-2">
          <FiCalendar className="mx-2" />
          {`${data.issued} - ${data.expiry}`}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
export default CertificationCard;
