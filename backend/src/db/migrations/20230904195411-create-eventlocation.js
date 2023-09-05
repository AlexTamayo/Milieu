'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EventLocations', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      longitude: Sequelize.DOUBLE,
      latitude: Sequelize.DOUBLE,
      streetAddress: Sequelize.STRING,
      city: Sequelize.STRING,
      region: Sequelize.STRING,
      postalCode: Sequelize.STRING,
      country: Sequelize.STRING,
      // Add foreign key for event
      eventId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Events',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EventLocations');
  },
};
