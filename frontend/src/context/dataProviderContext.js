// DataProvider.js
import { createContext, useEffect, useState } from 'react';
import { getAllEvents, getAllBusinesses, getAllUsers } from '../routes/api'; // Ensure correct import paths

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [eventData, setEventData] = useState([]);
  const [businessData, setBusinessData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    getAllEvents()
      .then((data) => {
        // console.log(data.data);
        // console.log(data);
        setEventData(data.data);
        })
      .catch((error) => {
        console.error('Error fetching event data:', error);
      });

    getAllBusinesses()
      .then((data) => setBusinessData(data.data))
      .catch((error) => {
        console.error('Error fetching business data:', error);
      });

      getAllUsers()
      .then((data) => {
        console.log('Fetched userData:', data.data);
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ eventData, businessData, userData }}>
      {children}
    </DataContext.Provider>
  );
};
