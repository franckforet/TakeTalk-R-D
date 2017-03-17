if(Meetings.find().count() === 0){
  Meetings.insert({
    title: 'Workshop University Of Evry',
    _id: 'meetingTest',
    animator: 'Franck',
    time :'90'
  });
};

if ( Meteor.users.find().count() === 0 ) {
    Accounts.createUser({
        username: 'Franck',
        password: 'barcelone',
        email: 'taketalk@gmail.com',
        meeting: 'meetingTest'
    });
}
