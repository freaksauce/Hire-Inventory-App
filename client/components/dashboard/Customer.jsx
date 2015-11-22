Customer = React.createClass({

	componentWillMount() {
		let customerId = FlowRouter.current().params;
		let customer = CustomersCollection.find({_id: customerId}).fetch();
		console.log(customer);
	},

	render() {
		return (
			<h3>Customer</h3>
		)
	}

});