'use strict';

// rutas 2

var mongoose = require('mongoose');
var user = require('./models/user');
var Stat = require('./models/stats');
require('./../config/passport');

module.exports = (app, passport, bodyParser) => {

	app.post("/regist", (req, res) => {
		var myData = new Stat(req.body);
		myData.save()
		  .then(item => {
			res.send("item saved to database");
		  })
		  .catch(err => {
			res.status(400).send("unable to save to database");
		  });
	  });


	// process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/platform', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
	
	//Pagina para Registrarse.
	app.get('/signup', (req, res)=>{
		res.sendfile('./public/signup.html', { message: req.flash('signupMessage') });
	});
	
	app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/moredata', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
	}));
	
	app.get('/moredata', isLoggedIn, function (req, res) {
		res.sendfile('./public/filldata.html');
		});

		app.put('/platform', isLoggedIn, function (req, res) {
			
			var newStat = new Stat();

			newStat.nombre    = nombre;
			newStat.grupo1    = grupo1;
			newStat.grupo3    = grupo3;
			newStat.grupo5    = grupo5;

			newStat.save(function(err) {
				if (err)
				res.sendfile('./public/filldata.html',);
				return done(null, newUser), 
				res.render ('platform.ejs', { user: data,  stats: data });
			});

			});	

			

	app.get('/platform', isLoggedIn, function (req, res) {
		var id = req.user.user;
		var cu = req.user.user;
		Stat.findOne({cu:id}, function (err, data) {
				res.render('platform.ejs', { user: data,  stats: data });	
		});
		
	});
	
	
};
	
function isLoggedIn(req, res, next) {

	// Si el usuario esta conecctado, continuar
	if (req.isAuthenticated())
		return next();

	//Retornar al index
	res.redirect('/');

}
