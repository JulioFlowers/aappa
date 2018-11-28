"use strict";

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
	
	"user": String,
	"nombre": String,
	"grupoac": Number,
	"sac": String,
	"promedio": Number,
	"avance": Number,
	"password": String,
});

//Criptografico tipo hash.

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//validacion de password.
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('user', userSchema);
