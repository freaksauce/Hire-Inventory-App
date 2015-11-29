Meteor.methods({

	addInventoryItem(inventoryItems) {
		let inventoryItemObj = {};
		inventoryItems.forEach(function(item, index) {
			console.log(item.field);
			console.log(item.value);
			if (item.field === 'item_id') {
				if (item.value !== '') {
					inventoryItemObj.id = item.value;
				}
			}
			if (item.field === 'item_name') {
				if (item.value !== '') {
					inventoryItemObj.name = item.value;
				}
			} 
			if (item.field === 'item_image') {
				if (item.value !== '') {
					inventoryItemObj.image = item.value;			
				}
			}
		});
		inventoryItemObj.inStock = true;
		inventoryItemObj.hiredByCustomerId = null;
		InventoryCollection.insert(inventoryItemObj);
	},

	deleteInventoryItem(itemId) {
		if (itemId) {
			InventoryCollection.remove(itemId);
			// remove the item from any customers 
		}
	},

	buildCustomerObj(customer) {
		let customerObj = {};
		customer.forEach(function(item, index) {
			// console.log(item.field);
			// console.log(item.value);
			if (item.field === 'ref_customer_name') {
				if (item.value !== '') {
					customerObj.name = item.value;
				}
			}
			if (item.field === 'ref_customer_email') {
				if (item.value !== '') {
					customerObj.email = item.value;
				}
			}
			if (item.field === 'ref_customer_address') {
				if (item.value !== '') {
					customerObj.address = item.value;
				}
			}
			if (item.field === 'ref_customer_phone') {
				if (item.value !== '') {
					customerObj.phone = item.value;
				}
			}
		});
		return customerObj;
	},

	addCustomer(customer) {
		let returnCustomerObj = this.buildCustomerObj(customer);
		CustomersCollection.insert(returnCustomerObj);
	},

	updateCustomer(customer) {
		console.log('updateCustomer method');
		console.log(customer.customerId);
		Meteor.call('buildCustomerObj', customer, (err, result) => {
			if (err) {
				console.log(err);
			}else{				
				console.log(result);
				// update customer WHERE email = this.email
				// CustomersCollection.update({_id: customer.id}, 
				// 	{
				// 		$set: {

				// 		} 
				// 	});	
			}
		});

	},

	deleteCustomer(customerId) {
		if (customerId) {
			CustomersCollection.remove(customerId);
		}
	}

});