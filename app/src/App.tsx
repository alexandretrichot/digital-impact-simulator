import { Route, Routes } from 'react-router-dom';

import { AppHeader } from './components/app/header';
import { AppFooter } from './components/app/footer';

import { HomePage } from './views/home';
import { SimulatePage } from './views/simulate';
import { GroupPage } from './views/group';
import { NotFoundPage } from './views/notFound';
import { LegalPage } from './views/legal';
import { CreditsPage } from './views/credits';
import { DashboardPage } from './views/dashboard';

export const App: React.FC = () => {
  return (
    <div className='layout'>
      <div className='app-header'>
        <AppHeader />
      </div>
      <div className='app-main'>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/simulate/:sessionId' element={<SimulatePage />} />
          <Route path='/simulate' element={<SimulatePage />} />
          <Route path='/session/:groupSlug/dashboard' element={<DashboardPage />} />
          <Route path='/session/:groupSlug' element={<GroupPage />} />
          <Route path='/session' element={<GroupPage />} />
          <Route path='/legal' element={<LegalPage />} />
          <Route path='/credits' element={<CreditsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
      <div className='app-footer'>
        <AppFooter />
      </div>
    </div>
  );
};
