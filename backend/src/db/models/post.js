'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    postType: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    contactInfo: DataTypes.STRING,
  });

  // Define associations
  Post.associate = (models) => {
    // Define associations here if needed
    Post.belongsTo(models.PostBoard, {
      foreignKey: 'postboardId',
      as: 'postboard',
    });

    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    })
  }
  return Post;
}