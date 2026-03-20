import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Agendar from './pages/Agendamento/Agendar';
import Consultar from './pages/Consulta/Consulta';
import './style/global.css';
import './style/components.css';

function App() {
  return (
    <BrowserRouter>
      <div className="background-image"></div>
      <Navbar />
      
      {/* O main com padding-top evita que a navbar cubra o conteúdo */}
      <main style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agendar" element={<Agendar />} />
          <Route path="/consulta" element={<Consultar />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;