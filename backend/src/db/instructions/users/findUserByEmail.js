const { User } = require('../../models');

async function findUserByEmail(email) {
  try {
    // Find the user by their email
    const foundUser = await User.findOne({ where: { email } });

    return foundUser;
  } catch (error) {
    console.error('Error finding user by email:', error);
    return null;
  }
}

module.exports = findUserByEmail;
