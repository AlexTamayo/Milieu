const db = require('../../models'); // Import your Sequelize instance

async function findBusinessByUser(userId) {
  try {
    const business = await db.Business.findAll({
      where: { ownerId: userId }, // Assuming there is a UserId column in the Business table that references the user
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

    // 'business' will contain the Businesses instances associated with the user

    return business;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Optionally re-throw the error for handling elsewhere
  }
}

(async () => {
  try {
    const businesses = await findBusinessByUser(6);
    console.log(businesses);
  } catch (error) {
    console.error('Error:', error);
  }
})();

module.exports = findBusinessByUser;
