'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const messageChainsData = [
      {
        subject: "Family Chat",
        createdAt: "2023-08-15 09:30:00",
        updatedAt: "2023-08-15 09:30:00",
      },
      {
        subject: "Project Discussion",
        createdAt: "2023-08-10 14:45:00",
        updatedAt: "2023-08-10 14:45:00",
      },
      {
        subject: "Team Meeting",
        createdAt: "2023-08-20 08:15:00",
        updatedAt: "2023-08-20 08:15:00",
      },
      {
        subject: "Vacation Plans",
        createdAt: "2023-08-05 11:45:00",
        updatedAt: "2023-08-05 11:45:00",
      },
      {
        subject: "Tech Talk",
        createdAt: "2023-08-25 17:20:00",
        updatedAt: "2023-08-25 17:20:00",
      },
    ];

    // Insert the messageChainsData into the MessageChains table
    await queryInterface.bulkInsert('MessageChains', messageChainsData, {});

    // Add more seed data or logic as needed

    return Promise.resolve();
  },

  async down(queryInterface, Sequelize) {
    // Add commands to revert the seed data if needed
    await queryInterface.bulkDelete('MessageChains', null, {});

    // Add more logic to revert other seed data as needed

    return Promise.resolve();
  },
};
