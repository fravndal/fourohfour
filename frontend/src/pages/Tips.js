import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
  return (
    <React.Fragment>

        <Container>
            <Row className="m-1">
                <Col><img height="170px" width="280px" src="images/csmaps/cache.jpg"></img></Col>
                <Col><img height="170px" width="280px" src="images/csmaps/cobblestone.png"></img></Col>
                <Col><img height="170px" width="280px" src="images/csmaps/dust2.jpg"></img></Col>
            </Row>
            <Row className="m-1">
                <Col><img height="170px" width="280px" src="images/csmaps/inferno.jpg"></img></Col>
                <Col><img height="170px" width="280px" src="images/csmaps/mirage.jpg"></img></Col>
                <Col><img height="170px" width="280px" src="images/csmaps/nuke.jpg"></img></Col>
            </Row>
            <Row className="m-1">
                <Col><img height="170px" width="280px" src="images/csmaps/overpass.jpg"></img></Col>
                <Col><img height="170px" width="280px" src="images/csmaps/train.jpg"></img></Col>
                <Col><img height="170px" width="280px" src="images/csmaps/vertigo.jpg"></img></Col>
            </Row>
        </Container>

    </React.Fragment>
  );
};

export default Header;