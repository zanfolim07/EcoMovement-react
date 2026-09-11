import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import FAQ from './Pages/FAQ/FAQ';

import Layout from './components/Layout/Layout';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
      </Route>
    </Routes>
  );
}