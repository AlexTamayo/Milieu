const db = require("./models"); // Import your Sequelize models
const Friendship = db.Friendship;
const User = db.User;

// // Initialize your models with the Sequelize instance

// // Define associations and custom methods (if needed)

// // Sync the models with the database

db.sequelize
  .sync()
  .then(async () => {
    // Define user IDs
    // const user1Id = 1;
    // const user2Id = 5;

    // // Find the existing users by their IDs
    // const user1 = await User.findByPk(user1Id);
    // if (!user1) {
    //   throw new Error(`User with ID ${user1Id} not found.`);
    // }

    // const user2 = await User.findByPk(user2Id);
    // if (!user2) {
    //   throw new Error(`User with ID ${user2Id} not found.`);
    // }

    // // Create a new instance of the Friendship model
    // const newFriendship = Friendship.build({ created_at: new Date() });

    // // Associate the Friendship with the two existing users
    // newFriendship.setUser1(user1Id);
    // newFriendship.setUser2(user2Id);

    // // Save the Friendship instance to the database
    // await newFriendship.save();  
    // console.log(newFriendship.toJSON());


  

const friendshipIdToFind = 3; // Replace with the primary key you want to search for

Friendship.findByPk(friendshipIdToFind)
  .then((friendship) => {
    if (!friendship) {
      console.log(`Friendship with ID ${friendshipIdToFind} not found.`);
    } else {
      console.log("Found Friendship:");
      console.log("Friendship ID:", friendship);
      // console.log("User 1:", friendship.user1.dataValues);
      console.log(friendship.user1);
    }
  })  
  .catch((error) => {
    console.error("Error retrieving Friendship:", error);
  });



  });
  

