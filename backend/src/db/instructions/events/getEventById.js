const db = require('../../models'); // Import your Sequelize instance

async function getEventById(eventId) {
  try {
    const event = await db.Event.findOne({
      where: { id: eventId },
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
      ],
    });

    // 'event' will contain a single Event instance with associated data
    return event;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Optionally re-throw the error for handling elsewhere
  }
}

module.exports = getEventById;
