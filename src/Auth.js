import React, { useState, useEffect } from 'react';
import fire from './fire';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, serCurrentUser] = useState(null);

  useEffect(() => {
    fire.auth().onAuthStateChanged(serCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
