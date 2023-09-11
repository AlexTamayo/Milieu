'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define the business branding data
    const businessBrandingData = [
      {
        logoUrl: 'https://static.vecteezy.com/system/resources/previews/003/016/264/large_2x/colorful-sushi-icon-ilustration-free-vector.jpg',
        bannerUrl: 'https://th.bing.com/th/id/R.70e894a9ef389bdd04250d7e552cbdb3?rik=pUvKGMV38lryEQ&pid=ImgRaw&r=0',
        pinUrl: 'https://static.vecteezy.com/system/resources/previews/003/016/264/large_2x/colorful-sushi-icon-ilustration-free-vector.jpg',
        businessId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        businessId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        businessId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        businessId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        businessId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        businessId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        businessId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        businessId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        businessId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        businessId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfq27gK1PqsAFictCBzcd3EG41u4uhzfpdg&usqp=CAU',
        bannerUrl: 'https://fatnancystackle.com/cdn/shop/t/31/assets/smush-tackle-shop-interior_1.jpg?v=103339609360751803541510855517',
        pinUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfq27gK1PqsAFictCBzcd3EG41u4uhzfpdg&usqp=CAU',
        businessId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFfT77NF6elZ8g7gqBJ87dl0hOweexAM6QY-xBNxB7ZyfY2u76OW24aN6TMCjdHtuT4E&usqp=CAU',
        bannerUrl: 'https://www.evokelearning.ca/wp-content/uploads/2022/01/Math-Tutoring-shutterstock_1457173616.jpg',
        pinUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFfT77NF6elZ8g7gqBJ87dl0hOweexAM6QY-xBNxB7ZyfY2u76OW24aN6TMCjdHtuT4E&usqp=CAU',
        businessId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://cdn.vectorstock.com/i/preview-1x/25/92/simple-chiropractic-logo-silhouette-actve-vector-28012592.jpg',
        bannerUrl: 'https://fitnesschiropractic.net/wp-content/uploads/2018/06/chiropractic-adjustment.jpg',
        pinUrl: 'https://cdn.vectorstock.com/i/preview-1x/25/92/simple-chiropractic-logo-silhouette-actve-vector-28012592.jpg',
        businessId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://t3.ftcdn.net/jpg/02/89/62/48/360_F_289624809_wfrnonE25K3emSX9TEJa1GNFmAOiWyRJ.jpg',
        bannerUrl: 'https://www.simple-solutions.ca/wp-content/uploads/2022/03/what-does-landscape-maintenance-for-a-property-include-f.jpg',
        pinUrl: 'https://t3.ftcdn.net/jpg/02/89/62/48/360_F_289624809_wfrnonE25K3emSX9TEJa1GNFmAOiWyRJ.jpg',
        businessId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://img.freepik.com/premium-vector/indian-cuisine-spices-icon-with-culinary-seasoning_8071-9904.jpg?w=2000',
        bannerUrl: 'https://tamarindcalgary.ca/wp-content/uploads/2018/04/Tamarind-Food-photo.jpg',
        pinUrl: 'https://img.freepik.com/premium-vector/indian-cuisine-spices-icon-with-culinary-seasoning_8071-9904.jpg?w=2000',
        businessId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLrv-UMFJQqkRVbox7PfzpmXb6R4H9Y_RCbQ&usqp=CAU',
        bannerUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5G72XAAqH7DTVctpJ_QCYkeI5eTpQzMIc4w&usqp=CAU',
        pinUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLrv-UMFJQqkRVbox7PfzpmXb6R4H9Y_RCbQ&usqp=CAU',
        businessId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpGVYnsW0Ci_lK-yIUQQ7i5g-U1hIZH2Mx9w&usqp=CAU',
        bannerUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LO_WK-8GGyLix1SBEewqUJn1b0_mUJ4FeA&usqp=CAU',
        pinUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpGVYnsW0Ci_lK-yIUQQ7i5g-U1hIZH2Mx9w&usqp=CAU',
        businessId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    
      {
        logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThiCmagLxKcqaBTjEZGq-2bgPMCN6btrGbnQ&usqp=CAU',
        bannerUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6tha0C_FA4RoshNWPcbPbuLyb4engTwYOcQ&usqp=CAU',
        pinUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThiCmagLxKcqaBTjEZGq-2bgPMCN6btrGbnQ&usqp=CAU',
        businessId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-g5XeZqdsTud_muJIGwbWzJZJjxpZB9mJfXQNHyzhVz0X-Igi8KLheNEUCQVHJuzOMQ&usqp=CAU',
        bannerUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDhm1ZBUzdR7TDQ3pttmXmUImUGU4TDBW5w&usqp=CAU',
        pinUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-g5XeZqdsTud_muJIGwbWzJZJjxpZB9mJfXQNHyzhVz0X-Igi8KLheNEUCQVHJuzOMQ&usqp=CAU',
        businessId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz9RH402KAtxeb9ggNfUlOATArd9_nF2GHvw&usqp=CAU',
        bannerUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTahPUmTGxjNP057IClOnJf46ku9Aiz9jnqaw&usqp=CAU',
        pinUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz9RH402KAtxeb9ggNfUlOATArd9_nF2GHvw&usqp=CAU',
        businessId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        logoUrl: 'https://media.istockphoto.com/id/937227354/vector/hairdressing-scissors-and-curl-hair.jpg?s=612x612&w=0&k=20&c=vzyYRkWAgyZ9Q-elEeJK0zVWe9LDseFSqaVkOr1MsDE=',
        bannerUrl: 'https://booksy.com/l/wp-content/uploads/2022/01/2274-e1641986301391-995x777.jpg',
        pinUrl: 'https://media.istockphoto.com/id/937227354/vector/hairdressing-scissors-and-curl-hair.jpg?s=612x612&w=0&k=20&c=vzyYRkWAgyZ9Q-elEeJK0zVWe9LDseFSqaVkOr1MsDE=',
        businessId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://as2.ftcdn.net/v2/jpg/01/10/67/25/1000_F_110672599_FIqLh9pHyGHa1UwdNSaZtVLHBHuRRfIW.jpg',
        bannerUrl: 'https://blog.groomit.me/wp-content/uploads/2019/01/cat.png',
        pinUrl: 'https://as2.ftcdn.net/v2/jpg/01/10/67/25/1000_F_110672599_FIqLh9pHyGHa1UwdNSaZtVLHBHuRRfIW.jpg',
        businessId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://thumbs.dreamstime.com/b/book-store-logo-template-lettering-composition-93137507.jpg',
        bannerUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvlonF-O_NypRp46VXxsll45gi4-h54YtLTuQ3y6xF2sLxwS9uksdUmblSA6sDgtzPC9M&usqp=CAU  ',
        pinUrl: 'https://thumbs.dreamstime.com/b/book-store-logo-template-lettering-composition-93137507.jpg',
        businessId: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://logo.com/image-cdn/images/kts928pd/production/0b77d103610e6061efa637df67ad689a2abe4c2e-425x423.png?w=1080&q=72',
        bannerUrl: 'https://www.nerdwallet.com/assets/blog/wp-content/uploads/2021/05/GettyImages-606353201.jpg',
        pinUrl: 'https://logo.com/image-cdn/images/kts928pd/production/0b77d103610e6061efa637df67ad689a2abe4c2e-425x423.png?w=1080&q=72',
        businessId: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://thumbs.dreamstime.com/b/electric-repair-electrician-logo-design-concept-vector-icon-template-combination-safety-guard-shield-symbol-shock-199157128.jpg',  
        bannerUrl: 'https://d2zhlgis9acwvp.cloudfront.net/images/uploaded/electricians.jpg',
        pinUrl: 'https://thumbs.dreamstime.com/b/electric-repair-electrician-logo-design-concept-vector-icon-template-combination-safety-guard-shield-symbol-shock-199157128.jpg',
        businessId: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insert the business branding data into the database
    await queryInterface.bulkInsert('BusinessBrandings', businessBrandingData, {});

    // You should replace the business IDs with the actual IDs of the businesses you want to associate with the branding.
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the business branding data if needed
    await queryInterface.bulkDelete('BusinessBrandings', null, {});
  },
};

