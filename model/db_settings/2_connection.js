const { connect } = require('mongoose');
const { config } = require('dotenv');
const { AnimalClass } = require('../Models/AnimalModel');

config();
mongoDBLive();

async function mongoDBLive() {
  const DB_URI = process.env.DB_URI;
  // try {} catch () {}
  try {
    await connect(DB_URI);
    console.log(`MongoDB is a-live!`);
  } catch (err) {
    console.log(
      `Help me, help me! Me no know where MongoDB dey carry me dey go!`,
      err
    );
  }
}

// async function testing() {
//   const read =
// }
