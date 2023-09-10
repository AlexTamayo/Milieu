'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const socialMediaData = [
      {
        platform: 'Facebook',
        link: 'https://facebook.com/sushiyazo',
        businessId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        platform: 'Instagram',
        link: 'https://instagram.com/sushiyazo',
        businessId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        platform: 'Twitter',
        link: 'https://twitter.com/sushiyazo',
        businessId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        platform: 'Twitter',
        link: 'https://twitter.com/autofix_garage',
        businessId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        platform: 'Instagram',
        link: 'https://instagram.com/bella_italiano',
        businessId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        platform: 'LinkedIn',
        link: 'https://linkedin.com/company/carmasters_workshop',
        businessId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        platform: 'YouTube',
        link: 'https://youtube.com/c/thepizzeria',
        businessId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        platform: 'Facebook',
        link: 'https://facebook.com/motocare_center',
        businessId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        platform: 'Instagram',
        link: 'https://instagram.com/ocean_seafood_grill',
        businessId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        platform: 'Twitter',
        link: 'https://twitter.com/drivethru_repairs',
        businessId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        platform: 'LinkedIn',
        link: 'https://linkedin.com/company/bistro_delight',
        businessId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        platform: 'YouTube',
        link: 'https://youtube.com/c/wheels_more',
        businessId: 10,
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

