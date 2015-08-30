import React from 'react';
import Home from '../pages/home';
import Main from '../pages/main';
import Router from 'react-router';

var DefaultRoute = Router.DefaultRoute;
//var Route = Router.Route;

const Routes = (
	<Router.Route name="app" path="/" handler={Main}>
		<DefaultRoute handler={Home} />
	</Router.Route>
)

export default Routes;