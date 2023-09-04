const db = require('./models');

db.sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(error => {
    console.error("Error creating tables:", error);
  });
