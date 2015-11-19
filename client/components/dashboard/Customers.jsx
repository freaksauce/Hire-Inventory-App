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

	render() {
		if (this.data.customersLoading) {
	      return <p>Loading...</p>;
	    }

		return (
			<div>
				{this.showData()}				
			</div>
		);
	}

});