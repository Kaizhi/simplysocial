var React = require( 'react' );
var SubnavItem = require('./subnavItem.js');
var Posts = require('./posts.js');

var Home = React.createClass({
	displayName: 'Home',

	getDefaultProps: function () {
		return {
			subnavItems: [
				{ name: 'all posts'},
				{ name: 'photos'},
				{ name: 'videos'}
			]
		};
	},

	getInitialState: function() {
		return {
	    	activeSubnavItem: 'all posts',
	    	activeDisplayOption: 'list',
	    	postItems: [ // Mock data - normally we'd get this sanitized from API
	    		{
	    			type: 'text',
	    			ownerName: 'Fill Murray',
	    			message: 'How to Get Inspired: the Right Way - Designmodo <a target="_blank" href="http://bit.ly/1lE4uJc">bit.ly/1lE4uJc</a> Good stuff from <a target="_blank" href="http://designmodo.com">@designmodo</a>',
	    			responses: []
	    		},
	    		{
	    			type: 'photo',
	    			ownerName: 'Amy Smith',
	    			message: 'My view this morning is simply beautiful!',
	    			media: 'http://lorempixel.com/575/390/',
	    			responses: []
	    		},
	    		{
	    			type: 'video',
	    			ownerName: 'Fill Murray',
	    			message: 'My view this morning is simply beautiful! Check out this video',
	    			media: 'http://lorempixel.com/575/390/',
	    			responses: []
	    		},
	    		{
	    			type: 'text',
	    			ownerName: 'Meg Robichaud',
	    			message: 'How to Get Inspired: the Right Way - Designmodo <a target="_blank" href="http://bit.ly/1lE4uJc">bit.ly/1lE4uJc</a> Good stuff from <a target="_blank" href="http://designmodo.com">@designmodo</a>',
	    			responses: []
	    		},
	    		{
	    			type: 'photo',
	    			ownerName: 'Fill Murray',
	    			message: 'How to Get Inspired: the Right Way - Designmodo <a target="_blank" href="http://bit.ly/1lE4uJc">bit.ly/1lE4uJc</a> Good stuff from <a target="_blank" href="http://designmodo.com">@designmodo</a>',
	    			media: 'http://lorempixel.com/575/390/',
	    			responses: []
	    		},
	    	]
		};
	},

	componentDidMount: function () {
		// Focus the messagebox on render
		React.findDOMNode(this.refs.newPost).focus();
	},

	handleSubnavClick: function (newActiveItem) {
		this.setState({
			activeSubnavItem: newActiveItem
		});
	},

	handleDisplayOptionClick: function(evt) {
		var displayOption = evt.target.getAttribute('data-option');

		if (!displayOption) {
			return;
		}

		this.setState({
			activeDisplayOption: displayOption
		});
	},

	render: function() {
		var component = this;

		var subnavItems = this.props.subnavItems.map(function(item, index) {
			return (
				<SubnavItem active={item.name === component.state.activeSubnavItem} key={index + item.name} handleSubnavClick={component.handleSubnavClick} name={item.name}/>
			);
		});

		return (
			<div>
				<section className="hero">
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

					<div className="subnav">
						{subnavItems}

						<div onClick={this.handleDisplayOptionClick} className="display-options">
							<div data-option="list" className={'icon list ' + ((this.state.activeDisplayOption === 'list') ? 'active' : '')}></div>
							<div data-option="tile" className={'icon tile ' + ((this.state.activeDisplayOption === 'tile') ? 'active' : '')}></div>
						</div>
					</div>
				</section>

				<Posts postItems={this.state.postItems} displayOption={this.state.activeDisplayOption} postFilter={this.state.activeSubnavItem}/>
			</div>
		);
	}
});

module.exports = Home;