InventoryCollection = new Mongo.Collection('inventory');
CustomersCollection = new Mongo.Collection('customers');
HireLogCollection = new Mongo.Collection('hireLog');
Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/images"})]
});