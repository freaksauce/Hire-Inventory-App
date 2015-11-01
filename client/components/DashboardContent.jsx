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
	      return <div>{item.name}</div>
	      // return <CustomerProfile key={customer._id} userData={customer} />;
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