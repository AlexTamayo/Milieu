const db = require('../../models');

async function createBusiness(data) {
  try {

    const maxBusinessId = await db.Business.max('id');
    const nextBusinessId = maxBusinessId ? maxBusinessId + 1 : 1;

    // Add the businessId to the data
    data.id = nextBusinessId;

    // Create a new business in the database with associated data
    const business = await db.Business.create(data, {
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

    return business;
  } catch (error) {
    console.error('Error creating business:', error);
    throw error;
  }
}

module.exports = createBusiness;
