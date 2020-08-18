import React from 'react';
import { Container, Row, Col, ListGroup, Card, Form, Button } from 'react-bootstrap';
import './App.scss';

const tasks = [
  {
    id: 1,
    title: 'Título 1',
    inModification: false,
    checked: false,
  },
  {
    id: 2,
    title: 'Título 2',
    inModification: false,
    checked: true,
  },
  {
    id: 3,
    title: 'Título 3',
    inModification: false,
    checked: false,
  },
  {
    id: 4,
    title: 'Título 4',
    inModification: false,
    checked: false,
  },
  {
    id: 5,
    title: 'Título 5',
    inModification: true,
    checked: true,
  },
  {
    id: 6,
    title: 'Título 6',
    inModification: false,
    checked: false,
  },
  {
    id: 7,
    title: 'Título 7',
    inModification: true,
    checked: false,
  },
];

const ListItems = () => tasks.map((task, index) => {
  const label = <span className="font-weight-bold">{ task.title }</span>;
  const title = (editing) => {
    return editing 
      ? (<input className="form-control" value={task.title}/>)
      : (
        <Form.Check
          id={`task${task.id}`}
          type="checkbox"
          defaultChecked={task.checked}
          label={label}/>
      )
  };
  return (
    <ListGroup.Item key={index}>
      <Row>
        <Col xs="9" className="my-auto">
          {title(task.inModification)}
        </Col>
        <Col xs="auto">
          <Button onClick={() => alert(`This is the ${task.id} task`)}>Edit</Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
});

const App = () => (
  <Container fluid>
    <Row>
      <Col xs="8" className="mx-auto mt-3">
        <Card>
          <Card.Title className="text-center">
            <h3 className="mt-3">TODO Tasks</h3>
          </Card.Title>
          <Card.Body>
            <ListGroup>
              <ListItems />
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default App;
