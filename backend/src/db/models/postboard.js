'use strict';
module.exports = (sequelize, DataTypes) => {
  const PostBoard = sequelize.define('PostBoard', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
  });

  // Define associations
  PostBoard.associate = (models) => {
    PostBoard.belongsTo(models.Zone, {
      foreignKey: 'zoneId',
      as: 'zone', // Optional alias for the association
    });
  };

  return PostBoard;
};