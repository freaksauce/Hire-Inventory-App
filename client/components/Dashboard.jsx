Dashboard = React.createClass({

	mixins: [ReactMeteorData],
	
	getMeteorData() {
		let data = {
	      authInProcess: Meteor.loggingIn(),
	      userAvailable: !!Meteor.user(),
	      user: Meteor.user()
	    };

	    return data;
	},

	redirect() {
		FlowRouter.go('/login');
	},
	
	checkAuth() {
		if (this.data.userAvailable) {
			console.log(this.data.user.profile.role)
			if (this.data.user.profile.role !== 'admin') {
				{this.redirect()}				
			}else{
				return <DashboardContent />
			}
		}
	},

	render() {		
		return (
			<div>
				<h2>Dashboard</h2>
				{this.data.authInProcess? <p>Loading...</p> : this.checkAuth()}
			</div>
		);
	}
});