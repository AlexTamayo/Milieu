// module.exports = (sequelize, DataTypes) => {
//   const Friendship = sequelize.define('Friendship', {
//     created_at: DataTypes.DATE,
//     user1_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     user2_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//   });

module.exports = (sequelize, DataTypes) => {
  const Friendship = sequelize.define('Friendship', {
    created_at: DataTypes.DATE,
    user1_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    user2_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  });

  // Define associations
  Friendship.associate = (models) => {
    Friendship.belongsTo(models.User, {
      foreignKey: 'user1_id',
      as: 'user1',
    });
    Friendship.belongsTo(models.User, {
      foreignKey: 'user2_id',
      as: 'user2',
    });
  };

  // Define custom methods to set user associations
  Friendship.prototype.setUser1 = function (userId) {
    this.setDataValue('user1_id', userId);
  };

  Friendship.prototype.setUser2 = function (userId) {
    this.setDataValue('user2_id', userId);
  };

  return Friendship;
};
