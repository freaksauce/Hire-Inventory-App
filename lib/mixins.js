ValidateFieldsMixin = {
	componentDidMount() {
		console.log('ValidateFieldsMixin loaded');
	},

	validateFields(refs, id) {	

		let fields = [];
		for (el in refs) {
			fields.push(el);
		}

		const returnArr = [];
		const errors = {};

	    fields.forEach(function(field, index) {
	      let el = refs[field];
	      let value = el.value;
	      let required = el.required;
	      if (required && !value) {
	        errors[field] = "The "+field+" field is required";
	      }else{
	      	returnArr.push({field: fields[index], value: value});
	      }
	    }.bind(this));	   

	    if (id) {	    	
		    returnArr.push({field: '_id', value: id});
	    }

	    if (Object.keys(errors).length !== 0) { 
	    	return {'errors': errors};
	    }else {
	    	return returnArr;
	    }

	} // validateFields

}