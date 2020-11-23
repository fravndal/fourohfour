import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from "@apollo/client";


import MainLayout from "./components/MainLayout.js";
import Frontpage from "./pages/FrontPage.js";
import About from "./pages/About.js";
import Maps from "./pages/Maps.js";
import Map from "./pages/Map.js";
import Stats from "./pages/Stats.js";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://127.0.0.1:8000/graphql"
});

const client = new ApolloClient({
  cache,
  link
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/maps" component={props => <Maps {...props} />}/>
          <Route path="/map" component={Map} />
          <Route path="/stats" component={Stats} />
          <Route path="/" component={Frontpage} />
        </Switch>
      </MainLayout>
    </Router>,
</ApolloProvider>,
  document.getElementById("root")
);
