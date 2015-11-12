InventoryItemView = React.createClass({
	
	propTypes: {
		itemId: React.PropTypes.string.isRequired
	},

	mixins: [ReactMeteorData],
	
	getMeteorData() {
		return {
			item: Inventory.find({"_id": this.props.itemId}).fetch()
		}
	},

	showItem() {
		console.log(this.data.item)
		return <InventoryItem item={this.data.item[0]} />		
	},

	render() {
		return (
			<div>
				<h3>Inventory Item</h3>
				<div>
					{this.showItem()}
				</div>
			</div>
		);
	}

});