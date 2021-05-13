import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Airplanes from "./pages/Airplanes";
import Flights from "./pages/Flights";
import FlightShow from "./pages/FlightShow"
import Search from "./Search";
import Nav from "./Nav";
import Admin from "./pages/Admin";
import ReservationForm from "./forms/ReservationForm"
import '../App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Homepage}/>;
          <Route exact path="/airplanes" component={Airplanes}/>;
          <Route exact path="/flights" component={Flights}/>;
          <Route exact path="/flightShow" component={FlightShow}/>;
          <Route exact path="/search" component={Search}/>;
          <Route exact path="/admin" component={Admin}/>;
          <Route exact path="/reservation" component={ReservationForm}/>;
        </Switch>
      </div>
    </Router>
  );
}

export default App;
