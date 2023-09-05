const { UserAddress } = require('../models');

async function updateUserAddress(userAddressId, updatedAddressData) {
  try {
    // Find the UserAddress record by its ID
    const userAddress = await UserAddress.findByPk(userAddressId);

    if (!userAddress) {
      console.error(`UserAddress with ID ${userAddressId} not found.`);
      return;
    }

    // Update the UserAddress record with the provided data
    await userAddress.update(updatedAddressData);

    console.log(`UserAddress with ID ${userAddressId} has been updated.`);
  } catch (error) {
    console.error('Error updating UserAddress:', error);
  }
}

// Example usage:
const userAddressId = 5; // Replace with the actual UserAddress ID you want to update
const updatedAddressData = {
  street: "derp",
  city: "derp",
  postalcode: "derp",
  region: "derp",
  // Add other updated address data fields here
};

updateUserAddress(userAddressId, updatedAddressData);
