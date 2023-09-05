'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      //field: 'syncId', // Define the field name explicitly to match the custom sequence
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING, // You can define this as ENUM if you have predefined status values
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    timeZone: DataTypes.STRING,
    ownerId: DataTypes.INTEGER,
    eventCategoryId: DataTypes.INTEGER,
  });

  Event.associate = (models) => {
    // Define associations here if needed
    Event.belongsTo(models.User, {
      foreignKey: 'ownerId',
      as: 'owner'
    });

    Event.belongsTo(models.EventCategory, {
      foreignKey: 'eventCategoryId',
      as: 'eventCategory',
    });

    Event.hasOne(models.EventBranding, {
      foreignKey: 'eventId',
      as: 'eventBranding',
      onDelete: 'CASCADE'
    });

    Event.hasOne(models.EventLocation, {
      foreignKey: 'eventId',
      as: 'eventLocation',
      onDelete: 'CASCADE'
    });
  };

  return Event;
};
