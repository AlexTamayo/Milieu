
module.exports = (sequelize, DataTypes) => {
  const UserAddress = sequelize.define('UserAddress', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    postalcode: DataTypes.STRING,
    region: DataTypes.STRING
    // Add more address-related attributes as needed
  });

  // Define associations
  UserAddress.associate = (models) => {
    // UserAddress belongs to a User (many-to-one relationship)
    UserAddress.belongsTo(models.User, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE', // Optional: Define the deletion behavior
    });
  };

  return UserAddress;
};
