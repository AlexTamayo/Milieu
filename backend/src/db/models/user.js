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
      type: DataTypes.STRING(1000),
      set(value) {
        const pattern = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!pattern.test(value)) {
          this.setDataValue('profileImage', null);
        } else {
          this.setDataValue('profileImage', value);
        }
      }
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
      onDelete: 'CASCADE'
    });

    User.hasMany(models.Message, {
      foreignKey: 'receiverId',
      as: 'receivedMessages',
      onDelete: 'CASCADE'
    });

    User.hasMany(models.Post, {
      foreignKey: 'userId',
      as: 'posts',
      onDelete: 'CASCADE'
    });

    User.hasMany(models.UserAddress, {
      foreignKey: 'userId',
      as: 'addresses',
      onDelete: 'CASCADE'
    });

    // Add associations to Events and Businesses
    User.hasMany(models.Event, {
      foreignKey: 'ownerId',
      as: 'events',
      onDelete: 'CASCADE'
    });

    User.hasMany(models.Business, {
      foreignKey: 'ownerId',
      as: 'businesses',
      onDelete: 'CASCADE'
    });
  };

  return User;
};
