const db = require('./models');
const path = require('path');
const fs = require('fs');

async function resetDatabase() {
  try {
    // 1. Drop all tables

    await db.sequelize.drop();

    // 2. Run migrations (create tables)

    await db.sequelize.sync();

    // 3. Seed database

    const seedersPath = path.join(__dirname, 'seeders');
    const seedFiles = fs.readdirSync(path.resolve(seedersPath))
                        .sort()  // Ensures that the seeders are loaded in order
                        .filter(file => file.endsWith('.js'));  // Just in case there are non-JS files or directories

    for (const file of seedFiles) {
      const seedScript = require(path.join(seedersPath, file));
      await seedScript.up(db.sequelize.getQueryInterface(), db.Sequelize);
    }

    console.log("\nMilieu database reset successfully!");
  } catch (error) {
    console.error("\nError resetting database:", error);
  }
}

resetDatabase().then(() => {
  // This will close the Sequelize connection, allowing the script to exit
  db.sequelize.close();
});
