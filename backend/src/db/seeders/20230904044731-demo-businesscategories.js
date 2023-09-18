

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define the business category data
    const businessCategoryData = [
      // 1
      { name: 'Restaurant', createdAt: new Date(), updatedAt: new Date() },
      // 2
      { name: 'Automotive', createdAt: new Date(), updatedAt: new Date() },
      // 3
      { name: 'Health and Wellness', createdAt: new Date(), updatedAt: new Date() },
      // 4
      { name: 'Massage/Chiropractor', createdAt: new Date(), updatedAt: new Date() },
      // 5
      { name: 'Dentist', createdAt: new Date(), updatedAt: new Date() },
      // 6
      { name: 'Tutoring', createdAt: new Date(), updatedAt: new Date() },
      // 7
      { name: 'Daycare', createdAt: new Date(), updatedAt: new Date() },
      // 8
      { name: 'Baking', createdAt: new Date(), updatedAt: new Date() },
      // 9
      { name: 'Handyman', createdAt: new Date(), updatedAt: new Date() },
      // 10
      { name: 'Electrician', createdAt: new Date(), updatedAt: new Date() },
      // 11
      { name: 'Construction', createdAt: new Date(), updatedAt: new Date() },
      // 12
      { name: 'Labour', createdAt: new Date(), updatedAt: new Date() },
      // 13
      { name: 'Plumbing', createdAt: new Date(), updatedAt: new Date() },
      // 14
      { name: 'Roofing', createdAt: new Date(), updatedAt: new Date() },
      // 15
      { name: 'Carpentry', createdAt: new Date(), updatedAt: new Date() },
      // 16
      { name: 'Landscaping', createdAt: new Date(), updatedAt: new Date() },
      // 17
      { name: 'Cleaning Services', createdAt: new Date(), updatedAt: new Date() },
      // 18
      { name: 'Painting', createdAt: new Date(), updatedAt: new Date() },
      // 19
      { name: 'HVAC', createdAt: new Date(), updatedAt: new Date() },
      // 20
      { name: 'Appliance Repair', createdAt: new Date(), updatedAt: new Date() },
      // 21
      { name: 'Pet services', createdAt: new Date(), updatedAt: new Date() },
      // 22
      { name: 'Fitness', createdAt: new Date(), updatedAt: new Date() },
      // 23
      { name: 'Yoga', createdAt: new Date(), updatedAt: new Date() },
      // 24
      { name: 'Beauty Salon', createdAt: new Date(), updatedAt: new Date() },
      // 25
      { name: 'Baby sitter', createdAt: new Date(), updatedAt: new Date() },
      // 26
      { name: 'Personal Trainer', createdAt: new Date(), updatedAt: new Date() },
      // 27
      { name: 'Photography', createdAt: new Date(), updatedAt: new Date() },
      // 28
      { name: 'Catering', createdAt: new Date(), updatedAt: new Date() },
      // 29
      { name: 'Event Planning', createdAt: new Date(), updatedAt: new Date() },
      // 30
      { name: 'Real Estate', createdAt: new Date(), updatedAt: new Date() },
      // 3
      { name: 'Home Inspection', createdAt: new Date(), updatedAt: new Date() },
      // 3
      { name: 'Legal Services', createdAt: new Date(), updatedAt: new Date() },
      // 3
      { name: 'Financial Services', createdAt: new Date(), updatedAt: new Date() },
      // 
      { name: 'Insurance', createdAt: new Date(), updatedAt: new Date() },
      // 
      { name: 'Accounting', createdAt: new Date(), updatedAt: new Date() },
      // 
      { name: 'Education', createdAt: new Date(), updatedAt: new Date() },
      // 
      { name: 'Martial Arts', createdAt: new Date(), updatedAt: new Date() },
      // 
      { name: 'Music Lessons', createdAt: new Date(), updatedAt: new Date() },
      // 
      { name: 'Art Gallery', createdAt: new Date(), updatedAt: new Date() },
      // 
      { name: 'Gift Shop', createdAt: new Date(), updatedAt: new Date() },
      // 
      { name: 'Bookstore', createdAt: new Date(), updatedAt: new Date() },
      // 
      { name: 'Jewelry Store', createdAt: new Date(), updatedAt: new Date() },
      // 
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
