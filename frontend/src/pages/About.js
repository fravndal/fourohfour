import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./../css/about.css";

const About = props => {
  let page = props.match.params.page;
  return (
    <React.Fragment>
      <Jumbotron id="jumbo" className="col-lg-6 col-md-6 col-sm-6 col-xs-6 offset-3 float-md-center mt-5">
        <h1 className="text-dark">Hello!</h1>
          <p className="p-4 text-dark">Lorizzle ipsizzle dolor sit amizzle, stuff adipiscing break yo neck, yall. <br/>
            Nullizzle gangsta velizzle, gangster mammasay mammasa mamma oo sa, mofo quis, gravida vizzle, arcu. <br/>
            Fo shizzle eget tortor. Sizzle erizzle. Da bomb izzle dolor dapibus turpis tempus fo shizzle.<br/> 
            Yo pellentesque nibh izzle bizzle. Dawg in tortizzle. Bizzle eleifend rhoncizzle nisi. <br/>
            In shizzle my nizzle crocodizzle habitasse pot things. Donec dapibizzle. <br/>
            Curabitizzle shiznit brizzle, own yo' gangster, mattizzle check it out, eleifend get down get down, gangster. <br/>
            That's the shizzle suscipit. Integer sempizzle velizzle black purus.</p>
      </Jumbotron>
    </React.Fragment>
  );
};

export default About;