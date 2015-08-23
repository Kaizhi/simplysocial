var React = require( 'react' );
var SubnavItem = require('./subnavItem.js');

var Home = React.createClass({
	displayName: 'Home',

	getDefaultProps: function () {
		return {
			subnavItems: [
				{name: 'all posts'},
				{name: 'photos'},
				{name: 'videos'}
			]
		};
	},

	getInitialState: function() {
		return {
	    	activeSubnavItem: 'all posts',
	    	activeDisplayOption: 'list'
		};
	},

	componentDidMount: function () {
		React.findDOMNode(this.refs.newPost).focus();
	},

	handleSubnavClick: function (newActiveItem) {
		this.setState({
			activeSubnavItem: newActiveItem
		});

		// Update the content type filter here
	},

	handleDisplayOptionClick: function(evt) {
		this.setState({
			activeDisplayOption: evt.target.getAttribute('data-option')
		});

		// Update the display option filter
	},

	render: function() {
		var component = this;

		var subnavItems = this.props.subnavItems.map(function(item, index) {
			return (
				<SubnavItem active={item.name === component.state.activeSubnavItem} key={index + item.name} handleSubnavClick={component.handleSubnavClick} name={item.name}/>
			);
		});

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

				<div className="subnav">
					{subnavItems}

					<div onClick={this.handleDisplayOptionClick} className="display-options">
						<div data-option="list" className={'icon list ' + ((this.state.activeDisplayOption === 'list') ? 'active' : '')}></div>
						<div data-option="tile" className={'icon tile ' + ((this.state.activeDisplayOption === 'tile') ? 'active' : '')}></div>
					</div>
				</div>
			</section>
		);
	}
});

module.exports = Home;