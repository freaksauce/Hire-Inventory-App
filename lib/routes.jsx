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
  action() {
    if (Meteor.userId()) {     
      ReactLayout.render(Layout, {
        content: <Dashboard />
      });
    }else{
      FlowRouter.go("/login");
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
        content: <InventoryItem itemId={params.itemId} />
      });
    }else{
      FlowRouter.go("/login");
    } 
  }
})

FlowRouter.route("/login", {
  action() {
    ReactLayout.render(Layout, {
      content: <LoginContainer />
    });    
  }
});

FlowRouter.route("/logout", {
  action() {
    ReactLayout.render(Layout, {
      content: <Logout />
    });    
  }
});

FlowRouter.notFound = {    
    action() {
      ReactLayout.render(Layout, {
        content: <NotFound />
      });
    }
};