import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from "./Homepage";
import Airplanes from "./Airplanes";
import Flights from "./Flights";
import Search from "./Search";
import Nav from "./Nav";
import Admin from "./Admin";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Homepage}/>;
          <Route exact path="/airplanes" component={Airplanes}/>;
          <Route exact path="/flights" component={Flights}/>;
          <Route exact path="/search" component={Search}/>;
          <Route exact path="/admin" component={Admin}/>;
        </Switch>
      </div>
    </Router>
  );
}

export default App;
