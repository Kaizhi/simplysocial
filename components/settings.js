var React = require( 'react' );
var AccountSettings = require('./accountSettings.js');
var NotificationSettings = require('./notificationSettings.js');
var PrivacySettings = require('./PrivacySettings.js');
var Footer = require('./footer.js');

var Settings = React.createClass({
	displayName: 'Settings',
	render: function() {
		return (
			<div>
				<div className="settings">
					<h1>Settings</h1>
					<AccountSettings/>
					<NotificationSettings/>
					<PrivacySettings/>

				</div>
				<Footer/>
			</div>
		)
	}
});

module.exports = Settings;