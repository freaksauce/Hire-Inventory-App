InventoryItem = React.createClass({

	handleDelete(event) {
		console.log('handleDelete');
		let itemId = event.currentTarget.id;
		Meteor.call("deleteInventoryItem", itemId, function(error, result) {
			if (error) {
				console.log(error);
			}
		});
		event.preventDefault();
	},

	render() {
		return (
			<div className="item">
				<div className="right floated content"><button id={this.props.item._id} className="ui red button item-delete" onClick={this.handleDelete}>Delete</button></div>
				<img className="ui image" data-lrg={this.props.item.image} src={this.props.item.thumb}/>
				<div className="content">
					<a href={"/inventory-item/"+this.props.item._id} className="header">{this.props.item.name}</a>
					<p>Item ID: {this.props.item.id}</p>
					<div className="description">In Stock: {this.props.item.inStock? <a className="ui basic label green">Yes</a> : <a className="ui basic label red">No</a> }</div>
				</div>
			</div>
		);
	}

});