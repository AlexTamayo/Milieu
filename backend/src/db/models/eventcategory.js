'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventCategory = sequelize.define('EventCategory', {
    name: DataTypes.STRING,
  });

  EventCategory.associate = (models) => {
    // Define associations here if needed
    EventCategory.hasMany(models.Event, {
      foreignKey: 'eventCategoryId',
      as: 'events',
    });
  };

  return EventCategory;
};
