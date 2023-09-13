

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
        bannerUrl: 'https://media.istockphoto.com/id/471559271/photo/asheville-busker.jpg?s=612x612&w=0&k=20&c=LD8W-Q-ORuyddSgXYLO9oC3e6jUZFmjZAd3Ri0p9uww=',
        pinUrl: 'pin.jpg',
        eventId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'https://i.natgeofe.com/k/3519980b-ba58-456d-b691-2ed516c223e0/clean-it-up-textimage_3x2.jpg',
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
        bannerUrl: 'https://cdn.shopify.com/s/files/1/0074/6402/6227/files/mother-daughter-playdate-friends.jpg?v=1688611886',
        pinUrl: 'pin.jpg',
        eventId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/at%2Fliving%2F2022-06%2Fyard%20sales%2Fyard_sale',
        pinUrl: 'pin.jpg',
        eventId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'https://midias.agazeta.com.br/2020/02/21/bloco-de-carnaval-193003.jpg',
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

