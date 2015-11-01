Meteor.startup(function() {
	console.log("server")
	if (Meteor.users.find().count() === 0) {
		let userId = Accounts.createUser({
			username: "admin",
			email: "jon@freaksauce.com",
			password: "password",
			profile: {
				first_name: "Jon",
				last_name: "Bloomer",
				role: "admin"
			}
		});
		console.log(userId);
	}

	// add fake customers
	if (Customers.find().count() === 0) {
		_.each(_.range(25), function() {
		    let randomEmail = faker.internet.email();
		    let randomName = faker.name.findName();
		    let userName = faker.internet.userName();
		    let userObj = {
		      name: randomName,
		      email: randomEmail,
		      username: userName,
		      password: 'password',
		      inventory: []
		    }
		    Customers.insert(userObj);
		});
	}	

	// add inventory stubs
	if (Inventory.find().count() === 0) {
		_.each(_.range(10), function() {
			let itemName = faker.commerce.productName();
			let itemId = faker.random.uuid();
			let itemImg = faker.image.abstract();		
			let itemImgThumb = faker.image.abstract(120,120);
			let inventoryItem = {
				id: itemId,
				name: itemName,
				image: itemImg,
				thumb: itemImgThumb,
				inStock: true,
				hiredByCustomerId: null
			}
			Inventory.insert(inventoryItem);
		});
	}

});