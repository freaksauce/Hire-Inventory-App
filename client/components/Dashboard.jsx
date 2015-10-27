Dashboard = React.createClass({

	mixins: [ReactMeteorData],
	
	getMeteorData() {
		return {
			currentUser: Meteor.user()
		};
	},

	// componentWillUpdate() {		
	// 	if (FlowRouter.subsReady("customers")) {
	// 		console.log("customers ready");
	// 	}
	// },

	render() {
		console.log(this.data.currentUser.profile.role)
		if (this.data.currentUser.profile.role !== 'admin') {
			console.log('not admin')
			window.location.replace('/login');
		}
		
		return (
			<div>
				<h2>Dashboard</h2>
			</div>
		);
	}
});