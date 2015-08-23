var React = require( 'react' );

var PrivacySettings = React.createClass({
	displayName: 'PrivacySettings',
	componentDidMount: function () {
		React.findDOMNode(this.refs.radio).checked = true;
	},

	render: function() {
		return (
			<section>
				<h4>Privacy</h4>
				<div className="row radio-row">
					<div className="toggle checkbox">
					    <input ref="radio" type="radio" name="toggle" className="toggle-checkbox" id="privacy1"/>
					    <label className="toggle-label" htmlFor="privacy1"></label>
					</div>
					<p>email me when someone follows me</p>
				</div>
				<div className="row radio-row">
					<div className="toggle checkbox">
					    <input type="radio" name="toggle" className="toggle-checkbox" id="privacy2" />
					    <label className="toggle-label" htmlFor="privacy2"></label>
					</div>
					<p>only allow people I follow to tag me</p>
				</div>
				<div className="row radio-row">
					<div className="toggle checkbox">
					    <input type="radio" name="toggle" className="toggle-checkbox" id="privacy3" />
					    <label className="toggle-label" htmlFor="privacy3"></label>
					</div>
					<p>email me when someone follows me</p>
				</div>

				<div className="row">
					<div className="toggle checkbox">
					    <input type="checkbox" name="toggle" className="toggle-checkbox" id="privacy4" />
					    <label className="toggle-label" htmlFor="privacy4"></label>
					</div>
					<p>add a location to my posts</p>
				</div>
				<div className="row">
					<div className="toggle checkbox">
					    <input type="checkbox" name="toggle" className="toggle-checkbox" id="privacy5" />
					    <label className="toggle-label" htmlFor="privacy5"></label>
					</div>
					<p>let others find me by my email address</p>
				</div>
				<div className="row">
					<div className="toggle checkbox">
					    <input type="checkbox" name="toggle" className="toggle-checkbox" id="privacy6" />
					    <label className="toggle-label" htmlFor="privacy6"></label>
					</div>
					<p>tailor ads based on my information</p>
				</div>
			</section>
		)
	}
});

module.exports = PrivacySettings;