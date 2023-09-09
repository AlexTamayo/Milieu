import React, { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';
import { validateToken } from '../routes/api';


const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
  
    if (token) {
      // Here, make an API call to validate the token and get the user's data
      // If valid, update your user state to reflect that the user is logged in
  
      validateToken(token).then(user => {

        const { passwordHash, ...userWithoutPassword } = user.data;
        setCurrentUser(userWithoutPassword);
      }).catch(error => {
        localStorage.removeItem('authToken');
      });
    }
  }, []);

  const signOut = () => {
    localStorage.removeItem('authToken');
    setCurrentUser(null);
  }

  const value = {
    currentUser,
    setCurrentUser,
    signOut
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
