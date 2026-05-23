import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './layouts/AppLayout.jsx';
import Home from './pages/Home.jsx';
import Business from './pages/Business.jsx';
import Carriers from './pages/Carriers.jsx';
import Contacts from './pages/Contacts.jsx';

const App = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="/business" element={<Business />} />
      <Route path="/carriers" element={<Carriers />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/request" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
);

export default App;
