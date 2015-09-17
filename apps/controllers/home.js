
var models  = require('../models');

module.exports  = {

	index: function(object, req, res ){

			console.log(req.session.username);
			res.render('index');
     },

     index2 : function(object, req, res){

     	 console.log(req.session);
     }


}