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
				return <DashboardContent ref="inner" addItem={this.addItem} />
			}
		}
	},

	addItem(e) {
		let item_id = this.refs.inner.refs.item_id.getDOMNode().value;
		let item_name = this.refs.inner.refs.item_name.getDOMNode().value;
		let item_image = this.refs.inner.refs.item_image.getDOMNode().value;
		console.log(item_id+', '+item_name+', '+item_image);
		return false;
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