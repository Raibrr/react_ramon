import { Button, Navbar } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarPage = (props) => {
  return (
    <Navbar bg="dark" variant="dark" className="navbar-expand-lg">
      <Navbar.Brand href="home">
        <Link to="/newperfil">
          <Button>Create Perfil Tasks</Button>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="/">{props.emailUser}</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarPage;
