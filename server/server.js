Meteor.startup(function() {
	console.log("server")
	if (Meteor.users.find().count() === 0) {
		var userId = Accounts.createUser({
			username: "admin",
			email: "jon@freaksauce.com",
			password: "password",
			profile: {
				first_name: "Jon",
				last_name: "Bloomer"
			}
		});
		console.log(userId);
	}

});