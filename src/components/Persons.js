import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import NavbarPage from "./NavbarPage";
import FormNewPerfil from "./FormNewPerfil";
import PersonalTasks from "./PersonalTasks";

const tasks = [
  {
    id: 1,
    title: "Título 1",
    inModification: false,
    checked: false,
    name: "task 1",
    defaulValue: "aaa",
  },
  {
    id: 2,
    title: "Título 2",
    inModification: false,
    checked: true,
    name: "task 2",
    defaulValue: "a",
  },
  {
    id: 3,
    title: "Título 3",
    inModification: false,
    checked: false,
    name: "task 3",
    defaulValue: "aaaaa",
  },
  {
    id: 4,
    title: "Título 4",
    inModification: false,
    checked: false,
    name: "task 4",
    defaulValue: "",
  },
  {
    id: 5,
    title: "Título 5",
    inModification: false,
    checked: true,
    name: "task 5",
    defaulValue: "",
  },
  {
    id: 6,
    title: "Título 6",
    inModification: false,
    checked: false,
    name: "task 6",
    defaulValue: "",
  },
  {
    id: 7,
    title: "Título 7",
    inModification: false,
    checked: false,
    name: "task 7",
    defaulValue: "",
  },
];

const Persons = (props) => {
  //Envia un POST al API (se puede mejorar la forma en que se una axios)

  const showButton = (numberOfTasks, index) => {
    if (numberOfTasks === 0) {
      return (
        <Link to={`/User/new-task`}>
          <Button variant="primary">Creata task</Button>
        </Link>
      );
    } else {
      return (
        <Link to={`/tasks/${index}`}>
          <Button variant="primary">Go Tasks</Button>
        </Link>
      );
    }
  };
  let numberOfTasks = tasks.length;
  console.log("Es de un solo componente");

  return (
    <Router>
      <Route path="/" exact>
        <Col className="mx-2 my-2">
          <Card style={{ width: "18rem" }}>
            <Card.Header className="text-center">
              {props.first_name}
            </Card.Header>
            <Card.Body>
              <Card.Title>You have {numberOfTasks} tasks to do</Card.Title>
              <Link to={`/${props.first_name}/tasks`}>
                <Button variant="primary">Go Tasks</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Route>
      {/* Estos elementos estan aqui porque necesitan variables de ESTE Componente y del componente App para fucionar */}

      <Route path="/tasks/:id">
        <PersonalTasks tasks={props.tasks} />
      </Route>
    </Router>
  );
};

export default Persons;
