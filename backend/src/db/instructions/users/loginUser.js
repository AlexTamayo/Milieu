const { User } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "fmERAnC8SZqAn8uPdgES";

async function loginUser( email, password ) {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  const validPassword = await bcrypt.compare(password, user.passwordHash);
  if (!validPassword) {
    throw new Error("Invalid email or password.");
  }

  // Update the lastLogin field to the current date/time
  user.lastLogin = new Date();
  await user.save();

  const token = jwt.sign(
    {
      id: user.id,
    },
    secret,
    { expiresIn: "24h" }
  );

  return { token, user };
}


module.exports = loginUser;
