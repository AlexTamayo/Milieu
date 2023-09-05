'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define the business category data
    const businessCategoryData = [
      {
        name: 'Category 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Category 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Category 3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Category 4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Category 5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insert the business category data into the database
    await queryInterface.bulkInsert('BusinessCategories', businessCategoryData, {});

    // You can adjust the category names as needed.
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the business category data if needed
    await queryInterface.bulkDelete('BusinessCategories', null, {});
  },
};
