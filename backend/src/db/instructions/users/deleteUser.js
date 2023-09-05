const { User } = require('../../models');

async function deleteUserById(userId) {
  try {
    // Find the user by their ID
    const user = await User.findByPk(userId);

    if (!user) {
      console.error(`User with ID ${userId} not found.`);
      return;
    }

    // Delete the user
    await user.destroy();

    console.log(`User with ID ${userId} has been deleted.`);
  } catch (error) {
    console.error('Error deleting user:', error);
  }
}

module.exports = deleteUserById;
// Example usage:
const userIdToDelete = 6; // Replace with the user ID you want to delete
deleteUserById(userIdToDelete);
