InventoryItemEdit = React.createClass({
	
	propTypes: {
		itemId: React.PropTypes.string.isRequired
	},

	mixins: [ReactMeteorData, ValidateFieldsMixin],
	
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
					<div className="field"><label>ID:</label><input ref="ref_item_id" name="item_id" defaultValue={this.data.inventory[0].id} /></div>
					<div className="field"><label>Name:</label><input ref="ref_item_name" name="item_name" defaultValue={this.data.inventory[0].name} /></div>
					<div className="field"><label>Image:</label><img ref="ref_item_image" className="ui fluid image" src={this.data.inventory[0].image} /></div>
					<div className="field"><label>In Stock:</label><input ref="ref_item_instock" type="checkbox" name="item_instock" defaultChecked={this.data.inventory[0].inStock ? "checked" : ""} /></div>
					<button className="ui primary button" type="submit">Update Item</button>
				</div>
	},

	updateItem(e) {
		let itemId = FlowRouter.current().params.itemId;	
		const returnItemObj = this.validateFields(this.refs, itemId);
		console.log(returnItemObj);

		if (returnItemObj.errors) {
			this.setState({errorObj: {heading: 'Update form errors', message: this.errors}});
		    this.setState({showErrorMessage: true});
		}else{
			Meteor.call('updateInventoryItem', returnItemObj, (err) => {
	    		if (err) {
	    			// console.log(err);
	    			this.setState({errorObj: {heading: 'Add form errors', message: err.message}});
		    		this.setState({showErrorMessage: true});
	    		}else{
	    			this.setState({showInsertSuccess: true});
	    		}
	    	});
		}

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