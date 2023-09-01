
module.exports = (sequelize, DataTypes) => {
  const Friendship = sequelize.define('Friendship', {
    created_at: DataTypes.STRING
  });

  // Define associations
  Friendship.associate = (models) => {
    Friendship.belongsTo(models.User, {
      foreignKey: 'user1_id', // Name of the first foreign key in the Friendship table
      as: 'user1', // Optional alias for the first user association
    });
    Friendship.belongsTo(models.User, {
      foreignKey: 'user2_id', // Name of the second foreign key in the Friendship table
      as: 'user2', // Optional alias for the second user association
    });
  };

  return Friendship;
};
