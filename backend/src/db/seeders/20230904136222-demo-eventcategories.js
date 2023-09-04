'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define the event categories data
    const eventCategoriesData = [
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

    // Insert the event categories into the database
    await queryInterface.bulkInsert('EventCategories', eventCategoriesData, {});

    // You can adjust the category names as needed.
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the event categories data if needed
    await queryInterface.bulkDelete('EventCategories', null, {});
  },
};

