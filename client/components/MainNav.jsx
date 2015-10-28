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

	showLogoutLink() {
		return <a href="/logout" className="item">Logout</a>
	},

	render() {
		return (
			<nav>
				<div className="ui inverted menu fixed">
					<a href="/" className="active item">
						Hire Inventory App
					</a>
					{this.data.loggedIn? this.showLogoutLink() : this.showLoginLink()}
				</div>
			</nav>
		)
	}
});