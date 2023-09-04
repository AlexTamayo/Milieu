'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('BusinessLocations', [
      {
        longitude: 114.0719, // Replace with the actual longitude
        latitude: 51.0447,  // Replace with the actual latitude
        streetAddress: '123 Main Street',
        city: 'Calgary',
        region: 'AB',
        postalCode: 'T2P 1J9',
        country: 'Canada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: 114.0710, // Replace with the actual longitude
        latitude: 51.0455,  // Replace with the actual latitude
        streetAddress: '456 Elm Street',
        city: 'Calgary',
        region: 'AB',
        postalCode: 'T2P 1K1',
        country: 'Canada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: 114.0680, // Replace with the actual longitude
        latitude: 51.0440,  // Replace with the actual latitude
        streetAddress: '789 Oak Avenue',
        city: 'Calgary',
        region: 'AB',
        postalCode: 'T2P 1L2',
        country: 'Canada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: 114.0705, // Replace with the actual longitude
        latitude: 51.0432,  // Replace with the actual latitude
        streetAddress: '1011 Maple Lane',
        city: 'Calgary',
        region: 'AB',
        postalCode: 'T2P 1M4',
        country: 'Canada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: 114.0692, // Replace with the actual longitude
        latitude: 51.0458,  // Replace with the actual latitude
        streetAddress: '1313 Cedar Road',
        city: 'Calgary',
        region: 'AB',
        postalCode: 'T2P 1N7',
        country: 'Canada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('BusinessLocations', null, {});
  },
};
