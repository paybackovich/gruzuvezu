import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './layouts/AppLayout.jsx';
import Home from './pages/Home.jsx';
import PostRequest from './pages/PostRequest.jsx';
import Carriers from './pages/Carriers.jsx';
import Contacts from './pages/Contacts.jsx';

const App = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="/request" element={<PostRequest />} />
      <Route path="/carriers" element={<Carriers />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
);

export default App;
