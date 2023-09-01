module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Ensure that email follows a valid email format
      },
    },
    password_hash: DataTypes.STRING, // You should hash and salt passwords before storing
    date_of_birth: DataTypes.DATE,
    gender: DataTypes.STRING,
    phone_number: {
      type: DataTypes.STRING, // Use string for phone numbers
      unique: true,
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive', 'suspended'), // Example status types
      defaultValue: 'active',
    },
    role: DataTypes.STRING,
    last_login: DataTypes.DATE,
  });

  /////////////////// Define associations or any other model-specific logic here
  User.hasMany(models.Message, {
    foreignKey: 'sender_id',
    as: 'sent_messages', 
  });
  
  User.hasMany(models.Message, {
    foreignKey: 'receiver_id', 
    as: 'received_messages', 
  });

  User.hasMany(models.Post, {
    foreignKey: 'user_id', 
    as: 'posts', 
  });

  User.hasMany(models.Address, {
    foreignKey: 'user_id', 
    as: 'addresses', 
  });
  // User1's friendships
  User.hasMany(models.Friendship, {
    foreignKey: 'user1_id', // Name of the foreign key in the Friendship table
    as: 'user1Friendships', // Alias for the association
  });

  // User2's friendships
  User.hasMany(models.Friendship, {
    foreignKey: 'user2_id', // Name of the foreign key in the Friendship table
    as: 'user2Friendships', // Alias for the association
  });


  return User;
};

