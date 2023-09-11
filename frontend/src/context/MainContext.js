import { createContext } from 'react';
import useAppData from '../reducers/useAppData';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const applicationData = useAppData();

  return (
    <DataContext.Provider value={{ ...applicationData }}>
      {children}
    </DataContext.Provider>
  );
};
