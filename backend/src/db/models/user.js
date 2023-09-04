'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    }
  }, {});

  // Associations can be defined here, if any.
  // User.associate = function(models) {};

  User.associate = function(models) {
    // Define association here

    User.belongsToMany(models.User, {
      through: 'Friendships',
      as: 'friends',
      foreignKey: 'user_1_id',
      otherKey: 'user_2_id' });

  };

  return User;
};
