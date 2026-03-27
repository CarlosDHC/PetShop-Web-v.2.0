import { createContext } from "react";

const ContextoUsuarioValido = createContext({
  isLoggedIn: false,
  localAuthCheck: () => {},
  apiAuthCheck: (usuario, senha) => {}
});

export default ContextoUsuarioValido;