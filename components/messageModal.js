var React = require( 'react' );

var MessageModal = React.createClass({
	displayName: 'MessageModal',

	onCloseClick: function (evt) {
		evt.preventDefault();
		this.props.closeModal();
	},

	render: function() {
		return (
			<div className={'overlay ' + (this.props.active ? 'active' : '')}>
				<div className="modal">
					<div onClick={this.onCloseClick} className="icon close"></div>
					<h4>Create new message</h4>
					<textarea></textarea>

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
					<button className="primary">Post</button>
				</div>
			</div>
		)
	}
});

module.exports = MessageModal;