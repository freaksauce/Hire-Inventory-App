Meteor.publish("customers", function () {
  return CustomersCollection.find();
});

Meteor.publish("inventory", function () {
  return InventoryCollection.find();
});