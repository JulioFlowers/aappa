
//Librerias del servidor.
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var path     = require('path');

//Librerias de la BD.
var mongoose = require('mongoose');
var odb = require('./config/odb.js');

//Librerias para el manejo de datos.
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var passportlocal = require('passport-local');

mongoose.connect(odb.url, { useNewUrlParser: true })      //coneccion a BD.
var db = mongoose.connection; // comunicacion con la BD.

require('./config/passport')(passport); // Configuracion del passport.

app.use(express.static(path.resolve(__dirname, 'public')));

// configurar app.
app.use(morgan('dev'));   // Registrar todo incio de sesion en la consola.
app.use(cookieParser()); // Leer cookies para la autentificacion.
app.use(bodyParser());  // Obtener informacion de los HTML forms.

//obtener datos de los formularios.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//requeridos por passport.
app.use(session({ secret: 'AAPA06022001#' })); // session secret.

app.use(passport.initialize());                                                  
app.use(passport.session());  // Inicios de sesion persistentes.
app.use(flash());  // use connect-flash for flash messages stored in session.

require('./app/platformrut.js')(app, passport, bodyParser);
require('./app/rutas.js')(app, bodyParser);

//iniciar.
app.listen(port);
console.log('Servidor iniciado en puerto ' + port);
db.on('error', console.error.bind(console, ' MongoDB connection error:'));
