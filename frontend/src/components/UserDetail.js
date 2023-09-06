// frontend\src\components\UserDetail.js
import React from 'react';

function UserDetail({ user }) {
  return (
    <div>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      {/* Add other user details here */}
    </div>
  );
}

export default UserDetail;
