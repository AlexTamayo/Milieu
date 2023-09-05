const db = require('../../models'); // Import your Sequelize instance

async function updateBusiness(businessId, updatedData) {
  try {
    // Find the business by its ID and include associated tables for updating
    const business = await db.Business.findByPk(businessId, {
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

    if (!business) {
      console.error(`Business with ID ${businessId} not found.`);
      return;
    }

    // Update the business data
    const {
      name,
      description,
      status,
      rating,
      reviewCount,
      phoneNumber,
      email,
      website,
      ownerId,
      businessCategoryId,
      createdAt,
      updatedAt,
      // Add other properties here if needed
    } = updatedData;
    
    // Update the business data
    business.name = name;
    business.description = description;
    business.status = status;
    business.rating = rating;
    business.reviewCount = reviewCount;
    business.phoneNumber = phoneNumber;
    business.email = email;
    business.website = website;
    business.ownerId = ownerId;
    business.businessCategoryId = businessCategoryId;
    business.createdAt = createdAt;
    business.updatedAt = updatedAt;
    

    // Update associated tables if data is provided
    if (updatedData.businessBranding) {
      Object.assign(business.businessBranding, updatedData.businessBranding);
    }
    if (updatedData.businessCategory) {
      Object.assign(business.businessCategory, updatedData.businessCategory);
    }
    if (updatedData.socialMedia) {
      Object.assign(business.socialMedia, updatedData.socialMedia);
    }
    if (updatedData.businessLocation) {
      Object.assign(business.businessLocation, updatedData.businessLocation);
    }

    // Save the changes to the business and associated tables
    await business.save();

    console.log(`Business with ID ${businessId} and associated tables updated.`);
  } catch (error) {
    console.error('Error updating business:', error);
  }
}

module.exports = updateBusiness;


module.exports = updateBusiness;
// Example usage:
const businessIdToUpdate = 3; // Replace with the business ID you want to update


const updatedBusinessData = {
  // Business data
  name: 'asdf',
  description: 'Buasdftion',
  status: 'Active',
  rating: 4.5,
  ownerId: 3,
  businessCategoryId: 2,
  reviewCount: 10,
  phoneNumber: '12asdf890',
  email: 'busiasdfe.com',
  website: 'httpsasdfasdfasdfasdfle.com',

  // BusinessBranding data
  businessBranding: {
    logoUrl: 'loasdfasdfasdfrl',
    bannerUrl: 'basadfasdfsadfrl',
    pinUrl: 'pinasdfasfasdf',
  },

  // BusinessCategory data
  businessCategory: {
    name: 'Category 6',
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // SocialMedia data (if applicable)
  socialMedia: {
    platform: 'LinasdfasdfasdfasdfsdafIn',
    link: 'https:sadfsafsadfdsafasdfsadfsdusiness4',
    createdAt: new Date(),
    updatedAt: new Date(),
    // Include social media data here
  },

  // BusinessLocation data (if applicable)
  businessLocation: {
    longitude: 113.0705, // Replace with the actual longitude
    latitude: 50.0432,  // Replace with the actual latitude
    streetAddress: '120asdfsadfsdane',
    city: 'Caasdfasdfsadry',
    region: 'AB',
    postalCode: 'T2J 1L7',
    country: 'Canada',
    createdAt: new Date(),
    updatedAt: new Date(),
    // Include location data here
  },
};


updateBusiness(businessIdToUpdate, updatedBusinessData);
