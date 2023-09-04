'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Jane',
      lastName: 'Smith',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Billy',
      lastName: 'Johnson',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
