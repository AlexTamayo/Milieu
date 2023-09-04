'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define the events data
    const eventsData = [
      {
        title: 'Event 1',
        description: 'Description for Event 1',
        status: 'Active',
        startTime: new Date('2023-09-10T10:00:00Z'),
        endTime: new Date('2023-09-10T15:00:00Z'),
        timeZone: 'UTC',
        ownerId: 1, // Replace with the actual owner ID
        eventCategoryId: 3, // Replace with the actual category ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Event 2',
        description: 'Description for Event 2',
        status: 'Active',
        startTime: new Date('2023-09-15T14:00:00Z'),
        endTime: new Date('2023-09-15T18:00:00Z'),
        timeZone: 'UTC',
        ownerId: 2, // Replace with the actual owner ID
        eventCategoryId: 2, // Replace with the actual category Id
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Event 3',
        description: 'Description for Event 3',
        status: 'Active',
        startTime: new Date('2023-09-20T09:00:00Z'),
        endTime: new Date('2023-09-20T17:00:00Z'),
        timeZone: 'UTC',
        ownerId: 3, // Replace with the actual owner ID
        eventCategoryId: 1, // Replace with the actual category ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Event 4',
        description: 'Description for Event 4',
        status: 'Active',
        startTime: new Date('2023-09-25T11:00:00Z'),
        endTime: new Date('2023-09-25T16:00:00Z'),
        timeZone: 'UTC',
        ownerId: 4, // Replace with the actual owner ID
        eventCategoryId: 5, // Replace with the actual category ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Event 5',
        description: 'Description for Event 5',
        status: 'Active',
        startTime: new Date('2023-09-30T12:00:00Z'),
        endTime: new Date('2023-09-30T19:00:00Z'),
        timeZone: 'UTC',
        ownerId: 5, // Replace with the actual owner ID
        eventCategoryId: 4, // Replace with the actual category ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insert the events into the database
    await queryInterface.bulkInsert('Events', eventsData, {});

    // You may need to update the owner ID, category ID, and venue ID values as per your actual database data.
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the events data if needed
    await queryInterface.bulkDelete('Events', null, {});
  },
};
