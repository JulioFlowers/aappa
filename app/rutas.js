'use strict';

module.exports = (app, bodyParser) => {
    app.get('/', (req, res)=>{
		res.sendfile('./public/index.html');
	});

	app.get('/about', (req, res)=>{
		res.sendfile('./public/about.html');
	});

	app.get('/contact', (req, res)=>{
		res.sendfile('./public/contact.html');
	});

	app.get('/arboles', (req, res)=>{
		res.sendfile('./public/arboles.html');
	});

	app.get('/chamarras', (req, res)=>{
		res.sendfile('./public/chamarras.html');
	});

	app.get('/datos', (req, res)=>{
		res.sendfile('./public/datos.html');
	});
};