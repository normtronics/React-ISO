var babel = require('babel/register');
var React = require('react/addons');
//var home = require('../src/app');
var Router = require('react-router');
var routes = require('../src/routes/routes');

module.exports = {

	index: function(req, res){
		/*var markup = react.renderToString(
			home({})
		)

		res.render('index', {
			markup: markup
		})*/


		Router.run(routes, '/', function (Handler) {
		    var markup = React.renderToString(React.createElement(Handler));
		    res.render('index', {
		      markup: markup
		    });
		});
	}
}