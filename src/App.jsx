import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home'; // Caminho atualizado
import Agendar from './pages/Agendamento/Agendar'; // Caminho atualizado
import Consultar from './pages/Consulta/Consulta'; // Caminho atualizado
import './styles/global.css'; // Importação do novo CSS global


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="background-image"></div>
        <Navbar />
        
        {/* Main garante que o conteúdo não fique escondido sob a navbar fixa */}
        <main style={{ minHeight: '80vh', paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agendar" element={<Agendar />} />
            <Route path="/consulta" element={<Consultar />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;