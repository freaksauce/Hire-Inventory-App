DashboardContent = React.createClass({
	
	mixins: [ReactMeteorData],
	
	getMeteorData() {
		return {
			inventory: Inventory.find({}).fetch()
		}
	},

	showInventory() {
		return <div className="ui middle aligned divided list">{this.iterateItems()}</div>
	},

	iterateItems() {
		return this.data.inventory.map((item) => {
			return <InventoryItem item={item} key={item._id} />
		});
	},

	showAddItemForm() {
		return  <AddItem />
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