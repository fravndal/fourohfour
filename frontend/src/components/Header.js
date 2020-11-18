import React from "react";
import "./../css/header.css"
import {Nav, NavDropdown, Navbar} from "react-bootstrap";

const Header = () => {
  return (
    <React.Fragment>

<Navbar id="navbar" bg="white" expand="lg">

  <Navbar.Brand href="#home" className="pl-2 mx-left" id="nav-brand">
    <img className="logo" src="images/cslogo.png" width="40px" height="40px" alt=""></img>
    <strong>CSINFO</strong>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav id="nav-center" className="mr-auto mx-auto">
      <NavDropdown title="Tips and info" id="basic-nav-dropdown">
        <NavDropdown.Item className="text-center" href="#action/3.1">Weapon stats</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item className="text-center" href="#action/3.2">Nade tips</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#about">About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    </React.Fragment>
  );
};

export default Header;
