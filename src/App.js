import React, { useEffect, useState, useRef } from "react";

import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Persons from "./components/Persons";
import PersonalTasks from "./components/PersonalTasks";
import NewUser from "./components/NewUser";
import axios from "axios";

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

  //Envia un POST al API (se puede mejorar la forma en que se una axios)
  const postData = async (event) => {
    event.persist();
    try {
      const responsePost = await axios.post("https://reqres.in/api/users/", {
        first_name: "Ramon",
        email: "example@alv.com",
      });
      let data = responsePost.data;
      setPeopledata({
        data: [...peopleData.data, data],
      });
    } catch {
      const error = new Error("Valio vrg el POST");
      console.error(error);
    }
    tasks.push({
      id: 1,
      title: "Título 8",
      inModification: false,
      checked: false,
      defaulValue: "",
    });
  };

  let tasksToDo = tasks.length;
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <NewUser emailUser={peopleData.data[0].email} postData={postData} />
          <Persons
            tasksToDo={tasksToDo}
            tasks={tasks}
            peopleData={peopleData}
          />
        </Route>
        <Route path="/tasks/:id" exa>
          <PersonalTasks tasks={tasks} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
