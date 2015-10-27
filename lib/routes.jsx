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
  subscriptions: function() {
  },
  action: function() {
    ReactLayout.render(Layout, {
      content: <LoginContainer />
    });    
  }
});

FlowRouter.notFound = {
    subscriptions: function() {
    },
    action: function() {
      ReactLayout.render(Layout, {
        content: <NotFound />
      });
    }
};