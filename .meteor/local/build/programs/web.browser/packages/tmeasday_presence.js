//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Mongo = Package.mongo.Mongo;
var _ = Package.underscore._;

/* Package-scope variables */
var Presences, Presence;

(function(){

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// packages/tmeasday_presence/packages/tmeasday_presence.js                //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
(function () {                                                             // 1
                                                                           // 2
///////////////////////////////////////////////////////////////////////    // 3
//                                                                   //    // 4
// packages/tmeasday:presence/lib/common.js                          //    // 5
//                                                                   //    // 6
///////////////////////////////////////////////////////////////////////    // 7
                                                                     //    // 8
Presences = new Mongo.Collection('presences');                       // 1  // 9
// For backwards compatibilty                                        // 2  // 10
Meteor.presences = Presences;                                        // 3  // 11
                                                                     // 4  // 12
Meteor.methods({                                                     // 5  // 13
  updatePresence: function(state) {                                  // 6  // 14
    check(state, Match.Any);                                         // 7  // 15
                                                                     // 8  // 16
    var connectionId = this.isSimulation                             // 9  // 17
      ? Meteor.connection._lastSessionId                             // 10
      : this.connection.id;                                          // 11
                                                                     // 12
    // Should never happen                                           // 13
    if (! connectionId)                                              // 14
      return;                                                        // 15
                                                                     // 16
    var update = {};                                                 // 17
    update.state = state;                                            // 18
    if (typeof Meteor.userId !== 'undefined' && Meteor.userId())     // 19
      update.userId = Meteor.userId();                               // 20
                                                                     // 21
    Presences.update(connectionId, update);                          // 22
  }                                                                  // 23
});                                                                  // 24
                                                                     // 25
///////////////////////////////////////////////////////////////////////    // 34
                                                                           // 35
}).call(this);                                                             // 36
                                                                           // 37
                                                                           // 38
                                                                           // 39
                                                                           // 40
                                                                           // 41
                                                                           // 42
(function () {                                                             // 43
                                                                           // 44
///////////////////////////////////////////////////////////////////////    // 45
//                                                                   //    // 46
// packages/tmeasday:presence/lib/client.js                          //    // 47
//                                                                   //    // 48
///////////////////////////////////////////////////////////////////////    // 49
                                                                     //    // 50
Presence = {};                                                       // 1  // 51
Presence.state = function() {                                        // 2  // 52
  return 'online';                                                   // 3  // 53
};                                                                   // 4  // 54
                                                                     // 5  // 55
// For backwards compatibilty                                        // 6  // 56
Meteor.Presence = Presence;                                          // 7  // 57
                                                                     // 8  // 58
Meteor.startup(function() {                                          // 9  // 59
  Tracker.autorun(function() {                                       // 10
    // This also runs on sign-in/sign-out                            // 11
    if (Meteor.status().status === 'connected')                      // 12
      Meteor.call('updatePresence', Presence.state());               // 13
  });                                                                // 14
                                                                     // 15
  Meteor.setInterval(function() {                                    // 16
    Meteor.call('presenceTick');                                     // 17
  }, 5000);                                                          // 18
});                                                                  // 19
                                                                     // 20
///////////////////////////////////////////////////////////////////////    // 71
                                                                           // 72
}).call(this);                                                             // 73
                                                                           // 74
/////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['tmeasday:presence'] = {}, {
  Presences: Presences,
  Presence: Presence
});

})();
