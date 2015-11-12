var Schemas = {};

Schemas.Inventory = new SimpleSchema({
    id: {
        type: String,
        label: "id"
    },
    name: {
        type: String,
        label: "Name"
    },
    image: {
        type: String,
        label: "Upload image"
    },
    inStock: {
        type: Boolean,
        label: "In stock?",
        optional: true
    },
    hiredByCustomerId: {
        type: String,
        label: "Hired-by customer id",
        optional: true
    }
});

Inventory.attachSchema(Schemas.Inventory);

Schemas.Customers = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    email: {
        type: String,
        label: "Email"
    },
    username: {
        type: String,
        label: "Username"
    },
    password: {
        type: String,
        label: "Password"
    },
    inventory: {
        type: Array,
        label: "Inventory items",
        optional: true
    },
    "inventory.$": {
        type: Object
    },
    "inventory.$._id": {
        type: String
    }
});

Customers.attachSchema(Schemas.Customers);
