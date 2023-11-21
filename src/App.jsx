import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';
// Import pages
import Dashboard from './pages/Dashboard';
import AnalyticsPage from './pages/AnalyticsPage';
import Telus from "./pages/Telus"

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/dashboard/analytics" element={<AnalyticsPage />} />
        <Route path="/search/telus" element={<Telus />} />
      </Routes>
    </>
  );
}

export default App;
