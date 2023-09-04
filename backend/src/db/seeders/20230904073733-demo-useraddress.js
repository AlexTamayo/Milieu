'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define the userAddresses data array
    const userAddressesData = [
      {
        street: "123 Main Street",
        city: "New York",
        postalcode: "10001",
        region: "NY",
        user_id: 1, // Replace with the actual user ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        street: "456 Elm Avenue",
        city: "Los Angeles",
        postalcode: "90001",
        region: "CA",
        user_id: 2, // Replace with the actual user ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        street: "789 Oak Road",
        city: "Chicago",
        postalcode: "60601",
        region: "IL",
        user_id: 3, // Replace with the actual user ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        street: "101 Pine Lane",
        city: "San Francisco",
        postalcode: "94101",
        region: "CA",
        user_id: 4, // Replace with the actual user ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        street: "202 Maple Drive",
        city: "Miami",
        postalcode: "33101",
        region: "FL",
        user_id: 5, // Replace with the actual user ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insert the userAddresses data into the UserAddresses table
    await queryInterface.bulkInsert('UserAddresses', userAddressesData, {});
  },

  async down (queryInterface, Sequelize) {
    // Delete all rows from the UserAddresses table
    await queryInterface.bulkDelete('UserAddresses', null, {});
  }
};
