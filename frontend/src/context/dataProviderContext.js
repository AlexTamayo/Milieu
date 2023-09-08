//frontend/src/context/dataProviderContext.js
import { createContext, useEffect, useState } from 'react';
import { getAllEvents, getAllBusinesses, getAllUsers } from '../routes/api'; // Ensure correct import paths

export const DataContext = createContext({
  eventData: [],
  businessData: [],
  userData: [],
  selectedFilter: '',
  setSelectedFilter: () => {},
  });

export const DataProvider = ({ children }) => {
  const [eventData, setEventData] = useState([]);
  const [businessData, setBusinessData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');


  useEffect(() => {
    // Fetch data when the component mounts
    getAllEvents()
    .then((data) => {
      console.log('Fetched Event Data:', data.data); // Log fetched data
      setEventData(data.data)
    })
    .catch((error) => {
      console.error('Error fetching event data:', error);
    });

    getAllBusinesses()
    .then((data) => {
      console.log('Fetched Business Data:', data.data); // Log fetched data
      setBusinessData(data.data)
    })
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
    <DataContext.Provider value={{ eventData, businessData, userData, selectedFilter, setSelectedFilter }}>
      {children}
    </DataContext.Provider>
  );
};
