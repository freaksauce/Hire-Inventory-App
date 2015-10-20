Meteor.startup(function() {
	console.log("server")
	if (Meteor.users.find().count() === 0) {
		let userId = Accounts.createUser({
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

	if (Customers.find().count() === 0) {
		// add fake customers
		_.each(_.range(25), function() {
		    let randomEmail = faker.internet.email();
		    let randomName = faker.name.findName();
		    let userName = faker.internet.userName();
		    let userObj = {
		      name: randomName,
		      email: randomEmail,
		      username: userName,
		      password: 'password',
		    }
		    Customers.insert(userObj);
		});

	}

});