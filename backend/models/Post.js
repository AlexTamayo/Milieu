
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    post_type: DataTypes.STRING,
    image_url: DataTypes.STRING,
    contact_info: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  });

  // Define associations
  Post.associate = (models) => {
    // Define associations here if needed
    Post.belongsTo(models.PostBoard, {
      foreignKey: 'postboard_id',
      as: 'postboard',
    });

    Post.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  };

  return Post;
};
