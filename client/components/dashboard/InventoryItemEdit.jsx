InventoryItemEdit = React.createClass({
	
	propTypes: {
		itemId: React.PropTypes.string.isRequired
	},

	mixins: [ReactMeteorData],
	
	getMeteorData() {
		var handle = Meteor.subscribe("inventory", this.props.itemId);

		return {
			inventoryLoading: ! handle.ready(), // Use handle to show loading state
			inventory: Inventory.find({"_id": this.props.itemId}).fetch()
		}
	},

	getInitialState() {
		return {
			inventoryLoaded: false
		}
	},

	showData() {
		console.log("show data");
		return <div className="itemData">
					<div className="field"><label>ID:</label><input name="item_id" value={this.data.inventory[0].id} /></div>
					<div className="field"><label>Name:</label><input name="item_name" value={this.data.inventory[0].name} /></div>
					<div className="field"><label>Image:</label><img src={this.data.inventory[0].image} /></div>
					<button className="ui primary button" type="submit">Update Item</button>
				</div>
	},

	render() {
		if (this.data.inventoryLoading) {
	      return <p>Loading...</p>;
	    }

		return (
			<div>
				<h3>Inventory Item</h3>
				<form className="ui form">		
					{this.showData()}
				</form>
			</div>
		);
	}

});