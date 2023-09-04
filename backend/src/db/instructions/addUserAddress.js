const { User, UserAddress } = require('../models');

// Rest of the code...


async function createUserAddress(userId, addressData) {
  try {
    // Check if the user with the given ID exists
    const user = await User.findByPk(userId);

    if (!user) {
      console.error(`User with ID ${userId} not found.`);
      return;
    }

    // Create the UserAddress record associated with the user
    const newUserAddress = await UserAddress.create({
      ...addressData,
      user_id: userId, // Set the user_id foreign key to link the address to the user
    });

    console.log(`UserAddress with ID ${newUserAddress.id} has been created.`);
  } catch (error) {
    console.error('Error creating UserAddress:', error);
  }
}

// Example usage:
const userId = 1; // Replace with the actual user ID
const addressData = {
  street: "123 Main Street",
  city: "New York",
  postalcode: "10001",
  region: "NY",
  // Add other address data fields here
};

createUserAddress(userId, addressData);
