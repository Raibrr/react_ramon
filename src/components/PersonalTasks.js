import React from "react";
import { useParams } from "react-router-dom";
import ListItems from "./Listitems";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";

const PersonalTasks = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col xs="8" className="mx-auto mt-3">
          <Card>
            <Card.Title className="text-center">
              <h3 className="mt-3">TODO Tasks</h3>
            </Card.Title>
            <Card.Body>
              <ListGroup>
                <ListItems tasks={props.tasks} />
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalTasks;
