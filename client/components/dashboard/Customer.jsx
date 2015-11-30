Customer = React.createClass({

	mixins: [ReactMeteorData, ValidateFieldsMixin],
	
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
		let customerId = FlowRouter.current().params.customerId;
		console.log('update customer: '+customerId);
		const returnCustomerObj = this.validateFields(this.refs, customerId);
		console.log(returnCustomerObj)
		if (returnCustomerObj.errors) {
			this.setState({errorObj: {heading: 'Update form errors', message: this.errors}});
		    this.setState({showErrorMessage: true});
		}else{
			Meteor.call('updateCustomer', returnCustomerObj, (err) => {
	    		if (err) {
	    			// console.log(err);
	    			this.setState({errorObj: {heading: 'Add form errors', message: err.message}});
		    		this.setState({showErrorMessage: true});
	    		}else{
	    			this.setState({showInsertSuccess: true});
	    		}
	    	});
		}

		e.preventDefault();
	},

	renderForm() {
		// console.log(this.data)
		return (
			<div className="ui grid">
				<div className="ten wide column">
					
					{this.state.showErrorMessage ? <Message messageType="negative" messageContent={this.state.errorObj} /> : ''}
					{this.state.showInsertSuccess ? <Message messageType="positive" messageContent={{heading:'Success', message: 'Customer successfully inserted into DB'}} /> : ''}
					
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
				<h3>Update Customer details</h3>
				{this.renderForm()}
			</div>
		);
	}

});