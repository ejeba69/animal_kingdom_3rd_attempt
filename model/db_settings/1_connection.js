// const express = require('express');
const mongoose = require('mongoose');
const { config } = require('dotenv');
// const { AnimalClass } = require('./AnimalModel');

config();
mongoDBLive();

async function mongoDBLive() {
  const DB_URI = process.env.DB_URI;
  // try {} catch () {}
  try {
    await mongoose.connect(DB_URI);
    console.log(`MongoDB is a-live`);
  } catch (err) {
    console.log(err);
  }
}

// const getAll = AnimalClass.find();
// console.log(getAll);

// let getAll;

// const a = async function allAnimals() {
//   getAll = await AnimalClass.find();
//   return getAll;
// };

// console.log(a);
