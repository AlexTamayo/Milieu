const db = require('../models'); // Import your Sequelize instance

async function getResultsByCategory(categoryId, type) {
  try {
    let results;

    if (type === 'events') {
      results = await db.Event.findAll({
        where: {
          eventCategoryId: categoryId,
        },
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
    } else if (type === 'businesses') {
      results = await db.Business.findAll({
        where: {
          businessCategoryId: categoryId,
        },
        include: [
          {
            model: db.BusinessBranding,
            as: 'businessBranding',
          },
          {
            model: db.BusinessCategory,
            as: 'businessCategory',
          },
          {
            model: db.SocialMedia,
            as: 'socialMedia',
          },
          {
            model: db.BusinessLocation,
            as: 'businessLocation',
          },
        ],
      });
    } else {
      throw new Error('Invalid type specified. Use "events" or "businesses".');
    }

    return results;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Optionally re-throw the error for handling elsewhere
  }
}

module.exports = getResultsByCategory;
// Example usage for getting events by category (categoryId = 1) as search results
getResultsByCategory(1, 'events')
  .then((events) => {
    // Handle the events array here
    console.log('Events by category:', events);
  })
  .catch((error) => {
    // Handle errors here
    console.error('Error:', error);
  }); 

// Example usage for getting businesses by category (categoryId = 2) as search results
getResultsByCategory(2, 'businesses')
  .then((businesses) => {
    // Handle the businesses array here
    console.log('Businesses by category:', businesses);
  })
  .catch((error) => {
    // Handle errors here
    console.error('Error:', error);
  });
