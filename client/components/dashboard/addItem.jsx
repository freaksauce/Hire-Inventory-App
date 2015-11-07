AddItem = React.createClass({
	
	getInitialState() {
		return {
			showErrorMessage: false,
			errorMessages: '',
			errorObj: {heading: '', message: ''}
		}
	},

	addItem(e) {		
		let item_id = this.refs.item_id.getDOMNode().value;
		this.validate({"name": "item_id", "val": item_id});
		let item_name = this.refs.item_name.getDOMNode().value;
		this.validate({"name":"item_name", "val": item_name});
		let item_image = this.refs.item_image.getDOMNode().value;
		// console.log(item_id+', '+item_name+', '+item_image);
		e.preventDefault();
	},

	validate(item) {
		let msg = this.state.errorMessages;
		if (item.name === "item_id" && item.val === '') {
			msg += 'Item ID is required<br>';
			this.setState({errorMessages: msg});
			console.log(this.state.errorMessages);
			// console.log(msg)
		}
		if (item.name === "item_name" && item.val === '') {
			msg += 'Item name is required<br>';
			console.log(msg);
			this.setState({errorMessages: msg});
			// console.log(msg)
		}	
		if (msg !== '') {			
			this.setState({showErrorMessage: true});
			this.setState({errorObj: {heading: 'Error', message: msg}});
		}
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