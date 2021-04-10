import React from "react";

const AuthContext = React.createContext({
  isAuthenticated: false,
  login: () => {},
});

export default AuthContext;
