const { AnimalClass } = require('../../model/Models/AnimalModel');

// Read all
async function readAll(req, res) {
  const payload = await AnimalClass.find();
  console.log(payload);
  res.send(payload);
}

// Read by id
// async function readById(req, res) {}

// Write
async function persist(req, res) {
  console.log(req.body);
  res.send('My name is Optimus Prime');
}

module.exports = {
  readAll,
  persist,
};
