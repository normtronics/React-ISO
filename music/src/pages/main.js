import React from 'react';
import Route from 'react-router';

const Main = React.createClass({
	render() {
		return (
			<div>
				<h1>This is main</h1>
				<Route.RouteHandler />
			</div>
		)
	}
})

export default Main;