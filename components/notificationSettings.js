var React = require( 'react' );

var NotificationSettings = React.createClass({
	displayName: 'NotificationSettings',
	render: function() {
		return (
			<section>
				<h4>Notifications</h4>
				<div className="row">
					<div className="toggle">
					    <input type="checkbox" name="toggle" className="toggle-checkbox" id="notification1" />
					    <label className="toggle-label" htmlFor="notification1"></label>
					</div>
					<p>email me when my posts are marked as favorites</p>
				</div>
				<div className="row">
					<div className="toggle">
					    <input type="checkbox" name="toggle" className="toggle-checkbox" id="notification2" />
					    <label className="toggle-label" htmlFor="notification2"></label>
					</div>
					<p>email me when I am mentioned</p>
				</div>
				<div className="row">
					<div className="toggle">
					    <input type="checkbox" name="toggle" className="toggle-checkbox" id="notification3" />
					    <label className="toggle-label" htmlFor="notification3"></label>
					</div>
					<p>email me when I get a reply</p>
				</div>
				<div className="row">
					<div className="toggle">
					    <input type="checkbox" name="toggle" className="toggle-checkbox" id="notification4" />
					    <label className="toggle-label" htmlFor="notification4"></label>
					</div>
					<p>email me when someone follows me</p>
				</div>
			</section>
		)
	}
});

module.exports = NotificationSettings;