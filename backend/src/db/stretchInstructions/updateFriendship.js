// I see that the code is not updating the Friendships table as expected. It looks like you want to update the createdAt field of the friendship, but it's not being updated in the database.

// The issue seems to be related to the way you're trying to update the friendship. The createdAt field is typically managed by the database itself and is automatically set when a new record is created. If you want to update the createdAt field, you might need to rethink your database schema and the purpose of updating this field.

// If you intend to update other fields of the friendship, you can modify the friendshipUpdates object to include those fields and values. However, if you specifically want to update the createdAt field for some reason, please provide more context on why you need to do this, and I can assist you accordingly.



const { User } = require('../models');

async function updateFriendship(userId1, userId2, friendshipUpdates) {
  try {
    // Fetch users based on their provided IDs
    const user1 = await User.findByPk(userId1);
    const user2 = await User.findByPk(userId2);

    if (!user1 || !user2) {
      console.error("One or both users not found");
      return;
    }

    // Update the friendship with the provided updates
    const friendship = await user1.getFriends({
      where: { id: userId2 },
    });

    if (!friendship || friendship.length === 0) {
      console.error("Friendship not found");
      return;
    }

    await friendship[0].update(friendshipUpdates);

    console.log(`Friendship between ${user1.firstName} and ${user2.firstName} updated successfully.`);
  } catch (error) {
    console.error("Error updating friendship:", error);
  }
}

const userA = 4;
const userB = 2;
const friendshipUpdates = {
  createdAt: new Date(), // Add any other updates you need
};

updateFriendship(userA, userB, friendshipUpdates);
