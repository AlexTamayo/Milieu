// DataProvider.js
import { createContext, useEffect, useState } from 'react';
import { getAllEvents, getAllBusinesses, getAllUsers } from '../routes/api'; // Ensure correct import paths

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [eventData, setEventData] = useState([]);
  const [businessData, setBusinessData] = useState([]);
  const [userData, setUserData] = useState([]);

  // User modal opening and closing logic
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  
  const toggleUserModal = () => {
    setIsUserModalOpen(prevState => !prevState);
  };

  useEffect(() => {
    // Fetch data when the component mounts
    getAllEvents()
      .then((data) => setEventData(data.data))
      .catch((error) => {
        console.error('Error fetching event data:', error);
      });

    getAllBusinesses()
      .then((data) => setBusinessData(data.data))
      .catch((error) => {
        console.error('Error fetching business data:', error);
      });

      getAllUsers()
      .then((data) => setUserData(data.data))
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ eventData,
                                   businessData,
                                   userData,
                                   isUserModalOpen,
                                   toggleUserModal
                                   }}>
      {children}
    </DataContext.Provider>
  );
};
