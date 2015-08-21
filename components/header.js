var React = require( 'react' );
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	displayName: 'Header',

	getInitialState: function () {
		return {
			dropdownActive: false
		};
	},

	toggleDropdown: function (evt) {
		if (this.state.dropdownActive) {
			this.setState({
				dropdownActive: false
			});
		} else {
			this.setState({
				dropdownActive: true
			});
		}
	},

	render: function() {
		var classString = 'dropdown';

		if (this.state.dropdownActive) {
			classString += ' active';
		}

		return (
			<header>
				<div className="container">
				<Link to="/"><div className="icon logo"></div></Link>

				<div className="nav-items">
					<div className="icon new-message">
					</div>
					<form className="search">
						<input type="text"></input>
						<div className="icon search-icon"></div>
					</form>

					<div className="avatar" onClick={this.toggleDropdown}>
						<div className="avatar-image"></div>
						<div className="down-arrow icon"></div>

						<ul className={classString}>
							<li>Profile</li>
							<li>Followers</li>
							<li>Following</li>
							<li><Link to="settings">Settings</Link></li>
						</ul>
					</div>
				</div>
				</div>
			</header>
		);
	}
});

module.exports = Header;