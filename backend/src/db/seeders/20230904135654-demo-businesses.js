'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Businesses', [
      {
        name: 'Business 1',
        description: 'Description for Business 1',
        status: 'Active',
        rating: 4.5,
        reviewCount: 10,
        phoneNumber: '123-456-7890',
        email: 'business1@example.com',
        website: 'https://www.business1.com',
        ownerId: 1, // Replace with actual ownerId
        businessCategoryId: 1, // Replace with actual categoryId
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Business 2',
        description: 'Description for Business 2',
        status: 'Active',
        rating: 3.8,
        reviewCount: 20,
        phoneNumber: '987-654-3210',
        email: 'business2@example.com',
        website: 'https://www.business2.com',
        ownerId: 2, // Replace with actual ownerId
        businessCategoryId: 2, // Replace with actual categoryId
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Business 3',
        description: 'Description for Business 3',
        status: 'Inactive',
        rating: 4.0,
        reviewCount: 5,
        phoneNumber: '555-123-4567',
        email: 'business3@example.com',
        website: 'https://www.business3.com',
        ownerId: 3, // Replace with actual ownerId
        businessCategoryId: 3, // Replace with actual businessCategoryId
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Business 4',
        description: 'Description for Business 4',
        status: 'Active',
        rating: 4.2,
        reviewCount: 15,
        phoneNumber: '777-888-9999',
        email: 'business4@example.com',
        website: 'https://www.business4.com',
        ownerId: 4, // Replace with actual ownerId
        businessCategoryId: 4, // Replace with actual businessCategoryId
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Business 5',
        description: 'Description for Business 5',
        status: 'Active',
        rating: 3.5,
        reviewCount: 8,
        phoneNumber: '111-222-3333',
        email: 'business5@example.com',
        website: 'https://www.business5.com',
        ownerId: 5, // Replace with actual ownerId
        businessCategoryId: 5, // Replace with actual categoryId
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Businesses', null, {});
  },
};
