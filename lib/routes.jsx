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

FlowRouter.route("/inventory-item/:itemId", {
  subscriptions() {
    this.register('inventory', Meteor.subscribe('inventory'));
  },
  action(params) {
   if (Meteor.userId()) {     
      ReactLayout.render(Layout, {
        content: <InventoryItemView itemId={params.itemId} />
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