AddCustomer = React.createClass({
	
	mixins: [ValidateFieldsMixin],

	getInitialState() {
		return {
			showErrorMessage: false,
			errors: '',
			errorObj: {heading: '', message: ''},
			showInsertSuccess: false
		}
	},

	componentWillMount() {
		// find correct syntax to disable html5 field validation
		// $('form').setAttribute('novalidate', true);
	},

	addCustomer(e) {
		e.preventDefault();
		console.log('add customer');
		const returnCustomerObj = this.validateFields(this.refs);
		
		if (returnCustomerObj.errors) {
			this.setState({errorObj: {heading: 'Add form errors', message: this.errors}});
		    this.setState({showErrorMessage: true});
		}else{
			console.log('customersArr',returnCustomerObj);
			Meteor.call('addCustomer', returnCustomerObj, (err) => {
	    		if (err) {
	    			// console.log(err);
	    			this.setState({errorObj: {heading: 'Add form errors', message: err.message}});
		    		this.setState({showErrorMessage: true});
	    		}else{
	    			this.refs.ref_customer_name.value = '';
	    			this.refs.ref_customer_email.value = '';
	    			this.refs.ref_customer_address.value = '';
	    			this.refs.ref_customer_phone.value = '';
	    			this.setState({showInsertSuccess: true});
	    		}
	    	});
		}
	    
	},	

	render() {
		return  <form className="ui form" onSubmit={this.addCustomer} method="post">
					<h3>Add new item form</h3>
					
					{this.state.showErrorMessage ? <Message messageType="negative" messageContent={this.state.errorObj} /> : ''}
					{this.state.showInsertSuccess ? <Message messageType="positive" messageContent={{heading:'Success', message: 'Customer successfully inserted into DB'}} /> : ''}

					<div className="field">
						<label>Customer Name</label>
						<input ref="ref_customer_name" type="text" name="customer-name" required/>
					</div>
					<div className="field">
						<label>Customer Email</label>
						<input ref="ref_customer_email" type="text" name="customer-email" required/>
					</div>
					<div className="field">
						<label>Customer Phone number</label>
						<input ref="ref_customer_phone" type="text" name="customer-phone"/>
					</div>
					<div className="field">
						<label>Customer Address</label>
						<textarea ref="ref_customer_address" name="customer-address"></textarea>
					</div>					
					
					<button className="ui button" type="submit">Add</button>
				</form>
	}

});