var React = require( 'react' );

var PostItem = React.createClass({
	displayName: 'PostItem',

	render: function() {
		var media = '';

		if (this.props.post.media) {
			media = (
				<div className="post-media">
					<div className="icon play-button"></div>
					<a href={this.props.post.media}>
						<img src={this.props.post.media}/>
					</a>
				</div>
			)
		}

		return (
			<div className={'post ' + this.props.post.type}>
				<div className="post-content">
					<img src="http://www.fillmurray.com/30/30" className="avatar"/>
					<div className="post-message">
						<p className="owner-name">{this.props.post.ownerName}</p>
						<p dangerouslySetInnerHTML={{__html: this.props.post.message}} />
					</div>
					<div className="metadata">
						<div className="icon reply"/>
						<div className="icon like"/>
						<p>{this.props.post.timestamp}</p>
					</div>
				</div>
				{media}
			</div>
		);
	}
});

module.exports = PostItem;