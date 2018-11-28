"use strict";

var mongoose = require('mongoose');

var statSchema = mongoose.Schema({
"nombre": String,

        "grupo1": Number,
        "grupoac1": false,
        "mat1": Number,
        "le1": Number,
        "pp": Number,
        "dibujo": Number,
        "mso": Number,
        "iac": Number,
        "tal1" : Number,
        "act1" : Number,
        "qim1": Number,
        "promedio1": Number,

        "grupo3": Number,
        "grupoac3": false,
        "mat3": Number,
        "le3": Number,
        "si": Number,
        "lp": Number,
        "op": Number,
        "fis1": Number,
        "bd" : Number,
        "mi" : Number,
        "qim3": Number,
        "promedio3": Number,

        "grupo5": Number,
        "grupoac5": false,
        "mat5": Number,
        "le5": Number,
        "hm": Number,
        "fil": Number,
        "ads": Number,
        "fis3": Number,
        "do" : Number,
        "pv" : Number,
        "admin": Number,
        "promedio5": Number,

});

module.exports = mongoose.model('Stat', statSchema);