MainNav = React.createClass({
	mixins: [ReactMeteorData],
	
	getMeteorData() {
		var data = {
	      loggedIn: !!Meteor.user(),
	    };
	    return data;
	},

	showLoginLink() {
		return <a href="/login" className="item">Login</a>
	},

	showLoggedInMenu() {
		return (
			<span className="flex">
			<a href="/logout" className="item">Logout</a>
			<a href="/inventory" className="item">Inventory</a>
			<a href="/customers" className="item">Customers</a>
			</span>
			);
	},

	render() {
		return (
			<nav>
				<div className="ui inverted menu fixed">
					<a href="/" className="active item">
						Hire Inventory App
					</a>
					{this.data.loggedIn? this.showLoggedInMenu() : this.showLoginLink()}
				</div>
			</nav>
		)
	}
});