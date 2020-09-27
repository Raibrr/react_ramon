import React, { useEffect, useState, useRef } from "react";

import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Persons from "./components/Persons";
import axios from "axios";

const tasks = [
  {
    user: [
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
    ],
  },
];

const App = () => {
  console.log(tasks[0].length);
  const [peopleData, setPeopledata] = useState({
    data: [""],
  });
  //Pide la informacion a la API se ejecuta una sola vez (se puede mejorar la forma en que se una axios)
  useEffect(() => {
    //Solo estoy pidiendo la info del user 1
    const fetchData = async () => {
      try {
        const responseGet = await axios.get("https://reqres.in/api/users/");
        console.log(responseGet.data.data[0], "es del get");
        let dataGet = responseGet.data.data[0];
        setPeopledata({ data: [dataGet] });
        //
      } catch {
        const error = new Error("Valio vrg el GET");
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Route path="/" exact>
        <Persons
          tasks={tasks}
          peopleData={peopleData}
          setPeopledata={setPeopledata}
        />
      </Route>
    </Router>
  );
};

export default App;
