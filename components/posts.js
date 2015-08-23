var React = require( 'react' );
var PostItem = require('./postItem.js');

var Posts = React.createClass({
	displayName: 'Posts',

	render: function() {
		var component = this;

		var postItems = this.props.postItems.filter(function(item) {
			if (component.props.postFilter === "all posts") {
				return item;
			} else {
				return (item.type + 's') === component.props.postFilter;
			}
		});

		postItems = postItems.map(function(item, index) {
			return (
				<PostItem key={index + item.ownerName} post={item}/>
			);
		});

		return (
			<section className="posts list">
				{postItems}
			</section>
		);
	}
});

module.exports = Posts;