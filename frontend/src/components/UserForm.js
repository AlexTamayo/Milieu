// frontend\src\components\UserForm.js
import React, { useState } from 'react';
import { createUser } from '../utils/api';

function UserForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    // ... other fields
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(formData);
      alert('User created successfully');
    } catch (error) {
      alert('Error creating user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      {/* Add other input fields here */}
      <button type="submit">Create User</button>
    </form>
  );
}

export default UserForm;
