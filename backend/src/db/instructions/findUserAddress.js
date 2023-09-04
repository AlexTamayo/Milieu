const { UserAddress } = require('../models');

async function findUserAddress(userAddressId) {
  try {
    // Find the UserAddress record by its ID
    const userAddress = await UserAddress.findByPk(userAddressId);

    if (!userAddress) {
      console.error(`UserAddress with ID ${userAddressId} not found.`);
      return null;
    }

    console.log(`UserAddress with ID ${userAddressId} found.`);
    return userAddress;
  } catch (error) {
    console.error('Error finding UserAddress:', error);
    return null;
  }
}

// Create an async function to call findUserAddress
async function main() {
  const userAddressId = 3; // Replace with the actual UserAddress ID you want to find
  const foundUserAddress = await findUserAddress(userAddressId);

  if (foundUserAddress) {
    // Use the foundUserAddress object as needed
    console.log(foundUserAddress);
  } else {
    console.log('UserAddress not found.');
  }
}

// Call the main function
main();
