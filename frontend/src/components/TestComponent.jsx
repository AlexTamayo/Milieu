import React, { useContext } from 'react';
import { DataContext } from '../context/dataProviderContext'; // Ensure the correct import path

function TestComponent() {
  const { eventData, businessData, userData } = useContext(DataContext);

  const eventArray = eventData.map((event) => (
    <li key={event.id}>{event.title}</li>
  ));
  const businessArray = businessData.map((business) => (
    <li key={business.id}>{business.name}</li>
  ));
  const userArray = userData.map((user) => (
    <li key={user.id}>{user.username}</li>
  ));

  return (
    <div>
       <h2>Events</h2>
      <ul>
        {eventArray}
      </ul>
      
      <h2>Businesses</h2>
      <ul>
        {businessArray}
      </ul>

      <h2>Users</h2>
      <ul>
        {userArray}
      </ul> 
    </div>
  );
}
export default TestComponent;