const db = require('../../models'); // Import your Sequelize instance

async function updateEvent(eventId, updatedData) {
  try {
    // Find the event by its ID and include associated tables for updating
    const event = await db.Event.findByPk(eventId, {
      include: [
        {
          model: db.EventCategory,
          as: 'eventCategory',
        },
        {
          model: db.EventBranding,
          as: 'eventBranding',
        },
        {
          model: db.EventLocation,
          as: 'eventLocation',
        },
      ],
    });

    if (!event) {
      console.error(`Event with ID ${eventId} not found.`);
      return;
    }

    // Update the event data
    const {
      title,
      description,
      status,
      startTime,
      endTime,
      timeZone,
      ownerId,
      eventCategoryId,
      // Destructure other fields as needed
    } = updatedData;

    // Update the event data
    event.title = title;
    event.description = description;
    event.status = status;
    event.startTime = startTime;
    event.endTime = endTime;
    event.timeZone = timeZone;
    event.ownerId = ownerId;
    event.eventCategoryId = eventCategoryId;

    // Update associated tables if data is provided
    if (updatedData.eventCategory) {
      Object.assign(event.eventCategory, updatedData.eventCategory);
    }
    if (updatedData.eventBranding) {
      Object.assign(event.eventBranding, updatedData.eventBranding);
    }
    if (updatedData.eventLocation) {
      Object.assign(event.eventLocation, updatedData.eventLocation);
    }

    // Save the changes to the event and associated tables
    await event.save();

    console.log(`Event with ID ${eventId} and associated tables updated.`);
  } catch (error) {
    console.error('Error updating event:', error);
  }
}

module.exports = updateEvent;


// Example usage:
const eventIdToUpdate = 2; // Replace with the event ID you want to update
const updatedEventData = {
  title: 'Updated Event Title',
  description: 'Updated Event Description',
  startTime: new Date(),
  endTime: new Date(),
  timeZone: 'UTC',
  // Update other fields and associated table data as needed
};
module.exports = updateEvent;
updateEvent(eventIdToUpdate, updatedEventData);
