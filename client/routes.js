
Router.configure({
	layoutTemplate: "base"
});

Router.route("/", {
	
	subscriptions: function () {
		return Meteor.subscribe("polls");
	},

	action: function () {
		this.render("polls", {
			data: function () {
				return Polls.find();
			}
		});
	}

});

Router.route("/new", function () {
	this.render("new");
});