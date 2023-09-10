'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define the event branding data
    const eventBrandingData = [
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        eventId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        eventId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        eventId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        eventId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        eventId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        eventId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        eventId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        eventId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        eventId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        eventId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insert the event branding data into the database
    await queryInterface.bulkInsert('EventBrandings', eventBrandingData, {});

    // You can adjust the URLs and eventId values as needed.
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the event branding data if needed
    await queryInterface.bulkDelete('EventBrandings', null, {});
  },
};

