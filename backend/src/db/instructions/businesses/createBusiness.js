// createBusiness.js
const db = require('../../models'); // Import your Sequelize instance

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



const newBusinessData = {
  // Business data
  name: 'Business Name',
  description: 'Business Description',
  status: 'Active',
  rating: 4.5,
  ownerId: 3,
  businessCategoryId: 2,
  reviewCount: 10,
  phoneNumber: '123-456-7890',
  email: 'business@example.com',
  website: 'https://www.example.com',

  // BusinessBranding data
  businessBranding: {
    logoUrl: 'logo-url',
    bannerUrl: 'banner-url',
    pinUrl: 'pin-url',
  },

  // BusinessCategory data
  businessCategory: {
    name: 'Category 6',
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // SocialMedia data (if applicable)
  socialMedia: {
    platform: 'LinkedIn',
    link: 'https://linkedin.com/business4',
    createdAt: new Date(),
    updatedAt: new Date(),
    // Include social media data here
  },

  // BusinessLocation data (if applicable)
  businessLocation: {
    longitude: 113.0705, // Replace with the actual longitude
    latitude: 50.0432,  // Replace with the actual latitude
    streetAddress: '1200 Maple Lane',
    city: 'Calgary',
    region: 'AB',
    postalCode: 'T2J 1L7',
    country: 'Canada',
    createdAt: new Date(),
    updatedAt: new Date(),
    // Include location data here
  },
};

// Create a new business using the createBusiness function
createBusiness(newBusinessData)
  .then((business) => {
    // Handle the result
    console.log('Business created:', business);
  })
  .catch((error) => {
    // Handle errors
    console.error('Error creating business:', error);
  });
