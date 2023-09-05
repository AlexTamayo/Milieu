const db = require('../../models'); // Import your Sequelize instance

async function deleteEvent(eventId) {
  try {
    // Check if the event with the given ID exists
    const event = await db.Event.findByPk(eventId);

    if (!event) {
      throw new Error('Event not found');
    }

    // Delete the event
    await event.destroy({ cascade: true });

    console.log('Event deleted successfully');
  } catch (error) {
    console.error('Error deleting event:', error);
    throw error;
  }
}

deleteEvent(3);

module.exports = deleteEvent;
