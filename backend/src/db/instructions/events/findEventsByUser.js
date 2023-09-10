const db = require('../../models'); // Import your Sequelize instance

async function findEventsByUser(userId) {
  try {
    const events = await db.Event.findAll({
      where: { ownerId: userId }, // Assuming there is a UserId column in the Event table that references the user
      include: [
        {
          model: db.EventBranding,
          as: 'eventBranding',
        },
        {
          model: db.EventCategory,
          as: 'eventCategory',
        },
        {
          model: db.SocialMedia,
          as: 'socialMedia',
        },
        {
          model: db.EventLocation,
          as: 'eventLocation',
        },
        // Add more associations as needed
      ],
    });

    // 'events' will contain an array of Event instances associated with the user
    return events;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Optionally re-throw the error for handling elsewhere
  }
}

module.exports = findEventsByUser;
