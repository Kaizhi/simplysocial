var React = require( 'react' );
var PostItem = require('./postItem.js');

var Posts = React.createClass({
	displayName: 'Posts',

	render: function() {
		var component = this,
			columns = [[], [], []],
			columnCounter = 0,
			postDOM;

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

		for (var i=0; i<postItems.length; i++) {
			if (columnCounter === 3){
				columnCounter = 0;
			}
			columns[columnCounter].push(postItems[i]);
			columnCounter++;
		}

		if (this.props.displayOption === 'list'){

			postDOM = postItems;

		} else {
			postDOM = (
				<div>
					<div className="column">
						{columns[0]}
					</div>
					<div className="column">
						{columns[1]}
					</div>
					<div className="column">
						{columns[2]}
					</div>
				</div>
			);
		}

		return (
			<section className={'posts ' + this.props.displayOption}>
				{postDOM}
			</section>
		);
	}
});

module.exports = Posts;