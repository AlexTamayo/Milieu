'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define the event branding data
    const eventBrandingData = [
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'https://th.bing.com/th/id/OIP.e6w8riKfYpU_bp4DbeyLDwHaE7?pid=ImgDet&rs=1',
        pinUrl: 'pin.jpg',
        eventId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'https://bozemanmagazine.com/uploads/image/post/111/656/111656/header_1920x1080/16987_festival.jpg',
        pinUrl: 'pin.jpg',
        eventId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'https://th.bing.com/th/id/OIP.YJ4xI-O72M5MK73b46IkGwHaE7?pid=ImgDet&rs=1',
        pinUrl: 'pin.jpg',
        eventId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'https://www.potsdam.edu/sites/default/files/styles/optimized/public/images/news/Drumming_bottom.jpg?itok=MKZPX9zl',
        pinUrl: 'pin.jpg',
        eventId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'https://th.bing.com/th/id/OIP.o3tywoYWpuoSg3CfoEXcTwHaEK?pid=ImgDet&rs=1',
        pinUrl: 'pin.jpg',
        eventId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'https://i.pinimg.com/originals/23/6f/77/236f77d2d4118073a3b71adf616d138c.jpg',
        pinUrl: 'pin.jpg',
        eventId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'https://westlibertyiowa.com/wp-content/uploads/2021/07/talent1.jpeg',
        pinUrl: 'pin.jpg',
        eventId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'https://yrofthemonkey.com/wp-content/uploads/2016/08/pavan-gupta-93706-unsplash.jpg',
        pinUrl: 'pin.jpg',
        eventId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'https://i.pinimg.com/originals/de/5d/2c/de5d2c52fbcebf4b4b561a709242b0d8.jpg',
        pinUrl: 'pin.jpg',
        eventId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'https://th.bing.com/th/id/OIP.RwYMDTnvcyYy4zhojJDuMAHaFA?pid=ImgDet&rs=1',
        pinUrl: 'pin.jpg',
        eventId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insert the event branding data into the database
    await queryInterface.bulkInsert('EventBrandings', eventBrandingData, {});

    // You can adjust the URLs and eventId values as needed.
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the event branding data if needed
    await queryInterface.bulkDelete('EventBrandings', null, {});
  },
};

