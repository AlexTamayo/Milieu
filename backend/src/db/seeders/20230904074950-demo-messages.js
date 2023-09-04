'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Replace 'Messages' and 'message_chains' with the actual table names if needed
    const messagesData = [
      {
        created_at: "2023-08-15 09:30:00",
        received_at: "2023-08-15 09:35:00",
        read_at: "2023-08-15 09:40:00",
        message: "Hello, how are you?",
        chain_id: 1, // Assuming this corresponds to an existing message chain
        sender_id: 1, // Assuming this is the ID of the sender user in your database
        receiver_id: 2, // Assuming this is the ID of the receiver user in your database
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        created_at: "2023-08-10 14:45:00",
        received_at: "2023-08-10 14:50:00",
        read_at: "2023-08-10 14:55:00",
        message: `I'm doing well, thanks for asking!`,
        chain_id: 1, // Assuming this corresponds to the same message chain as above
        sender_id: 2, // Assuming this is the ID of the sender user in your database
        receiver_id: 1, // Assuming this is the ID of the receiver user in your database
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        created_at: "2023-08-20 08:15:00",
        received_at: "2023-08-20 08:20:00",
        read_at: null, // Message hasn't been read yet
        message: "Can you help me with something?",
        chain_id: 2, // Assuming this corresponds to a different message chain
        sender_id: 3, // Assuming this is the ID of the sender user in your database
        receiver_id: 4, // Assuming this is the ID of the receiver user in your database
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        created_at: "2023-08-05 11:45:00",
        received_at: "2023-08-05 11:50:00",
        read_at: "2023-08-05 11:55:00",
        message: "Sure, what do you need help with?",
        chain_id: 2, // Assuming this corresponds to the same message chain as above
        sender_id: 4, // Assuming this is the ID of the sender user in your database
        receiver_id: 3, // Assuming this is the ID of the receiver user in your database
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        created_at: "2023-08-25 17:20:00",
        received_at: null, // Message hasn't been received yet
        read_at: null, // Message hasn't been read yet
        message: `Let's schedule a meeting for next week.`,
        chain_id: 3, // Assuming this corresponds to a different message chain
        sender_id: 5, // Assuming this is the ID of the sender user in your database
        receiver_id: 1, // Assuming this is the ID of the receiver user in your database
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

