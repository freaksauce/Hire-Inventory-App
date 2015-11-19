CustomerIndividual = React.createClass({

	propTypes: {
		individual: React.PropTypes.object.isRequired
	},

	render() {
		return <div>
					<h3>
					{this.props.individual.name}
					</h3>
				</div>
		
	}

});