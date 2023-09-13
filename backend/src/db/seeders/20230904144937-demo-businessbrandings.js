

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
        logoUrl: 'https://lh3.googleusercontent.com/p/AF1QipO57pOVxrsSFpL13zVFOJ73-pk5Cjma00vNg5hj=s1280-p-no-v1',
        bannerUrl: 'https://www.approvedgarages.co.uk/imgp/ag/19088/1autofix1(2).jpg',
        pinUrl: 'https://lh3.googleusercontent.com/p/AF1QipO57pOVxrsSFpL13zVFOJ73-pk5Cjma00vNg5hj=s1280-p-no-v1',
        businessId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://bcassetcdn.com/public/blog/wp-content/uploads/2019/06/18095156/tutoring-tree.png',
        bannerUrl: 'https://images.theconversation.com/files/489239/original/file-20221011-11-b2kzti.jpg?ixlib=rb-1.1.0&rect=0%2C27%2C3639%2C2395&q=45&auto=format&w=926&fit=clip',
        pinUrl: 'https://i.pinimg.com/originals/81/1e/20/811e2061d6e72fe01ac9e2f22af87fc2.jpg',
        businessId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://th.bing.com/th/id/OIP.eMRiV6ipfN4e63B3pBe2hAHaEi?pid=ImgDet&rs=1',
        bannerUrl: 'https://th.bing.com/th/id/R.6d48d36c9808007e51279746c2bdfa5d?rik=90aVS4z8scthbw&riu=http%3a%2f%2fwww.carmasters-glasgow.co.uk%2fwp-content%2fuploads%2f2019%2f10%2fkenny-1024x548.jpg&ehk=lIS%2btrsNjZj5WDFAuxLbd5AoMhg7tqBGXNugf6oIE2Q%3d&risl=&pid=ImgRaw&r=0',
        pinUrl: 'https://th.bing.com/th/id/OIP.eMRiV6ipfN4e63B3pBe2hAHaEi?pid=ImgDet&rs=1',
        businessId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://images-platform.99static.com//rbGsG0nAT5f0dwt_Bdzk6p4CB5o=/83x140:745x802/fit-in/500x500/99designs-contests-attachments/129/129640/attachment_129640097',
        bannerUrl: 'https://torontolife.com/wp-content/uploads/2020/10/PASTAFOREVER10-803x603-1603386640.jpg',
        pinUrl: 'https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/3e/ed/f3/3eedf338-849c-9029-a0aa-fd7ed0274b89/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1920x1080bb-80.png',
        businessId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://www.costmasters.in/uploads/client_logo/830bcfc2582affec3ffc90f86a33620e.jpg',
        bannerUrl: 'https://3.bp.blogspot.com/-aK52zhCN6Iw/WddCokWxsOI/AAAAAAAAAP8/DvHm_dOUBOMJ0_WzXOAkNRfddGp1bsafQCLcBGAs/s1600/Honda-bikes-mechanic-training-program.jpg',
        pinUrl: 'https://www.costmasters.in/uploads/client_logo/830bcfc2582affec3ffc90f86a33620e.jpg',
        businessId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://s3.amazonaws.com/cdn.designcrowd.com/blog/34-Pet-Sitting-Logos-for-Animal-Caretakers/pet-sitting-logo-by-larry-sickmann-dribbble.png',
        bannerUrl: 'https://www.care.com/c/wp-content/uploads/sites/2/2022/02/GettyImages-1291799682-1-e1643946346704-1623x1080.jpg.optimal.jpg',
        pinUrl: 'https://as2.ftcdn.net/v2/jpg/06/11/54/93/1000_F_611549323_5YKIrvB4Tbqp6iZLaIrQwI3tK16N3OLT.jpg',
        businessId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://th.bing.com/th/id/OIP.Tjbe5LeNbaH7e_xuWotyDAHaHa?pid=ImgDet&rs=1',
        bannerUrl: 'https://th.bing.com/th/id/OIP.XJKWdws_ED2YMlCxGGKEiwHaE8?pid=ImgDet&rs=1',
        pinUrl: 'https://th.bing.com/th/id/OIP.Tjbe5LeNbaH7e_xuWotyDAHaHa?pid=ImgDet&rs=1',
        businessId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://th.bing.com/th/id/OIP.OmU8PQS6x6r-v7zHfjKEoQHaGp?pid=ImgDet&rs=1',
        bannerUrl: 'https://www.thevaleliving.co.uk/wp-content/uploads/2021/07/The-Vale-Streatham-Restaurant-Opening.jpg',
        pinUrl: 'https://th.bing.com/th/id/OIP.OmU8PQS6x6r-v7zHfjKEoQHaGp?pid=ImgDet&rs=1',
        businessId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://th.bing.com/th/id/R.23913213aeabf7550add79185d13e9fe?rik=Kqn8c0WVe0HUaQ&pid=ImgRaw&r=0',
        bannerUrl: 'https://s-media-cache-ak0.pinimg.com/originals/33/70/62/337062f9247f9a40c340a2da5f7c6dc7.jpg',
        pinUrl: 'https://th.bing.com/th/id/R.23913213aeabf7550add79185d13e9fe?rik=Kqn8c0WVe0HUaQ&pid=ImgRaw&r=0',
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
        logoUrl: 'https://static.vecteezy.com/system/resources/previews/022/035/783/original/finance-illustration-logo-accounting-hand-on-a-calculator-behind-it-is-a-document-and-a-bill-bottom-of-the-inscription-accounting-vector.jpg',
        bannerUrl: 'https://kohlerfinancial.com/wp-content/uploads/2019/06/tax-accountant-at-05-02-016_0.jpg',
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
        logoUrl: 'https://th.bing.com/th/id/R.61610a598d5333b03a3a3f04bbb0aab9?rik=xMeiEF0LkBDk6Q&pid=ImgRaw&r=0',
        bannerUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6tha0C_FA4RoshNWPcbPbuLyb4engTwYOcQ&usqp=CAU',
        pinUrl: 'https://th.bing.com/th/id/R.61610a598d5333b03a3a3f04bbb0aab9?rik=xMeiEF0LkBDk6Q&pid=ImgRaw&r=0',
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

