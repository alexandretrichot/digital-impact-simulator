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
import NotFoundPage from './views/notFound';

function App() {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route path="/simulate/:sessionId?" children={<SimulatePage />} />
        <Route path="/group/:groupSlug?" children={<SimulateWithGroupPage />} />
        <Route path="/" exact={true} children={<HomePage />} />
        <Route path="/" children={NotFoundPage} />
      </Switch>
      <AppFooter />
    </Router>
  );
}

export default App;
