DashboardContent = React.createClass({
	
	mixins: [ReactMeteorData],
	
	getMeteorData() {
		return {
			inventory: Inventory.find({}).fetch()
		}
	},

	showInventory() {
		return <div className="ui list">{this.iterateItems()}</div>
	},

	iterateItems() {
		return this.data.inventory.map((item) => {
			return <InventoryItem item={item} />
		});
	},

	showAddItemForm() {
		return  <form className="ui form" onSubmit={this.props.addItem}>
					<h3>Add new item</h3>
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
	},

	render() {
		return (
			<div className="ui grid">
				<div className="eight wide column">
					<h3>Inventory list</h3>
					{this.showInventory()}
				</div>
				<div className="eight wide column">
					{this.showAddItemForm()}
				</div>
			</div>
		);
	}

});