const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must have a name!'],
    unique: true,
  },
  password: {
    type: Number,
    required: [true, 'Must have a name!'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Must have an email!'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
