'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define the event categories data
    const eventCategoriesData = [
      { name: 'Community Picnic', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cultural Festival', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Farmers Market', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Local Art Exhibition', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Neighborhood Cleanup', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Charity Run/Walk', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Food Drive', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Block Party', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Craft Fair', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Community Theater Show', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Music Festival', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sports Tournament', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Summer Camp', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Holiday Parade', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Art and Wine Tasting', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pet Adoption Fair', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Community Gardening Day', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Health and Wellness Expo', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Local History Tour', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Charity Auction', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Book Club Meeting', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Outdoor Movie Night', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bike Ride Event', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Science Fair', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Community Choir Performance', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Volunteer Cleanup Day', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Yard Sale', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Local Band Concert', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cooking Workshop', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Charity Gala', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Parent-Teacher Association Meeting', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Community Dance Night', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nature Walk', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Senior Citizens Bingo', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Youth Sports League Championship', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Local Theater Production', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Scavenger Hunt', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Trivia Night', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Community Yoga Class', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dance Workshop', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Environmental Cleanup', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Community Potluck Dinner', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Charity Blood Drive', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Local Chess Tournament', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Arts and Crafts Fair', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Holiday Craft Workshop', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Local Poetry Reading', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Community Science Exhibition', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Food Festival', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Gardening Workshop', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Community 5K Run', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Local Photography Exhibition', createdAt: new Date(), updatedAt: new Date() },
    ];

    // You can continue adding more community events to the list above




    // Insert the event categories into the database
    await queryInterface.bulkInsert('EventCategories', eventCategoriesData, {});

    // You can adjust the category names as needed.
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the event categories data if needed
    await queryInterface.bulkDelete('EventCategories', null, {});
  },
};

