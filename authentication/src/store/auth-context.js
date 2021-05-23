import React, { useEffect, useState, useCallback } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTimeMillis = new Date().getTime();
  const expirationTimeMillis = new Date(expirationTime).getTime();

  return expirationTimeMillis - currentTimeMillis;
};

const retrieveToken = () => {
  const token = localStorage.getItem('token');
  const expirationTime = localStorage.getItem('expirationTime');
  const remainingTime = calculateRemainingTime(expirationTime);

  if (remainingTime <= 60000) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return null;
  }

  return {
    token,
    duration: remainingTime,
  };
};

let logoutTimer;

export const AuthContextProvider = (props) => {
  const tokenData = retrieveToken();
  const initialToken = tokenData?.token;
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, experationTime) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', experationTime);

    const remainingTime = calculateRemainingTime(experationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
