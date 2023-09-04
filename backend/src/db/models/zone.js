'use strict';
module.exports = (sequelize, DataTypes) => {
  const Zone = sequelize.define('Zone', {
    name: DataTypes.STRING,
    longitude: DataTypes.DOUBLE,
    latitude: DataTypes.DOUBLE
  });

  /////////////////// Define associations or any other model-specific logic here
  Zone.associate = (models) => {
    Zone.hasMany(models.PostBoard, {
      foreignKey: 'zone_id',
      as: 'postBoards',
    });
  };

  return Zone;
};
