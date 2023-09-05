const db = require('../../models'); // Import your Sequelize instance

async function getBusinessesWithDetails() {
  try {
    const businesses = await db.Business.findAll({
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

    // 'businesses' will contain an array of Business instances
    // Each Business instance will have associated data from branding, category, socialMedia, and businessLocation tables
    return businesses;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Optionally re-throw the error for handling elsewhere
  }
}

module.exports = getBusinessesWithDetails;
// Example usage:
getBusinessesWithDetails()
  .then((businesses) => {
    // Handle the businesses array here
    console.log(businesses);
  })
  .catch((error) => {
    // Handle errors here
    console.error('Error:', error);
  });
