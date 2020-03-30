import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Home from "./component/Home";
import About from "./component/About";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import Rooms from "./component/Rooms";
import Contatcs from "./component/Contacts";

const routing = (
  <Router>
    <div>
      {/*      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
          <li>
          <Link to="/Users">Users</Link>
        </li>
        <li>
          <Link to="/Contacts">Contacts</Link>
        </li> 
      </ul> */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/About" component={About} exact />
        <Route path="/Rooms" component={Rooms} exact />
        <Route path="/Contacts" component={Contatcs} exact />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
