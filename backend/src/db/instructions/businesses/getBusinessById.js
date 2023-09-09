const db = require('../../models'); // Import your Sequelize instance

async function getBusinessById(businessId) {
  try {
    const business = await db.Business.findOne({
      where: { id: businessId },
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

    // 'business' will contain a single Business instance with associated data
    return business;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Optionally re-throw the error for handling elsewhere
  }
}

module.exports = getBusinessById;
