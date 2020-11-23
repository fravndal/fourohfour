import React from "react";
import {Col, Container, Image, Row } from "react-bootstrap";
import "./../css/frontpage.css"


const Frontpage = props => {
    return (
        <React.Fragment>

            <Container id="container">
                <Row className="m-1">
                    <Col md="6">
                        <Image id="img" src="images/frontpage_mirage.png" fluid="true"></Image>
                    </Col>
                    <Col className="d-flex align-items-center text-center" md="6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer ut auctor nisl. Sed accumsan placerat dignissim. 
                    Quisque iaculis sodales lacus vel accumsan. Curabitur blandit id sem consequat eleifend. 
                    Pellentesque laoreet neque vel diam posuere suscipit. Suspendisse cursus eros sed vulputate porta. 
                    Nulla vel aliquam massa, a rhoncus enim. Mauris dignissim mi et dignissim fermentum. 
                    Donec a venenatis lorem.</Col>
                </Row>
                <Row className="m-1">
                    <Col className="d-flex align-items-center text-center" md="6">
                    Nulla lobortis eget ligula et lobortis. Integer quis odio nec dui fringilla euismod. 
                    Fusce vitae justo est. Donec porttitor sem mauris, quis luctus dui dignissim vitae. 
                    Nam lacinia tristique sapien vitae dictum. Suspendisse tincidunt commodo nibh, 
                    gravida facilisis nunc maximus ac. Maecenas lacinia ex et libero luctus imperdiet.
                    </Col>
                    <Col className="d-flex align-items-center text-center" md="6">
                        <Image id="img" src="images/frontpage_inferno.png" fluid="true"></Image>
                    </Col>
                </Row>
            </Container>

        </React.Fragment>
    );
};

export default Frontpage;