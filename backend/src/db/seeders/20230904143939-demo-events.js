'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const eventsData = [
      {
        title: 'Community Picnic Day 1',
        description: 'Join us for a fun-filled community picnic at Central Park!',
        status: 'Active',
        startTime: new Date('2023-09-10T10:00:00Z'),
        endTime: new Date('2023-09-10T15:00:00Z'),
        timeZone: 'UTC',
        ownerId: 1,
        eventCategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Cultural Festival Opening',
        description: 'Celebrate the diverse cultures of our city at the Cultural Festival opening ceremony.',
        status: 'Active',
        startTime: new Date('2023-09-11T14:00:00Z'),
        endTime: new Date('2023-09-11T18:00:00Z'),
        timeZone: 'UTC',
        ownerId: 1,
        eventCategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Community Picnic Day 2',
        description: 'Another day of community bonding, games, and delicious food!',
        status: 'Active',
        startTime: new Date('2023-09-12T10:00:00Z'),
        endTime: new Date('2023-09-12T15:00:00Z'),
        timeZone: 'UTC',
        ownerId: 2,
        eventCategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Cultural Music Night',
        description: 'Experience the soulful rhythms of different cultures tonight.',
        status: 'Active',
        startTime: new Date('2023-09-13T17:00:00Z'),
        endTime: new Date('2023-09-13T21:00:00Z'),
        timeZone: 'UTC',
        ownerId: 3,
        eventCategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Community Sports Day',
        description: 'Take part in friendly sports competitions at the community picnic.',
        status: 'Active',
        startTime: new Date('2023-09-14T10:00:00Z'),
        endTime: new Date('2023-09-14T15:00:00Z'),
        timeZone: 'UTC',
        ownerId: 4,
        eventCategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Cultural Food Fair',
        description: 'Taste delicacies from various cultures at our food stalls.',
        status: 'Active',
        startTime: new Date('2023-09-15T12:00:00Z'),
        endTime: new Date('2023-09-15T18:00:00Z'),
        timeZone: 'UTC',
        ownerId: 5,
        eventCategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Picnic Talent Show',
        description: 'Showcase your skills at our community talent show!',
        status: 'Active',
        startTime: new Date('2023-09-16T11:00:00Z'),
        endTime: new Date('2023-09-16T14:00:00Z'),
        timeZone: 'UTC',
        ownerId: 6,
        eventCategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Cultural Dance Evening',
        description: 'Dance to the vibrant beats of various cultural performances.',
        status: 'Active',
        startTime: new Date('2023-09-17T18:00:00Z'),
        endTime: new Date('2023-09-17T21:00:00Z'),
        timeZone: 'UTC',
        ownerId: 2,
        eventCategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Community Art and Craft',
        description: 'Discover the artistry within you at our community art and craft session.',
        status: 'Active',
        startTime: new Date('2023-09-18T10:00:00Z'),
        endTime: new Date('2023-09-18T13:00:00Z'),
        timeZone: 'UTC',
        ownerId: 3,
        eventCategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Cultural Costume Parade',
        description: 'Marvel at the traditional attire from different cultures in our parade.',
        status: 'Active',
        startTime: new Date('2023-09-19T16:00:00Z'),
        endTime: new Date('2023-09-19T19:00:00Z'),
        timeZone: 'UTC',
        ownerId: 6,
        eventCategoryId: 2,
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
