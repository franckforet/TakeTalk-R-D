

Template.create.events({
  //Création d'un nouveau champ de saisie lorsqu'un caractère est renseigné
  'keyup .participant-email-input': function(e) {
    var input = $(e.target);
    if (input.val().length > 0) {
      var rank = input.parents(".participant-email")[0].getAttribute('rank');
      var form = input.parents("#create-form");
      var nextRank = parseInt(rank) + 1;

      if ($(form).find('.participant-email[rank="'+nextRank+'"]').length < 1) {
        var newInput = $(input.parents(".participant-email")[0].cloneNode(true));
        newInput.find(".participant-email-input").val("");
        newInput.attr('rank', nextRank);
        $(input.parents(".participant-email-group")[0]).append(newInput)
      }
    }
  },


  'submit form': function(e) {
    e.preventDefault();
    //Récupération des éléments DOM des champs de saisie
    var timeMeeting = e.target.timeMeeting;
    var participantsInputs = e.target.participantsEmails;

    //Récupération des valeurs de l'ordre du jour, temps estimés et des emails d'invitation
    var participantsEmails = [];

    for (i = 0; i < participantsInputs.length; i++) {
      if (participantsInputs[i].value != "") {
        participantsEmails.push(participantsInputs[i].value);
      }
    }
    console.log(participantsEmails);


    //Création du mot de passe du meeting
    var pass = Math.floor((Math.random() * 10000) + 1);
    if(pass < 10){
      pass = '000' + pass;
    }else if(pass < 100){
      pass = '00' + pass;
    }else if(pass < 1000){
      pass = '0' + pass;
    }

    //Création du meeting
    //voir comment rajouter des personnes au meeting
    //idée : création d'un tableau qui est rempli en faisant Meteor.user().mettingId = meetingId

    var meetingId = Meetings.insert({
      title: e.target.meetingName.value,
      time: timeMeeting,
      password: pass,
    });
    var userId = Meteor.userId();
    //Création de l'utilisateur animateur
    //voir comment ajouter un champ au User via Account.ui
    //le champ sera : isAnimator
    // var userId = Meteor.user().set({
    //   name: e.target.animatorName.value,
    //   email: e.target.animatorEmail.value,
    //   type: "animator",
    //   meeting: meetingId
    // });

    localStorage.setItem(meetingId, meetingId);

    //Définition du corp du mail envoyé à l'animateur et aux invités
    var emailBody = 'Here is the link for the meeting : taketalk.meteor.com/join/' + meetingId + '/' + userId + '\n';
    emailBody += 'If you quit the meeting and want to return, here is the password : ' + pass;

    //Alimentation des variable de la session
    Session.set("meetingId", meetingId);
    Session.set("userId", userId);
    Session.set("ordreTimes", timeMeeting);

    //Envoi du mail à l'animateur
    Meteor.call('sendEmail',
    e.target.animatorEmail.value,
    'noreply@taketalk.com',
    'TakeTalk session created',
    'You have just created a session of TakeTalk. \n\n' + emailBody
  );

  //Envoi des mails aux invités
  // for(var i = 0; i < participantsEmails.length; i++) {
  //     userId = MeetingUsers.insert({name: 'participant pending', email: participantsEmails[i], type: "participant", status: "pending", meeting: meetingId});
  //     Meteor.call('sendEmail', participantsEmails[i], 'noreply@taketalk.com', 'TakeTalk invitation',
  //         'You are invited to a session of TakeTalk. \n\n' + emailBody
  //     );
  // }

  //Redirection vers la page du meeting
  Router.go('/meeting/' + meetingId);

}
});

Template.create.onRendered(function (){
  console.log(Meteor.user().email);
  if (Meteor.userId() != null){
     $(' #animatorName').val(Meteor.user().username);
     $(' #animatorEmail').val(Meteor.user().email);
  };
});
