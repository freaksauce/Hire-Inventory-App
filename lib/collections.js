Inventory = new Mongo.Collection('inventory');
Customers = new Mongo.Collection('customers');
HireLog = new Mongo.Collection('hireLog');
Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/images"})]
});