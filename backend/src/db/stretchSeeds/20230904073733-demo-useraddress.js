'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define the userAddresses data array
    const userAddressesData = [
      {
        street: "123 Main Street",
        city: "New York",
        postalCode: "10001",
        region: "NY",
        userId: 1, // Replace with the actual user ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        street: "456 Elm Avenue",
        city: "Los Angeles",
        postalCode: "90001",
        region: "CA",
        userId: 2, // Replace with the actual user ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        street: "789 Oak Road",
        city: "Chicago",
        postalCode: "60601",
        region: "IL",
        userId: 3, // Replace with the actual user ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        street: "101 Pine Lane",
        city: "San Francisco",
        postalCode: "94101",
        region: "CA",
        userId: 4, // Replace with the actual user ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        street: "202 Maple Drive",
        city: "Miami",
        postalCode: "33101",
        region: "FL",
        userId: 5, // Replace with the actual user ID
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
