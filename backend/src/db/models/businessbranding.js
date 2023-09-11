'use strict';
module.exports = (sequelize, DataTypes) => {
  const BusinessBranding = sequelize.define('BusinessBranding', {
    logoUrl: DataTypes.TEXT,
    bannerUrl: DataTypes.TEXT,
    pinUrl: DataTypes.TEXT,
  });

  BusinessBranding.associate = (models) => {
    BusinessBranding.belongsTo(models.Business, {
      as: 'business',
    });
  };

  return BusinessBranding;
};
