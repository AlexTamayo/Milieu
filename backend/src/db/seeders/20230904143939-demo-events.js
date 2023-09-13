

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const eventsData = [
      {
        // 1
        title: 'Community Picnic Fall Extravaganza',
        description: 'Come along and enjoy the Community Picnic Day Extravaganza, a day of fun, food, and friendship in the heart of our community. Whether you are new to the neighborhood or a long-time resident, this picnic day is the perfect occasion to mingle with neighbors and make new friends.',
        status: 'Active',
        startTime: new Date('2023-09-10T10:00:00Z'),
        endTime: new Date('2023-09-10T15:00:00Z'),
        timeZone: 'UTC',
        ownerId: 1,
        eventCategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // 2
        title: 'Cultural Festival Opening',
        description: 'Celebrate the diverse cultures of our city at the Cultural Festival opening ceremony.',
        status: 'Active',
        startTime: new Date('2023-09-11T14:00:00Z'),
        endTime: new Date('2023-09-11T18:00:00Z'),
        timeZone: 'UTC',
        ownerId: 2,
        eventCategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // 3
        title: 'Street Performers Spectacular',
        description: 'Join us at the Street Performers Spectacular, an event brimming with energy, talent, and spontaneous art. As you stroll down the vibrant Waterfront Promenade, you will be greeted by a kaleidoscope of performances that cater to all tastes and ages. From mesmerizing jugglers to incredible acrobats, from melodious musicians to lively living statues, there is a surprise waiting at every corner.',
        status: 'Active',
        startTime: new Date('2023-09-12T10:00:00Z'),
        endTime: new Date('2023-09-12T15:00:00Z'),
        timeZone: 'UTC',
        ownerId: 2,
        eventCategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // 4
        title: 'Park Beautification Day: Volunteer Sweeping/Cleaning',
        description: 'Lend a hand at the Park Beautification Day, where locals gather to give our park a little tender loving care. From sweeping paths to picking up litter, your help will go a long way in maintaining the beauty and cleanliness of our community space. It is a great opportunity to meet fellow residents and enjoy the outdoors, all while contributing to a cleaner, greener environment.',
        status: 'Active',
        startTime: new Date('2023-09-13T17:00:00Z'),
        endTime: new Date('2023-09-13T21:00:00Z'),
        timeZone: 'UTC',
        ownerId: 3,
        eventCategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // 5
        title: 'Community Sports Day',
        description: 'Take part in friendly sports competitions at the community picnic.',
        status: 'Active',
        startTime: new Date('2023-09-14T10:00:00Z'),
        endTime: new Date('2023-09-14T15:00:00Z'),
        timeZone: 'UTC',
        ownerId: 4,
        eventCategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // 6
        title: 'Latin Food Fair',
        description: 'Get ready for a festive day out at the Latin Food Fair Fiesta! Experience the rich culinary traditions of Latin America right here in Vancouver. From mouth-watering tacos to exquisite empanadas, the fair offers a unique opportunity to taste a diverse range of authentic Latin dishes.',
        status: 'Active',
        startTime: new Date('2023-09-15T12:00:00Z'),
        endTime: new Date('2023-09-15T18:00:00Z'),
        timeZone: 'UTC',
        ownerId: 5,
        eventCategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // 7
        title: 'Toddler Playdate',
        description: 'Get ready for a joyous morning at the Mom-Baby Sunshine Playdate, a delightful event where moms can relax and socialize while their babies engage in fun and safe play activities. Set in the Shade Park, this event is a great way to meet other moms and make new friends. Toddlers from 2 to 4 years old are welcome to join in the fun!',
        status: 'Active',
        startTime: new Date('2023-09-16T11:00:00Z'),
        endTime: new Date('2023-09-16T14:00:00Z'),
        timeZone: 'UTC',
        ownerId: 1,
        eventCategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // 8
        title: 'Community Mega Garage Sale',
        description: 'Join your neighbors and fellow bargain hunters at the Community Mega Garage Sale. This is your golden opportunity to declutter your home or find some hidden treasures at a bargain price. Whether you are looking for vintage furniture, gently used clothes, toys, or unique collectibles, there is something for everyone!',
        status: 'Active',
        startTime: new Date('2023-09-17T18:00:00Z'),
        endTime: new Date('2023-09-17T21:00:00Z'),
        timeZone: 'UTC',
        ownerId: 2,
        eventCategoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // 9
        title: 'Bloquinho de Rua - Brazilian Carnival',
        description: 'Experience the vibrant culture of Brazil with a dynamic parade featuring traditional and modern Brazilian dances, Samba drumming workshops, Food stalls offering a taste of authentic Brazilian cuisine. Dress in your brightest, most festive attire and be ready to samba the night away at this unforgettable celebration!',
        status: 'Active',
        startTime: new Date('2023-09-18T10:00:00Z'),
        endTime: new Date('2023-09-18T13:00:00Z'),
        timeZone: 'UTC',
        ownerId: 3,
        eventCategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // 10
        title: 'Cultural Costume Parade',
        description: 'Marvel at the traditional attire from different cultures in our parade.',
        status: 'Active',
        startTime: new Date('2023-09-19T16:00:00Z'),
        endTime: new Date('2023-09-19T19:00:00Z'),
        timeZone: 'UTC',
        ownerId: 6,
        eventCategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];


    // Insert the events into the database
    await queryInterface.bulkInsert('Events', eventsData, {});

    // You may need to update the owner ID, category ID, and venue ID values as per your actual database data.
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the events data if needed
    await queryInterface.bulkDelete('Events', null, {});
  },
};
