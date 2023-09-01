
module.exports = (sequelize, DataTypes) => {
  const Zone = sequelize.define('Zone', {
    name: DataTypes.STRING,
    longitude: DataTypes.DOUBLE,
    latitude: DataTypes.DOUBLE
  });

  // Define associations
  Zone.hasMany(models.PostBoard, {
    foreignKey: 'zone_id',
    as: 'postBoards', // Optional alias for the association
  });
  return Zone;
};