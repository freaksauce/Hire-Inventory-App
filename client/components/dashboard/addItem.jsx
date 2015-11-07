AddItem = React.createClass({
	
	addItem(e) {
		let item_id = this.refs.item_id.getDOMNode().value;
		let item_name = this.refs.item_name.getDOMNode().value;
		let item_image = this.refs.item_image.getDOMNode().value;
		console.log(item_id+', '+item_name+', '+item_image);
		return false;
	},

	render() {
		return  <form className="ui form" onSubmit={this.addItem}>
					<h3>Add new item form</h3>
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