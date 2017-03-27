Router.configure({
  layoutTemplate: 'layout',
  waitOn: function(){
    return [
      Meteor.subscribe('groups'),
      Meteor.subscribe('meetings')
    ]},
    /*return Meteor.subscribe('groups'); },
  waitOn: function(){return Meteor.subscribe('meetings'); }
  */
});

/** The route to the home page */
Router.route('/', {name:'home'});

Router.route('/create/:_id?', {
  name: 'create',
  data: function() { return Groups.findOne(this.params._id); }
});

Router.route('/groups', {name:'groups'});
Router.route('/groupSubmit', {name:'groupSubmit'});
Router.route('/groups/:_id', {
  name: 'groupPage',
  data: function() { return Groups.findOne(this.params._id); }
});


Router.route('/meeting/:_meetingId', {
  name: 'meeting',
  data: function() {
  // Recherche du meeting dont l'id est passé en paramètre
  // Redirection vers une page d'erreur "404 not found" lorsqu'aucun meeting n'est trouvé
    var meeting = Meetings.findOne({_id: this.params._meetingId, status: "ongoing"});

  //  console.log(meeting);
    if(meeting === undefined){
      //  console.log('undefined meeting...');
        Router.configure({layoutTemplate: 'layout', notFoundTemplate: '404'});
    }
    else
      return  Meetings.findOne({_id: this.params._meetingId, status: "ongoing"});

  }
});

Router.route('/join/:_meetingId/:_userId', {
    name: 'join',
    data: function() {

        // Recherche du meeting dont l'id est passé en paramètre
        // Redirection vers une page d'erreur "404 not found" lorsqu'aucun meeting n'est trouvé
        var meeting = Meetings.findOne({_id: this.params._meetingId});
        if(meeting === undefined){
            console.log('meeting undefined');
            Router.configure({layoutTemplate: 'layout', notFoundTemplate: '404'});
        }

        //Recherche de l'utilisateur
        //Redirection vers une page d'erreur "404 not found" lorsqu'aucun utilisateur n'est trouvé
        //Ne permet qu'aux utilisateurs invités de rejoindre un meeting
        var user = MeetingUsers.findOne({_id: this.params._userId});
        if(user === undefined){
            console.log('user undefined');
            Router.configure({layoutTemplate: 'layout', notFoundTemplate: '404'});
        }

        Session.set("meetingId", this.params._meetingId);
        Session.set("userId", this.params._userId);

        return {};
    }
});

Router.route('/meeting/:_meetingId/lineup', function () {
    this.render('lineup');
});

Router.route('/end', function () {
    this.render('end');
});
