const mongoose = require('mongoose');

module.exports = mongoose.model('Use', {
	username: String,
	password: String,
	email: String,
	gender: String,
	address: String
});