import React, { useState } from 'react';
import dataContext from './MyContext';
import useParseBusinessAndEventData from '../hooks/useParseBusinessAndEventData.js';
import useGetAllUsers from '../hooks/useGetAllUsers';
import useBusinessMapData from '../hooks/useBusinessMapData';

const dataContextProvider = ({ children }) => {
  const { users, error: usersError } = useGetAllUsers();
  const { businessData, error: businessError } = useBusinessMapData();
  const {data} = useParseBusinessAndEventData();

  //set state for the arrays of busineesses,events and users
  const [businessData, setBusinessData] = useState(null);
  const [eventData, setEventData] = useState(null);
  const [users, setUsers] = useState(null);



  const data = {
    users,
    businessData,
    eventData,
    error: {
      users: usersError,
      business: businessError,
      events: eventError,
    },
  };


  //grab the data for events, users, businesses
  //and set the state for the user, business and event


  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  );
};

export default dataContextProvider;
