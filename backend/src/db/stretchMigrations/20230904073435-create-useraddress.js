'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create the UserAddresses table
    await queryInterface.createTable('UserAddresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      street: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      postalcode: {
        type: Sequelize.STRING,
      },
      region: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // Name of the referenced table
          key: 'id', // Primary key of the referenced table
        },
        onDelete: 'CASCADE', // Optional: Define the deletion behavior
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Drop the UserAddresses table
    await queryInterface.dropTable('UserAddresses');
  },
};
