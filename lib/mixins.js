ValidateCustomerMixin = {
	componentDidMount() {
		console.log('ValidateCustomerMixin loaded');
	},

	validateCustomer(refs) {	

		let fields = [];
		for (el in refs) {
			fields.push(el);
		}

		const customersArr = [];
		const errors = {};

	    fields.forEach(function(field, index) {
	      let el = refs[field];
	      let value = el.value;
	      let required = el.required;
	      if (required && !value) {
	        errors[field] = "The "+field+" field is required";
	      }else{
	      	customersArr.push({field: fields[index], value: value});
	      }
	    }.bind(this));	   

	    if (Object.keys(errors).length !== 0) { 
	    	return {'errors': errors};
	    }else {
	    	return customersArr;
	    }

	} // validateCustomer

}