import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import TaskToDo from "./TaskToDo";

const PersonalTasks = ({ tasks }) => {
  const [addTask, setAddTask] = useState(false);

  useEffect(() => {
    setAddTask(false);
  }, [addTask]);

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
                {tasks.map((item, index) => {
                  return (
                    <TaskToDo
                      key={index}
                      titulo={item.title}
                      name={item.name}
                      inModification={item.inModification}
                    />
                  );
                })}
                {addTask ? "Ta jalando" : null}
                <Button
                  onClick={() => {
                    tasks.push({
                      checked: false,
                      id: tasks.length,
                      inModification: !addTask,
                      name: `title ${tasks.length}`,
                      title: "",
                    });
                    setAddTask(true);
                  }}
                >
                  Add Task
                </Button>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalTasks;
