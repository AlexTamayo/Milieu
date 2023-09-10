import { createContext } from 'react';
import useApplicationData from '../reducers/useApplicationData';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const {
    state,
    toggleUserModal,
    openUserModal,
    closeUserModal,
    closeVenueModal,
    openUserAddVenue,
    closeUserAddVenue,
    handleCopy,
    openLoginModal,
    closeLoginModal,
    handleButtonClick,
    handleOnSearch,     
    handleOnHover,      
    handleOnSelect,     
    handleOnFocus,      
    formatResult,
    setLoading,
    clearLoading,
    setSelectedVenue,
  } = useApplicationData();

  return (
    <DataContext.Provider value={{ 
                                  state,
                                  toggleUserModal,
                                  openUserModal,
                                  closeUserModal,
                                  closeVenueModal,
                                  openUserAddVenue,
                                  closeUserAddVenue,
                                  handleCopy,
                                  openLoginModal,
                                  closeLoginModal,
                                  handleButtonClick,
                                  handleOnSearch,    
                                  handleOnHover,      
                                  handleOnSelect,     
                                  handleOnFocus,      
                                  formatResult,
                                  setLoading,
                                  clearLoading,
                                  setSelectedVenue,
                                }}>
      {children}
    </DataContext.Provider>
  );
};
