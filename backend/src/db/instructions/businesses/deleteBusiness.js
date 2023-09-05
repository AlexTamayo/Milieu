const db = require('../../models'); // Import your Sequelize instance

async function deleteBusiness(businessId) {
  try {
    // Check if the business with the given ID exists
    const business = await db.Business.findByPk(businessId);

    if (!business) {
      throw new Error('Business not found');
    }

    // Delete the business and associated records with cascading delete
    await business.destroy({ cascade: true });

    console.log('Business and associated records deleted successfully');
  } catch (error) {
    console.error('Error deleting business:', error);
    throw error;
  }
}

module.exports = deleteBusiness;
