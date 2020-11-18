import React from "react";
import "./../css/header.css"
import {Nav, NavDropdown, Navbar, Form, FormControl, Button} from "react-bootstrap";

const Header = () => {
  return (
    <React.Fragment>

<Navbar bg="white" expand="lg">

  <Navbar.Brand href="#home" className="pl-2 mx-left" id="nav-brand"><img className="logo" src="images/cslogo.png" width="40px" height="40px"></img><strong>CSINFO</strong></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav id="nav-center" className="mr-auto mx-auto">
      <Nav.Link href="#about">About</Nav.Link>
      <NavDropdown title="Tips and info" id="basic-nav-dropdown">
        <NavDropdown.Item className="text-center" href="#action/3.1">Weapon stats</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item className="text-center" href="#action/3.2">Nade tips</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    </React.Fragment>
  );
};

export default Header;
