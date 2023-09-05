// createEvent.js
const db = require('../../models'); // Import your Sequelize instance

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



// Create an event data object
const eventData = {
  title: 'Sample Event',
  description: 'This is a sample event description.',
  status: 'Active',
  startTime: new Date(),
  endTime: new Date(),
  timeZone: 'UTC',
  ownerId: 1, // Replace with the actual owner's ID
  eventCategoryId: 1, // Replace with the actual category ID
  // You can add more event properties as needed
};

// Create branding data (if applicable)
const eventBrandingData = {
  logoUrl: 'https://example.com/logo.png',
  // Add other branding properties as needed
};

// Create event location data (if applicable)
const eventLocationData = {
  venueName: 'Sample Venue',
  address: '123 Main St, City, Country',
  // Add other location properties as needed
};

// Call the createEvent function to create the event
async function main() {
  try {
    const event = await createEvent(eventData);

    // If you have branding data, create it and associate it with the event
    if (event) {
      const eventBranding = await event.createEventBranding(eventBrandingData);
      event.setEventBranding(eventBranding);
    }

    // If you have event location data, create it and associate it with the event
    if (event) {
      const eventLocation = await event.createEventLocation(eventLocationData);
      event.setEventLocation(eventLocation);
    }

    console.log('Event created:', event);
  } catch (error) {
    console.error('Error creating event:', error);
  }
}

main();
