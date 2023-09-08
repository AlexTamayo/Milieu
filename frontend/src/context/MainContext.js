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
    setVenueType
  } = useApplicationData();

  return (
    <DataContext.Provider value={{ 
                                   openLoginModal,
                                   closeLoginModal,
                                   openVenueModal,
                                   closeVenueModal,
                                   openUserAddVenue,
                                   closeUserAddVenue,
                                   toggleUserModal,
                                   setVenueType,
                                   handleCopy,
                                   state
                                   }}>
      {children}
    </DataContext.Provider>
  );
};
