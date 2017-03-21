import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

var sortableList;
Template.meeting.isTrue = true;
console.log(Template.meeting.isTrue);


Template.meeting.events({
  'click #talkCancel' : function(e){
    console.log("I click on Talk");
    //à modifier
      var userId = Meteor.user().username;
      var meetingId = Meteor.user().meeting;
      var rank = 1;
      console.log("userId = " + userId);
      console.log("meeting = " + meetingId);


      // //Recherche du speech ayant le plus haut rang
      // speeches = Speeches.find({meeting: Session.get("meetingId")}, {sort: {rank: -1}}).fetch();
      // if (speeches.length > 0) {
      //     rank = speeches[0].rank+1;
      // }
      // Speeches.insert({
      //     user: userId,
      //     timeLeft: 0,
      //     status: "pending",
      //     meeting: Session.get("meetingId"),
      //     rank: rank
      // });
  },


  /** A click on waitProceed starts or stops the timer */
  'click #waitProceed': function(e) {
    //Arret du timer
    if(e.target.value == "Wait") {
      Meteor.clearInterval(timerId);
      Speeches.update(
        Speeches.findOne({meeting: Session.get("meetingId"), status: "ongoing"})._id,
        {$set: {status: "pending"}}
      );
    } else {
      Speeches.update(
        Speeches.findOne({meeting: Session.get("meetingId"), status: "pending"}, {sort: {rank: 1}})._id,
        {$set: {status: "ongoing"}}
      );

      //Lancement du timer
      timerId = Meteor.setInterval(function() {
        var currentSpeech = Speeches.findOne({meeting: Session.get("meetingId"), status: "ongoing"});
        var user = Users.findOne({_id:currentSpeech.user});
        var paroles = [];
        var time = 1;

        //Incrémentation du compteur associé a l'ordre du speech
        if (user.paroles === undefined) {
          paroles.push({"order": currentSpeech.orderChoose, "time": 1});
        } else {
          var paroleFound = false;
          paroles = user.paroles;
          paroles.forEach(function (el) {
            if (el['order'] == currentSpeech.orderChoose) {
              paroleFound = true;
              el['time'] = parseInt(el['time'])+1;
            }
          });
          if (!paroleFound) {
            paroles.push({"order": currentSpeech.orderChoose, "time": 1});
          }
        }

        Users.update(user._id,  {$set: {paroles: paroles}});

        //Update du temps restant du speech
        Speeches.update(
          currentSpeech._id,
          {$set: {timeLeft: Speeches.findOne({meeting: Session.get("meetingId"), status: "ongoing"}).timeLeft + 1}}
        );
        //Update du statut du speech si celui ci est terminé
        if(Speeches.findOne({meeting: Session.get("meetingId"), status: "ongoing"}).timeLeft == Speeches.findOne({meeting: Session.get("meetingId"), status: "ongoing"}).time){
          Speeches.update(
            Speeches.findOne({meeting: Session.get("meetingId"), status: "ongoing"})._id,
            {$set: {status: "done"}}
          );
          Meteor.clearInterval(timerId);
        }
      } , 1000);
    }
    //Rafraichi la fonction de drag'n'drop
    //Utile pour empêcher le déplacement du premier meeting quand on clique sur 'proceed'
    //trouver une autre solution (la méthode "refresh" semble inefficace)
      setTimeout(function () {
      sortableList.sortable("destroy");
      computeSortable(sortableList);
    }, 100)
    ;
  },

});


Template.meeting.onRendered(function () {
$(document).ready(function(){
  $('#textareaRich').summernote({
    height: 300,
  });
});
});



Template.meeting.events({
  'click #saveReport' :function(e) {
    // increment the counter when button is clicked
    console.log("I click on Talk");
    var title = $(' #TitleReport').val();
    var data = $('#textareaRich').summernote('code');
    //$('.click2edit').summernote('destroy');
    console.log("title :" + title + " data = " + data);
    var doc = new jsPDF();
    doc.text(10,10,data);
    doc.save(title);
    //Fonctionne mais enregistre en .txt
    //var blob = new Blob([data], {type: "text/plain;charset=utf-8"});
    //saveAs(blob, title+".txt");
  }
});
