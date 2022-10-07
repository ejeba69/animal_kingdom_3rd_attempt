const { connect } = require('mongoose');
const { config } = require('dotenv');

config();

async function mongoDBLive() {
  const DB_URI = process.env.DB_URI;
  // try {} catch () {}
  try {
    await connect(DB_URI);
    console.log(`MongoDB is a-live`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { mongoDBLive };
