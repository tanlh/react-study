import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const alreadyLoggedIn = localStorage.getItem('LOGGED_IN') === '1';
    setIsLoggedIn(alreadyLoggedIn);
  }, []);

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem('LOGGED_IN', '1');
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('LOGGED_IN');
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
