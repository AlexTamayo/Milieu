const { User } = require('../../models');

async function updateUser(id, updates) {
  try {
    // Find the user you want to update by their ID
    const user = await User.findByPk(id);

    if (!user) {
      console.error("User not found");
      return;
    }

    // Update the user's information
    await user.update(updates);

    console.log(`User with ID ${id} updated successfully.`);
  } catch (error) {
    console.error("Error updating user:", error);
  }
}

const userIdToUpdate = 2; // Replace with the ID of the user you want to update
const updates = {
  firstName: 'Neasdfe',
  lastName: 'Neasdme',
  // Add other fields you want to update here
};
module.exports = updateUser;


updateUser(userIdToUpdate, updates);
