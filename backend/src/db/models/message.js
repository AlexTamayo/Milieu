'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    receivedAt: DataTypes.DATE,
    readAt: DataTypes.DATE,
    message: DataTypes.TEXT
  });

  // Define associations
  Message.associate = (models) => {
    Message.belongsTo(models.MessageChain, {
      foreignKey: 'chainId', 
      as: 'messageChain', 
    });
    Message.belongsTo(models.User, {
      foreignKey: 'senderId', 
      as: 'sender'
    });
    Message.belongsTo(models.User, {
      foreignKey: 'receiverId', 
      as: 'receiver'
    });
  };

  return Message;
};
