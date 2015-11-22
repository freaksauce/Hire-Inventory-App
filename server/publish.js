Meteor.publish("customers", function () {
  return CustomersCollection.find();
});

Meteor.publish("customer", function (_id) {
  return CustomersCollection.find({_id: _id});
});

Meteor.publish("inventory", function () {
  return InventoryCollection.find();
});

Meteor.publish("inventory_item", function (id) {
  return InventoryCollection.find({id:id});
});