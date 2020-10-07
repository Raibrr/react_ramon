import { Button, Navbar } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const NavbarPage = ({ emailUser }) => {
  return (
    <Navbar bg="dark" variant="dark" className="navbar-expand-lg">
      <Link id="RouterCreatePerfil" to="/newperfil">
        <Button>Create Perfil Tasks</Button>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="/">{emailUser}</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarPage;
