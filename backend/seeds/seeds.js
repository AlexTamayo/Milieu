
const db = require('../models');
const { sequelize } = require('../models');



//console.log(db);

Object.values(db).forEach(model => {
  if (model.associate) {
    model.associate(db);
  }
});

const seedData = {
  users: [
    {
      username: "user1",
      first_name: "John",
      last_name: "Doe",
      email: "user1@example.com",
      password_hash: "hashed_password_1",
      date_of_birth: "1990-01-15",
      gender: "Male",
      phone_number: "123-456-7890",
      status: "active",
      role: "user",
      last_login: "2023-08-15 10:30:00",
    },
    {
      username: "user2",
      first_name: "Jane",
      last_name: "Smith",
      email: "user2@example.com",
      password_hash: "hashed_password_2",
      date_of_birth: "1995-05-20",
      gender: "Female",
      phone_number: "987-654-3210",
      status: "inactive",
      role: "user",
      last_login: "2023-08-10 15:45:00",
    },
    {
      username: "user3",
      first_name: "Alice",
      last_name: "Johnson",
      email: "user3@example.com",
      password_hash: "hashed_password_3",
      date_of_birth: "1988-12-05",
      gender: "Female",
      phone_number: "555-123-7890",
      status: "active",
      role: "admin",
      last_login: "2023-08-20 09:15:00",
    },
    {
      username: "user4",
      first_name: "Bob",
      last_name: "Wilson",
      email: "user4@example.com",
      password_hash: "hashed_password_4",
      date_of_birth: "1980-03-25",
      gender: "Male",
      phone_number: "111-222-3333",
      status: "active",
      role: "user",
      last_login: "2023-08-05 12:00:00",
    },
    {
      username: "user5",
      first_name: "Eva",
      last_name: "Brown",
      email: "user5@example.com",
      password_hash: "hashed_password_5",
      date_of_birth: "1998-07-10",
      gender: "Female",
      phone_number: "777-888-9999",
      status: "active",
      role: "user",
      last_login: "2023-08-25 18:20:00",
    },
  ],
  friendships: [
    {
      created_at: "2023-08-15 09:30:00",
      user1_id: 1, // Assuming this is the ID of the first user in your database
      user2_id: 2, // Assuming this is the ID of the second user in your database
    },
    {
      created_at: "2023-08-10 14:45:00",
      user1_id: 2, // Assuming this is the ID of the first user in your database
      user2_id: 3, // Assuming this is the ID of the second user in your database
    },
    {
      created_at: "2023-08-20 08:15:00",
      user1_id: 4, // Assuming this is the ID of the first user in your database
      user2_id: 5, // Assuming this is the ID of the second user in your database
    },
    {
      created_at: "2023-08-05 11:45:00",
      user1_id: 1, // Assuming this is the ID of the first user in your database
      user2_id: 4, // Assuming this is the ID of the second user in your database
    },
    {
      created_at: "2023-08-25 17:20:00",
      user1_id: 3, // Assuming this is the ID of the first user in your database
      user2_id: 5, // Assuming this is the ID of the second user in your database
    },
  ],
  messages: [
    {
      created_at: "2023-08-15 09:30:00",
      received_at: "2023-08-15 09:35:00",
      read_at: "2023-08-15 09:40:00",
      message: "Hello, how are you?",
      chain_id: 1, // Assuming this corresponds to an existing message chain
      sender_id: 1, // Assuming this is the ID of the sender user in your database
      receiver_id: 2, // Assuming this is the ID of the receiver user in your database
    },
    {
      created_at: "2023-08-10 14:45:00",
      received_at: "2023-08-10 14:50:00",
      read_at: "2023-08-10 14:55:00",
      message: `I'm doing well, thanks for asking!`,
      chain_id: 1, // Assuming this corresponds to the same message chain as above
      sender_id: 2, // Assuming this is the ID of the sender user in your database
      receiver_id: 1, // Assuming this is the ID of the receiver user in your database
    },
    {
      created_at: "2023-08-20 08:15:00",
      received_at: "2023-08-20 08:20:00",
      read_at: null, // Message hasn't been read yet
      message: "Can you help me with something?",
      chain_id: 2, // Assuming this corresponds to a different message chain
      sender_id: 3, // Assuming this is the ID of the sender user in your database
      receiver_id: 4, // Assuming this is the ID of the receiver user in your database
    },
    {
      created_at: "2023-08-05 11:45:00",
      received_at: "2023-08-05 11:50:00",
      read_at: "2023-08-05 11:55:00",
      message: "Sure, what do you need help with?",
      chain_id: 2, // Assuming this corresponds to the same message chain as above
      sender_id: 4, // Assuming this is the ID of the sender user in your database
      receiver_id: 3, // Assuming this is the ID of the receiver user in your database
    },
    {
      created_at: "2023-08-25 17:20:00",
      received_at: null, // Message hasn't been received yet
      read_at: null, // Message hasn't been read yet
      message: `Let's schedule a meeting for next week.`,
      chain_id: 3, // Assuming this corresponds to a different message chain
      sender_id: 5, // Assuming this is the ID of the sender user in your database
      receiver_id: 1, // Assuming this is the ID of the receiver user in your database
    },
  ],
  messageChains: [
    {
      subject: "Family Chat",
      created_at: "2023-08-15 09:30:00",
      updated_at: "2023-08-15 09:30:00",
    },
    {
      subject: "Project Discussion",
      created_at: "2023-08-10 14:45:00",
      updated_at: "2023-08-10 14:45:00",
    },
    {
      subject: "Team Meeting",
      created_at: "2023-08-20 08:15:00",
      updated_at: "2023-08-20 08:15:00",
    },
    {
      subject: "Vacation Plans",
      created_at: "2023-08-05 11:45:00",
      updated_at: "2023-08-05 11:45:00",
    },
    {
      subject: "Tech Talk",
      created_at: "2023-08-25 17:20:00",
      updated_at: "2023-08-25 17:20:00",
    },
  ],
  posts: [
    {
      title: "Tech News",
      content: "This is a post about the latest tech news.",
      post_type: "News",
      image_url: "https://example.com/image1.jpg",
      contact_info: "tech@example.com",
      created_at: "2023-08-15 09:30:00",
      updated_at: "2023-08-15 09:30:00",
    },
    {
      title: "Recipe Sharing",
      content: "Sharing a delicious recipe with everyone!",
      post_type: "Recipe",
      image_url: "https://example.com/image2.jpg",
      contact_info: "chef@example.com",
      created_at: "2023-08-10 14:45:00",
      updated_at: "2023-08-10 14:45:00",
    },
    {
      title: "Job Opening",
      content: "We are hiring for a software engineer position.",
      post_type: "Job",
      image_url: "https://example.com/image3.jpg",
      contact_info: "hr@example.com",
      created_at: "2023-08-20 08:15:00",
      updated_at: "2023-08-20 08:15:00",
    },
    {
      title: "Travel Tips",
      content: "Sharing travel tips and experiences.",
      post_type: "Travel",
      image_url: "https://example.com/image4.jpg",
      contact_info: "traveler@example.com",
      created_at: "2023-08-05 11:45:00",
      updated_at: "2023-08-05 11:45:00",
    },
    {
      title: "Product Review",
      content: "A review of a new tech product on the market.",
      post_type: "Review",
      image_url: "https://example.com/image5.jpg",
      contact_info: "reviewer@example.com",
      created_at: "2023-08-25 17:20:00",
      updated_at: "2023-08-25 17:20:00",
    },
  ],
  postboards: [
    {
      name: "Technology Discussion",
      description: "Discuss the latest tech trends and innovations.",
      created_at: "2023-08-15 09:30:00",
      updated_at: "2023-08-15 09:30:00",
      zone_id: 1, // Replace with the actual zone ID
    },
    {
      name: "Recipe Exchange",
      description: "Share your favorite recipes with the community.",
      created_at: "2023-08-10 14:45:00",
      updated_at: "2023-08-10 14:45:00",
      zone_id: 2, // Replace with the actual zone ID
    },
    {
      name: "Job Postings",
      description: "Find job opportunities and post job openings.",
      created_at: "2023-08-20 08:15:00",
      updated_at: "2023-08-20 08:15:00",
      zone_id: 3, // Replace with the actual zone ID
    },
    {
      name: "Travel Enthusiasts",
      description: "Share travel stories and tips with fellow travelers.",
      created_at: "2023-08-05 11:45:00",
      updated_at: "2023-08-05 11:45:00",
      zone_id: 4, // Replace with the actual zone ID
    },
    {
      name: "Product Reviews",
      description: "Discuss and review products available in the market.",
      created_at: "2023-08-25 17:20:00",
      updated_at: "2023-08-25 17:20:00",
      zone_id: 5, // Replace with the actual zone ID
    },
  ],
  userAddresses: [
    {
      street: "123 Main Street",
      city: "New York",
      postalcode: "10001",
      region: "NY",
      user_id: 1, // Replace with the actual user ID
    },
    {
      street: "456 Elm Avenue",
      city: "Los Angeles",
      postalcode: "90001",
      region: "CA",
      user_id: 2, // Replace with the actual user ID
    },
    {
      street: "789 Oak Road",
      city: "Chicago",
      postalcode: "60601",
      region: "IL",
      user_id: 3, // Replace with the actual user ID
    },
    {
      street: "101 Pine Lane",
      city: "San Francisco",
      postalcode: "94101",
      region: "CA",
      user_id: 4, // Replace with the actual user ID
    },
    {
      street: "202 Maple Drive",
      city: "Miami",
      postalcode: "33101",
      region: "FL",
      user_id: 5, // Replace with the actual user ID
    },
  ],
  zones: [
    {
      name: "Zone A",
      longitude: -74.006,
      latitude: 40.7128,
    },
    {
      name: "Zone B",
      longitude: -118.2437,
      latitude: 34.0522,
    },
    {
      name: "Zone C",
      longitude: -87.6298,
      latitude: 41.8781,
    },
    {
      name: "Zone D",
      longitude: -122.4194,
      latitude: 37.7749,
    },
    {
      name: "Zone E",
      longitude: -80.1918,
      latitude: 25.7617,
    },
  ],
};

async function seedDatabase() {
  try {
    await sequelize.sync({ force: true }); // Drop and recreate all tables
    await db.User.bulkCreate(seedData.users);
    await db.Friendship.bulkCreate(seedData.friendships);
    await db.MessageChain.bulkCreate(seedData.messageChains);
    await db.Message.bulkCreate(seedData.messages);
    await db.Zone.bulkCreate(seedData.zones);
    await db.PostBoard.bulkCreate(seedData.postboards);
    await db.Post.bulkCreate(seedData.posts);
    await db.UserAddress.bulkCreate(seedData.userAddresses);


    console.log("Seed data inserted successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Close the Sequelize connection when done
    await sequelize.close();
  }
}

seedDatabase();




