'use strict';
module.exports = (sequelize, DataTypes) => {
  const BusinessLocation = sequelize.define('BusinessLocation', {
    longitude: DataTypes.DOUBLE,
    latitude: DataTypes.DOUBLE,
    streetAddress: DataTypes.STRING,
    city: DataTypes.STRING,
    region: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    country: DataTypes.STRING,
  });

  BusinessLocation.associate = (models) => {
    BusinessLocation.belongsTo(models.Business, {
      as: 'businessLocation',
    });
  };

  return BusinessLocation;
};
