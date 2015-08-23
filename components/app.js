( function () {
	var React = require( 'react' );
	var Router = require('react-router'),
		Route = Router.Route,
		DefaultRoute = Router.DefaultRoute,
		RouteHandler = Router.RouteHandler;

	// Components
	var Header = require('./header.js');
	var Home = require('./home.js');
	var Settings = require('./settings.js');

	// Parent component that renders the route's content block
	var Index = React.createClass({
		displayName: 'Index',

		showModal: function () {
			console.log('show modal');
		},

		render: function() {
			return (
				<div className="content">
					<Header showModal={this.showModal}></Header>
					<RouteHandler/>
				</div>
			);
		}
	});

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