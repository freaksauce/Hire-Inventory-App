CustomerIndividual = React.createClass({

	propTypes: {
		individual: React.PropTypes.object.isRequired
	},

	handleDelete(event) {
		console.log('handleDelete');
		let customerId = event.currentTarget.id;
		Meteor.call("deleteCustomer", customerId, function(error, result) {
			if (error) {
				console.log(error);
			}
		});
		event.preventDefault();
	},

	handleEdit(event) {
		console.log('handle edit');
		let customerId = event.currentTarget.id;
		let url = "/customer/"+customerId;
		FlowRouter.go(url);
	},

	render() {
		return <div className="item">
					<div className="right floated content"><button id={this.props.individual._id} className="ui red button item-delete" onClick={this.handleDelete}>Delete</button></div>
					<div className="right floated content"><button id={this.props.individual._id} className="ui blue button item-edit" onClick={this.handleEdit}>Edit</button></div>
					<div className="content">
						<h3>{this.props.individual.name}</h3>
					</div>
				</div>	
	}

});