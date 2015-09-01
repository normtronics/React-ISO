/*import React from 'react';
import Router from 'react-router';
import Home from './pages/home';
import Routes from './routes/routes';


Router.run(Routes, (Root) => {
	React.render(<Root />, document.body);
});
*/

var babel = require('babel/register');
var React = require('react/addons');
var Home = require('./pages/home');
var Router = require('react-router');
var Routes = require('./routes/routes');

//var babel = require('babel/register');

/*module.exports = React.createClass({
	render: function(){
		return (
			<Home></Home>
		)
	}
})*/

Router.run(Routes, function (Handler, state) {
  React.render(<Handler/>, document.getElementById('app'));


  /*var activeRoute = Router.RoutesAction.findActiveRoute(state.routes);

  // Every time there's a route change
  // ask RoutesAction to manage the flow
  Router.RoutesAction.triggerRouteChange(activeRoute, state.params);*/
});


