import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import AppHeader from './components/app/header';
import AppFooter from './components/app/footer';

import HomePage from './views/home';
import SimulatePage from './views/simulate';
import GroupPage from './views/group';
import NotFoundPage from './views/notFound';
import LegalPage from './views/legal';
import CreditsPage from './views/credits';
import DashboardPage from './views/dashboard';

function App() {
  return (
    <Router>
      <div className="layout">
        <div className="app-header">
          <AppHeader />
        </div>
        <div className="app-main">
          <Switch>
            <Route path="/simulate/:sessionId?" children={<SimulatePage />} />
            <Route path="/session/:groupSlug/dashboard" children={<DashboardPage />} />
            <Route path="/session/:groupSlug?" children={<GroupPage />} />
            <Route path="/legal" children={<LegalPage />} />
            <Route path="/credits" children={<CreditsPage />} />
            <Route path="/" exact={true} children={<HomePage />} />
            <Route path="/" children={NotFoundPage} />
          </Switch>
        </div>
        <div className="app-footer">
          <AppFooter />
        </div>
      </div>
    </Router>
  );
}

export default App;
