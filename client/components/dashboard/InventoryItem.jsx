InventoryItem = React.createClass({
	
	propTypes: {
		itemId: React.PropTypes.string.isRequired
	},

	mixins: [ReactMeteorData],
	
	getMeteorData() {
		return {
			inventory: Inventory.find({"_id": this.props.itemId}).fetch()
		}
	},

	render() {
		return (
			<div>
				<h3>Inventory Item</h3>
				<div>
				{this.data.inventory}
				</div>
			</div>
		);
	}

});