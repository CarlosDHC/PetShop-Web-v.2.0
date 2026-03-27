import { useRef, useEffect, useContext } from "react";
import classes from "./LoginForm.module.css"; // Renomeado de LoginForm
/*import iconeUsuario from "../../assets/akar-icons_person.svg";
import iconeSenha from "../../assets/carbon_password.svg";
import ContextoUsuarioValido from "../../authCheck"; // Renomeado de ValidUserContext
import { useTranslation } from "react-i18next";*/

let ehInicial = true;

const FormularioLogin = () => {
  const { t } = useTranslation();

  const contextoUsuario = useContext(ContextoUsuarioValido);

  const referenciaEmail = useRef(null);
  const referenciaSenha = useRef(null);

  useEffect(() => {
    if (ehInicial) {
      contextoUsuario.localAuthCheck();
      ehInitial = false;
    }
  }, [contextoUsuario]);

  const manipuladorEnvio = (evento) => {
    evento.preventDefault();

    contextoUsuario.apiAuthCheck(
      referenciaEmail.current.value,
      referenciaSenha.current.value
    );
  };

  return (
    <form onSubmit={manipuladorEnvio} className={classes.formulario}>
      <div>
        <img
          className={classes.icone}
          src={iconeUsuario}
          alt="Ícone de usuário"
        />
        <input
          className={classes.entrada}
          type="email"
          id="usuario"
          name="usuario"
          autoComplete="on"
          placeholder={t("loginPage.username")}
          ref={referenciaEmail}
          required={!contextoUsuario.isLoggedIn}
          data-testid="usuario" 
        />
      </div>

      <div>
        <img
          className={classes.icone}
          src={iconeSenha}
          alt="Ícone de senha"
        />
        <input
          className={classes.entrada}
          type="password"
          id="senhaUsuario"
          name="senhaUsuario"
          autoComplete="off"
          placeholder={t("loginPage.password")}
          ref={referenciaSenha}
          required={!contextoUsuario.isLoggedIn}
          data-testid="senha" 
        />
      </div>
      <button
        className={classes.botaoLogin}
        disabled={contextoUsuario.isLoggedIn}
        data-testid="enviar" 
      >
        {contextoUsuario.isLoggedIn ? t("loginPage.alreadyLoggedIn") : t("loginPage.login")}
      </button>
    </form>
  );
};

export default FormularioLogin;