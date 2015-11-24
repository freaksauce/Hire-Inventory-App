Customer = React.createClass({

	mixins: [ReactMeteorData],
	
	getMeteorData() {
		let customerId = FlowRouter.current().params.customerId;
		let handle = Meteor.subscribe("customer", customerId);
		return {
			cutomerLoading: ! handle.ready(), // Use handle to show loading state
			customer: CustomersCollection.find({_id: customerId}).fetch()
		}
	},

	getInitialState() {
		return {
			showErrorMessage: false,
			errors: '',
			errorObj: {heading: '', message: ''},
			showUpdateSuccess: false
		}
	},

	updateCustomer(e) {
		console.log('update customer');

		// ---------------------------
		// should use same code as AddCustomer to check field validity
		// FIND A WAY TO ABSTRACT THAT METHOD INTO A GENERAL HELPER FUNCTION
		// ----------------------------

		Meteor.call('updateCustomer', customersArr, (err) => {
	    	if (err) {
    			// console.log(err);
    			this.setState({errorObj: {heading: 'Add form errors', message: err.message}});
		    	this.setState({showErrorMessage: true});
	    	}else{
    			this.refs.ref_customer_name.value = '';
    			this.refs.ref_customer_email.value = '';
    			this.refs.ref_customer_address.value = '';
    			this.refs.ref_customer_phone.value = '';
    			this.setState({showUpdateSuccess: true});
    		}
	    });

		e.preventDefault();
	},

	renderForm() {
		console.log(this.data)
		return (
			<div className="ui grid">
				<div className="eight wide column">
					<form className="ui form" method="post" onSubmit={this.updateCustomer}>
						<div className="field">
							<label>Name: </label>
							<input ref="ref_customer_name" type="text" name="name" defaultValue={this.data.customer[0].name} required/>
						</div>
						<div className="field">
							<label>Email: </label>
							<input ref="ref_customer_email" type="text" name="email" defaultValue={this.data.customer[0].email} required/>
						</div>
						<div className="field">
							<label>Phone: </label>
							<input ref="ref_customer_phone" type="text" name="phone" defaultValue={this.data.customer[0].phone}/>
						</div>
						<div className="field">
							<label>Address: </label>
							<textarea ref="ref_customer_address" name="address">{this.data.customer[0].address}</textarea>
						</div>

						<button className="ui button" type="submit">Update</button>
					</form>
				</div>
			</div>
			);
	},

	render() {
		if (this.data.cutomerLoading) {
	      return <p>Loading...</p>;
	    }
		return (
			<div>
				<h3>Customer</h3>
				{this.renderForm()}
			</div>
		);
	}

});