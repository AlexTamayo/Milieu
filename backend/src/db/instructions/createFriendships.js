
const { User } = require('../models');
// const config = require('../config/config.js').development;

async function createFriendship(userId1, userId2) {
  try {
    // Fetch users based on their provided IDs
    const user1 = await User.findByPk(userId1);
    const user2 = await User.findByPk(userId2);

    if (!user1 || !user2) {
      console.error("One or both users not found");
      return;
    }

    // Establish friendship
    await user1.addFriend(user2);
    await user2.addFriend(user1);

    console.log(`Friendship created between ${user1.firstName} and ${user2.firstName}!`);
  } catch (error) {
    console.error("Error creating friendship:", error);
  }
}

const userA = 1;
const userB = 2;

createFriendship(userA, userB);
