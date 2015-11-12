AddItem = React.createClass({
	
	getInitialState() {
		return {
			showErrorMessage: false,
			errors: '',
			errorObj: {heading: '', message: ''}
		}
	},

	addItem(e) {		
		let fields = [];
		for (el in this.refs) {
			fields.push(el);
		}
		let inventoryItemsArr = [];
		let errors = {};
	    fields.forEach(function(field, index) {
	      let el = this.refs[field].getDOMNode();
	      let value = el.value;
	      let required = el.required;
	      if (required && !value) {
	        errors[field] = "The "+field+" field is required";
	      }else{
	      	inventoryItemsArr.push({itemName: fields[index], value: value});
	      }
	    }.bind(this));
	    if (Object.keys(errors).length !== 0) {
		    this.setState({errorObj: {heading: 'Add form errors', message: errors}});
		    this.setState({showErrorMessage: true});
	    }else{
	    	// call method to insert into mongo	    	
	    	console.log(inventoryItemsArr);
	    	// Meteor.call('addInventoryItem', inventoryItemsArr, function(err) {

	    	// });
	    }
	    
		e.preventDefault();
	},	

	render() {
		return  <form className="ui form" onSubmit={this.addItem}>
					<h3>Add new item form</h3>
					{this.state.showErrorMessage ? <Message messageType="negative" messageContent={this.state.errorObj} hideErrorMessage={this.hideErrorMessage} /> : ''}
					<div className="field">
						<label>Item ID</label>
						<input ref="item_id" type="text" name="item-id" placeholder="Item ID" required/>
					</div>
					<div className="field">
						<label>Item Name</label>
						<input ref="item_name" type="text" name="item-name" placeholder="Item Name" required/>
					</div>
					<div className="field">
						<label>Image upload</label>
						<input ref="item_image" type="file" name="item-image" placeholder="Item image"/>
					</div>
					
					<button className="ui button" type="submit">Add</button>
				</form>
	}

});