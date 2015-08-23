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
						<input name="username" type="text" value="Jessica Tuan"/>
					</div>
					<div>
						<span className="icon email"></span>
						<input name="email" type="email" value="jessica@mail.com"/>
					</div>
					<div>
						<span className="icon password"></span>
						<input name="password" type="password" value="placeholder"/>
					</div>
					<div>
						<span className="icon password"></span>
						<input name="password_confirm" type="password" value="placeholder"/>
					</div>

				</div>
			</section>
		)
	}
});

module.exports = AccountSettings;