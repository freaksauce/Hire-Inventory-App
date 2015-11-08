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

		let errors = {};
	    fields.forEach(function(field) {
	      let value = this.refs[field].getDOMNode().value;
	      if (!value) {
	        errors[field] = "The "+field+" field is required";
	      }
	    }.bind(this));
	    this.setState({errorObj: {heading: 'Add form errors', message: errors}});
	    this.setState({showErrorMessage: true});
	    
		e.preventDefault();
	},	

	render() {
		return  <form className="ui form" onSubmit={this.addItem}>
					<h3>Add new item form</h3>
					{this.state.showErrorMessage ? <Message messageType="negative" messageContent={this.state.errorObj} hideErrorMessage={this.hideErrorMessage} /> : <p>no error</p>}
					<div className="field">
						<label>Item ID</label>
						<input ref="item_id" type="text" name="item-id" placeholder="Item ID"/>
					</div>
					<div className="field">
						<label>Item Name</label>
						<input ref="item_name" type="text" name="item-name" placeholder="Item Name"/>
					</div>
					<div className="field">
						<label>Image upload</label>
						<input ref="item_image" type="file" name="item-image" placeholder="Item image"/>
					</div>
					
					<button className="ui button" type="submit">Add</button>
				</form>
	}

});