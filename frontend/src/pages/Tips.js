import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import "./../css/tips.css";



const Header = () => {
  return (
    <React.Fragment>

        <Container id="container">
            <Row className="d-flex text-center">  
                <Col lg={4} md={4} sm={15} xl={4} xs={"auto"} className="mt-5">
                    <a href="/">
                        <Image className="ims" id="image" height="100%" width="80%" src="images/csmaps/train.jpg" rounded/>
                    </a>
                </Col>
                <Col lg={4} md={4} sm={15} xl={4} xs={"auto"} className="mt-5">
                    <a href="/">
                        <Image id="image2" height="100%" width="80%" src="images/csmaps/overpass.jpg" rounded/>
                    </a>
                </Col>
                <Col lg={4} md={4} sm={15} xl={4} xs={"auto"} className="mt-5">
                    <a href="/">
                        <Image id="image" height="100%" width="80%" src="images/csmaps/dust2.jpg" rounded/>
                    </a>
                </Col>
            </Row>

            <Row className="d-flex text-center">
                <Col lg={4} md={4} sm={15} xl={4} xs={"auto"} className="mt-5">
                    <a href="/">
                        <Image id="image2" height="100%" width="80%" src="images/csmaps/mirage.jpg" rounded/>
                    </a>
                </Col>
                <Col lg={4} md={4} sm={15} xl={4} xs={"auto"} className="mt-5">
                    <a>
                        <Image id="imageDisabled" height="100%" width="80%" src="images/csmaps/nuke.jpg" rounded/>
                    </a>
                </Col>
                <Col lg={4} md={4} sm={15} xl={4} xs={"auto"} className="mt-5">
                    <a href="/">
                        <Image id="image2" height="100%" width="80%" src="images/csmaps/inferno.jpg" rounded/>
                    </a>
                </Col>
            </Row>
            <Row className="d-flex text-center mb-5">
            <Col lg={4} md={4} sm={15} xl={4} xs={"auto"} className="mt-5">
                    <a href="/">
                        <Image id="image" height="100%" width="80%" src="images/csmaps/vertigo.jpg" rounded/>
                    </a>
                </Col>
                <Col lg={4} md={4} sm={15} xl={4} xs={"auto"} className="mt-5">
                    <a href="/">
                        <Image id="image2" height="100%" width="80%" src="images/csmaps/cache.jpg" rounded/>
                    </a>
                </Col>
                <Col lg={4} md={4} sm={15} xl={4} xs={"auto"} className="mt-5">
                    <a>
                        <Image id="imageDisabled" height="100%" width="80%" src="images/csmaps/cobblestone.png" rounded/>
                    </a>
                </Col>
            </Row>

        </Container>

    </React.Fragment>
  );
};

export default Header;