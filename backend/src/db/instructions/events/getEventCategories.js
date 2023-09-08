const db = require('../../models'); // Import your Sequelize instance

async function getEventCategories() {
  try {
    const eventCategories = await db.EventCategory.findAll();

    console.log(eventCategories);
    // 'eventCategories' will contain an array of EventCategory instances
    return eventCategories;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Optionally re-throw the error for handling elsewhere
  }
}

module.exports = getEventCategories;
