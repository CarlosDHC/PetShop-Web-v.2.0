import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Agendar.module.css';

export default function Agendar() {
  const [formData, setFormData] = useState({
    cliente: '',
    pet: '',
    data: '',
    hora: '',
    servico: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aqui entrará futuramente o código do Supabase para guardar no banco de dados
    console.log("Dados prontos para enviar:", formData);
    alert('Função de agendamento será conectada ao banco de dados em breve!');
    
    // Limpar o formulário após submeter
    setFormData({ cliente: '', pet: '', data: '', hora: '', servico: '' });
  };

  return (
    <div style={{ padding: '120px 20px 80px' }}> {/* Espaçamento para não ficar debaixo da Navbar fixa */}
      <form onSubmit={handleSubmit} style={{ 
          maxWidth: '700px', margin: '0 auto', padding: '30px', 
          backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: '8px' 
      }}>
          <h2 style={{ fontSize: '20px', color: '#000', marginBottom: '20px' }}>Agendamento PetShop:</h2>
          
          <label style={{ display: 'block', marginBottom: '5px' }}>Cliente:</label>
          <input type="text" name="cliente" value={formData.cliente} onChange={handleChange} required style={inputStyle} />

          <label style={{ display: 'block', marginBottom: '5px' }}>Pet:</label>
          <input type="text" name="pet" value={formData.pet} onChange={handleChange} required style={inputStyle} />

          {/* Futuro campo para upload da imagem do Pet */}
          <label style={{ display: 'block', marginBottom: '5px' }}>Foto do Pet (Opcional):</label>
          <input type="file" accept="image/*" style={inputStyle} />

          <label style={{ display: 'block', marginBottom: '5px' }}>Data:</label>
          <input type="date" name="data" value={formData.data} onChange={handleChange} required style={inputStyle} />

          <label style={{ display: 'block', marginBottom: '5px' }}>Hora:</label>
          <input type="time" name="hora" value={formData.hora} onChange={handleChange} required style={inputStyle} />

          <label style={{ display: 'block', marginBottom: '5px' }}>Serviço:</label>
          <input type="text" name="servico" value={formData.servico} onChange={handleChange} required style={inputStyle} />

          <button type="submit" style={btnStyle}>Agendar</button>
      </form>
    </div>
  );
}

// Estilos embutidos para simplificar, mas podem ir para o index.css
const inputStyle = { width: '100%', padding: '5px', marginBottom: '10px', boxSizing: 'border-box' };
const btnStyle = { backgroundColor: '#1b0f23', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', display: 'block', margin: '0 auto' };