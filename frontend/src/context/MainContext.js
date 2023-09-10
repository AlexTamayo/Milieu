import { createContext } from 'react';
import useApplicationData from '../reducers/useApplicationData';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const {
    state,
    toggleUserModal,
    openUserModal,
    closeUserModal,
    openVenueModal,
    closeVenueModal,
    openUserAddVenue,
    closeUserAddVenue,
    handleCopy,
    openLoginModal,
    closeLoginModal,
    setVenueType,
    handleButtonClick,
    handleOnSearch,     
    handleOnHover,      
    handleOnSelect,     
    handleOnFocus,      
    formatResult,
    setLoading,
    clearLoading,
    setSelectedVenue,
    resetSelectedVenue,
  } = useApplicationData();

  return (
    <DataContext.Provider value={{ 
                                  state,
                                  toggleUserModal,
                                  openUserModal,
                                  closeUserModal,
                                  openVenueModal,
                                  closeVenueModal,
                                  openUserAddVenue,
                                  closeUserAddVenue,
                                  handleCopy,
                                  openLoginModal,
                                  closeLoginModal,
                                  setVenueType,
                                  handleButtonClick,
                                  handleOnSearch,    
                                  handleOnHover,      
                                  handleOnSelect,     
                                  handleOnFocus,      
                                  formatResult,
                                  setLoading,
                                  clearLoading,
                                  setSelectedVenue,
                                  resetSelectedVenue,
                                }}>
      {children}
    </DataContext.Provider>
  );
};
