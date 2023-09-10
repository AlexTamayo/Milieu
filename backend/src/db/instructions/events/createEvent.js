const db = require('../../models');

async function createEvent(data) {
  try {
    const maxEventId = await db.Event.max('id');
    const nextEventId = maxEventId ? maxEventId + 1 : 1;

    // Add the businessId to the data
    data.id = nextEventId;

    // Create a new event in the database with associated data
    const event = await db.Event.create(data, {
      include: [
        {
          model: db.EventBranding,
          as: 'eventBranding',
        },
        {
          model: db.EventLocation,
          as: 'eventLocation',
        },
        {
          model: db.EventCategory,
          as: "eventCategory"
        }
      ],
    });

    return event;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
}

module.exports = createEvent;
