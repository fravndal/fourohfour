import React from "react";
import "./../css/header.css"
import {Nav, NavDropdown, Navbar, Form, FormControl, Button} from "react-bootstrap";

const Header = () => {
  return (
    <React.Fragment>

<Navbar bg="light" expand="lg">
<img className="logo" src="cslogo.png" width="40px" height="40px"></img>
  <Navbar.Brand href="#home" className="pl-2" id="nav-brand"><strong>CS STATS</strong></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav id="nav-center" className="mr-auto mx-auto">
      <Nav.Link href="#link">About</Nav.Link>
      <NavDropdown title="Tips and info" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Weapon stats</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Nade tips</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button id="searchButton" variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

    </React.Fragment>
  );
};

export default Header;
