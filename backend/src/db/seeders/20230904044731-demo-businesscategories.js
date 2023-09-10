'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define the business category data
    const businessCategoryData = [
      { name: 'Restaurant', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Automotive', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Health and Wellness', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Massage/Chiropractor', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dentist', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tutoring', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Daycare', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Baking', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Handyman', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Electrician', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Construction', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Labour', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Plumbing', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Roofing', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Carpentry', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Landscaping', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cleaning Services', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Painting', createdAt: new Date(), updatedAt: new Date() },
      { name: 'HVAC', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Appliance Repair', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pet Services', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Fitness', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Yoga', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Beauty Salon', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Barbershop', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tailoring', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Photography', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Catering', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Event Planning', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Real Estate', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Home Inspection', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Legal Services', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Financial Services', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Insurance', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Travel Agency', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Education', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Martial Arts', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Music Lessons', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Art Gallery', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Gift Shop', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bookstore', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jewelry Store', createdAt: new Date(), updatedAt: new Date() },
    ];
    
      
      // You can continue adding more categories to the list above
      

    // Insert the business category data into the database
    await queryInterface.bulkInsert('BusinessCategories', businessCategoryData, {});

    // You can adjust the category names as needed.
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the business category data if needed
    await queryInterface.bulkDelete('BusinessCategories', null, {});
  },
};
