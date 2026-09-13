import { Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio/Inicio';
import Home from './Pages/Home/Home';
import Integrantes from './Pages/Integrantes/Integrantes';
import Sobre from './Pages/Sobre/Sobre';
import FAQ from './Pages/FAQ/FAQ';
import Contato from './Pages/Contato/Contato';
import Solucao from './Pages/Solucao/Solucao';
import Missoes from './Pages/Missao/Missao';
import Layout from './components/Layout/Layout';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/integrantes/:memberId" element={<Integrantes />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/solucao" element={<Solucao />} />
        <Route path="/missoes" element={<Missoes />} />
      </Route>
    </Routes>
  );
}