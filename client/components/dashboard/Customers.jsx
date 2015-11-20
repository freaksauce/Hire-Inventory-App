Customers = React.createClass({

	mixins: [ReactMeteorData],
	
	getMeteorData() {
		var handle = Meteor.subscribe("customers", this.props.itemId);

		return {
			customersLoading: ! handle.ready(), // Use handle to show loading state
			customers: CustomersCollection.find({}).fetch()
		}
	},

	showData() {
		return <div className="ui middle aligned divided list">{this.iterateCustomers()}</div>
	},

	iterateCustomers() {
		return this.data.customers.map((item) => {
			return <CustomerIndividual individual={item} key={item._id} />
		});
	},

	showAddCustomerForm() {
		return  <AddCustomer />
	},

	render() {
		if (this.data.customersLoading) {
	      return <p>Loading...</p>;
	    }

		return (
			<div className="ui grid">
				<div className="eight wide column">
					<h3>Customer list</h3>
					{this.showData()}
				</div>
				<div className="eight wide column">
					{this.showAddCustomerForm()}
				</div>
			</div>
		);
	}

});