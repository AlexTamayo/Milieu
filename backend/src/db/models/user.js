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
    profileImage: {
      type: DataTypes.STRING
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

  User.associate = function (models) {
    // Define associations here

    User.belongsToMany(models.User, {
      through: 'Friendships',
      as: 'friends',
      foreignKey: 'user1Id',
      otherKey: 'user2Id'
    });

    User.hasMany(models.Message, {
      foreignKey: 'senderId',
      as: 'sentMessages',
    });

    User.hasMany(models.Message, {
      foreignKey: 'receiverId',
      as: 'receivedMessages',
    });

    User.hasMany(models.Post, {
      foreignKey: 'userId',
      as: 'posts',
    });

    User.hasMany(models.UserAddress, {
      foreignKey: 'userId',
      as: 'addresses',
    });

    // Add associations to Events and Businesses
    User.hasMany(models.Event, {
      foreignKey: 'ownerId',
      as: 'events',
    });

    User.hasMany(models.Business, {
      foreignKey: 'ownerId',
      as: 'businesses',
    });
  };

  return User;
};
