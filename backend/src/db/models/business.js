'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      //field: 'syncId', // Define the field name explicitly to match the custom sequence
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING, // You can define this as ENUM if you have predefined status values
    rating: DataTypes.FLOAT,
    reviewCount: DataTypes.INTEGER,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    website: DataTypes.STRING,
    ownerId: DataTypes.INTEGER,
    businessCategoryId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });

  Business.associate = (models) => {
    // Define associations here if needed
    Business.belongsTo(models.User, {
      foreignKey: 'ownerId',
      as: 'owner',
    });

    Business.belongsTo(models.BusinessCategory, {
      foreignKey: 'businessCategoryId',
      as: 'category',
    }); 

    Business.hasMany(models.SocialMedia, {
      foreignKey: 'businessId',
      as: 'socialMedia',
    });

    Business.hasOne(models.BusinessBranding, {
      as: 'branding',
    });

    Business.hasOne(models.BusinessLocation, {
      as: 'businessLocation',
    }); 
  };

  return Business;
};
