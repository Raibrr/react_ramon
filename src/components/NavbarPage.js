import { Button, Navbar } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormNewPerfile from "./FormNewPerfil";
import Persons from "./Persons";

const NavbarPage = (props) => {
  const [newUser, setNewUser] = useState(true);
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="home">
        <Link to="/newperfil">
          <Button>Create Perfil Tasks</Button>
        </Link>
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

export default NavbarPage;
