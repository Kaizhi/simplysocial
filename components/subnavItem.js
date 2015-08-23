var React = require( 'react' );

var SubnavItem = React.createClass({
	displayName: 'SubnavItem',

	handleClick: function (evt) {
		evt.preventDefault();
		this.props.handleSubnavClick(this.props.name);
	},

	render: function() {
		var className = this.props.active ? 'active' : '';

		return (
			<a className={className} onClick={this.handleClick} href={'#' + this.props.name}>{this.props.name}</a>
		);
	}
});

module.exports = SubnavItem;