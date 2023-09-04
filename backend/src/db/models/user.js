'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Ensure that email follows a valid email format
      },
    },
    passwordHash: {
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      type: DataTypes.DATE
      },
    gender: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.STRING, // Use string for phone numbers
      unique: true,
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive', 'suspended'), 
      defaultValue: 'active',
    },
    role: {
      type: DataTypes.STRING,
    },
    lastLogin: {
      type: DataTypes.DATE,
    }
  }, {});


  User.associate = function(models) {
    // Define association here

    User.belongsToMany(models.User, {
      through: 'Friendships',
      as: 'friends',
      foreignKey: 'user_1_id',
      otherKey: 'user_2_id' });

    User.hasMany(models.Message, {
      foreignKey: 'sender_id',
      as: 'sent_messages',
    });

    User.hasMany(models.Message, {
      foreignKey: 'receiver_id',
      as: 'received_messages',
    });

    User.hasMany(models.Post, {
      foreignKey: 'user_id',
      as: 'posts',
    });

    User.hasMany(models.UserAddress, {
      foreignKey: 'user_id',
      as: 'addresses',
    });
  };
  return User;
};
