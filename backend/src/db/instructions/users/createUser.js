const { User } = require('../../models');

async function addUser(userData) {
  try {
    // Create a new user with the provided data
    const newUser = await User.create(userData);

    console.log(`User with ID ${newUser.id} has been added.`);
  } catch (error) {
    console.error('Error adding user:', error);
  }
}

// Example usage:
const newUserDetails = {
  firstName: 'Alex',
  lastName: 'Broughton',
  username: 'abrought',
  email: 'alex@example.com',
  passwordHash: 'derpderpderpderp',
  dateOfBirth: '1990-01-15',
  gender: 'M',
  phoneNumber: '222-222-2222',
  status: 'active',
  role: 'user',
  lastLogin: '2023-08-15 10:30:00',
  // Add other user data fields here
};

module.exports = addUser;
addUser(newUserDetails);
