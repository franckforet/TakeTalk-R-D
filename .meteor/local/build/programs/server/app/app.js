var require = meteorInstall({"lib":{"Collections":{"Groups.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// lib/Collections/Groups.js                                                                   //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
Groups = new Meteor.Collection('groups');                                                      // 1
Groups.allow({                                                                                 // 3
    update: function (userId, group) {                                                         // 4
        return true; /*return ownsDocument(userId, group);*/                                   // 4
    },                                                                                         // 4
    remove: function (userId, group) {                                                         // 5
        return ownsDocument(userId, group);                                                    // 5
    },                                                                                         // 5
    insert: function (userId, doc) {                                                           // 6
        // autoriser les posts seulement si l'utilisateur est authentifié                      // 7
        return !!userId;                                                                       // 8
    }                                                                                          // 9
});                                                                                            // 3
Meteor.methods({                                                                               // 12
    groupInsert: function (groupAttributes) {                                                  // 13
        check(Meteor.userId(), String);                                                        // 14
        check(groupAttributes, {                                                               // 15
            name: String,                                                                      // 16
            members: [String]                                                                  // 17
        });                                                                                    // 15
        var user = Meteor.user();                                                              // 20
                                                                                               //
        var group = _.extend(groupAttributes, {                                                // 21
            userId: user._id,                                                                  // 22
            author: user.emails,                                                               // 23
            authorAdress: user.emails[0].address,                                              // 24
            authorName: user.username,                                                         // 25
            submitted: new Date()                                                              // 26
        });                                                                                    // 21
                                                                                               //
        var groupId = Groups.insert(group);                                                    // 28
        return {                                                                               // 29
            _id: groupId                                                                       // 30
        };                                                                                     // 29
    }                                                                                          // 32
});                                                                                            // 12
/////////////////////////////////////////////////////////////////////////////////////////////////

},"Meetings.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// lib/Collections/Meetings.js                                                                 //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
/** The collection that contains the meetings */Meetings = new Mongo.Collection("meetings");   // 1
Meetings.allow({                                                                               // 4
    update: function () {                                                                      // 5
        return true; /*return ownsDocument(userId, group);*/                                   // 5
    },                                                                                         // 5
    remove: function () {                                                                      // 6
        return true;                                                                           // 6
    },                                                                                         // 6
    insert: function () {                                                                      // 7
        return true;                                                                           // 8
    }                                                                                          // 9
});                                                                                            // 4
Meteor.methods({                                                                               // 13
    meetingInsert: function (meetingAttributes) {                                              // 14
        check(meetingAttributes, {                                                             // 16
            name: String,                                                                      // 17
            duration: String,                                                                  // 18
            animatorName: String,                                                              // 19
            animatorMail: String,                                                              // 20
            participantsEmails: [String],                                                      // 21
            participantActivity: [Boolean],                                                    // 22
            status: String,                                                                    // 23
            ordres: [String],                                                                  // 24
            ordreTimes: [Number],                                                              // 25
            speaker: String /*,                                                                // 26
                            pwd : "" */                                                        //
        });                                                                                    // 16
                                                                                               //
        var meeting = _.extend(meetingAttributes, {                                            // 30
            submitted: new Date()                                                              // 31
        });                                                                                    // 30
                                                                                               //
        var meetingId = Meetings.insert(meeting);                                              // 33
        return {                                                                               // 36
            _id: meetingId                                                                     // 37
        };                                                                                     // 36
    }                                                                                          // 39
}); /*                                                                                         // 13
     Exemple :                                                                                 //
                                                                                               //
     name: 'test',                                                                             //
     status: "ongoing",                                                                        //
     ordres: ['ordre1', 'ordre2', 'ordre3'],                                                   //
     ordreTimes: [90, 130, 268],                                                               //
     _id: id                                                                                   //
     pwd : ""                                                                                  //
     */                                                                                        //
/////////////////////////////////////////////////////////////////////////////////////////////////

},"Speeches.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// lib/Collections/Speeches.js                                                                 //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
/** The collection that contains the speeches */Speeches = new Mongo.Collection("speeches");   // 1
Speeches.allow({                                                                               // 4
    update: function () {                                                                      // 5
        return true; /*return ownsDocument(userId, group);*/                                   // 5
    },                                                                                         // 5
    remove: function () {                                                                      // 6
        return true;                                                                           // 6
    },                                                                                         // 6
    insert: function () {                                                                      // 7
        return true;                                                                           // 8
    }                                                                                          // 9
});                                                                                            // 4
Meteor.methods({                                                                               // 13
    speechesInsert: function (speechesAttributes) {                                            // 14
        check(speechesAttributes, {                                                            // 16
            meetingID: String /*,                                                              // 17
                              speakers: [String]                                               //
                              */                                                               //
        });                                                                                    // 16
        var speechesId = Speeches.insert(speechesAttributes);                                  // 24
        return {                                                                               // 27
            _id: speechesId                                                                    // 28
        };                                                                                     // 27
    }                                                                                          // 30
});                                                                                            // 13
/////////////////////////////////////////////////////////////////////////////////////////////////

}},"Router.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// lib/Router.js                                                                               //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
Router.configure({                                                                             // 1
  layoutTemplate: 'layout',                                                                    // 2
  waitOn: function () {                                                                        // 3
    return [Meteor.subscribe('groups'), Meteor.subscribe('meetings')];                         // 4
  }                                                                                            // 7
}); /** The route to the home page */                                                          // 1
Router.route('/', {                                                                            // 14
  name: 'home'                                                                                 // 14
});                                                                                            // 14
Router.route('/create/:_id?', {                                                                // 16
  name: 'create',                                                                              // 17
  data: function () {                                                                          // 18
    return Groups.findOne(this.params._id);                                                    // 18
  }                                                                                            // 18
});                                                                                            // 16
Router.route('/groups', {                                                                      // 21
  name: 'groups'                                                                               // 21
});                                                                                            // 21
Router.route('/groupSubmit', {                                                                 // 22
  name: 'groupSubmit'                                                                          // 22
});                                                                                            // 22
Router.route('/groups/:_id', {                                                                 // 23
  name: 'groupPage',                                                                           // 24
  data: function () {                                                                          // 25
    return Groups.findOne(this.params._id);                                                    // 25
  }                                                                                            // 25
});                                                                                            // 23
Router.route('/meeting/:_meetingId', {                                                         // 29
  name: 'meeting',                                                                             // 30
  data: function () {                                                                          // 31
    // Recherche du meeting dont l'id est passé en paramètre                                   // 32
    // Redirection vers une page d'erreur "404 not found" lorsqu'aucun meeting n'est trouvé    // 33
    var meeting = Meetings.findOne({                                                           // 34
      _id: this.params._meetingId,                                                             // 34
      status: "ongoing"                                                                        // 34
    }); //  console.log(meeting);                                                              // 34
                                                                                               //
    if (meeting === undefined) {                                                               // 37
      //  console.log('undefined meeting...');                                                 // 38
      Router.configure({                                                                       // 39
        layoutTemplate: 'layout',                                                              // 39
        notFoundTemplate: '404'                                                                // 39
      });                                                                                      // 39
    } else return Meetings.findOne({                                                           // 40
      _id: this.params._meetingId,                                                             // 42
      status: "ongoing"                                                                        // 42
    });                                                                                        // 42
  }                                                                                            // 44
});                                                                                            // 29
Router.route('/join/:_meetingId/:_userId', {                                                   // 47
  name: 'join',                                                                                // 48
  data: function () {                                                                          // 49
    // Recherche du meeting dont l'id est passé en paramètre                                   // 51
    // Redirection vers une page d'erreur "404 not found" lorsqu'aucun meeting n'est trouvé    // 52
    var meeting = Meetings.findOne({                                                           // 53
      _id: this.params._meetingId                                                              // 53
    });                                                                                        // 53
                                                                                               //
    if (meeting === undefined) {                                                               // 54
      console.log('meeting undefined');                                                        // 55
      Router.configure({                                                                       // 56
        layoutTemplate: 'layout',                                                              // 56
        notFoundTemplate: '404'                                                                // 56
      });                                                                                      // 56
    } //Recherche de l'utilisateur                                                             // 57
    //Redirection vers une page d'erreur "404 not found" lorsqu'aucun utilisateur n'est trouvé
    //Ne permet qu'aux utilisateurs invités de rejoindre un meeting                            // 61
                                                                                               //
                                                                                               //
    var user = MeetingUsers.findOne({                                                          // 62
      _id: this.params._userId                                                                 // 62
    });                                                                                        // 62
                                                                                               //
    if (user === undefined) {                                                                  // 63
      console.log('user undefined');                                                           // 64
      Router.configure({                                                                       // 65
        layoutTemplate: 'layout',                                                              // 65
        notFoundTemplate: '404'                                                                // 65
      });                                                                                      // 65
    }                                                                                          // 66
                                                                                               //
    Session.set("meetingId", this.params._meetingId);                                          // 68
    Session.set("userId", this.params._userId);                                                // 69
    return {};                                                                                 // 71
  }                                                                                            // 72
});                                                                                            // 47
Router.route('/meeting/:_meetingId/lineup', function () {                                      // 75
  this.render('lineup');                                                                       // 76
});                                                                                            // 77
Router.route('/end', function () {                                                             // 79
  this.render('end');                                                                          // 80
});                                                                                            // 81
/////////////////////////////////////////////////////////////////////////////////////////////////

}},"i18n":{"en.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// i18n/en.i18n.json                                                                           //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];
// integrate the fallback language translations 
translations = {};
translations[namespace] = {"mainTitle":"TakeTalk | The new meeting manager","lang":"Language","tuto":"Tutorial","downloads":"Downloads","groups":"Groups","menu":"Menu","menuGroup":"My groups","createGroup":"Create a group","groupTitle":"Groups","groupBodyTitle":"Your groups","groupInfo":"managed groups","groupSubmit":"Submit a group","name":"Name","members":"Members","addMembers":"Add members","openMeeting":"Open a meeting","managedBy":"managed by ","noGroup":"You haven't group yet.","tutoTitle":"Tutorial","tutoBodyTitle":"How to use TakeTalk","downloadTitle":"Downloads","downloadBodyTitle":"Documents to downloads","presentationApp":"Presentation of the application (PDF)","access":"access","joinTitle":"Join a meeting","joinName":"Your name","joinPwd":"Meeting's password","joinSubmit":"Join","lineupTitle":"Line up to talk","lineupOrder":"Order","lineupKeywords":"Keywords","lineupSpeach":"Speach time","lineupQuick":"Quick line up","lineupAs":"Line up as : ","lineupSubmit":"Line up","lineupCancel":"Cancel","homeTitle":"TakeTalk is your new companion app!","homeBody":"With TakeTalk manage your contributors' speech time to make the best out of your meetings!","endThanks":"Thank you for having choose TakeTalk!","endSum":"Here a summary of what happened during this meeting","warning":"Warning ! ","warningLogInfo":"You should be log in for viewing this features","meetingLink":"Link of the report","meetingLineUp":"People lining up","meetingKeywords":"Keywords:","meetingMembers":"People on this meeting","meetingAdd":"Add local participant","meetingInvite":"Invite participants","meetingClose":"Close meeting","meetingNewParticipant":"New Local Participant","meetingParticipantsName":"Participants' Name","meetingParticipantsMail":"Your participants' e-mails","meetingByMail":"By email address","meetingSpeechDeleted":"Your speech have been deleted","meetingMinEstimated":"min estimated","meetingNoDuration":"no duration scheduled","createTitle":"Create a meeting","createAnimatorName":"Your name *","createMail":"Your e-mail *","createMeetingName":"Your meeting's name *","createLink":"Link of the report","createParticipantsMail":"Your participants' e-mails","createMeeting":"Create your meeting","timeMeeting":"Time of Meeting","close":"Close","add":"Add","invite":"Invite"};
TAPi18n._loadLangFileObject("en", translations);
TAPi18n._registerServerTranslator("en", namespace);

/////////////////////////////////////////////////////////////////////////////////////////////////

},"fr.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// i18n/fr.i18n.json                                                                           //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n.languages_names["fr"] = ["French (France)","Français"];
if(_.isUndefined(TAPi18n.translations["fr"])) {
  TAPi18n.translations["fr"] = {};
}

