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

	updateInventoryItem(item) {
		console.log(item, "update inventory item");

		Meteor.call('buildInventoryObj', item, (err, result) => {
			if (err) {
				console.log(err);
			}else{				
				console.log(result);
				InventoryCollection.update({_id: result._id}, 
					{
						$set: {
							id: result.id,
							name: result.name,
							image: result.image,
							thumb: result.thumb,
							inStock: result.inStock
						} 
					});	
			}
		});
	},

	deleteInventoryItem(itemId) {
		if (itemId) {
			InventoryCollection.remove(itemId);
			// remove the item from any customers 
		}
	},

	buildInventoryObj(item) {
		console.log(item)
		let itemObj = {};
		item.forEach(function(item, index) {
			if (item.field === 'ref_item_id') {
				if (item.value !== '') {
					itemObj.id = item.value;
				}
			}
			if (item.field === 'ref_item_name') {
				if (item.value !== '') {
					itemObj.name = item.value;
				}
			}
			if (item.field === 'ref_item_image') {
				if (item.value !== '') {
					itemObj.image = item.value;
				}
			}
			if (item.field === 'ref_item_instock') {
				if (item.value !== '') {
					itemObj.inStock = item.value;
				}
			}
			if (item.field === '_id') {
				if (item.value !== '') {
					customerObj._id = item.value;
				}
			}
		});
		return itemObj;
	},

	buildCustomerObj(customer) {
		let customerObj = {};
		customer.forEach(function(item, index) {
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
			if (item.field === '_id') {
				if (item.value !== '') {
					customerObj._id = item.value;
				}
			}
		});
		return customerObj;
	},

	addCustomer(customer) {
		Meteor.call('buildCustomerObj', customer, (err, result) => {
			if (err) {
				console.log(err);
			}else{
				console.log(result);
				CustomersCollection.insert(result);
			}
		});
	},

	updateCustomer(customer) {
		console.log('updateCustomer method');
		// console.log(customer);
		Meteor.call('buildCustomerObj', customer, (err, result) => {
			if (err) {
				console.log(err);
			}else{				
				console.log(result);
				CustomersCollection.update({_id: result._id}, 
					{
						$set: {
							name: result.name,
							email: result.email,
							phone: result.phone,
							address: result.address
						} 
					});	
			}
		});

	},

	deleteCustomer(customerId) {
		if (customerId) {
			CustomersCollection.remove(customerId);
		}
	}

});