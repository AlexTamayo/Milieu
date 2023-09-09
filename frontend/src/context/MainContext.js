import { createContext } from 'react';
import useApplicationData from '../reducers/useApplicationData';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const {
    state,
    toggleUserModal,
    openVenueModal,
    closeVenueModal,
    openUserAddVenue,
    closeUserAddVenue,
    handleCopy,
    openLoginModal,
    closeLoginModal,
    setVenueType,
    handleButtonClick,
    setUser,
    signOut,
    handleOnSearch,     
    handleOnHover,      
    handleOnSelect,     
    handleOnFocus,      
    formatResult,
    setLoading,
    clearLoading,
  } = useApplicationData();

  return (
    <DataContext.Provider value={{ 
                                  state,
                                  toggleUserModal,
                                  openVenueModal,
                                  closeVenueModal,
                                  openUserAddVenue,
                                  closeUserAddVenue,
                                  handleCopy,
                                  openLoginModal,
                                  closeLoginModal,
                                  setVenueType,
                                  handleButtonClick,
                                  setUser,
                                  signOut,
                                  handleOnSearch,    
                                  handleOnHover,      
                                  handleOnSelect,     
                                  handleOnFocus,      
                                  formatResult,
                                  setLoading,
                                  clearLoading,
                                }}>
      {children}
    </DataContext.Provider>
  );
};
