FlowRouter.route("/", {
	name: "home",
	action: function() {
		ReactLayout.render(Layout, {
			content: <Home />
		})
	}
});

FlowRouter.route("/dashboard", {
  subscriptions: function() {
    this.register('customers', Meteor.subscribe('customers'));
    this.register('inventory', Meteor.subscribe('inventory'));
  },
  action: function() {
    if (Meteor.userId()) {     
      ReactLayout.render(Layout, {
        content: <Dashboard />
      });
    }else{
      FlowRouter.go("/login");
    }
  }
});

FlowRouter.route("/login", {
  action: function() {
    ReactLayout.render(Layout, {
      content: <LoginContainer />
    });    
  }
});

FlowRouter.route("/logout", {
  action: function() {
    ReactLayout.render(Layout, {
      content: <Logout />
    });    
  }
});

FlowRouter.notFound = {    
    action: function() {
      ReactLayout.render(Layout, {
        content: <NotFound />
      });
    }
};