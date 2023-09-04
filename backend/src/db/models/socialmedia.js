'use strict';
module.exports = (sequelize, DataTypes) => {
  const SocialMedia = sequelize.define('SocialMedia', {
    platform: DataTypes.STRING,
    link: DataTypes.STRING,
    businessId: DataTypes.INTEGER,
  });

  SocialMedia.associate = (models) => {
    SocialMedia.belongsTo(models.Business, {
      foreignKey: 'businessId',
      as: 'business',
    });
  };

  return SocialMedia;
};
