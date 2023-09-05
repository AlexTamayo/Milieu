'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventBranding = sequelize.define('EventBranding', {
    logoUrl: DataTypes.STRING,
    bannerUrl: DataTypes.STRING,
    pinUrl: DataTypes.STRING,
  });

  EventBranding.associate = (models) => {
    // Define associations here if needed
    EventBranding.belongsTo(models.Event, {
      as: 'event',
    });
  };

  return EventBranding;
};
