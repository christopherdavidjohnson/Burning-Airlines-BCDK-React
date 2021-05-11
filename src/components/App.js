
import Homepage from './Homepage'
import Nav from './Nav'
import Airplanes from './Airplanes'
import Flights from './Flights'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>

      <div className="App">

      <h1>Welcome from App.js</h1>

        <Nav />

        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/flights" component={Flights}/>
          <Route path="/airplanes" component={Airplanes}/>
        </Switch>

      </div>

    </Router>
  );
}

export default App;
