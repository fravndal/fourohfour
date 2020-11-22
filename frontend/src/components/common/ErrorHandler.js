import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row, Image } from "react-bootstrap";
// import errorImage from "../../img/networkerror.png";

export default function ErrorHandler({ errorMessage }) {
  return (
    <Container>

      {errorMessage}

      <Container style={{
                  textAlign: "center",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}>

        

      </Container>
    </Container>
  );
}
ErrorHandler.propTypes = {
  textString: PropTypes.string
};
ErrorHandler.defaultProps = {
  textString: "Error..."
};
