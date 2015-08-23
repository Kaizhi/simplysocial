var React = require( 'react' );

var AccountSettings = React.createClass({
	displayName: 'AccountSettings',
	render: function() {
		return (
			<section>
				<h4>Account</h4>
				<aside>
					<div className="avatar"></div>
					<button>Change</button>
				</aside>
				<div className="edit-account">
					<div>
						<span className="icon user"></span>
						<input name="username" type="text" defaultValue="Jessica Tuan"/>
					</div>
					<div>
						<span className="icon email"></span>
						<input name="email" type="email" defaultValue="jessica@mail.com"/>
					</div>
					<div>
						<span className="icon password"></span>
						<input name="password" type="password" defaultValue="placeholder"/>
					</div>
					<div>
						<span className="icon password"></span>
						<input name="password_confirm" type="password" defaultValue="placeholder"/>
					</div>

				</div>
			</section>
		)
	}
});

module.exports = AccountSettings;