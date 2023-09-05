'use strict';
module.exports = (sequelize, DataTypes) => {
  const BusinessBranding = sequelize.define('BusinessBranding', {
    logoUrl: DataTypes.STRING,
    bannerUrl: DataTypes.STRING,
    pinUrl: DataTypes.STRING,
  });

  BusinessBranding.associate = (models) => {
    BusinessBranding.belongsTo(models.Business, {
      as: 'business',
    });
  };

  return BusinessBranding;
};
