const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  userid: String,
  password: String,
  updated_at: { type: Date, default: Date.now },
  photo: String,
  email: String,
  created_on: { type: Date, default: Date.now },
  provider: String,
  login_count: { type: Number, default: 1 },
});

UserSchema.statics.findOrCreate = require('find-or-create');

module.exports = mongoose.model('User', UserSchema);
