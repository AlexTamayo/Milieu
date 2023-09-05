'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define the event branding data
    const eventBrandingData = [
      {
        logoUrl: 'https://example.com/logo1.jpg',
        bannerUrl: 'https://example.com/banner1.jpg',
        pinUrl: 'https://example.com/pin1.jpg',
        eventId: 1, // Set the eventId for the association
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://example.com/logo2.jpg',
        bannerUrl: 'https://example.com/banner2.jpg',
        pinUrl: 'https://example.com/pin2.jpg',
        eventId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://example.com/logo3.jpg',
        bannerUrl: 'https://example.com/banner3.jpg',
        pinUrl: 'https://example.com/pin3.jpg',
        eventId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://example.com/logo4.jpg',
        bannerUrl: 'https://example.com/banner4.jpg',
        pinUrl: 'https://example.com/pin4.jpg',
        eventId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://example.com/logo5.jpg',
        bannerUrl: 'https://example.com/banner5.jpg',
        pinUrl: 'https://example.com/pin5.jpg',
        eventId: 5,
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

