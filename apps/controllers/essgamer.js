
var fs = require('fs');

/**
* 	function principal del archivo, en esta function lo que se hara es que cuando se mande a llamar
*	busque el archivo que se esta buscando por medio del parametro y retorne ese archivo
*	para poderlo usar y asi mandar a llamar el o los metodos que pueda contener.
*/
function callController( file, method, object, rq, rs)
{
	var exists =  fs.exists(__dirname +  '/' + file + '.js', function (req, res)
	{
		if ( req === true )
		{
			var controller = require('./' + file + '.js');
			if(method)
			{
				try
				{
					controller[method](object, rq, rs);
				}
				catch(e){ console.error("Error1: el método '" + method + "' no existe." + " Error "+e); }
			}
			else
				console.error("Error2: falta indicar medoto a llamar.");

		}
		else
			console.error("Error3: El controlador \'" + file + "\' no existe.");
	});
}


// con la siguiente linea se podrá exportar este js a cualquier archivo del project
exports.callController = callController;
