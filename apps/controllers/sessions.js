module.exports = {

	login:  function(object, req, res ){
       
       req.session.username = 'pedroinfante';

       console.log(req.session.username);

	},
	logout: function (object, req, res) {
		if (req.session){
			req.session.destroy();
		}
		res.redirect('/');
	}
}
