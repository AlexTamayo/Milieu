'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserAddress = sequelize.define('UserAddress', {
    street: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    postalcode: {
      type: DataTypes.STRING,
    },
    region: {
      type: DataTypes.STRING
    }
  });

  // Define associations
  UserAddress.associate = (models) => {
    // UserAddress belongs to a User (many-to-one relationship)
    UserAddress.belongsTo(models.User, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE', // Optional: Define the deletion behavior
    });
  };

  return UserAddress;
};
