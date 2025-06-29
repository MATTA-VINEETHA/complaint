// backend/config.js
require('dotenv').config(); // make sure this is at the very top

console.log("✅ Loading env file...");
console.log("PORT:", process.env.PORT);
console.log("MONGO_URI:", process.env.MONGO_URI);

const config = {
  MONGODB_URI: process.env.MONGO_URI,
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET || 'defaultsecret'
};

module.exports = config;
