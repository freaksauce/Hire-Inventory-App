DashboardContent = React.createClass({
	
	mixins: [ReactMeteorData],
	
	getMeteorData() {
		let data = {
			inventory: this.getInventory()
		}
		console.log(data);
		return data;
	},

	getInventory() {
		let result = Inventory.find({}).fetch();
		return result;
	},

	render() {
		return (
			<h3>Hi</h3>
		);
	}

});