const mongoose = require('mongoose');

const City = mongoose.model('City', new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  population: {
    type: Number,
    required: true
  }
}));

// Create a new city
const newCity = new City({
  name: 'Bangalore',
  population: 8623000
});
newCity.save();

const newUser = new User({
  name: 'Asif',
  email: 'asifurrehman2509@gmail.com',
  address: {
    city: 'Guntur',
    street: '13 th main',
    zipCode: '522006'
  }
});
newUser.save();

