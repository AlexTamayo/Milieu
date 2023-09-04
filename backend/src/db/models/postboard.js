'use strict';
module.exports = (sequelize, DataTypes) => {
  const PostBoard = sequelize.define('PostBoard', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  });

  // Define associations
  PostBoard.associate = (models) => {
    PostBoard.belongsTo(models.Zone, {
      foreignKey: 'zone_id',
      as: 'zone', // Optional alias for the association
    });
  };

  return PostBoard;
};