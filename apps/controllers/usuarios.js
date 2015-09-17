var models  = require('../models');
var crypto  = require('crypto');


exports.index = function (object, req, res)
{

    res.render('signin', object);
    
};


exports.profile = function(object, req, res)
{


    res.render('usuario/profile');

};


exports.signin = function (object,req,res)
{

    var password_crypto = crypto.createHash('md5').update(object.password).digest('hex');
            var username;
            models.Users.findOne({
                where: {
                    user: object.username,
                    password: password_crypto

                }

                }).then(function ( user ){
                 

                 //generarSesionLogin(req, res, user.id ,user.user);         
                    var object = {};

                   
                   if(user != undefined){
                    req.session.user_id = user.id;
                    req.session.type_user = user.type_user;
                    req.session.username = user.user;
                    object.result = 1;
                    res.send(object)
                       
                   }else
                   {
                    object.result = 0;
                    res.send(object);

                   }

                  
            } );
};

exports.admin = function(object,req,res)
{

    res.render('admin/index');


}

var generarSesionLogin = function(req, res, user_id, username) {

        if(user_id != undefined && username != undefined)
        {
        req.session.user_id = user_id;
        req.session.username = username;
        res.send(1);
        }
        else
        {

            console.log('error');

        }
};







/*
module.exports  = {

	index: function(object, req, res ){
res.render('signin', object);
            
			
     },

     signin: function(object,req,res)
     {      
            req.session.username = 'vega';
            console.log(req.session);


       
            var password_crypto = crypto.createHash('md5').update(object.password).digest('hex');
            var username;
            models.Users.findOne({
                where: {
                    user: object.username,
                    password: password_crypto

                }

                }).then(function ( user ){
                    
                   
                
            
                   
                    
                  
            } );






     },
     users: function(object,req,res){

     models.Users.findOne().then(function(datos) {
        		
     			console.log('datos '+datos[0]['id_user']);
        		res.render('users',{id_usuario : datos[0]['id_user']});

    	});

     },
     addUser: function(object, req, res){

     	models.Users.create({

     		username: object['email'],
     		password: object['password'], 
     		email: object['email'],
     		name: object['name'],
     		last_name: object['lastName']

     	}).then(function(username){


     		res.render('users',{user: username});

     	});

     }

}

*/