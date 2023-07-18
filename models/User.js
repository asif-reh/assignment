const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
    required: true
  }
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: addressSchema,
    required: true
  }
});

const User = mongoose.model('User', userSchema);
