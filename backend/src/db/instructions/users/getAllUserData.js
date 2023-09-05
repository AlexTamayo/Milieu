const db = require('../../models'); // Import your Sequelize instance

async function getAllUserData(userId) {
  try {
    const userData = await db.User.findByPk(userId, {
      include: [
        {
          model: db.Business,
          as: 'businesses',
        },
        {
          model: db.Event,
          as: 'events',
        },
        // Add more associations here as needed
      ],
    });

    if (!userData) {
      throw new Error(`User with ID ${userId} not found.`);
    }

    return userData;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Optionally re-throw the error for handling elsewhere
  }
}

module.exports = getAllUserData;
// Example usage to get all tables associated with a user (userId = 1)
getAllUserData(1)
  .then((userData) => {
    // Handle the userData object here
    console.log('User data with associations:', userData);
    // You can access ownedBusinesses and ownedEvents in userData
  })
  .catch((error) => {
    // Handle errors here
    console.error('Error:', error);
  });
