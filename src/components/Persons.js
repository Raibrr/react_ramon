import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";

const Persons = ({ first_name, tasks }) => {
  let numberOfTasks = tasks.length;

  return (
    <Col className="mx-2 my-2">
      <Card style={{ width: "18rem" }}>
        <Card.Header className="text-center">{first_name}</Card.Header>
        <Card.Body>
          <Card.Title>You have {numberOfTasks} tasks to do</Card.Title>
          <Link to={`/${first_name}/tasks`}>
            <Button variant="primary">Go Tasks</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Persons;
