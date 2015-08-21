var React = require( 'react' );
var Header = require('./header.js');

var Home = React.createClass({
	displayName: 'Home',
	render: function() {
		return (
			<div>
				<Header></Header>
				<section className="hero">
					<div className="container">

					</div>
				</section>
			</div>
		);
	}
});

module.exports = Home;