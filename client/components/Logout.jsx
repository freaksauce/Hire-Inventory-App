Logout = React.createClass({
	
	componentWillMount() {
		Meteor.logout(function(err) {
			if (err) {
				console.log('--ERROR--');
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