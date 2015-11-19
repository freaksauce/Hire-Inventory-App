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
	if (CustomersCollection.find().count() === 0) {
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
		    CustomersCollection.insert(userObj);
		});
	}	

	// add inventory stubs
	if (InventoryCollection.find().count() === 0) {
		_.each(_.range(10), function() {
			let itemName = faker.commerce.productName();
			let itemId = faker.random.uuid();
			let itemImg = faker.image.abstract();		
			let itemImgThumb = faker.image.abstract(80,80);
			let itemInStock = faker.random.boolean();
			let inventoryItem = {
				id: itemId,
				name: itemName,
				image: itemImg,
				thumb: itemImgThumb,
				inStock: itemInStock,
				hiredByCustomerId: null
			}
			InventoryCollection.insert(inventoryItem);
		});
	}

	// add hire log stubs
	/*
		customer: {
			customer_id,
			hires: {
				dateHired: {
					inventoryItem,
					returned: false,
					dateReturned: null
				}
			}
		}

	*/

});


Images.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  },
  'update': function () {
  	return true;
  }
});