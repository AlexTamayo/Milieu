const db = require('../../models'); // Import your Sequelize instance

async function getUserTableData(userId, tableName) {
  try {
    // Define a mapping of table names to Sequelize models
    const tableToModelMap = {
      businesses: db.Business,
      events: db.Event,
      // Add more table names and corresponding models as needed
    };

    // Check if the provided table name exists in the mapping
    if (!tableToModelMap[tableName]) {
      throw new Error(`Table '${tableName}' does not exist or is not supported.`);
    }

    // Find all rows in the specified table for the user with the given ID
    const userTableData = await tableToModelMap[tableName].findAll({
      where: {
        ownerId: userId,
      },
    });

    return userTableData;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Optionally re-throw the error for handling elsewhere
  }
}
module.exports = getUserTableData;

// Example usage to get all of a user's own businesses (userId = 1)
getUserTableData(1, 'businesses')
  .then((businesses) => {
    // Handle the businesses array here
    console.log('User\'s own businesses:', businesses);
  })
  .catch((error) => {
    // Handle errors here
    console.error('Error:', error);
  });

// Example usage to get all of a user's own events (userId = 2)
getUserTableData(2, 'events')
  .then((events) => {
    // Handle the events array here
    console.log('User\'s own events:', events);
  })
  .catch((error) => {
    // Handle errors here
    console.error('Error:', error);
  });
