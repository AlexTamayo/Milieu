// frontend\src\components\UserList.js
import React from 'react';
import { useGetAllUsers } from '../utils/apiHooks';

function UserList() {
  const { users, error } = useGetAllUsers();

  if (error) {
    return <div>Error loading users</div>;
  }

  if (!users.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.firstName} {user.lastName}</div>
      ))}
    </div>
  );
}

export default UserList;
