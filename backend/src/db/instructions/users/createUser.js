const { User } = require('../../models');
const bcrypt = require('bcrypt');

/* To verify password */

async function addUser(userData) {
  try {
    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.passwordHash, saltRounds);

    // Create a new user with the hashed password
    const newUser = await User.create({ ...userData, passwordHash: hashedPassword });

    console.log('User has been added.');
    
    return newUser;
  } catch (error) {
    if (error.code === "23505") {
      // 23505 is the code for unique constraint violation in PostgreSQL
      res.status(400).json({ message: "Username is already taken" });
    } else {
      console.error("Error name:", error.name);
      console.error("Error message:", error.message);

      // Send the generic error message for all other errors
      res
        .status(500)
        .send({ message: "Failed to add user. Please try again later." });
    }
  }
}

/* Example usage: */
/* 
const newUserDetails = {
  firstName: 'Alex',
  lastName: 'Broughton',
  username: 'abrought',
  email: 'alex@example.com',
  passwordHash: 'derpderpderpderp',
  dateOfBirth: '1990-01-15',
  gender: 'M',
  phoneNumber: '222-222-2222',
  status: 'active',
  role: 'user',
};
 */

module.exports = addUser;
