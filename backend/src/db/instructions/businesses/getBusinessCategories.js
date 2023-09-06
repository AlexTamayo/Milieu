const db = require('../../models'); // Import your Sequelize instance

async function getBusinessCategories() {
  try {
    const businessCategories = await db.BusinessCategory.findAll();

    //console.log(businessCategories);
    // 'businessCategories' will contain an array of BusinessCategory instances
    return businessCategories;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Optionally re-throw the error for handling elsewhere
  }
}

module.exports = getBusinessCategories;
