
module.exports = (sequelize, DataTypes) => {
  const MessageChain = sequelize.define('MessageChain', {
    subject: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  });

  // Define associations
  MessageChain.associate = (models) => {
    MessageChain.hasMany(models.Message, {
      foreignKey: 'chain_id',
      as: 'messages',
    });
  };

  return MessageChain;
};
