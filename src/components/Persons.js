import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Card, Button, Row, Col, Image, Container } from "react-bootstrap";

const Persons = (props) => {
  return (
    <ul>
      {props.peopleData.data.map((item, index) => {
        return (
          <Container>
            <Row>
              <Col xs={5} className="mt-2">
                <Card key={item.id} style={{ width: "18rem" }}>
                  <Card.Header className="text-center">
                    {item.first_name}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      You have {props.tasksToDo} tasks to do
                    </Card.Title>
                    <Link to={`/tasks/${item.id}`}>
                      <Button variant="primary">Go Tasks</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="mt-5">
                {/* {buttonNewUser(newUser)} */}
              </Col>
            </Row>
          </Container>
        );
      })}
    </ul>
  );
};

export default Persons;
