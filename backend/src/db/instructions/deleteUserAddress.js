const {UserAddress } = require('../models');

async function deleteUserAddress(userAddressId) {
  try {
    // Find the user address by its ID
    const userAddress = await UserAddress.findByPk(userAddressId);

    if (!userAddress) {
      console.error(`UserAddress with ID ${userAddressId} not found.`);
      return;
    }

    // Delete the user address
    await userAddress.destroy();

    console.log(`UserAddress with ID ${userAddressId} has been deleted.`);
  } catch (error) {
    console.error('Error deleting UserAddress:', error);
  }
}

// Example usage:
const userAddressIdToDelete = 5; // Replace with the actual user address ID
deleteUserAddress(userAddressIdToDelete);
