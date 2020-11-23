import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { GET_MAPS } from "../queries/GetMaps";
import ErrorHandler from "./../components/common/ErrorHandler";
import { Col, Container, Row, Image } from "react-bootstrap";
import "./../css/maps.css";



const Maps = () => {
  const { data, loading, error } = useQuery(GET_MAPS);

  // if (loading)
  //   return (
  //     <Container className="container">
  //       <Container className="loader-frame">
  //
  //       </Container>
  //     </Container>
  //   );
  // if (error)
  //   return (
  //     <Container className="container">
  //       <ErrorHandler errorMessage={`${error}`} />
  //     </Container>
  //   );
  return (
    <Fragment>

        <Container id="container">
            <Row className="d-flex text-center">
                <Col lg={4} md={4} sm={15} xl={4} xs={"auto"} className="mt-5">
                    <a href="/map">
                        <Image id="image" height="100%" width="80%" src="images/csmaps/train.jpg" rounded/>
                    </a>
                </Col>
                <Col lg={4} md={4} sm={15} xl={4} xs={"auto"} className="mt-5">
                    <a href="/map">
                        <Image id="image2" height="100%" width="80%" src="images/csmaps/overpass.jpg" rounded/>
                    </a>
                </Col>
                <Col lg={4} md={4} sm={15} xl={4} xs={"auto"} className="mt-5">
                    <a href="/map">
                        <Image id="image" height="100%" width="80%" src="images/csmaps/dust2.jpg" rounded/>
                    </a>
                </Col>
            </Row>

            <Row className="d-flex text-center">
                <Col lg={4} md={4} sm={15} xl={4} xs={"auto"} className="mt-5">
                    <a href="/map">
                        <Image id="image2" height="100%" width="80%" src="images/csmaps/mirage.jpg" rounded/>
                    </a>
                </Col>
                <Col lg={4} md={4} sm={15} xl={4} xs={"auto"} className="mt-5">
                    <a>
                        <Image id="imageDisabled" height="100%" width="80%" src="images/csmaps/nuke.jpg" rounded/>
                    </a>
                </Col>
                <Col lg={4} md={4} sm={15} xl={4} xs={"auto"} className="mt-5">
                    <a href="/map">
                        <Image id="image2" height="100%" width="80%" src="images/csmaps/inferno.jpg" rounded/>
                    </a>
                </Col>
            </Row>
            <Row className="d-flex text-center mb-5">
            <Col lg={4} md={4} sm={15} xl={4} xs={"auto"} className="mt-5">
                    <a href="/map">
                        <Image id="image" height="100%" width="80%" src="images/csmaps/vertigo.jpg" rounded/>
                    </a>
                </Col>
                <Col lg={4} md={4} sm={15} xl={4} xs={"auto"} className="mt-5">
                    <a href="/map">
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

    </Fragment>
  );
};

export default Maps;
