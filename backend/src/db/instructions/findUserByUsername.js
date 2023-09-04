const { User } = require('../models');

async function findUserByUsername(username) {
  try {
    // Find the user by their username
    const foundUser = await User.findOne({ where: { username } });

    return foundUser;
  } catch (error) {
    console.error('Error finding user by username:', error);
    return null;
  }
}

async function main() {
  const usernameToFind = 'user5'; // Replace with the username you want to find
  const foundUser = await findUserByUsername(usernameToFind);

  if (foundUser) {
    // Use the foundUser object as needed
    console.log(foundUser);
  } else {
    console.log('User not found.');
  }
}

main();
