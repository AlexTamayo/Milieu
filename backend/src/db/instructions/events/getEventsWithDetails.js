const db = require('../../models'); // Import your Sequelize instance

async function getEventsWithDetails() {
  try {
    const events = await db.Event.findAll({
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
          model: db.EventLocation,
          as: 'eventLocation',
        },
      ],
    });

    // 'events' will contain an array of Event instances
    // Each Event instance will have associated data from branding, category, and location tables
    return events;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Optionally re-throw the error for handling elsewhere
  }
}
module.exports =getEventsWithDetails;
// Example usage:
getEventsWithDetails()
  .then((events) => {
    // Handle the events array here
    console.log(events);
  })
  .catch((error) => {
    // Handle errors here
    console.error('Error:', error);
  });
