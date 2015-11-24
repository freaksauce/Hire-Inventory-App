Meteor.publish("customers", function () {
  return CustomersCollection.find();
});

Meteor.publish("customer", function (customerId) {
  return CustomersCollection.find({_id: customerId});
});

Meteor.publish("inventory", function () {
  return InventoryCollection.find();
});

Meteor.publish("inventory_item", function (id) {
  return InventoryCollection.find({id:id});
});