if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {
  TAPi18n.translations["fr"][namespace] = {};
}

_.extend(TAPi18n.translations["fr"][namespace], {"mainTitle":"TakeTalk | Le nouveau gestionnaire de réunion","lang":"Langue","tuto":"Tutoriel","downloads":"Téléchargements","groups":"Groupes","menu":"Menu","menuGroup":"Mes groupes","createGroup":"Créer un goupe","groupTitle":"Groupes","groupBodyTitle":"Vos groupes","groupInfo":"gourpes supervisés","groupSubmit":"soumettre un groupe","name":"Nom","members":"Membres","addMembers":"Ajouter des membres","openMeeting":"Ouvrir une réunion","managedBy":"supervisé par ","noGroup":"Vous n'avez pas encore de groupe.","tutoTitle":"Tutoriel","tutoBodyTitle":"Comment utiliser TakeTalk","downloadTitle":"Téléchargements","downloadBodyTitle":"Documents à télécharger","presentationApp":"Présentation de l'application (PDF)","access":"accéder","joinTitle":"Rejoindre une réunion","joinName":"Votre nom","joinPwd":"Mot de passe de la réunion","joinSubmit":"Rejoindre","lineupTitle":"Programme de discussion","lineupOrder":"Ordre","lineupKeywords":"Mots clés","lineupSpeach":"Temps de parole","lineupQuick":"Prise de parole rapide","lineupAs":"En tant que : ","lineupSubmit":"Prise de parole","lineupCancel":"Annuler","homeTitle":"TakeTalk est votre nouvelle application d'accompagnement!","homeBody":"Avec TakeTalk, gérer le temps de parole de vos participants afin de tirer le meilleur de vos réunions!","endThanks":"Merci d'avoir choisit TakeTalk!","endSum":"Voici un résumé du déroulé de la réunion","warning":"Attention ! ","warningLogInfo":"Vous devez être connecté pour pouvoir accéder à ces fonctionnalitées","meetingLink":"Lien du rapport","meetingLineUp":"Liste des participants","meetingKeywords":"Mots clés:","meetingMembers":"Participants de cette réunion","meetingAdd":"Ajouter un participant local","meetingInvite":"Inviter des participants","meetingClose":"Fermer la réunion","meetingNewParticipant":"Nouveau particpant local","meetingParticipantsName":"Nom du participant","meetingParticipantsMail":"Your participants' e-mails","meetingByMail":"Par adresse mail","meetingSpeechDeleted":"Votre discour a été supprimé","meetingMinEstimated":"min éstimée","meetingNoDuration":"pas de durée programmée","createTitle":"Créer une réunion","createAnimatorName":"Votre nom *","createMail":"Votre e-mail *","createMeetingName":"Nom de la réunion *","createLink":"Lien du rapport","createParticipantsMail":"E-mails des participants","createMeeting":"Créer votre réunion","timeMeeting":"Temps de la réunion","close":"Fermer","add":"Ajouter","invite":"Inviter"});
TAPi18n._registerServerTranslator("fr", namespace);

