'use strict';
module.exports = (sequelize, DataTypes) => {
  const MessageChain = sequelize.define('MessageChain', {
    subject: DataTypes.STRING,
  });

  // Define associations
  MessageChain.associate = (models) => {
    MessageChain.hasMany(models.Message, {
      foreignKey: 'chainId',
      as: 'messageChain',
      onDelete: 'CASCADE'
    });
  };

  return MessageChain;
};
