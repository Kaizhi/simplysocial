var React = require( 'react' );
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Header = require('./header.js');

var Index = React.createClass({
	displayName: 'Index',
	render: function() {
		return (
			<div className="content">
				<Header></Header>
				<RouteHandler/>
			</div>
		);
	}
});

module.exports = Index;