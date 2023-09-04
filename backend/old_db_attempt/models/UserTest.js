module.exports = (sequelize, DataTypes) => {
  const UserTest = sequelize.define('UserTest', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
});

return UserTest

};
