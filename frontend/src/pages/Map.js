import React, { Fragment } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import "./../css/map.css";

const Map = () => {
    return (
      <Fragment id="frag">

        <Container id="container-map" fluid="xl">
            <Row className="d-flex text-center" noGutters>
                <Col xl={3} lg={4} md={6}>
                    <a href="/">
                        <Image id="img-map" className="mt-4" height="70%" width="80%" src="images/csmaps/train.jpg" rounded/>
                    </a>
                        <p>Placeholder text</p>
                </Col>
                <Col xl={3} lg={4} md={6}>
                    <Image id="img-map" className="mt-4" height="70%" width="80%" src="images/csmaps/train.jpg" rounded/>
                    <p>Placeholder text</p>
                </Col>
                <Col xl={3} lg={4} md={6}>
                    <Image id="img-map" className="mt-4" height="70%" width="80%" src="images/csmaps/train.jpg" rounded/>
                    <p>Placeholder text</p>
                </Col>
                <Col xl={3} lg={4} md={6}>
                <Image id="img-map" className="mt-4" height="70%" width="80%" src="images/csmaps/train.jpg" rounded/>
                    <p>Placeholder text</p>
                </Col>
                <Col xl={3} lg={4} md={6}>
                <Image id="img-map" className="mt-4" height="70%" width="80%" src="images/csmaps/train.jpg" rounded/>
                    <p>Placeholder text</p>
                </Col>
                <Col xl={3} lg={4} md={6}>
                <Image id="img-map" className="mt-4" height="70%" width="80%" src="images/csmaps/train.jpg" rounded/>
                    <p>Placeholder text</p>
                </Col>
                <Col xl={3} lg={4} md={6}> 
                <Image id="img-map" className="mt-4" height="70%" width="80%" src="images/csmaps/train.jpg" rounded/>
                    <p>Placeholder text</p>
                </Col>
                <Col xl={3} lg={4} md={6}>
                <Image id="img-map" className="mt-4" height="70%" width="80%" src="images/csmaps/train.jpg" rounded/>
                    <p>Placeholder text</p>
                </Col>
                <Col xl={3} lg={4} md={6}>
                <Image id="img-map" className="mt-4" height="70%" width="80%" src="images/csmaps/train.jpg" rounded/>
                    <p>Placeholder text</p>
                </Col>
                <Col xl={3} lg={4} md={6}>
                <Image id="img-map" className="mt-4" height="70%" width="80%" src="images/csmaps/train.jpg" rounded/>
                    <p>Placeholder text</p>
                </Col>
                <Col xl={3} lg={4} md={6}> 
                <Image id="img-map" className="mt-4" height="70%" width="80%" src="images/csmaps/train.jpg" rounded/>
                    <p>Placeholder text</p>
                </Col>
                <Col xl={3} lg={4} md={6}>
                <Image id="img-map" className="mt-4" height="70%" width="80%" src="images/csmaps/train.jpg" rounded/>
                    <p>Placeholder text</p>
                </Col>
            </Row>
        </Container>
  
      </Fragment>
    );
  };

  export default Map;
  
//   <Image className="m-3" height="60%" width="80%" src="images/csmaps/train.jpg" rounded/>