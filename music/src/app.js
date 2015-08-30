import React from 'react';
import Router from 'react-router';
import Home from './pages/home';
import Routes from './routes/routes';


Router.run(Routes, (Root) => {
	React.render(<Root />, document.body);
});

