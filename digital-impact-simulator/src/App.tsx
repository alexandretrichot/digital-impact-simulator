import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import AppHeader from './components/app/header';
import AppFooter from './components/app/footer';

import HomePage from './views/home';
import SimulatePage from './views/simulate';
import SimulateWithGroupPage from './views/simulateWithGroup';

function App() {
  return (
    <Router>
      <AppHeader />
      <Switch>
        {/* ----- ROUTES ----- */}
        <Route path="/" children={<HomePage />} />
        <Route path="/simulate/:sessionId?" children={<SimulatePage />} />
        <Route path="/group/:groupId?" children={<SimulateWithGroupPage />} />
      </Switch>
      <AppFooter />
    </Router>
  );
}

export default App;
