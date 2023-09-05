const { User } = require('../models');

async function deleteFriendship(userId1, userId2) {
  try {
    // Fetch users based on their provided IDs
    const user1 = await User.findByPk(userId1);
    const user2 = await User.findByPk(userId2);

    if (!user1 || !user2) {
      console.error("One or both users not found");
      return;
    }

    // Remove the friendship association
    await user1.removeFriend(user2);
    await user2.removeFriend(user1);

    console.log(`Friendship between ${user1.firstName} and ${user2.firstName} deleted.`);
  } catch (error) {
    console.error("Error deleting friendship:", error);
  }
}

const userA = 4;
const userB = 2;

deleteFriendship(userA, userB);
