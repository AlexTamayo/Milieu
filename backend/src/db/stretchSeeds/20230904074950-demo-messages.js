'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Replace 'Messages' and 'message_chains' with the actual table names if needed
    const messagesData = [
      {
        receivedAt: "2023-08-15 09:35:00",
        readAt: "2023-08-15 09:40:00",
        message: "Hello, how are you?",
        chainId: 1, // Assuming this corresponds to an existing message chain
        senderId: 1, // Assuming this is the ID of the sender user in your database
        receiverId: 2, // Assuming this is the ID of the receiver user in your database
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        receivedAt: "2023-08-10 14:50:00",
        readAt: "2023-08-10 14:55:00",
        message: `I'm doing well, thanks for asking!`,
        chainId: 1, // Assuming this corresponds to the same message chain as above
        senderId: 2, // Assuming this is the ID of the sender user in your database
        receiverId: 1, // Assuming this is the ID of the receiver user in your database
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        receivedAt: "2023-08-20 08:20:00",
        readAt: null, // Message hasn't been read yet
        message: "Can you help me with something?",
        chainId: 2, // Assuming this corresponds to a different message chain
        senderId: 3, // Assuming this is the ID of the sender user in your database
        receiverId: 4, // Assuming this is the ID of the receiver user in your database
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        receivedAt: "2023-08-05 11:50:00",
        readAt: "2023-08-05 11:55:00",
        message: "Sure, what do you need help with?",
        chainId: 2, // Assuming this corresponds to the same message chain as above
        senderId: 4, // Assuming this is the ID of the sender user in your database
        receiverId: 3, // Assuming this is the ID of the receiver user in your database
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        receivedAt: null, // Message hasn't been received yet
        readAt: null, // Message hasn't been read yet
        message: `Let's schedule a meeting for next week.`,
        chainId: 3, // Assuming this corresponds to a different message chain
        senderId: 5, // Assuming this is the ID of the sender user in your database
        receiverId: 1, // Assuming this is the ID of the receiver user in your database
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more message data as needed
    ];

    await queryInterface.bulkInsert('Messages', messagesData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remove all records from the 'Messages' table
    await queryInterface.bulkDelete('Messages', null, {});
  }
};

