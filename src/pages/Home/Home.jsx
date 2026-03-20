import { Link } from 'react-router-dom';
import './Home.module.css';

export default function Home() {
  return (
    <>
      <section className="header1" id="header16-6">
          <div className="container">
              <div className="row justify-content-md-center">
                  <div className="col-md-10 align-center">
                      <h1 className="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-2">
                          <i className="fa fa-calendar" aria-hidden="true"></i> Agendamento PetShop
                      </h1>
                      <p className="mbr-text pb-3 mbr-fonts-style display-5">
                          Agendamento online, a fim de evitar filas e esperas desnecessárias.
                      </p>
                      <div className="mbr-section-btn">
                          <Link className="btn btn-md btn-black-outline display-4" to="/agendar">SAIBA MAIS</Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className="about" id="criarAgendamento">
          <div className="row">
              <div className="image">
                  <img src="/Imagem/agendamento.png" alt="Agendar" />
              </div>
              <div className="content">
                  <h3>Realizar agendamento</h3>
                  <p>Clique no botão abaixo e faça o seu agendamento online de forma simples, fácil e rápida.</p>
                  <Link to="/agendar" className="btn">Vamos nessa</Link>
              </div>
          </div>
      </section>

      <section className="about" id="consultarAgendamento">
          <div className="row">
              <div className="image">
                  <img src="/Imagem/agendabuscar.png" alt="Consultar" />
              </div>
              <div className="content">
                  <h3>Consultar agendamento</h3>
                  <p>Clique no botão abaixo e faça a sua consulta online de forma simples, fácil e rápida.</p>
                  <Link to="/consulta" className="btn">Vamos nessa</Link>
              </div>
          </div>
      </section>

      <section className="about" id="atualizarAgendamento">
          <div className="row">
              <div className="image">
                  <img src="/Imagem/agendatualiza.png" alt="Atualizar" />
              </div>
              <div className="content">
                  <h3>Atualizar dados do agendamento</h3>
                  <p>Clique no botão abaixo e faça a sua atualização de agendamento online de forma simples, fácil e rápida.</p>
                  <Link to="/atualizar" className="btn">Vamos nessa</Link>
              </div>
          </div>
      </section>

      <section className="about" id="cancelarAgendamento">
          <div className="row">
              <div className="image">
                  <img src="/Imagem/agendacancelar.png" alt="Cancelar" />
              </div>
              <div className="content">
                  <h3>Cancelar agendamento</h3>
                  <p>Clique no botão abaixo para cancelar o seu agendamento online de forma simples, fácil e rápida.</p>
                  <Link to="/cancelar" className="btn">Vamos nessa</Link>
              </div>
          </div>
      </section>
    </>
  );
}