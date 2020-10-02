import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

import Persons from "./components/Persons";
import NavbarPage from "./components/NavbarPage";
import FormNewPerfil from "./components/FormNewPerfil";

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

      let newUser = responsePost.data;
      setPeopledata([...peopleData, newUser]);
    } catch {
      const error = new Error("Valio vrg el POST");
      console.error(error);
    }
  };

  return (
    <Router>
      <Route path="/" exact>
        <NavbarPage emailUser="jotolon@gamil.com" />
        <Row className="align-items-center">
          {peopleData.map((item, index) => (
            <Persons key={index} first_name={item.first_name} index={index} />
          ))}
        </Row>
      </Route>
      <Route path="/newperfil" exact>
        <FormNewPerfil postData={postData} />
      </Route>
    </Router>
  );
};

export default App;
