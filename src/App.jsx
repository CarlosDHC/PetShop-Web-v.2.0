import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Agendar from './pages/Agendar';
import Consultar from './pages/Consultar';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      {/* Esta div mantém a imagem de fundo desfocada em todas as páginas */}
      <div className="background-image"></div>
      
      {/* A Navbar fica fora do Routes para aparecer sempre no topo */}
      <Navbar />
      
      {/* O Routes é a área dinâmica onde as páginas são trocadas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendar" element={<Agendar />} />
        <Route path="/consulta" element={<Consultar />} />
        {/* Futuramente, adicionaremos as rotas /atualizar e /cancelar aqui */}
      </Routes>

      {/* O Footer também fica de fora para aparecer sempre na base */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;