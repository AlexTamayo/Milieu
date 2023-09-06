import { createContext, useState, useEffect } from 'react';

// export const UserModalContext = createContext({
//   isUserModalOpen: false,
//   openUserModal: () => {},
//   closeUserModal: () => {}
// });


export const UserModalContext = createContext();

export const UserModalProvider = ({ children }) => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  
  const toggleUserModal = () => {
    setIsUserModalOpen(prevState => !prevState);
  };

  return (
    < UserModalContext.Provider value={{ isUserModalOpen, toggleUserModal }} >
      {children}
    </ UserModalContext.Provider >
  );
};

