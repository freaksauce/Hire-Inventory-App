FlowRouter.triggers.enter([function(context, redirect) {
  if (!Meteor.userId()) {
    FlowRouter.go('home');
  }
}], { except: ["login"] });

FlowRouter.route("/", {
	name: "home",
	action() {
		ReactLayout.render(Layout, {
			content: <Home />
		})
	}
});

FlowRouter.route("/dashboard", {
  subscriptions() {
    this.register('customers', Meteor.subscribe('customers'));
    this.register('inventory', Meteor.subscribe('inventory'));
  },
  name: "dashboard",
  action() {
    if (Meteor.userId()) {     
      ReactLayout.render(Layout, {
        content: <Dashboard />
      });
    }
  }
});

FlowRouter.route("/customers", {
  subscriptions() {
    this.register('customers', Meteor.subscribe('customers'));
  },
  name: "customers",
  action() {
    if (Meteor.userId()) {
      ReactLayout.render(Layout, {
        content: <Customers />
      })
    }
  }
});

FlowRouter.route("/customer/:customerId", {
  subscriptions(params, queryParams) {
    this.register('customer', Meteor.subscribe('customer', params.id));
  },
  name: "customer",
  action() {
    if (Meteor.userId()) {
      ReactLayout.render(Layout, {
        content: <Customer />
      })
    }
  }
});

FlowRouter.route("/inventory", {
  subscriptions() {
    this.register('inventory', Meteor.subscribe('inventory'));
  },
  name: "inventory",
  action() {
    if (Meteor.userId()) {
      ReactLayout.render(Layout, {
        content: <Inventory />
      })
    }
  }
});

FlowRouter.route("/inventory-item/:itemId", {
  subscriptions(params, queryParams) {
    this.register('inventory_item', Meteor.subscribe('inventory_item', params.id));
  },
  action(params) {
   if (Meteor.userId()) {     
      ReactLayout.render(Layout, {
        content: <InventoryItemEdit itemId={params.itemId} />
      });
    } 
  }
})

FlowRouter.route("/login", {
  name: "login",
  action() {
    ReactLayout.render(Layout, {
      content: <LoginContainer />
    });    
  }
});

FlowRouter.route("/logout", {
  name: "logout",
  action() {
    ReactLayout.render(Layout, {
      content: <Logout />
    });    
  }
});

FlowRouter.notFound = { 
    name: "notfound",
    action() {
      ReactLayout.render(Layout, {
        content: <NotFound />
      });
    }
};