import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FiCalendar } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

const styles = {
  justify: { textAlign: "justify" },
  img: {
    maxWidth: "10em",
    maxHeight: "10em",
    objectFit: "contain",
  },
};

function ExperienceCard({ data }) {
  return (
    <Card className="project-card-view" style={{ alignItems: "center" }}>
      <Card.Img
        style={styles.img}
        variant="top"
        src={data?.logo}
        alt="card-img"
      />
      <Card.Body>
        <Button
          onClick={() => {
            window.open(data.website, "_blank");
          }}
          target="_blank"
          variant="link"
          className="text-white"
        >
          <Card.Title>{data.companyName}</Card.Title>
        </Button>
        <Card.Subtitle className="mb-2 fs-6">
          <MdLocationOn className="mx-2" />
          {data.city}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2">
          <FiCalendar className="mx-2" />
          {`${data.from} - ${data.to}`}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2">
          <BsPerson className="mx-2" />
          {data.role}
        </Card.Subtitle>
        <ul>
          {data.accomplishments.map((item) => (
            <li key={item}>
              <Card.Text style={styles.justify}>{item}</Card.Text>
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}
export default ExperienceCard;
