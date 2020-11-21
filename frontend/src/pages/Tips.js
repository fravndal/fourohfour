import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import "./../css/tips.css";

const Header = () => {
  return (
    <React.Fragment>

        <Container>
            <Row className="d-flex text-center">
                
                <Col lg={4} md={4} sm={4} xl={4} xs={"auto"} className="mt-5" >

                   <Image id="image" height="100%" width="80%" src="images/csmaps/train.jpg" rounded/>
                    </Col>
                <Col lg={4} md={4} sm={4} xl={4} xs={"auto"} className="mt-5">

                    <Image id="image2" height="100%" width="80%" src="images/csmaps/overpass.jpg" rounded/>
                    </Col>
                <Col lg={4} md={4} sm={4} xl={4} xs={"auto"} className="mt-5">

                    <Image id="image" height="100%" width="80%" src="images/csmaps/dust2.jpg" rounded/>
                    </Col>
            </Row>
            <Row className="d-flex text-center">
                <Col lg={4} md={4} sm={4} xl={4} xs={"auto"} className="mt-5">
                    <Image id="image2" height="100%" width="80%" src="images/csmaps/inferno.jpg" rounded/>
                    </Col>
                <Col lg={4} md={4} sm={4} xl={4} xs={"auto"} className="mt-5">
                    <Image id="image" height="100%" width="80%" src="images/csmaps/mirage.jpg" rounded/>
                    </Col>
                <Col lg={4} md={4} sm={4} xl={4} xs={"auto"} className="mt-5">
                    <Image id="image2" height="100%" width="80%" src="images/csmaps/nuke.jpg" rounded/>
                    </Col>
            </Row>
            <Row className="d-flex text-center mb-5">
                <Col lg={4} md={4} sm={4} xl={4} xs={"auto"} className="mt-5">
                    <Image id="image" height="100%" width="80%" src="images/csmaps/vertigo.jpg" rounded/>
                    </Col>
                <Col lg={4} md={4} sm={4} xl={4} xs={"auto"} className="mt-5">
                    <Image id="image2" height="100%" width="80%" src="images/csmaps/cobblestone.png" rounded/>
                    </Col>
                <Col lg={4} md={4} sm={4} xl={4} xs={"auto"} className="mt-5">
                    <Image id="image" height="100%" width="80%" src="images/csmaps/cache.jpg" rounded/>
                    </Col>
            </Row>

        </Container>

    </React.Fragment>
  );
};

export default Header;