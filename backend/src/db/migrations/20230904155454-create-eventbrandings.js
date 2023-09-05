'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EventBrandings', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      logoUrl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bannerUrl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pinUrl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      eventId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Events',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    // Add any additional constraints or indexes here if needed
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('EventBrandings');
  },
};

