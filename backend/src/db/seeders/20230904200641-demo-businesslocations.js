

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('BusinessLocations', [
      {
        longitude: -114.0719, // Replace with the actual longitude
        latitude: 50.861910,  // Replace with the actual latitude
        streetAddress: '123 Main Street',
        city: 'Calgary',
        region: 'AB',
        postalCode: 'T2P 1J9',
        country: 'Canada',
        businessId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -114.0710, // Replace with the actual longitude
        latitude: 50.862311,  // Replace with the actual latitude
        streetAddress: '456 Elm Street',
        city: 'Calgary',
        region: 'AB',
        postalCode: 'T2P 1K1',
        businessId: 2,
        country: 'Canada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -114.0680, // Replace with the actual longitude
        latitude: 50.862511,  // Replace with the actual latitude
        streetAddress: '789 Oak Avenue',
        city: 'Calgary',
        region: 'AB',
        businessId: 3,
        postalCode: 'T2P 1L2',
        country: 'Canada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -122.982500, // Replace with the actual longitude
        latitude: 49.243870,  // Replace with the actual latitude
        streetAddress: '1011 Maple Lane',
        city: 'Calgary',
        region: 'AB',
        businessId: 4,
        postalCode: 'T2P 1M4',
        country: 'Canada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -122.981200, // Replace with the actual longitude
        latitude: 49.243670,  // Replace with the actual latitude
        streetAddress: '1313 Cedar Road',
        city: 'Calgary',
        region: 'AB',
        businessId: 5,
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
