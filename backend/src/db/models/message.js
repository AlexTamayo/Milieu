'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    created_at: DataTypes.DATE,
    received_at: DataTypes.DATE,
    read_at: DataTypes.DATE,
    message: DataTypes.TEXT
  });

  // Define associations
  Message.associate = (models) => {
    Message.belongsTo(models.MessageChain, {
      foreignKey: 'chain_id', 
      as: 'message_chain', 
    });
    Message.belongsTo(models.User, {
      foreignKey: 'sender_id', 
      as: 'sender'
    });
    Message.belongsTo(models.User, {
      foreignKey: 'receiver_id', 
      as: 'receiver'
    });
  };

  return Message;
};
