import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Mentors = () => {
  return (
    <div
      className=" section-Mentors"
      style={{ background: "#eeeeee" }}
      id="Mentors-section"
    >
      <Container className=" pt-5">
        <p className="section-about-header h1 pt-2">Mentors</p>
        <Row style={{ textAlign: "center" }}>
          <Col className="mt-5">
            <div>
              <h1 style={{ fontWeight: "100" }}> Coming Soon! </h1>
            </div>
            <Button color="success" size="lg">
              Become a Mentor!
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mentors;
