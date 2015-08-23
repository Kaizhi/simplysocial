var React = require( 'react' );
var PostItem = require('./postItem.js');

var Posts = React.createClass({
	displayName: 'Posts',

	getInitialState: function () {
		return {
			matches: false // Whether viewport matches the 2 column media query
		};
	},

	componentWillMount: function(){
		if (this._mql) {
		  this._mql.removeListener(this.updateMatches);
		}

		this._mql = window.matchMedia('only screen and (min-width: 768px) and (max-width: 1080px)');
		this._mql.addListener(this.updateMatches);
		this.updateMatches();
	},

	updateMatches: function () {
		if (this._mql.matches === this.state.matches) {
			return;
		}
		this.setState({
			matches: this._mql.matches
		});
	},

	render: function() {
		var component = this,
			columns = [[], [], []],
			columnCounter = 0,
			postItems,
			maxColumnCount = 3;

		if (this.state.matches) {
			maxColumnCount = 2;
			columns = [[], []];
		}

		// Filter by post type
		postItems = this.props.postItems.filter(function(item) {
			if (component.props.postFilter === "all posts") {
				return item;
			} else {
				return (item.type + 's') === component.props.postFilter;
			}
		}).map(function(item, index) {
			return (
				<PostItem key={index + item.ownerName} post={item}/>
			);
		});

		// For tile display type, we generate up to 3 columns of posts
		if (this.props.displayOption !== 'list'){

			for (var i=0; i<postItems.length; i++) {

				if (columnCounter === maxColumnCount){
					columnCounter = 0;
				}
				columns[columnCounter].push(postItems[i]);
				columnCounter++;
			}

			postItems = columns.map(function (item, index) {
				return (
					<div className="column">
						{columns[index]}
					</div>
				);
			});
		}

		return (
			<section className={'posts ' + this.props.displayOption}>
				{postItems}
			</section>
		);
	}
});

module.exports = Posts;