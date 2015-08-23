var React = require( 'react' );

var PrivacySettings = React.createClass({
	displayName: 'PrivacySettings',
	render: function() {
		return (
			<section>
				<h4>Privacy</h4>
				<div className="row">
					<div className="checkbox">
					    <input type="checkbox" name="toggle" className="toggle-checkbox" id="notification4" />
					    <label className="toggle-label" htmlFor="notification4"></label>
					</div>
					<p>email me when someone follows me</p>
				</div>
			</section>
		)
	}
});

module.exports = PrivacySettings;