

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('EventLocations', [
      {
        longitude: -114.010914,
        latitude: 50.861811,
        streetAddress: '123 Main Street',
        city: 'Calgary',
        region: 'AB',
        eventId: 1,
        postalCode: 'T2P 1J9',
        country: 'Canada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -119.274220,
        latitude: 50.263821,
        streetAddress: '456 Elm Street',
        city: 'Calgary',
        region: 'AB',
        eventId: 2,
        postalCode: 'T2P 1K1',
        country: 'Canada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -119.273220,
        latitude: 50.263621,
        streetAddress: '789 Oak Avenue',
        city: 'Calgary',
        region: 'AB',
        eventId: 3,
        postalCode: 'T2P 1L2',
        country: 'Canada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -119.273220,
        latitude: 50.263621,
        streetAddress: '1011 Maple Lane',
        city: 'Calgary',
        region: 'AB',
        eventId: 4,
        postalCode: 'T2P 1M4',
        country: 'Canada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -122.983000,
        latitude: 49.244570,
        streetAddress: '1313 Cedar Road',
        city: 'Calgary',
        region: 'AB',
        eventId: 5,
        postalCode: 'T2P 1N7',
        country: 'Canada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('EventLocations', null, {});
  },
};
