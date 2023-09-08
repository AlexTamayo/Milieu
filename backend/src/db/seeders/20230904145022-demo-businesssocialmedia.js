'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define the social media data
    const socialMediaData = [
      {
        platform: 'Facebook',
        link: 'https://facebook.com/sushiyazo',
        businessId: 1, // Replace with the actual business ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        platform: 'Twitter',
        link: 'https://twitter.com/business2',
        businessId: 2, // Replace with the actual business ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        platform: 'Instagram',
        link: 'https://instagram.com/business3',
        businessId: 3, // Replace with the actual business ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        platform: 'LinkedIn',
        link: 'https://linkedin.com/business4',
        businessId: 4, // Replace with the actual business ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        platform: 'YouTube',
        link: 'https://youtube.com/business5',
        businessId: 5, // Replace with the actual business ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insert the social media data into the database
    await queryInterface.bulkInsert('SocialMedia', socialMediaData, {});

    // You should replace the business IDs with the actual IDs of the businesses you want to associate with the social media profiles.
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the social media data if needed
    await queryInterface.bulkDelete('SocialMedia', null, {});
  },
};

