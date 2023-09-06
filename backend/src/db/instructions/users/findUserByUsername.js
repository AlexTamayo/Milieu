const { User } = require('../../models');

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

module.exports = findUserByUsername;