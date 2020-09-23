import { Button, Navbar } from "react-bootstrap";
import React, { useEffect, useState } from "react";

const NewUser = (props) => {
  const [newUser, setNewUser] = useState(true);
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <Button
          onClick={(evento) => {
            props.postData(evento);
          }}
        >
          Create Perfil Tasks
        </Button>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">{props.emailUser}</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NewUser;
