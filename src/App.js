import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Row } from "react-bootstrap";

import Persons from "./components/Persons";
import NavbarPage from "./components/NavbarPage";
import FormNewPerfil from "./components/FormNewPerfil";
import PersonalTasks from "./components/PersonalTasks";
const tasks = [
  {
    id: 1,
    title: "Título 1",
    inModification: false,
    checked: false,
    name: "task 1",
  },
  {
    id: 2,
    title: "Título 2",
    inModification: false,
    checked: true,
    name: "task 2",
  },
  {
    id: 3,
    title: "Título 3",
    inModification: false,
    checked: false,
    name: "task 3",
  },
  {
    id: 4,
    title: "Título 4",
    inModification: false,
    checked: false,
    name: "task 4",
  },
  {
    id: 5,
    title: "Título 5",
    inModification: false,
    checked: true,
    name: "task 5",
  },
  {
    id: 6,
    title: "Título 6",
    inModification: false,
    checked: false,
    name: "task 6",
  },
  {
    id: 7,
    title: "Título 7",
    inModification: false,
    checked: false,
    name: "task 7",
  },
];
const App = () => {
  const [peopleData, setPeopledata] = useState([]);
  //Pide la informacion a la API se ejecuta una sola vez (se puede mejorar la forma en que se una axios)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseGet = await axios.get("https://reqres.in/api/users/");
        let users = responseGet.data.data;
        setPeopledata(users);
      } catch {
        const error = new Error("Valio vrg el GET");
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const postData = async (userName, email) => {
    console.log("la funcion postData");
    //event.persist();
    try {
      const responsePost = await axios.post("https://reqres.in/api/users/", {
        first_name: userName,
        email: email,
      });

      let { data } = responsePost;
      setPeopledata([...peopleData, data]);
    } catch {
      const error = new Error("Valio vrg el POST");
      console.error(error);
    }
  };

  return (
    <Router>
      <Route path="/" exact>
        <NavbarPage emailUser="alguien@gamil.com" />
        <Row className="align-items-center">
          {peopleData.map((item, index) => (
            <Persons key={index} first_name={item.first_name} tasks={tasks} />
          ))}
        </Row>
      </Route>
      <Route path="/newperfil" exact>
        <FormNewPerfil postData={postData} />
      </Route>
      {peopleData.map((item, index) => (
        <Route key={index} path={`/${item.first_name}/tasks`} exact>
          <PersonalTasks tasks={tasks} />
        </Route>
      ))}
    </Router>
  );
};

export default App;
