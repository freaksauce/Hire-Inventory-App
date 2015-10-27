Meteor.publish("customers", function () {
  return Customers.find();
});

Meteor.publish("inventory", function () {
  return Inventory.find();
});