import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from './views/home';
import SimulatePage from './views/simulate';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/simulate">Simulate</Link>
        <Switch>
          {/* ----- ROUTES ----- */}
          <Route path="/simulate/:id?" children={<SimulatePage />} />
          <Route path="/" children={<HomePage />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
