import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Agendar from './pages/Agendamento/Agendar';
import Consultar from './pages/Consulta/Consulta';

// IMPORTAÇÃO GLOBAL (Respeita o fundo e layout)
import './style/global.css';
import './style/components.css';

function App() {
  return (
    <BrowserRouter>
      <div className="background-image"></div>
      <Navbar />
      <main>
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