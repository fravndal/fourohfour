import React from "react";

const About = props => {
  let page = props.match.params.page;
  return (
    <React.Fragment>
      <div className="container">
        <div className="col-md-12">
          <h1 className="text-center m-5">Hello!</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;