DashboardContent = React.createClass({
	
	mixins: [ReactMeteorData],
	
	getMeteorData() {
		return {
			inventory: Inventory.find({}).fetch()
		}
	},

	showInventory() {
		return this.data.inventory.map((item) => {
	      console.log(item);
	      return <div className="ui list">
					<div className="item">
						<img className="ui image" data-lrg={item.image} src={item.thumb}/>
						<div className="content">
							<a className="header">{item.name}</a>
							<div class="description">In Stock: {item.inStock? <span>Yes</span> : <span>No</span> }</div>
						</div>
					</div>
				</div>
	    });
	},

	render() {
		return (
			<div>
				<h3>Inventory list</h3>
				{this.showInventory()}
			</div>
		);
	}

});