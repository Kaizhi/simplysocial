var React = require( 'react' );

var Footer = React.createClass({
	displayName: 'Footer',

	render: function() {

		return (
			<footer>
				<ul>
					<li><a href="#">About Us</a></li>
					<li><a href="#">Support</a></li>
					<li><a href="#">Privacy</a></li>
					<li><a href="#">Terms</a></li>
					<li>&copy; 2014 SimplySocial</li>
				</ul>
			</footer>
		);
	}
});

module.exports = Footer;