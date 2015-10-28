Logout = React.createClass({
	
	mixins: [ReactMeteorData],
	
	getMeteorData() {
		Meteor.logout(function(err) {
			if (err) {
				console.log(err);
			}else{				
				FlowRouter.go('/login');
			}
		});
	},

	render() {
		return (
			<h2>Logout</h2>
		);
	}
});