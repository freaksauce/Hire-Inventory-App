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
	      return <div className="ui middle aligned divided list">
					<div className="item">
						<div className="right floated content">
							<div className="ui button">Add</div>
						</div>
						<img className="ui small image" src={item.thumb}/>
						<div className="content">
							<ul>
								<li>Name: {item.name}</li>
								<li>In Stock: {item.inStock? <span>Yes</span> : <span>No</span> }</li>
							</ul>
						</div>
					</div>
				</div>
	    });
	},

	render() {
		return (
			<div>
				<h3>Hi</h3>
				{this.showInventory()}
			</div>
		);
	}

});