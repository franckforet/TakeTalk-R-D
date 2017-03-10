Router.configure({
  layoutTemplate: 'layout'
});

/** The route to the home page */
Router.route('/', {name:'home'});

Router.route('/create', {name:'create'});


Router.route('/groups', {name:'groups'});
Router.route('/groupSubmit', {name:'groupSubmit'});
Router.route('/groups/:_id', {
  name: 'groupPage',
  data: function() { return Groups.findOne(this.params._id); }
});


Router.route('/meeting/:_meetingId', {
  name: 'meeting',
  data: function() {return Meetings.findOne(this.params._id);}
});
