InventoryItemEdit = React.createClass({
	
	propTypes: {
		itemId: React.PropTypes.string.isRequired
	},

	mixins: [ReactMeteorData],
	
	getMeteorData() {
		var handle = Meteor.subscribe("inventory", this.props.itemId);

		return {
			inventoryLoading: ! handle.ready(), // Use handle to show loading state
			inventory: InventoryCollection.find({"_id": this.props.itemId}).fetch()
		}
	},

	showData() {
		console.log("show data");
		return <div className="itemData">
					<div className="field"><label>ID:</label><input name="item_id" defaultValue={this.data.inventory[0].id} /></div>
					<div className="field"><label>Name:</label><input name="item_name" defaultValue={this.data.inventory[0].name} /></div>
					<div className="field"><label>Image:</label><img className="ui fluid image" src={this.data.inventory[0].image} /></div>
					<button className="ui primary button" type="submit">Update Item</button>
				</div>
	},

	updateItem(e) {
		let itemId = FlowRouter.current().params.itemId;
		
		const returnItemObj = this.validateItem(this.refs, itemId);
		console.log(returnItemObj);
		e.preventDefault();
	},

	render() {
		if (this.data.inventoryLoading) {
	      return <p>Loading...</p>;
	    }

		return (
			<div className="ui grid">
				<div className="ten wide column">
					<h3>Inventory Item</h3>
					<form className="ui form" method="post" onSubmit={this.updateItem}>
						{this.showData()}
					</form>
				</div>
			</div>
		);
	}

});