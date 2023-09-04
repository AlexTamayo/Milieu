'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define the business branding data
    const businessBrandingData = [
      {
        logoUrl: 'logo1.jpg',
        bannerUrl: 'banner1.jpg',
        pinUrl: 'pin1.jpg',
        businessId: 1, // Replace with the actual business ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo2.jpg',
        bannerUrl: 'banner2.jpg',
        pinUrl: 'pin2.jpg',
        businessId: 2, // Replace with the actual business ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo3.jpg',
        bannerUrl: 'banner3.jpg',
        pinUrl: 'pin3.jpg',
        businessId: 3, // Replace with the actual business ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo4.jpg',
        bannerUrl: 'banner4.jpg',
        pinUrl: 'pin4.jpg',
        businessId: 4, // Replace with the actual business ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo5.jpg',
        bannerUrl: 'banner5.jpg',
        pinUrl: 'pin5.jpg',
        businessId: 5, // Replace with the actual business ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insert the business branding data into the database
    await queryInterface.bulkInsert('BusinessBrandings', businessBrandingData, {});

    // You should replace the business IDs with the actual IDs of the businesses you want to associate with the branding.
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the business branding data if needed
    await queryInterface.bulkDelete('BusinessBrandings', null, {});
  },
};

