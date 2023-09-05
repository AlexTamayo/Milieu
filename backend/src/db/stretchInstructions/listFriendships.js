const { User } = require(''/../..'/../models');

async function listFriendships() {
  try {
    const friendships = await User.findAll({
      include: [{
        model: User,
        as: 'friends'
      }]
    });

    friendships.forEach(user => {
      user.friends.forEach(friend => {
        console.log(`${user.firstName} and ${friend.firstName} are friends.`);
      });
    });
  } catch (error) {
    console.error("Error fetching friendships:", error);
  }
}

listFriendships();
