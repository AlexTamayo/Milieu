import React, { useContext } from 'react';
import { DataContext } from '../context/dataProviderContext'; // Ensure the correct import path

function TestComponent() {
  const { eventData, businessData, userData } = useContext(DataContext);

  // Ensure userData.data is an array before mapping
  const users = Array.isArray(userData.data) ? userData.data : [];
  const events = Array.isArray(eventData.data) ? eventData.data : [];
  const businesses = Array.isArray(businessData.data) ? businessData.data : [];
  // Now users is an array of user objects
  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>

      <h2>Businesses</h2>
      <ul>
        {businesses.map((business) => (
          <li key={business.id}>{business.name}</li>
        ))}
      </ul>

      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}
export default TestComponent;