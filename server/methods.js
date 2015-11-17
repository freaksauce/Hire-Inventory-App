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
		Inventory.insert(inventoryItemObj);
	},

	deleteInventoryItem(itemId) {
		if (itemId) {
			Inventory.remove(itemId);
			// remove the item from any customers 
		}
	}

});