var React = require( 'react' );

var Header = React.createClass({
	displayName: 'Header',
	render: function() {
		return (
			<header>
				<div className="container">
				<a href="/" alt="simplysocial"><div className="icon logo"></div></a>

				<div className="nav-items">
					<div className="icon new-message">
					</div>
				</div>
				</div>
			</header>
		);
	}
});

module.exports = Header;