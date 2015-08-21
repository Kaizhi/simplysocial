( function () {
	var React = require( 'react' );
	var Router = require('react-router'),
		Route = Router.Route,
		DefaultRoute = Router.DefaultRoute;

	// Components
	var Index = require('./index.js');
	var Home = require('./home.js');
	var Settings = require('./settings.js');

	// declare our top-level routes and their hierarchy
	var routes = (
		<Route path="/" handler={Index}>
			<DefaultRoute handler={Home}/>
	    	<Route name="settings" handler={Settings}/>
		</Route>
	);

	Router.run(routes, Router.HashLocation, function (Root) {
		React.render(<Root/>, document.body);
	});

} )();