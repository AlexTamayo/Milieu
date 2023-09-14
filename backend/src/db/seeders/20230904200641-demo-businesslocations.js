module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("BusinessLocations", [
      {
        longitude: -122.990,
        latitude: 49.225,
        streetAddress: "5075 Kingsway",
        city: "Burnaby",
        region: "BC",
        postalCode: "V5H 2E6",
        country: "Canada",
        businessId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -123.1158,
        latitude: 49.2835,
        streetAddress: "456 Granville Street",
        city: "Vancouver",
        region: "BC",
        postalCode: "V6C 1T2",
        country: "Canada",
        businessId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -123.127,
        latitude: 49.2774,
        streetAddress: "789 Cambie Street",
        city: "Vancouver",
        region: "BC",
        postalCode: "V6B 2P4",
        country: "Canada",
        businessId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -123.1334,
        latitude: 49.276,
        streetAddress: "1011 Georgia Street",
        city: "Vancouver",
        region: "BC",
        postalCode: "V6E 4M2",
        country: "Canada",
        businessId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -123.1347,
        latitude: 49.2808,
        streetAddress: "1313 Alberni Street",
        city: "Vancouver",
        region: "BC",
        postalCode: "V6E 4Z3",
        country: "Canada",
        businessId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -123.141698,
        latitude: 49.283151,
        streetAddress: "18 Cardero Street",
        city: "Vancouver",
        region: "BC",
        postalCode: "V6G 2G9",
        country: "Canada",
        businessId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -123.133130,
        latitude: 49.257925,
        streetAddress: "1717 West 15th Avenue",
        city: "Vancouver",
        region: "BC",
        postalCode: "V6J 2L5",
        country: "Canada",
        businessId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -123.206469,
        latitude: 49.270172,
        streetAddress: "3 West 3rd Avenue",
        city: "Vancouver",
        region: "BC",
        postalCode: "V5Y 1E8",
        country: "Canada",
        businessId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -123.070493,
        latitude: 49.2839185,
        streetAddress: "2020 Powell Street",
        city: "Vancouver",
        region: "BC",
        postalCode: "V5L 1J2",
        country: "Canada",
        businessId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -119.272,
        latitude: 50.267,
        streetAddress: "2323 Silver Star Road",
        city: "Vernon",
        region: "BC",
        postalCode: "V1T 9M8",
        country: "Canada",
        businessId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -119.49, //keeping it reel
        latitude: 49.88,
        streetAddress: "1517 Keehn Rd",
        city: "Kelowna",
        region: "BC",
        postalCode: "V1X 5T5",
        country: "Canada",
        businessId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -114.0710, //MathroBatics
        latitude: 51.0490,
        streetAddress: "167 Valley Glen Bay",
        city: "Calgary",
        region: "AB",
        postalCode: "T3B 5P9",
        country: "Canada",
        businessId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -114.0635, //back_in_business
        latitude: 51.0501,
        streetAddress: "1705, 736 6 Avenue Sw",
        city: "Calgary",
        region: "AB",
        postalCode: "T2P 0T9",
        country: "Canada",
        businessId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -114.0754, //quality_property_pros
        latitude: 51.0478,
        streetAddress: "2950 17 Ave SE #422",
        city: "Calgary",
        region: "AB",
        postalCode: "T2G 1K3",
        country: "Canada",
        businessId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -114.0801, //svaadisht
        latitude: 51.0485,
        streetAddress: "107, 510 58 Avenue SW",
        city: "Calgary",
        region: "AB",
        postalCode: "T2P 0T9",
        country: "Canada",
        businessId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -123.1558, //diablo_caliente
        latitude: 49.2691,
        streetAddress: "20 Pemberton Ave",
        city: "Vancouver",
        region: "BC",
        postalCode: "V6G 1A1",
        country: "Canada",
        businessId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -123.1147, //gradees_garage
        latitude: 49.2841,
        streetAddress: "777 Dunsmuir Street",
        city: "Vancouver",
        region: "BC",
        postalCode: "V6M 2T1",
        country: "Canada",
        businessId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -123.1616, //handy_sandy
        latitude: 49.2685,
        streetAddress: "7425 Yew Street",
        city: "Vancouver",
        region: "BC",
        postalCode: "V6G 3E8",
        country: "Canada",
        businessId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -119.4515, //snowmageddon
        latitude: 49.8857,
        streetAddress: "650 South Crest Drive",
        city: "Kelowna",
        region: "BC",
        postalCode: "V1W 4W8",
        country: "Canada",
        businessId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -123.1224, //tiny_toes_daycare
        latitude: 49.2776,
        streetAddress: "2050 Marine Dr.",
        city: "Vancouver",
        region: "BC",
        postalCode: "V6A 1A1",
        country: "Canada",
        businessId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -123.1207, //tiny_toes_daycare
        latitude: 49.2827,
        streetAddress: "1995 BEACH AVE #1502",
        city: "Vancouver",
        region: "BC",
        postalCode: "V6G 2Y3",
        country: "Canada",
        businessId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -123.1211, //tiny_toes_daycare
        latitude: 49.2635,
        streetAddress: "6322 CAMBIE ST #TH4",
        city: "Vancouver",
        region: "BC",
        postalCode: "V5Z 0K2",
        country: "Canada",
        businessId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -123.1142, //tiny_toes_daycare
        latitude: 49.2833,
        streetAddress: "1189 MELVILLE ST #3304",
        city: "Vancouver",
        region: "BC",
        postalCode: "V6E 4T8",
        country: "Canada",
        businessId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -123.1211, //tiny_toes_daycare
        latitude: 49.2795,
        streetAddress: "1456 W 45TH AVE #1",
        city: "Vancouver",
        region: "BC",
        postalCode: "V6L 3B7",
        country: "Canada",
        businessId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        longitude: -123.1290, //tiny_toes_daycare
        latitude: 49.2901,
        streetAddress: "4101 YEW ST #209",
        city: "Vancouver",
        region: "BC",
        postalCode: "V6M 2H1",
        country: "Canada",
        businessId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("BusinessLocations", null, {});
  },
};
