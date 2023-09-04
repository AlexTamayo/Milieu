'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventLocation = sequelize.define('EventLocation', {
    longitude: DataTypes.DOUBLE,
    latitude: DataTypes.DOUBLE,
    streetAddress: DataTypes.STRING,
    city: DataTypes.STRING,
    region: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    country: DataTypes.STRING,
    eventId: DataTypes.INTEGER, // Foreign key for Event
  });

  EventLocation.associate = (models) => {
    EventLocation.hasOne(models.Event, {
      as: 'event',
    });
  };

  return EventLocation;
};

