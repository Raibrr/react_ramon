import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Card,
  Button,
  Row,
  Col,
  Image,
  Container,
  Navbar,
} from "react-bootstrap";
import axios from "axios";
import NavbarPage from "./NavbarPage";
import FormNewPerfil from "./FormNewPerfil";
import PersonalTasks from "./PersonalTasks";

const Persons = (props) => {
  //Envia un POST al API (se puede mejorar la forma en que se una axios)
  const postData = async (userName, email) => {
    console.log("la funcion postData");
    //event.persist();
    try {
      const responsePost = await axios.post("https://reqres.in/api/users/", {
        first_name: userName,
        email: email,
      });
      props.tasks.push([]);
      console.log(props.tasks);
      let data = responsePost.data;
      props.setPeopledata({
        data: [...props.peopleData.data, data],
      });
    } catch {
      const error = new Error("Valio vrg el POST");
      console.error(error);
    }
  };

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

  return (
    <Router>
      <Route path="/" exact>
        <NavbarPage emailUser={props.peopleData.data[0].email} />
        <ul>
          {props.peopleData.data.map((item, index) => {
            console.log(props.peopleData.data);
            let numberOfTasks = props.tasks[index].length;
            return (
              <Container>
                <Row>
                  <Col xs={5} className="mt-2">
                    <Card key={index} style={{ width: "18rem" }}>
                      <Card.Header className="text-center">
                        {item.first_name}
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>
                          You have {numberOfTasks} tasks to do
                        </Card.Title>
                        {showButton(numberOfTasks, index)}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            );
          })}
        </ul>
      </Route>
      {/* Estos elementos estan aqui porque necesitan variables de ESTE Componente y del componente App para fucionar */}
      <Route path="/newperfil" exact>
        <FormNewPerfil postData={postData} />
      </Route>
      <Route path="/tasks/:id">
        <PersonalTasks tasks={props.tasks} />
      </Route>
    </Router>
  );
};

export default Persons;
