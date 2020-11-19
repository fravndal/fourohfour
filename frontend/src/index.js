import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainLayout from "./components/MainLayout.js";
import Frontpage from "./pages/FrontPage.js";
import About from "./pages/About.js";
import Tips from "./pages/Tips.js";
import Stats from "./pages/Stats.js";

ReactDOM.render(
 
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/tips" component={Tips} />
          <Route path="/stats" component={Stats} />
          <Route path="/" component={Frontpage} />
        </Switch>
      </MainLayout>
    </Router>,
  
  document.getElementById("root")
);
