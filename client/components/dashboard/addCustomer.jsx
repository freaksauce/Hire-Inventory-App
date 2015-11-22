AddCustomer = React.createClass({
	
	getInitialState() {
		return {
			showErrorMessage: false,
			errors: '',
			errorObj: {heading: '', message: ''},
			showInsertSuccess: false
		}
	},

	addCustomer(e) {
		e.preventDefault();
		console.log('add customer')
		let fields = [];
		for (el in this.refs) {
			fields.push(el);
		}
		let customersArr = [];
		let errors = {};
	    fields.forEach(function(field, index) {
	      let el = this.refs[field];
	      let value = el.value;
	      let required = el.required;
	      if (required && !value) {
	        errors[field] = "The "+field+" field is required";
	      }else{
	      	customersArr.push({field: fields[index], value: value});
	      }
	    }.bind(this));

	    if (Object.keys(errors).length !== 0) {
	    	this.setState({errorObj: {heading: 'Add form errors', message: errors}});
		    this.setState({showErrorMessage: true});
	    }else{
	    	// call method to insert into mongo	    	
	    	console.log('customersArr',customersArr);
	    	
	    	Meteor.call('addCustomer', customersArr, (err) => {
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
						<label>Customer Address</label>
						<textarea ref="ref_customer_address" name="customer-address"></textarea>
					</div>
					<div className="field">
						<label>Customer Phone number</label>
						<input ref="ref_customer_phone" type="text" name="customer-phone"/>
					</div>
					
					<button className="ui button" type="submit">Add</button>
				</form>
	}

});