import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

const Persons = (props) => {
  const [peopleData, setPeopledata] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setPeopledata(res.data);
    });
  }, []);

  return (
    <ul>
      {peopleData.map((item) => (
        <Card key={item.id} className="my-4">
          <Card.Header>
            {item.username} - {item.email}
          </Card.Header>
          <Card.Body>
            <Card.Title>You have {props.tasksToDo} tasks to do</Card.Title>
            <Link to={`/tasks/${item.id}`}>
              <Button variant="primary">Go Tasks</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </ul>
  );
};

export default Persons;
