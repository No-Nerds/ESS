var models  = require('../apps/models');
var express = require('express');
var app = express();
var handlebars  = require('handlebars');
//var url = require('url');
//con esta linea se carga el servidor
var serv = require('./server');
//envio de correo variable
var passport = require('passport'),
	bodyParser = require('body-parser'),
	cookieParser = require("cookie-parser");





var passport = require('passport');
var session = require('express-session');
app.use(session({secret: 'essgamerSession',resave: false,saveUninitialized: true}));
//require('./configPassport')(passport);
app.use(passport.initialize());
app.use(passport.session());



app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static( __dirname + '/../public'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({	extended: true })); // support encoded bodies



//llamado de la clase con la que se podra cargar los controladores
var essgamer = require('../apps/controllers/essgamer');


var iniciar = function()
{

/* GET home page. */
app.get('/', function(req, res, next) {

	 if(req.session.username != undefined)
	 {	
	  essgamer.callController('home', 'index','', req, res);	
	 }
	 else
	 {
	 	res.redirect('/login');
	 }
});


app.get('/login', function(req, res, next) {


 if(req.session.username != undefined)
 {
    
    res.redirect('/');

 }
 else
 {

 	essgamer.callController('usuarios', 'index','', req, res);

 }

});



app.get('/staff-administrator', function (req,res,next){
	

   if(req.session.username != undefined)
   {
   	 if(req.session.type_user == 1)
   	 {

		essgamer.callController('usuarios','admin','',req,res);
     }
     else
     {	

     	res.redirect('/');

	  }
   }
   else
   {

   	res.redirect('/');

   }	

});


app.get()

app.get('/profile', function(req,res,next){

	essgamer.callController('usuarios','profile','',req,res);


});


app.post('/login/verify', function(req,res,next){


	var obj = {};
	obj.username = req.body.username;
	obj.password  = req.body.password;

	essgamer.callController('usuarios','signin',obj,req,res);


    
});

app.post('/users/addNewUser', function(req,res,next){


console.log(req.body);


	essgamer.callController('usuarios','addUser',req.body,req,res);


});



}
serv.server(app, 3000);
//se exporta para que otro js lo pueda utilizar
exports.iniciar = iniciar;
