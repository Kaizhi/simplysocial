var React = require( 'react' );

var Home = React.createClass({
	displayName: 'Home',

	componentDidMount: function () {
		React.findDOMNode(this.refs.newPost).focus();
	},

	render: function() {
		return (
			<section className="hero">
				<div className="container">
					<div className="new-message-box">
						<input ref="newPost" placeholder="What's on your mind?"></input>

						<div className="actions">
							<a href="#">
								<span className="icon add-photo"></span>
								<span className="label">Add Photo</span>
							</a>
							<a href="#">
								<span className="icon add-video"></span>
								<span className="label">Add Video</span>
							</a>
						</div>
					</div>

				</div>
			</section>
		);
	}
});

module.exports = Home;