'use strict';
module.exports = (sequelize, DataTypes) => {
  const BusinessCategory = sequelize.define('BusinessCategory', {
    name: DataTypes.STRING,
  }, {
    timestamps: true, // Enable timestamps (createdAt and updatedAt)
    updatedAt: 'updatedAt', // Set the name of the updatedAt field
    createdAt: 'createdAt', // Set the name of the createdAt field
    hooks: {
      beforeUpdate: (instance) => {
        instance.setDataValue('updatedAt', new Date()); // Update updatedAt to the current date and time
      },
    },
  });

  BusinessCategory.associate = (models) => {
    BusinessCategory.hasMany(models.Business, {
      foreignKey: 'businessCategoryId',
      as: 'business',
    });
  };

  return BusinessCategory;
};