/////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"fixtures.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// server/fixtures.js                                                                          //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
if (Meetings.find().count() === 0) {                                                           // 1
  Meetings.insert({                                                                            // 2
    title: 'Workshop University Of Evry',                                                      // 3
    _id: 'meetingTest',                                                                        // 4
    animator: 'Franck',                                                                        // 5
    time: '90'                                                                                 // 6
  });                                                                                          // 2
}                                                                                              // 8
                                                                                               //
;                                                                                              // 8
                                                                                               //
if (Meteor.users.find().count() === 0) {                                                       // 10
  Accounts.createUser({                                                                        // 11
    username: 'Franck',                                                                        // 12
    password: 'barcelone',                                                                     // 13
    email: 'taketalk@gmail.com',                                                               // 14
    meeting: 'meetingTest'                                                                     // 15
  });                                                                                          // 11
}                                                                                              // 17
/////////////////////////////////////////////////////////////////////////////////////////////////

},"methods.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// server/methods.js                                                                           //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
/**                                                                                            // 1
 * This methods alows us to send an e-mail to someone                                          //
 * @param {string} to - The receiver's e-mail                                                  //
 * @param {string} from - The sender's e-mail                                                  //
 * @param {string} subject - The e-mail's header                                               //
 * @param {string} text - The e-mail's body                                                    //
*/Meteor.methods({                                                                             //
  //Envoi d'email aux utilisateurs invités                                                     // 9
  sendEmail: function (to, from, subject, text) {                                              // 10
    check([to, from, subject, text], [String]);                                                // 11
    this.unblock();                                                                            // 12
    Email.send({                                                                               // 13
      to: to,                                                                                  // 13
      from: from,                                                                              // 13
      subject: subject,                                                                        // 13
      text: text                                                                               // 13
    });                                                                                        // 13
  },                                                                                           // 14
  //Permet de réinitiliser la base de données                                                  // 16
  resetAll: function () {                                                                      // 17
    Session.set("meetingId", "");                                                              // 18
    Session.set("userId", "");                                                                 // 19
    Speeches.remove({});                                                                       // 20
    MeetingUsers.remove({});                                                                   // 21
    Meetings.remove({});                                                                       // 22
  }                                                                                            // 23
});                                                                                            // 8
/////////////////////////////////////////////////////////////////////////////////////////////////

},"publications.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// server/publications.js                                                                      //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
Meteor.publish('groups', function () {                                                         // 1
  return Groups.find();                                                                        // 2
});                                                                                            // 3
Meteor.publish('meetings', function () {                                                       // 6
  return Meetings.find();                                                                      // 7
});                                                                                            // 8
Meteor.publish('speeches', function () {                                                       // 9
  return Speeches.find();                                                                      // 10
});                                                                                            // 11
Meteor.publish('presences', function () {                                                      // 13
  //  return Presences.find({}, { userId: true });                                             // 14
  return Presences.find({}, {                                                                  // 15
    userId: true                                                                               // 15
  } /*,{state: {currentRoomId: Session.get('currentRoomId')} }*/);                             // 15
});                                                                                            // 16
Meteor.publish("users", function () {                                                          // 18
  return Meteor.users.find({}, {                                                               // 19
    fields: {                                                                                  // 19
      "profile.peerId": true,                                                                  // 19
      "emails.address": true                                                                   // 19
    }                                                                                          // 19
  });                                                                                          // 19
});                                                                                            // 20
/////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/meteor",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// server/main.js                                                                              //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var Meteor = void 0;                                                                           // 1
module.import('meteor/meteor', {                                                               // 1
  "Meteor": function (v) {                                                                     // 1
    Meteor = v;                                                                                // 1
  }                                                                                            // 1
}, 0);                                                                                         // 1
Meteor.startup(function () {// code to run on server at startup                                // 3
});                                                                                            // 5
/////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./lib/Collections/Groups.js");
require("./lib/Collections/Meetings.js");
require("./lib/Collections/Speeches.js");
require("./lib/Router.js");
require("./i18n/en.i18n.json");
require("./i18n/fr.i18n.json");
require("./server/fixtures.js");
require("./server/methods.js");
require("./server/publications.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
