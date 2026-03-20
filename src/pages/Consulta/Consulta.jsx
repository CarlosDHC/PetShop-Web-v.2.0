import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Consultar() {
  const [numID, setNumID] = useState('');
  const [dadosConsulta, setDadosConsulta] = useState({
    cliente: '', pet: '', data: '', hora: '', servico: ''
  });

  const handleBuscar = async (e) => {
    e.preventDefault();
    if (!numID) return;

    // Aqui entrará o código do Supabase para pesquisar pelo ID
    console.log("A procurar pelo ID:", numID);
    alert(`A procurar registo ${numID}... (A conectar ao banco de dados futuramente)`);
  };

  const limparFormulario = () => {
    setNumID('');
    setDadosConsulta({ cliente: '', pet: '', data: '', hora: '', servico: '' });
  };

  return (
    <div style={{ padding: '145px 20px 80px' }}>
      <form style={{ 
          maxWidth: '500px', margin: '0 auto', padding: '15px', 
          backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: '8px' 
      }}>
          <h2 style={{ fontSize: '20px', color: '#000', marginBottom: '20px' }}>Consultar dados através do código ID:</h2>
          
          <label style={{ display: 'block', marginBottom: '5px' }}>Código ID:</label>
          <input type="number" value={numID} onChange={(e) => setNumID(e.target.value)} style={inputStyle} />
          
          <label style={{ display: 'block', marginBottom: '5px' }}>Cliente:</label>
          <input type="text" readOnly value={dadosConsulta.cliente} style={inputStyle} />
          
          <label style={{ display: 'block', marginBottom: '5px' }}>Pet:</label>
          <input type="text" readOnly value={dadosConsulta.pet} style={inputStyle} />
          
          <label style={{ display: 'block', marginBottom: '5px' }}>Data:</label>
          <input type="date" readOnly value={dadosConsulta.data} style={inputStyle} />
          
          <label style={{ display: 'block', marginBottom: '5px' }}>Hora:</label>
          <input type="time" readOnly value={dadosConsulta.hora} style={inputStyle} />
          
          <label style={{ display: 'block', marginBottom: '5px' }}>Serviço:</label>
          <input type="text" readOnly value={dadosConsulta.servico} style={inputStyle} />
          
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <button type="button" onClick={handleBuscar} style={{...btnStyle, flex: 1}}>Consultar</button>
              <button type="button" onClick={limparFormulario} style={{...btnStyle, flex: 1}}>Limpar</button>
          </div>
      </form>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/consultartodos" style={{ 
            display: 'inline-block', padding: '10px', backgroundColor: '#1b0f23', 
            color: '#fff', textDecoration: 'none', borderRadius: '5px' 
        }}>
            Meus Agendamentos
        </Link>
      </div>
    </div>
  );
}

const inputStyle = { width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' };
const btnStyle = { backgroundColor: '#1b0f23', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' };