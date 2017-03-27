

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
    var ordreInputs = e.target.ordreDuJour;
    var ordreTimeInputs = e.target.ordreDuJourTemps;
    var participantsInputs = e.target.participantsEmails;

    //Récupération des valeurs de l'ordre du jour, temps estimés et des emails d'invitation
    var ordres = [];
    var ordreTimes = [];
    var participantsEmails = [];
    var participantActivity = [];

    //Récupération des éléments DOM des champs de saisie
    var participantsInputs = $(e.target).find('[name=participantsEmails]');



    for (i = 0; i < participantsInputs.length; i++) {
      if (participantsInputs[i].value != "") {
        participantsEmails.push(participantsInputs[i].value);
        participantActivity.push(false);
      }
    }

    //Création du meeting
    //voir comment rajouter des personnes au meeting
    //idée : création d'un tableau qui est rempli en faisant Meteor.user().mettingId = meetingId

    var meeting= {
      name: e.target.meetingName.value,
      duration : e.target.meetingDuration.value,
      animatorName: e.target.animatorName.value,
      animatorMail:e.target.animatorEmail.value,
      participantsEmails: participantsEmails,
      participantActivity:participantActivity,
      status: 'ongoing',
      ordres: ordres,
      ordreTimes: ordreTimes,
      speaker: e.target.animatorEmail.value
    };

    Meteor.call('meetingInsert', meeting, function(error, result) {
      // affiche l'erreur à l'utilisateur et s'interrompt
      if (error)
      return alert(error.reason);

      var meetingId=result._id;

      var emailBody = 'Here is the link for the meeting : taketalk.meteor.com/join/' + meetingId + '\n';
      Meteor.call('sendEmail',
      e.target.animatorEmail.value,
      'noreply@taketalk.com',
      'TakeTalk session created',
      'You have just created a session of TakeTalk. \n\n' + emailBody
    );


    for(var i = 0; i < participantsEmails.length; i++) {
      Meteor.call('sendEmail', participantsEmails[i], 'noreply@taketalk.com', 'TakeTalk invitation',
      'You are invited to a session of TakeTalk. \n\n' + emailBody
    );
  }

  console.log("mail envoyé");
  //Redirection vers la page du meeting
  Router.go('/meeting/' + meetingId);

});
}
});

Template.create.onRendered(function (){
  if (Meteor.userId() != null){
    $(' #animatorName').val(Meteor.user().username);
    $(' #animatorEmail').val(Meteor.user().emails[0].address);
  };
});
Template.tempName.onRendered(function() {

      var d= new Date();
      d.setHours(0,0,0);
      $('.datetimepicker').datetimepicker({
        format:'HH:mm',
        defaultDate:d
      //  defaultViewDate : {hours : 00, minutes: 00}
    });
});
