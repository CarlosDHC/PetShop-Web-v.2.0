import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Agendar from './pages/Agendamento/Agendar';
import Consultar from './pages/Consulta/Consulta';
import FormularioLogin from './components/Login/LoginForm';

// Importações das novas páginas (terás de criar estes componentes se ainda não existirem)
// import Atualizar from './pages/Atualizar/Atualizar';
// import Cancelar from './pages/Cancelar/Cancelar';

// IMPORTAÇÃO GLOBAL (Respeita o fundo e layout)
import './style/global.css';
import './style/components.css';

/**
 * Componente para proteger as rotas que requerem autenticação.
 * Se o utilizador não estiver autenticado, é redirecionado para o /login.
 */
const RotaProtegida = ({ children }) => {
  // Lógica de verificação de autenticação. 
  // Exemplo: verificar se existe um token de sessão salvo no localStorage.
  // Podes adaptar isto para usar o teu ficheiro authCheck.js ou Context API futuramente.
  const utilizadorAutenticado = localStorage.getItem('token'); 

  if (!utilizadorAutenticado) {
    // Redireciona para a página de login e substitui o histórico para não voltar atrás com o botão do browser
    return <Navigate to="/login" replace />;
  }

  // Se estiver autenticado, renderiza a página normalmente
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <div className="background-image"></div>
      <Navbar />
      <main>
        <Routes>
          {/* Rotas Públicas - Qualquer pessoa pode aceder */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<FormularioLogin />} />

          {/* Rotas Protegidas - Apenas para utilizadores com login feito */}
          <Route 
            path="/agendar" 
            element={
              <RotaProtegida>
                <Agendar />
              </RotaProtegida>
            } 
          />
          <Route 
            path="/consulta" 
            element={
              <RotaProtegida>
                <Consultar />
              </RotaProtegida>
            } 
          />
          
          {/* Novas Rotas (Protegidas) - Descomenta quando os ficheiros estiverem criados */}
          {/* <Route 
            path="/atualizar" 
            element={
              <RotaProtegida>
                <Atualizar />
              </RotaProtegida>
            } 
          />
          <Route 
            path="/cancelar" 
            element={
              <RotaProtegida>
                <Cancelar />
              </RotaProtegida>
            } 
          /> 
          */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;