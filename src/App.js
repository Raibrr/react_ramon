import React, { useEffect, useState, useRef } from "react";

import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Persons from "./components/Persons";
import PersonalTasks from "./components/PersonalTasks";

const tasks = [
  {
    id: 1,
    title: "Título 1",
    inModification: false,
    checked: false,
    defaulValue: "aaa",
  },
  {
    id: 2,
    title: "Título 2",
    inModification: false,
    checked: true,
    defaulValue: "a",
  },
  {
    id: 3,
    title: "Título 3",
    inModification: false,
    checked: false,
    defaulValue: "aaaaa",
  },
  {
    id: 4,
    title: "Título 4",
    inModification: false,
    checked: false,
    defaulValue: "",
  },
  {
    id: 5,
    title: "Título 5",
    inModification: false,
    checked: true,
    defaulValue: "",
  },
  {
    id: 6,
    title: "Título 6",
    inModification: false,
    checked: false,
    defaulValue: "",
  },
  {
    id: 7,
    title: "Título 7",
    inModification: false,
    checked: false,
    defaulValue: "",
  },
];

const App = () => {
  let tasksToDo = tasks.length;
  console.log(tasksToDo);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Persons tasksToDo={tasksToDo} />
        </Route>
        <Route path="/tasks/:id" exa>
          <PersonalTasks tasks={tasks} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
