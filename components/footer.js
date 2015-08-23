var React = require( 'react' );

var Footer = React.createClass({
	displayName: 'Footer',

	render: function() {

		return (
			<footer>
				<ul>
					<li><a href="about">About Us</a></li>
					<li><a href="support">Support</a></li>
					<li><a href="privacy">Privacy</a></li>
					<li><a href="terms">Terms</a></li>
					<li>&copy; 2014 SimplySocial</li>
				</ul>
			</footer>
		);
	}
});

module.exports = Footer;