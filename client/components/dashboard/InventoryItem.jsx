InventoryItem = React.createClass({

	render() {
		return (
			<div className="item">
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