var require = meteorInstall({"client":{"application":{"template.create.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/application/template.create.js                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("create");                                                                                       // 2
Template["create"] = new Template("Template.create", (function() {                                                    // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    class: "main-content"                                                                                             // 6
  }, "\n    ", HTML.DIV({                                                                                             // 7
    class: "row"                                                                                                      // 8
  }, "\n      ", HTML.DIV({                                                                                           // 9
    class: "col-md-8 col-md-offset-2"                                                                                 // 10
  }, "\n        ", HTML.DIV({                                                                                         // 11
    class: "panel panel-default"                                                                                      // 12
  }, "\n          ", HTML.DIV({                                                                                       // 13
    class: "panel-heading"                                                                                            // 14
  }, HTML.SPAN({                                                                                                      // 15
    class: "title"                                                                                                    // 16
  }, Blaze.View("lookup:_", function() {                                                                              // 17
    return Spacebars.mustache(view.lookup("_"), "createTitle");                                                       // 18
  }))), "\n          ", HTML.DIV({                                                                                    // 19
    class: "panel-body"                                                                                               // 20
  }, "\n            ", HTML.FORM({                                                                                    // 21
    role: "form",                                                                                                     // 22
    id: "create-form"                                                                                                 // 23
  }, "\n              ", HTML.DIV({                                                                                   // 24
    class: "form-group"                                                                                               // 25
  }, "\n                ", HTML.LABEL({                                                                               // 26
    for: "animatorName"                                                                                               // 27
  }, Blaze.View("lookup:_", function() {                                                                              // 28
    return Spacebars.mustache(view.lookup("_"), "createAnimatorName");                                                // 29
  })), "\n                ", HTML.INPUT({                                                                             // 30
    id: "animatorName",                                                                                               // 31
    name: "animatorName",                                                                                             // 32
    type: "text",                                                                                                     // 33
    class: "form-control",                                                                                            // 34
    value: function() {                                                                                               // 35
      return Spacebars.mustache(view.lookup("authorName"));                                                           // 36
    },                                                                                                                // 37
    required: "",                                                                                                     // 38
    autofocus: ""                                                                                                     // 39
  }), "\n              "), "\n              ", HTML.DIV({                                                             // 40
    class: "form-group"                                                                                               // 41
  }, "\n                ", HTML.LABEL({                                                                               // 42
    for: "animatorEmail"                                                                                              // 43
  }, Blaze.View("lookup:_", function() {                                                                              // 44
    return Spacebars.mustache(view.lookup("_"), "createMail");                                                        // 45
  })), "\n                ", HTML.DIV({                                                                               // 46
    class: "input-group"                                                                                              // 47
  }, HTML.Raw('<span class="input-group-addon">@</span>'), "\n                  ", HTML.INPUT({                       // 48
    id: "animatorEmail",                                                                                              // 49
    name: "animatorEmail",                                                                                            // 50
    type: "email",                                                                                                    // 51
    "parsley-type": "email",                                                                                          // 52
    class: "form-control",                                                                                            // 53
    value: function() {                                                                                               // 54
      return Spacebars.mustache(view.lookup("authorAdress"));                                                         // 55
    },                                                                                                                // 56
    required: ""                                                                                                      // 57
  }), "\n                "), "\n              "), "\n              ", HTML.DIV({                                      // 58
    class: "form-group"                                                                                               // 59
  }, "\n                ", HTML.LABEL({                                                                               // 60
    for: "meetingName"                                                                                                // 61
  }, Blaze.View("lookup:_", function() {                                                                              // 62
    return Spacebars.mustache(view.lookup("_"), "createMeetingName");                                                 // 63
  })), "\n                ", HTML.Raw('<input id="meetingName" name="meetingName" type="text" class="form-control" required="">'), "\n              "), "\n              ", HTML.DIV({
    class: "form-group"                                                                                               // 65
  }, "\n                            ", HTML.Raw("<label>Duration (h:min)</label>"), "\n                            ", HTML.DIV({
    class: "duration-group",                                                                                          // 67
    rank: "1"                                                                                                         // 68
  }, "\n\n                                  ", Spacebars.include(view.lookupTemplate("tempName")), "\n\n\n                            "), "\n              "), "\n              ", HTML.DIV({
    class: "form-group participant-email-group"                                                                       // 70
  }, "\n                ", HTML.LABEL(Blaze.View("lookup:_", function() {                                             // 71
    return Spacebars.mustache(view.lookup("_"), "createParticipantsMail");                                            // 72
  })), "\n                ", Blaze.Each(function() {                                                                  // 73
    return Spacebars.call(view.lookup("members"));                                                                    // 74
  }, function() {                                                                                                     // 75
    return [ "\n                ", HTML.DIV({                                                                         // 76
      class: "participant-email",                                                                                     // 77
      rank: function() {                                                                                              // 78
        return Spacebars.mustache(view.lookup("@index"));                                                             // 79
      }                                                                                                               // 80
    }, "\n                  ", HTML.DIV({                                                                             // 81
      class: "input-group xs-mb-15"                                                                                   // 82
    }, HTML.SPAN({                                                                                                    // 83
      class: "input-group-addon"                                                                                      // 84
    }, "@"), "\n                    ", HTML.INPUT({                                                                   // 85
      class: "participant-email-input form-control",                                                                  // 86
      name: "participantsEmails",                                                                                     // 87
      type: "email",                                                                                                  // 88
      "parsley-type": "email",                                                                                        // 89
      value: function() {                                                                                             // 90
        return Spacebars.mustache(view.lookup("."));                                                                  // 91
      }                                                                                                               // 92
    }), "\n                  "), "\n                "), "\n\n                " ];                                     // 93
  }), "\n                ", HTML.DIV({                                                                                // 94
    class: "participant-email",                                                                                       // 95
    rank: function() {                                                                                                // 96
      return Spacebars.mustache(Spacebars.dot(view.lookup("members"), "length"));                                     // 97
    }                                                                                                                 // 98
  }, "\n                  ", HTML.Raw('<div class="input-group xs-mb-15"><span class="input-group-addon">@</span>\n                    <input class="participant-email-input form-control" name="participantsEmails" type="email" parsley-type="email">\n                  </div>'), "\n                "), "\n              "), "\n              ", HTML.Raw('<div class="spacer text-right">\n                <button type="submit" class="btn btn-space btn-primary">Create your meeting</button>\n              </div>'), "\n            "), "\n          "), "\n        "), "\n      "), "\n    "), "\n  ");
}));                                                                                                                  // 100
                                                                                                                      // 101
Template.__checkName("tempName");                                                                                     // 102
Template["tempName"] = new Template("Template.tempName", (function() {                                                // 103
  var view = this;                                                                                                    // 104
  return HTML.Raw('<div class="input-group datetimepicker">\n    <span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>\n    <input class="set-due-date form-control" type="text" name="meetingDuration">\n  </div>');
}));                                                                                                                  // 106
                                                                                                                      // 107
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.home.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/application/template.home.js                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("home");                                                                                         // 2
Template["home"] = new Template("Template.home", (function() {                                                        // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    class: "main-content"                                                                                             // 6
  }, "\n    ", HTML.DIV({                                                                                             // 7
    class: "row"                                                                                                      // 8
  }, "\n        ", HTML.DIV({                                                                                         // 9
    class: "col-xs-12 col-md-6 col-md-offset-3"                                                                       // 10
  }, "\n            ", HTML.DIV({                                                                                     // 11
    class: "panel panel-default"                                                                                      // 12
  }, "\n                ", HTML.DIV({                                                                                 // 13
    class: "panel-heading"                                                                                            // 14
  }, HTML.SPAN({                                                                                                      // 15
    class: "title"                                                                                                    // 16
  }, Blaze.View("lookup:_", function() {                                                                              // 17
    return Spacebars.mustache(view.lookup("_"), "homeTitle");                                                         // 18
  }))), "\n                ", HTML.DIV({                                                                              // 19
    class: "panel-body"                                                                                               // 20
  }, "\n                    ", HTML.P(Blaze.View("lookup:_", function() {                                             // 21
    return Spacebars.mustache(view.lookup("_"), "homeBody");                                                          // 22
  })), "\n                    ", HTML.DIV({                                                                           // 23
    class: "spacer text-right"                                                                                        // 24
  }, "\n                        ", HTML.BUTTON({                                                                      // 25
    type: "button",                                                                                                   // 26
    class: "btn btn-space btn-primary btn-rounded btn-lg",                                                            // 27
    id: "open"                                                                                                        // 28
  }, "\n                            ", HTML.A({                                                                       // 29
    style: "color:#fff",                                                                                              // 30
    href: function() {                                                                                                // 31
      return Spacebars.mustache(view.lookup("pathFor"), "create");                                                    // 32
    }                                                                                                                 // 33
  }, HTML.Raw('<i class="glyphicon glyphicon-plus-sign"></i>'), "  ", Blaze.View("lookup:_", function() {             // 34
    return Spacebars.mustache(view.lookup("_"), "openMeeting");                                                       // 35
  })), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    "), "\n");
}));                                                                                                                  // 37
                                                                                                                      // 38
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.input.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/application/template.input.js                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("input");                                                                                        // 2
Template["input"] = new Template("Template.input", (function() {                                                      // 3
  var view = this;                                                                                                    // 4
  return [ HTML.Raw('<!--  <input name=\'testinput\' class=\'test-input\' type=\'text\' uniqid="{{uniqid}}" value="{{value}}">\n  <button class=\'remove-input\' uniqid="{{uniqid}}">Remove</button>\n-->\n<!--\n<div class="controls">\n  <input name="member" id="member{{uniqid}}" type="text" value="{{value}}" placeholder="member" class="form-control"/>\n  <span class="glyphicon glyphicon-minus" id=\'remove-input\' uniqid="{{uniqid}}" role="button"></span>\n</div>\n-->\n\n'), HTML.DIV({
    class: "input-group"                                                                                              // 6
  }, HTML.Raw('<span class="input-group-addon">@</span>'), "\n    ", HTML.INPUT({                                     // 7
    name: "member",                                                                                                   // 8
    id: function() {                                                                                                  // 9
      return [ "member", Spacebars.mustache(view.lookup("uniqid")) ];                                                 // 10
    },                                                                                                                // 11
    type: "email",                                                                                                    // 12
    "parsley-type": "email",                                                                                          // 13
    value: function() {                                                                                               // 14
      return Spacebars.mustache(view.lookup("value"));                                                                // 15
    },                                                                                                                // 16
    placeholder: "member mail",                                                                                       // 17
    class: "form-control"                                                                                             // 18
  }), "\n    ", HTML.SPAN({                                                                                           // 19
    class: "input-group-addon",                                                                                       // 20
    id: "remove-input",                                                                                               // 21
    uniqid: function() {                                                                                              // 22
      return Spacebars.mustache(view.lookup("uniqid"));                                                               // 23
    },                                                                                                                // 24
    role: "button"                                                                                                    // 25
  }, HTML.Raw("<b>-</b>")), "\n"), HTML.Raw("\n\n<br>") ];                                                            // 26
}));                                                                                                                  // 27
                                                                                                                      // 28
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.meeting.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/application/template.meeting.js                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("meeting");                                                                                      // 2
Template["meeting"] = new Template("Template.meeting", (function() {                                                  // 3
  var view = this;                                                                                                    // 4
  return [ HTML.DIV({                                                                                                 // 5
    class: "main-content"                                                                                             // 6
  }, "\n    ", Blaze.If(function() {                                                                                  // 7
    return Spacebars.call(view.lookup("currentUser"));                                                                // 8
  }, function() {                                                                                                     // 9
    return [ "\n\n    ", HTML.DIV({                                                                                   // 10
      class: "col-md-8"                                                                                               // 11
    }, "\n      ", Spacebars.include(view.lookupTemplate("meetingReport")), "\n    "), "\n\n    ", HTML.Comment("START PREMIER PANL DROITE : Time Management "), "\n    ", HTML.DIV({
      class: "col-md-4"                                                                                               // 13
    }, "\n      ", HTML.DIV({                                                                                         // 14
      class: "panel panel-default panel-heading-fullwidth panel-warning"                                              // 15
    }, "\n        ", HTML.DIV({                                                                                       // 16
      class: "panel-heading"                                                                                          // 17
    }, HTML.SPAN({                                                                                                    // 18
      class: "title"                                                                                                  // 19
    }, "Time Management")), "\n        ", HTML.DIV({                                                                  // 20
      class: "panel-body"                                                                                             // 21
    }, "\n          ", HTML.DIV({                                                                                     // 22
      class: "row"                                                                                                    // 23
    }, "\n            ", HTML.Comment(" Bouton pour cr�er une demande d'intervention "), "\n            ", HTML.DIV({
      class: "col-md-5"                                                                                               // 25
    }, "\n              ", HTML.DIV({                                                                                 // 26
      class: "input-group"                                                                                            // 27
    }, "\n                ", HTML.SPAN({                                                                              // 28
      class: "input-group-addon",                                                                                     // 29
      id: "sizing-addon2"                                                                                             // 30
    }, HTML.B("Duration: ")), "\n                ", HTML.SPAN({                                                       // 31
      type: "text",                                                                                                   // 32
      class: "form-control",                                                                                          // 33
      placeholder: "Time",                                                                                            // 34
      "aria-describedby": "sizing-addon2",                                                                            // 35
      id: "meetingTime",                                                                                              // 36
      style: "width:70%"                                                                                              // 37
    }, Blaze.View("lookup:testVariable", function() {                                                                 // 38
      return Spacebars.mustache(view.lookup("testVariable"));                                                         // 39
    })), "\n              "), "\n            "), "\n            ", HTML.Comment(" {{#if isAnimator}} "), "\n            ", HTML.Comment(" Boutons de gestion du don de temps de parole "), "\n            ", HTML.DIV({
      class: "col-md-7 text-right"                                                                                    // 41
    }, "\n              ", HTML.INPUT(HTML.Attrs({                                                                    // 42
      type: "button",                                                                                                 // 43
      class: "btn btn-primary",                                                                                       // 44
      role: "button",                                                                                                 // 45
      id: "startTime",                                                                                                // 46
      value: "start"                                                                                                  // 47
    }, function() {                                                                                                   // 48
      return Spacebars.attrMustache(view.lookup("disabled"));                                                         // 49
    })), "\n              ", HTML.INPUT(HTML.Attrs({                                                                  // 50
      type: "button",                                                                                                 // 51
      class: "btn btn-primary",                                                                                       // 52
      role: "button",                                                                                                 // 53
      id: "PauseTime",                                                                                                // 54
      value: "stop"                                                                                                   // 55
    }, function() {                                                                                                   // 56
      return Spacebars.attrMustache(view.lookup("disabled"));                                                         // 57
    })), "\n            "), "\n            ", HTML.Comment(" {{/if}} "), "\n          "), "\n        "), "\n      "), "\n    "), "\n    ", HTML.Comment("END PREMIER PANL DROITE : Time Management "), "\n\n\n    ", HTML.Comment("START SECOND PANL DROITE : Participant "), "\n    ", HTML.DIV({
      class: "col-md-4"                                                                                               // 59
    }, "\n      ", HTML.DIV({                                                                                         // 60
      class: "panel panel-default panel-heading-fullwidth panel-primary"                                              // 61
    }, "\n        ", HTML.DIV({                                                                                       // 62
      class: "panel-heading"                                                                                          // 63
    }, HTML.SPAN({                                                                                                    // 64
      class: "title"                                                                                                  // 65
    }, "Participant")), "\n        ", HTML.DIV({                                                                      // 66
      class: "panel-body"                                                                                             // 67
    }, "\n          ", HTML.DIV({                                                                                     // 68
      class: "row"                                                                                                    // 69
    }, "\n            ", HTML.Comment(" {{#each Users} "), "\n            ", HTML.Comment(" Liste des intervenant "), "\n\n            ", HTML.DIV({
      class: "col-md-6"                                                                                               // 71
    }, "\n              ", HTML.SPAN({                                                                                // 72
      class: "label label-info input-group-addon"                                                                     // 73
    }, "\n                ", Blaze.View("lookup:animatorMail", function() {                                           // 74
      return Spacebars.mustache(view.lookup("animatorMail"));                                                         // 75
    }), "\n\n                ", Blaze.View("lookup:getSpeaker", function() {                                          // 76
      return Spacebars.mustache(view.lookup("getSpeaker"));                                                           // 77
    }), "\n\n                ", Blaze.If(function() {                                                                 // 78
      return Spacebars.call(view.lookup("ownMeeting"));                                                               // 79
    }, function() {                                                                                                   // 80
      return [ "\n                ", HTML.SPAN({                                                                      // 81
        class: "glyphicon glyphicon-user",                                                                            // 82
        "aria-hidden": "true"                                                                                         // 83
      }), "\n                " ];                                                                                     // 84
    }), "\n              "), "\n            "), "\n              ", Blaze.If(function() {                             // 85
      return Spacebars.call(view.lookup("isSpeaker"));                                                                // 86
    }, function() {                                                                                                   // 87
      return [ "\n              ", HTML.DIV({                                                                         // 88
        class: "col-md-3"                                                                                             // 89
      }, "\n                ", HTML.SPAN({                                                                            // 90
        class: "label label-info input-group-addon"                                                                   // 91
      }, "\n                  ", HTML.SPAN({                                                                          // 92
        class: "glyphicon glyphicon-volume-up",                                                                       // 93
        "aria-hidden": "true"                                                                                         // 94
      }), "\n                "), "\n              "), "\n\n              " ];                                         // 95
    }), "\n            ", HTML.DIV({                                                                                  // 96
      class: "col-md-3 text-right"                                                                                    // 97
    }, "\n              ", HTML.INPUT(HTML.Attrs({                                                                    // 98
      type: "button",                                                                                                 // 99
      class: "btn btn-primary",                                                                                       // 100
      role: "button",                                                                                                 // 101
      id: "speakControl",                                                                                             // 102
      value: "take"                                                                                                   // 103
    }, function() {                                                                                                   // 104
      return Spacebars.attrMustache(view.lookup("disabled"));                                                         // 105
    })), "\n            "), "\n            ", HTML.BR(), " ", HTML.BR(), HTML.BR(), "\n            ", HTML.Comment(' <div class="col-md-11" style="padding-right:0">\n            <div class="list-group">\n            <h4 class="list-group-item-heading">{{Meteor.username}}</h4>\n            <p>\n            {{#each paroles}}\n            {{>parole}}\n            {{/each}}\n          </p>\n        </div>\n      </div> '), "\n      ", HTML.Comment(" Actions possibles en rapport avec l'intervenant "), "\n      ", HTML.Comment(' <div class="col-md-1" style="padding-left:0">\n      {{#if isSessionGuest name}}\n      <div class="input-group guestRemove" guest="{{name}}">\n      <button type="button" class="btn btn-danger btn-xs removeGuest">\n      <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>\n    </button>\n  </div>\n  {{/if}}\n</div> '), "\n", HTML.Comment(" {{/each}} "), "\n"), "\n", Blaze.Each(function() {
      return Spacebars.call(view.lookup("participantsEmails"));                                                       // 107
    }, function() {                                                                                                   // 108
      return [ "\n", HTML.DIV({                                                                                       // 109
        class: "row"                                                                                                  // 110
      }, "\n  ", HTML.DIV({                                                                                           // 111
        class: "col-md-5"                                                                                             // 112
      }, "\n    ", HTML.SPAN({                                                                                        // 113
        class: "label label-info input-group-addon"                                                                   // 114
      }, "\n      ", Blaze.View("lookup:.", function() {                                                              // 115
        return Spacebars.mustache(view.lookup("."));                                                                  // 116
      }), "\n      ", Blaze.If(function() {                                                                           // 117
        return Spacebars.call(view.lookup("partMeeting"));                                                            // 118
      }, function() {                                                                                                 // 119
        return [ "\n      ", HTML.SPAN({                                                                              // 120
          class: "glyphicon glyphicon-user",                                                                          // 121
          "aria-hidden": "true"                                                                                       // 122
        }), "\n      " ];                                                                                             // 123
      }), "\n    "), "\n    ", Blaze.If(function() {                                                                  // 124
        return Spacebars.call(view.lookup("isSpeaker"));                                                              // 125
      }, function() {                                                                                                 // 126
        return [ "\n    ", HTML.SPAN({                                                                                // 127
          class: "label label-info input-group-addon"                                                                 // 128
        }, "\n      ", HTML.SPAN({                                                                                    // 129
          class: "glyphicon glyphicon-volume-up",                                                                     // 130
          "aria-hidden": "true"                                                                                       // 131
        }), "\n    "), "\n    " ];                                                                                    // 132
      }, function() {                                                                                                 // 133
        return [ "\n    ", Blaze.If(function() {                                                                      // 134
          return Spacebars.call(view.lookup("isAsking"));                                                             // 135
        }, function() {                                                                                               // 136
          return [ "\n    ", HTML.SPAN({                                                                              // 137
            class: "label label-info input-group-addon"                                                               // 138
          }, "\n      ", HTML.SPAN({                                                                                  // 139
            class: "glyphicon glyphicon-hourglass",                                                                   // 140
            "aria-hidden": "true"                                                                                     // 141
          }), "\n    "), "\n    " ];                                                                                  // 142
        }), "\n    " ];                                                                                               // 143
      }), "\n\n  "), "\n  ", HTML.DIV({                                                                               // 144
        class: "col-md-7 text-right"                                                                                  // 145
      }, "\n    ", Blaze.If(function() {                                                                              // 146
        return Spacebars.call(view.lookup("ownMeeting"));                                                             // 147
      }, function() {                                                                                                 // 148
        return [ "\n    ", HTML.INPUT(HTML.Attrs({                                                                    // 149
          type: "button",                                                                                             // 150
          class: "btn btn-primary",                                                                                   // 151
          role: "button",                                                                                             // 152
          id: "speakControl",                                                                                         // 153
          value: "give"                                                                                               // 154
        }, function() {                                                                                               // 155
          return Spacebars.attrMustache(view.lookup("disabled"));                                                     // 156
        })), "\n    " ];                                                                                              // 157
      }), "\n    ", HTML.INPUT(HTML.Attrs({                                                                           // 158
        type: "button",                                                                                               // 159
        class: "btn btn-primary",                                                                                     // 160
        role: "button",                                                                                               // 161
        id: "speakAsk",                                                                                               // 162
        value: "ask"                                                                                                  // 163
      }, function() {                                                                                                 // 164
        return Spacebars.attrMustache(view.lookup("disabled"));                                                       // 165
      })), "\n\n  "), "\n"), "\n", HTML.BR(), "\n", HTML.BR(), "\n" ];                                                // 166
    }), "\n"), "\n", HTML.Comment(" panel-body "), "\n"), "\n"), "\n", HTML.Comment("FIN PREMIER PANEL DROITE : participant "), "\n\n\n", HTML.Comment("START THIRD PANEL DROITE : Bouton "), "\n\n", HTML.DIV({
      class: "col-md-4"                                                                                               // 168
    }, "\n  ", HTML.Comment(' <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#localModal">Add local participant</button> '), "\n  ", HTML.BUTTON({
      type: "button",                                                                                                 // 170
      class: "btn btn-primary",                                                                                       // 171
      "data-toggle": "modal",                                                                                         // 172
      "data-target": "#invitationModal"                                                                               // 173
    }, "Invite participants"), "\n  ", HTML.BUTTON({                                                                  // 174
      type: "button",                                                                                                 // 175
      class: "btn btn-danger",                                                                                        // 176
      role: "button",                                                                                                 // 177
      id: "closeMeeting"                                                                                              // 178
    }, "Close meeting"), "\n\n"), "\n", HTML.Comment("FIN THIRD PANEL DROITE : bouton "), "\n\n\n", HTML.Comment("FIN PREMIER PANEL DROITE"), "\n\n\n", HTML.Comment("START PREMIER PANEL  : PPT "), "\n\n", HTML.DIV({
      class: "col-md-12"                                                                                              // 180
    }, "\n  ", Spacebars.include(view.lookupTemplate("pptcont")), "\n"), "\n\n" ];                                    // 181
  }, function() {                                                                                                     // 182
    return [ "\n", HTML.DIV({                                                                                         // 183
      class: "panel-body"                                                                                             // 184
    }, "\n  ", HTML.P({                                                                                               // 185
      class: "alert alert-warning"                                                                                    // 186
    }, HTML.SPAN({                                                                                                    // 187
      class: "glyphicon glyphicon-warning-sign"                                                                       // 188
    }), HTML.STRONG(Blaze.View("lookup:_", function() {                                                               // 189
      return Spacebars.mustache(view.lookup("_"), "warning");                                                         // 190
    })), Blaze.View("lookup:_", function() {                                                                          // 191
      return Spacebars.mustache(view.lookup("_"), "warningLogInfo");                                                  // 192
    })), "\n"), "\n" ];                                                                                               // 193
  }), "\n"), HTML.Raw('\n\n\n<!-- **************************************** -->\n<!-- Modal d\'ajout d\'un participant ext�rieur -->\n<!-- **************************************** -->\n<!-- <div class="modal fade" id="invitationModal" tabindex="-1" role="dialog" aria-labelledby="invitationModalLabel">\n<div class="modal-dialog" role="document">\n<div class="modal-content">\n<div class="modal-header">\n<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n<h4 class="modal-title" id="invitationModalLabel">Invite Participants</h4>\n</div>\n<div class="modal-body">\n\n<h3>By email address</h3>\n<form role="form" id="inviteForm">\n<div class="form-group email-input-group">\n<label class="control-label">Your participants\' e-mails</label>\n<div class="participantEmailInput" rank="1">\n<div class="input-group xs-mb-15"><span class="input-group-addon">@</span>\n<input class="participantsEmails form-control" name="participantsEmails" type="email" parsley-type="email">\n</div>\n</div>\n</div>\n<div class="modal-footer">\n<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n<button id="inviteSubmit" type="submit" class="btn btn-primary">Invite</button>\n</div>\n</form>\n</div>\n</div>\n</div>\n</div> -->\n<!-- ************************************************************************************************************* -->\n<!-- Modal de notification qui s\'affiche sur le dashboard d\'un intervenant auquel l\'animateur a supprim� le speech -->\n<!-- ************************************************************************************************************* -->\n<!-- <div class="modal fade" id="speech-delete-modal" tabindex="-1" role="dialog" aria-labelledby="speech-delete-label">\n<div class="modal-dialog" role="document">\n<div class="modal-content">\n<div class="modal-header">\n<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n<h4 class="modal-title" id="speech-delete-label">Invite Participants</h4>\n</div>\n<div class="modal-body">\nYour speech have been deleted\n</div>\n</div>\n</div>\n</div> -->') ];
}));                                                                                                                  // 195
                                                                                                                      // 196
Template.__checkName("parole");                                                                                       // 197
Template["parole"] = new Template("Template.parole", (function() {                                                    // 198
  var view = this;                                                                                                    // 199
  return [ HTML.SPAN("Speech Duration : ", Blaze.View("lookup:displayTime", function() {                              // 200
    return Spacebars.mustache(view.lookup("displayTime"), view.lookup("time"));                                       // 201
  })), HTML.Raw("<br>") ];                                                                                            // 202
}));                                                                                                                  // 203
                                                                                                                      // 204
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.meetingLeft.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/application/template.meetingLeft.js                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("meetingReport");                                                                                // 2
Template["meetingReport"] = new Template("Template.meetingReport", (function() {                                      // 3
  var view = this;                                                                                                    // 4
  return HTML.Raw('<div class="panel panel-default panel-heading-fullwidth panel-primary">\n    <div class="panel-heading"><span class="title">Meeting Report</span></div>\n    <div class="panel-body" id="report-cont">\n      <div class="container-fluid" style="margin-bottom:5px">\n        <div class="input-group">\n          <span class="input-group-addon" id="sizing-addon2"><b>Report Title : </b></span>\n          <input type="text" class="form-control" placeholder="Title" aria-describedby="sizing-addon2" id="TitleReport" style="width:70%">\n          <button type="button" class="btn btn-success" id="saveReport" style="margin-left:10px;">Save Meeting Report</button>\n        </div>\n      </div>\n      <div class="row">\n        <div id="textareaRich">\n          Your Report\'s Meetings !!\n        </div>\n      </div>\n    </div>\n  </div>');
}));                                                                                                                  // 6
                                                                                                                      // 7
Template.__checkName("pptcont");                                                                                      // 8
Template["pptcont"] = new Template("Template.pptcont", (function() {                                                  // 9
  var view = this;                                                                                                    // 10
  return HTML.Raw('<div class="panel panel-default panel-heading-fullwidth panel-primary">\n    <div class="panel-heading"><span class="title">Presentation</span> </div>\n    <div class="panel-body">\n      <iframe src="https://docs.google.com/presentation/d/1Y6LU1__oSxTFL8Ykw9sEcikwvGcVNhUtT3JZ5Auiqos/embed?start=false&amp;loop=false&amp;delayms=5000" frameborder="0" width="100%" height="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>    </div>\n    </div>');
}));                                                                                                                  // 12
                                                                                                                      // 13
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"group":{"template.group_item.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/group/template.group_item.js                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("groupItem");                                                                                    // 2
Template["groupItem"] = new Template("Template.groupItem", (function() {                                              // 3
  var view = this;                                                                                                    // 4
  return Blaze.If(function() {                                                                                        // 5
    return Spacebars.call(view.lookup("partGroup"));                                                                  // 6
  }, function() {                                                                                                     // 7
    return [ "\n  ", HTML.DIV({                                                                                       // 8
      class: "group"                                                                                                  // 9
    }, "\n    ", HTML.DIV({                                                                                           // 10
      class: "post-content"                                                                                           // 11
    }, "\n      ", HTML.LI(Blaze.If(function() {                                                                      // 12
      return Spacebars.call(view.lookup("ownGroup"));                                                                 // 13
    }, function() {                                                                                                   // 14
      return [ HTML.U(Blaze.View("lookup:name", function() {                                                          // 15
        return Spacebars.mustache(view.lookup("name"));                                                               // 16
      })), " " ];                                                                                                     // 17
    }, function() {                                                                                                   // 18
      return [ " ", Blaze.View("lookup:name", function() {                                                            // 19
        return Spacebars.mustache(view.lookup("name"));                                                               // 20
      }), " " ];                                                                                                      // 21
    }), HTML.A({                                                                                                      // 22
      href: function() {                                                                                              // 23
        return Spacebars.mustache(view.lookup("pathFor"), "groupPage");                                               // 24
      },                                                                                                              // 25
      class: "discuss btn btn-info"                                                                                   // 26
    }, Blaze.View("lookup:_", function() {                                                                            // 27
      return Spacebars.mustache(view.lookup("_"), "access");                                                          // 28
    }))), "\n      ", HTML.BR(), "\n    "), "\n  "), "\n  " ];                                                        // 29
  });                                                                                                                 // 30
}));                                                                                                                  // 31
                                                                                                                      // 32
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.group_list.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/group/template.group_list.js                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("groupsList");                                                                                   // 2
Template["groupsList"] = new Template("Template.groupsList", (function() {                                            // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    class: "groups"                                                                                                   // 6
  }, "\n    ", Blaze.Each(function() {                                                                                // 7
    return Spacebars.call(view.lookup("groups"));                                                                     // 8
  }, function() {                                                                                                     // 9
    return [ "\n      ", Spacebars.include(view.lookupTemplate("groupItem")), "\n    " ];                             // 10
  }, function() {                                                                                                     // 11
    return [ "\n      ", HTML.LI({                                                                                    // 12
      class: "placeholder"                                                                                            // 13
    }, Blaze.View("lookup:_", function() {                                                                            // 14
      return Spacebars.mustache(view.lookup("_"), "noGroup");                                                         // 15
    }), " "), "\n    " ];                                                                                             // 16
  }), "\n  ");                                                                                                        // 17
}));                                                                                                                  // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.group_page.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/group/template.group_page.js                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("groupPage");                                                                                    // 2
Template["groupPage"] = new Template("Template.groupPage", (function() {                                              // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    class: "main-content"                                                                                             // 6
  }, "\n    ", HTML.DIV({                                                                                             // 7
    class: "row"                                                                                                      // 8
  }, "\n      ", HTML.DIV({                                                                                           // 9
    class: "col-xs-12 col-md-6 col-md-offset-3"                                                                       // 10
  }, "\n        ", HTML.DIV({                                                                                         // 11
    class: "panel panel-default"                                                                                      // 12
  }, "\n          ", HTML.DIV({                                                                                       // 13
    class: "panel-heading"                                                                                            // 14
  }, HTML.SPAN({                                                                                                      // 15
    class: "title"                                                                                                    // 16
  }, Blaze.View("lookup:name", function() {                                                                           // 17
    return Spacebars.mustache(view.lookup("name"));                                                                   // 18
  }), " ", Blaze.If(function() {                                                                                      // 19
    return Spacebars.call(view.lookup("ownGroup"));                                                                   // 20
  }, function() {                                                                                                     // 21
    return HTML.BUTTON({                                                                                              // 22
      type: "button",                                                                                                 // 23
      class: "btn btn-danger delete"                                                                                  // 24
    }, "Delete");                                                                                                     // 25
  }, function() {                                                                                                     // 26
    return [ HTML.BUTTON({                                                                                            // 27
      type: "button",                                                                                                 // 28
      class: "btn btn-danger quit"                                                                                    // 29
    }, "Quit"), " " ];                                                                                                // 30
  }))), "\n          ", HTML.DIV({                                                                                    // 31
    class: "panel-body"                                                                                               // 32
  }, "\n            ", Blaze.Each(function() {                                                                        // 33
    return Spacebars.call(view.lookup("members"));                                                                    // 34
  }, function() {                                                                                                     // 35
    return [ "\n\n            ", HTML.DIV({                                                                           // 36
      class: "input-group"                                                                                            // 37
    }, "\n              ", Blaze.View("lookup:.", function() {                                                        // 38
      return Spacebars.mustache(view.lookup("."));                                                                    // 39
    }), "\n              ", HTML.SPAN({                                                                               // 40
      class: "input-group-addon",                                                                                     // 41
      id: "min-input",                                                                                                // 42
      role: "button"                                                                                                  // 43
    }, HTML.B("-")), "\n\n            "), "\n            ", HTML.BR(), "\n\n            " ];                          // 44
  }), "\n            ", HTML.DIV({                                                                                    // 45
    class: "input-group"                                                                                              // 46
  }, HTML.Raw('<span class="input-group-addon">@</span>'), "\n              ", HTML.INPUT({                           // 47
    name: "AddedMember",                                                                                              // 48
    type: "email",                                                                                                    // 49
    "parsley-type": "email",                                                                                          // 50
    value: function() {                                                                                               // 51
      return Spacebars.mustache(view.lookup("value"));                                                                // 52
    },                                                                                                                // 53
    placeholder: "member mail",                                                                                       // 54
    class: "form-control"                                                                                             // 55
  }), "\n              ", HTML.Raw('<span class="input-group-addon" id="add-member" role="button"><b>+</b></span>'), "\n            "), "\n\n            ", HTML.Raw("<br>"), HTML.Raw("<br>"), "\n            ", HTML.DIV({
    class: "text-center"                                                                                              // 57
  }, "\n              ", HTML.BUTTON({                                                                                // 58
    type: "button",                                                                                                   // 59
    class: "btn btn-space btn-primary btn-rounded btn-lg",                                                            // 60
    id: "open"                                                                                                        // 61
  }, "\n                ", HTML.A({                                                                                   // 62
    style: "color:#fff",                                                                                              // 63
    href: function() {                                                                                                // 64
      return Spacebars.mustache(view.lookup("pathFor"), "create");                                                    // 65
    }                                                                                                                 // 66
  }, HTML.Raw('<i class="icon icon-left s7-users"></i>'), " ", Blaze.View("lookup:_", function() {                    // 67
    return Spacebars.mustache(view.lookup("_"), "openMeeting");                                                       // 68
  })), "\n              "), "\n            "), "\n          "), "\n          ", HTML.Raw('<div class="panel-heading"></div>'), "\n          ", HTML.DIV({
    class: "panel-body"                                                                                               // 70
  }, "\n            ", HTML.SPAN(" ", Blaze.View("lookup:_", function() {                                             // 71
    return Spacebars.mustache(view.lookup("_"), "managedBy");                                                         // 72
  }), " ", Blaze.View("lookup:authorName", function() {                                                               // 73
    return Spacebars.mustache(view.lookup("authorName"));                                                             // 74
  }), " - ", Blaze.View("lookup:authorAdress", function() {                                                           // 75
    return Spacebars.mustache(view.lookup("authorAdress"));                                                           // 76
  }), " "), "\n          "), "\n        "), "\n      "), "\n    "), "\n  ");                                          // 77
}));                                                                                                                  // 78
                                                                                                                      // 79
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.group_submit.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/group/template.group_submit.js                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("groupSubmit");                                                                                  // 2
Template["groupSubmit"] = new Template("Template.groupSubmit", (function() {                                          // 3
  var view = this;                                                                                                    // 4
  return [ HTML.ASIDE({                                                                                               // 5
    class: "page-aside"                                                                                               // 6
  }, "\n    ", HTML.DIV({                                                                                             // 7
    class: "am-scroller nano has-scrollbar"                                                                           // 8
  }, "\n      ", HTML.DIV({                                                                                           // 9
    class: "nano-content",                                                                                            // 10
    tabindex: "0",                                                                                                    // 11
    style: "right: -17px;"                                                                                            // 12
  }, "\n        ", HTML.DIV({                                                                                         // 13
    class: "content"                                                                                                  // 14
  }, "\n          ", HTML.Raw("<h2>Menu</h2>"), "\n          ", HTML.UL({                                             // 15
    class: "nav nav-pills nav-stacked"                                                                                // 16
  }, "\n            ", HTML.LI(HTML.A({                                                                               // 17
    href: function() {                                                                                                // 18
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                                // 19
        route: "groups"                                                                                               // 20
      }));                                                                                                            // 21
    }                                                                                                                 // 22
  }, Blaze.View("lookup:_", function() {                                                                              // 23
    return Spacebars.mustache(view.lookup("_"), "menuGroup");                                                         // 24
  }))), "\n            ", HTML.LI({                                                                                   // 25
    class: "active"                                                                                                   // 26
  }, HTML.A({                                                                                                         // 27
    href: "#"                                                                                                         // 28
  }, Blaze.View("lookup:_", function() {                                                                              // 29
    return Spacebars.mustache(view.lookup("_"), "createGroup");                                                       // 30
  }))), "\n          "), "\n        "), "\n      "), "\n      ", HTML.Raw('<div class="nano-pane" style="display: none;"><div class="nano-slider" style="height: 268px; transform: translate(0px, 0px);"></div></div>')), "\n    "), "\n    ", HTML.DIV({
    class: "page-head",                                                                                               // 32
    style: "left:250px"                                                                                               // 33
  }, "\n      ", HTML.H2(Blaze.View("lookup:_", function() {                                                          // 34
    return Spacebars.mustache(view.lookup("_"), "groupSubTitle");                                                     // 35
  })), "\n    "), "\n    ", HTML.DIV({                                                                                // 36
    class: "main-content"                                                                                             // 37
  }, "\n      ", HTML.DIV({                                                                                           // 38
    class: "row"                                                                                                      // 39
  }, "\n        ", HTML.DIV({                                                                                         // 40
    class: "col-xs-12 col-md-8 col-md-offset-3"                                                                       // 41
  }, "\n          ", HTML.DIV({                                                                                       // 42
    class: "panel panel-default"                                                                                      // 43
  }, "\n            ", Blaze.If(function() {                                                                          // 44
    return Spacebars.call(view.lookup("currentUser"));                                                                // 45
  }, function() {                                                                                                     // 46
    return [ "\n            ", HTML.DIV({                                                                             // 47
      class: "panel-heading"                                                                                          // 48
    }, HTML.SPAN({                                                                                                    // 49
      class: "title"                                                                                                  // 50
    }, Blaze.View("lookup:_", function() {                                                                            // 51
      return Spacebars.mustache(view.lookup("_"), "groupSubmit");                                                     // 52
    }))), "\n            ", HTML.DIV({                                                                                // 53
      class: "panel-body"                                                                                             // 54
    }, "\n\n              ", HTML.FORM({                                                                              // 55
      class: "main form page"                                                                                         // 56
    }, "\n                ", HTML.DIV({                                                                               // 57
      class: "form-group"                                                                                             // 58
    }, "\n                  ", HTML.LABEL({                                                                           // 59
      class: "control-label",                                                                                         // 60
      for: "url"                                                                                                      // 61
    }, Blaze.View("lookup:_", function() {                                                                            // 62
      return Spacebars.mustache(view.lookup("_"), "name");                                                            // 63
    })), "\n                  ", HTML.DIV({                                                                           // 64
      class: "controls"                                                                                               // 65
    }, "\n                    ", HTML.INPUT({                                                                         // 66
      name: "name",                                                                                                   // 67
      id: "groupName",                                                                                                // 68
      type: "text",                                                                                                   // 69
      value: "",                                                                                                      // 70
      placeholder: "Group name",                                                                                      // 71
      class: "form-control"                                                                                           // 72
    }), "\n                  "), "\n                "), "\n                ", HTML.DIV({                              // 73
      class: "form-group"                                                                                             // 74
    }, "\n                  ", HTML.LABEL({                                                                           // 75
      class: "control-label",                                                                                         // 76
      for: "title"                                                                                                    // 77
    }, Blaze.View("lookup:_", function() {                                                                            // 78
      return Spacebars.mustache(view.lookup("_"), "members");                                                         // 79
    })), "\n                  ", HTML.DIV({                                                                           // 80
      class: "controls"                                                                                               // 81
    }, "\n                    ", HTML.SPAN(" ", Blaze.View("lookup:_", function() {                                   // 82
      return Spacebars.mustache(view.lookup("_"), "addMembers");                                                      // 83
    }), " "), "\n                    ", HTML.SPAN({                                                                   // 84
      class: "glyphicon glyphicon-plus",                                                                              // 85
      id: "add-input",                                                                                                // 86
      role: "button"                                                                                                  // 87
    }), "\n                  "), "\n                  ", HTML.Comment("\n                  <a href=\"#\" id='add-input'>\n                    Add Input\n                  </a>"), "\n\n                  ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("inputs"));                                                                   // 89
    }, function() {                                                                                                   // 90
      return [ "\n                  ", Spacebars.include(view.lookupTemplate("input")), "\n                  " ];     // 91
    }), "\n                "), "\n                ", HTML.INPUT({                                                     // 92
      type: "submit",                                                                                                 // 93
      value: "Submit",                                                                                                // 94
      class: "btn btn-primary"                                                                                        // 95
    }), "\n              "), "\n            "), "\n\n            " ];                                                 // 96
  }, function() {                                                                                                     // 97
    return [ "\n            ", HTML.DIV({                                                                             // 98
      class: "panel-body"                                                                                             // 99
    }, "\n              ", HTML.P({                                                                                   // 100
      class: "alert alert-warning"                                                                                    // 101
    }, HTML.SPAN({                                                                                                    // 102
      class: "glyphicon glyphicon-warning-sign"                                                                       // 103
    }), HTML.STRONG(Blaze.View("lookup:_", function() {                                                               // 104
      return Spacebars.mustache(view.lookup("_"), "warning");                                                         // 105
    })), Blaze.View("lookup:_", function() {                                                                          // 106
      return Spacebars.mustache(view.lookup("_"), "warningLogInfo");                                                  // 107
    })), "\n            "), "\n            " ];                                                                       // 108
  }), "\n\n          "), "\n        "), "\n      "), "\n    ") ];                                                     // 109
}));                                                                                                                  // 110
                                                                                                                      // 111
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.groups.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/group/template.groups.js                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("groups");                                                                                       // 2
Template["groups"] = new Template("Template.groups", (function() {                                                    // 3
  var view = this;                                                                                                    // 4
  return [ HTML.ASIDE({                                                                                               // 5
    class: "page-aside"                                                                                               // 6
  }, "\n    ", HTML.DIV({                                                                                             // 7
    class: "am-scroller nano has-scrollbar"                                                                           // 8
  }, "\n      ", HTML.DIV({                                                                                           // 9
    class: "nano-content",                                                                                            // 10
    tabindex: "0",                                                                                                    // 11
    style: "right: -17px;"                                                                                            // 12
  }, "\n        ", HTML.DIV({                                                                                         // 13
    class: "content"                                                                                                  // 14
  }, "\n          ", HTML.H2(Blaze.View("lookup:_", function() {                                                      // 15
    return Spacebars.mustache(view.lookup("_"), "menu");                                                              // 16
  })), "\n          ", HTML.UL({                                                                                      // 17
    class: "nav nav-pills nav-stacked"                                                                                // 18
  }, "\n            ", HTML.LI({                                                                                      // 19
    class: "active"                                                                                                   // 20
  }, HTML.A({                                                                                                         // 21
    href: "#"                                                                                                         // 22
  }, Blaze.View("lookup:_", function() {                                                                              // 23
    return Spacebars.mustache(view.lookup("_"), "menuGroup");                                                         // 24
  }))), "\n            ", HTML.LI(HTML.A({                                                                            // 25
    href: function() {                                                                                                // 26
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                                // 27
        route: "groupSubmit"                                                                                          // 28
      }));                                                                                                            // 29
    }                                                                                                                 // 30
  }, Blaze.View("lookup:_", function() {                                                                              // 31
    return Spacebars.mustache(view.lookup("_"), "createGroup");                                                       // 32
  }))), "\n          "), "\n        "), "\n      "), "\n      ", HTML.Raw('<div class="nano-pane" style="display: none;"><div class="nano-slider" style="height: 268px; transform: translate(0px, 0px);"></div></div>')), "\n    "), "\n    ", HTML.DIV({
    class: "page-head",                                                                                               // 34
    style: "left:250px"                                                                                               // 35
  }, "\n      ", HTML.H2(Blaze.View("lookup:_", function() {                                                          // 36
    return Spacebars.mustache(view.lookup("_"), "groupTitle");                                                        // 37
  })), "\n    "), "\n    ", HTML.DIV({                                                                                // 38
    class: "main-content"                                                                                             // 39
  }, "\n      ", HTML.DIV({                                                                                           // 40
    class: "row"                                                                                                      // 41
  }, "\n        ", HTML.DIV({                                                                                         // 42
    class: "col-xs-12 col-md-8 col-md-offset-3"                                                                       // 43
  }, "\n\n\n          ", HTML.DIV({                                                                                   // 44
    class: "panel panel-default"                                                                                      // 45
  }, "\n            ", Blaze.If(function() {                                                                          // 46
    return Spacebars.call(view.lookup("currentUser"));                                                                // 47
  }, function() {                                                                                                     // 48
    return [ "\n            ", HTML.DIV({                                                                             // 49
      class: "panel-heading"                                                                                          // 50
    }, HTML.SPAN({                                                                                                    // 51
      class: "title"                                                                                                  // 52
    }, Blaze.View("lookup:_", function() {                                                                            // 53
      return Spacebars.mustache(view.lookup("_"), "groupBodyTitle");                                                  // 54
    }))), "\n\n            ", HTML.DIV({                                                                              // 55
      class: "panel-body"                                                                                             // 56
    }, "\n              ", HTML.U(" ", Blaze.View("lookup:_", function() {                                            // 57
      return Spacebars.mustache(view.lookup("_"), "groupInfo");                                                       // 58
    })), "\n              ", HTML.BR(), HTML.BR(), HTML.BR(), "\n              ", Spacebars.include(view.lookupTemplate("groupsList")), "\n            "), "\n\n\n            " ];
  }, function() {                                                                                                     // 60
    return [ "\n            ", HTML.DIV({                                                                             // 61
      class: "panel-body"                                                                                             // 62
    }, "\n              ", HTML.P({                                                                                   // 63
      class: "alert alert-warning"                                                                                    // 64
    }, HTML.SPAN({                                                                                                    // 65
      class: "glyphicon glyphicon-warning-sign"                                                                       // 66
    }), HTML.STRONG(Blaze.View("lookup:_", function() {                                                               // 67
      return Spacebars.mustache(view.lookup("_"), "warning");                                                         // 68
    })), Blaze.View("lookup:_", function() {                                                                          // 69
      return Spacebars.mustache(view.lookup("_"), "warningLogInfo");                                                  // 70
    })), "\n            "), "\n            " ];                                                                       // 71
  }), "\n\n          "), "\n        "), "\n      "), "\n    ") ];                                                     // 72
}));                                                                                                                  // 73
                                                                                                                      // 74
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"group_item.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/group/group_item.js                                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.groupItem.helpers({                                                                                          // 1
  ownGroup: function () {                                                                                             // 2
    return this.userId === Meteor.userId();                                                                           // 3
  },                                                                                                                  // 4
  partGroup: function () {                                                                                            // 5
    var res = 0;                                                                                                      // 6
                                                                                                                      //
    if (this.userId === Meteor.userId()) {                                                                            // 7
      res = 1;                                                                                                        // 8
    } else {                                                                                                          // 9
      for (i = 0; i < this.members.length; i++) {                                                                     // 11
        if (this.members[i] === Meteor.user().emails[0].address) {                                                    // 12
          res = 1;                                                                                                    // 13
          i = this.members.length;                                                                                    // 14
        }                                                                                                             // 15
      }                                                                                                               // 16
    }                                                                                                                 // 17
                                                                                                                      //
    return res;                                                                                                       // 18
  }                                                                                                                   // 19
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"group_list.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/group/group_list.js                                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.groupsList.helpers({                                                                                         // 1
  groups: function () {                                                                                               // 2
    return Groups.find();                                                                                             // 3
  }                                                                                                                   // 4
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"group_page.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/group/group_page.js                                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.groupPage.helpers({                                                                                          // 1
  ownGroup: function () {                                                                                             // 2
    return this.userId === Meteor.userId();                                                                           // 3
  },                                                                                                                  // 4
  partGroup: function () {                                                                                            // 5
    var res = 0;                                                                                                      // 6
                                                                                                                      //
    if (this.userId === Meteor.userId()) {                                                                            // 7
      res = 1;                                                                                                        // 8
    } else {                                                                                                          // 9
      for (i = 0; i < this.members.length; i++) {                                                                     // 11
        if (this.members[i] === Meteor.user().emails[0].address) {                                                    // 12
          res = 1;                                                                                                    // 13
          i = this.members.length;                                                                                    // 14
        }                                                                                                             // 15
      }                                                                                                               // 16
    }                                                                                                                 // 17
                                                                                                                      //
    return res;                                                                                                       // 18
  }                                                                                                                   // 19
});                                                                                                                   // 1
Template.groupPage.events({                                                                                           // 22
  'click .delete': function (e) {                                                                                     // 24
    e.preventDefault();                                                                                               // 25
                                                                                                                      //
    if (confirm("Delete this group?")) {                                                                              // 27
      var currentGroupId = this._id;                                                                                  // 28
      Groups.remove(currentGroupId);                                                                                  // 29
      Router.go('groups');                                                                                            // 30
    }                                                                                                                 // 32
  },                                                                                                                  // 33
  'click .quit': function (e) {                                                                                       // 34
    e.preventDefault();                                                                                               // 35
                                                                                                                      //
    if (confirm("Do you want to leave this group?")) {                                                                // 37
      var currentGroupId = this._id;                                                                                  // 38
      var member = Meteor.user().emails[0].address;                                                                   // 39
      Groups.update(currentGroupId, {                                                                                 // 40
        $pull: {                                                                                                      // 40
          members: member                                                                                             // 40
        }                                                                                                             // 40
      });                                                                                                             // 40
      Router.go('groups');                                                                                            // 41
    }                                                                                                                 // 43
  },                                                                                                                  // 44
  'click #min-input': function (e) {                                                                                  // 45
    e.preventDefault();                                                                                               // 48
                                                                                                                      //
    if (confirm("Do you want to kik " + this + " ?")) {                                                               // 50
      var parentId = Template.parentData(1)._id;                                                                      // 51
                                                                                                                      //
      var target = "" + this; //  console.log("taille parent : "+Template.parentData(1).members.length);              // 52
                                                                                                                      //
      console.log(target);                                                                                            // 56
      Groups.update({                                                                                                 // 57
        _id: parentId                                                                                                 // 57
      }, {                                                                                                            // 57
        $pull: {                                                                                                      // 57
          members: target                                                                                             // 57
        }                                                                                                             // 57
      }); //alert("member removed!");                                                                                 // 57
    }                                                                                                                 // 59
  },                                                                                                                  // 61
  'click #add-member': function (e) {                                                                                 // 62
    e.preventDefault(); //Récupération des éléments DOM des champs de saisie                                          // 63
                                                                                                                      //
    var currentGroupId = this._id;                                                                                    // 65
    var AddedMember = document.querySelector('[name=AddedMember]');                                                   // 67
    Groups.update(currentGroupId, {                                                                                   // 69
      $push: {                                                                                                        // 69
        members: AddedMember.value                                                                                    // 69
      }                                                                                                               // 69
    });                                                                                                               // 69
    AddedMember.value = "";                                                                                           // 71
  },                                                                                                                  // 72
  'click #open': function (e) {                                                                                       // 73
    Router.go('create', this);                                                                                        // 74
  }                                                                                                                   // 75
});                                                                                                                   // 22
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"group_submit.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/group/group_submit.js                                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.groupSubmit.onCreated(function () {                                                                          // 1
  Session.set('inputs', []); // on page load, set this to have no inputs                                              // 2
});                                                                                                                   // 3
Template.groupSubmit.helpers({                                                                                        // 5
  inputs: function () {                                                                                               // 6
    return Session.get('inputs'); // reactively watches the Session variable, so when it changes, this result will change and our template will change
  }                                                                                                                   // 8
}); // Now we'll set up a click handler to add inputs to our array when we   click the "add" button                   // 5
                                                                                                                      //
Template.groupSubmit.events({                                                                                         // 12
  'click #add-input': function () {                                                                                   // 13
    var inputs = Session.get('inputs');                                                                               // 15
    var uniqid = Math.floor(Math.random() * 100000); // Give a unique ID so you can pull _this_ input when you click remove
                                                                                                                      //
    inputs.push({                                                                                                     // 17
      uniqid: uniqid,                                                                                                 // 17
      value: ""                                                                                                       // 17
    });                                                                                                               // 17
    Session.set('inputs', inputs);                                                                                    // 18
  },                                                                                                                  // 19
  'submit form': function (e) {                                                                                       // 21
    e.preventDefault(); //Récupération des éléments DOM des champs de saisie                                          // 22
                                                                                                                      //
    var membersInputs = $(e.target).find('[name=member]'); //Récupération des valeurs de l'ordre du jour, temps estimés et des emails d'invitation
                                                                                                                      //
    var name = [];                                                                                                    // 28
    ;                                                                                                                 // 28
    var members = [];                                                                                                 // 29
                                                                                                                      //
    for (i = 0; i < membersInputs.length; i++) {                                                                      // 32
      if (membersInputs[i].value != "") {                                                                             // 33
        members.push(membersInputs[i].value);                                                                         // 34
      }                                                                                                               // 35
    } //  name.push(nameInput[0].value);                                                                              // 36
                                                                                                                      //
                                                                                                                      //
    var group = {                                                                                                     // 40
      name: $(e.target).find('[name=name]').val(),                                                                    // 41
      members: members                                                                                                // 42
    };                                                                                                                // 40
    Meteor.call('groupInsert', group, function (error, result) {                                                      // 45
      // affiche l'erreur à l'utilisateur et s'interrompt                                                             // 46
      if (error) return alert(error.reason);                                                                          // 47
      Router.go('groups', {                                                                                           // 49
        _id: result._id                                                                                               // 49
      });                                                                                                             // 49
    });                                                                                                               // 50
  }                                                                                                                   // 51
}); // We also need handlers for when the inputs themselves are changed / removed                                     // 12
                                                                                                                      //
Template.input.events({                                                                                               // 58
  'click #remove-input': function (event) {                                                                           // 59
    var uniqid = $(event.currentTarget).attr('uniqid');                                                               // 60
    inputs = Session.get('inputs');                                                                                   // 61
    inputs = _.filter(inputs, function (x) {                                                                          // 62
      return x.uniqid != uniqid;                                                                                      // 62
    });                                                                                                               // 62
    Session.set('inputs', inputs);                                                                                    // 63
  } /*,                                                                                                               // 64
    'change input': function(event) {                                                                                 //
     var $input = $(event.currentTarget);                                                                             //
     var uniqid = $input.attr('uniqid');                                                                              //
     inputs = Session.get('inputs');                                                                                  //
     index = inputs.findIndex(function(x) { return x.uniqid == uniqid; });                                            //
     inputs[index].value = $input.val();                                                                              //
     Session.set('inputs', inputs);                                                                                   //
    }*/                                                                                                               //
});                                                                                                                   // 58
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"template.layout.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/template.layout.js                                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("layout");                                                                                       // 2
Template["layout"] = new Template("Template.layout", (function() {                                                    // 3
  var view = this;                                                                                                    // 4
  return [ HTML.HEAD("\n    ", HTML.Raw('<meta charset="utf-8">'), "\n    ", HTML.Raw('<meta http-equiv="X-UA-Compatible" content="IE=edge">'), "\n    ", HTML.Raw('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">'), "\n    ", HTML.Raw('<meta name="description" content="TakeTalk is an application to manage your meetings by coordinate time speech">'), "\n    ", HTML.Raw('<link rel="icon" href="/favicon.ico">'), "\n    ", HTML.TITLE(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "mainTitle");                                                         // 6
  })), "\n\n  "), "\n  ", HTML.BODY({                                                                                 // 7
    "cz-shortcut-listen": "true"                                                                                      // 8
  }, "\n\n    ", HTML.DIV({                                                                                           // 9
    class: "am-wrapper am-nosidebar-left"                                                                             // 10
  }, "\n      ", HTML.NAV({                                                                                           // 11
    class: "navbar navbar-default navbar-fixed-top am-top-header"                                                     // 12
  }, "\n        ", HTML.DIV({                                                                                         // 13
    class: "container-fluid"                                                                                          // 14
  }, "\n          ", HTML.DIV({                                                                                       // 15
    class: "navbar-header"                                                                                            // 16
  }, "\n            ", HTML.DIV({                                                                                     // 17
    class: "page-title"                                                                                               // 18
  }, "\n              ", HTML.A({                                                                                     // 19
    href: function() {                                                                                                // 20
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                                // 21
        route: "home"                                                                                                 // 22
      }));                                                                                                            // 23
    },                                                                                                                // 24
    class: "navbar-brand title-font"                                                                                  // 25
  }, "\n                ", HTML.Raw('<img src="/LOGO.png" height="" width="100%" style="display:inline">')), "\n            "), "\n          "), "\n          ", HTML.Raw('<a href="#" data-toggle="collapse" data-target="#am-navbar-collapse" class="am-toggle-top-header-menu collapsed">\n            <span class="glyphicon glyphicon-menu-hamburger"></span>\n          </a>'), "\n          ", HTML.DIV({
    id: "am-navbar-collapse",                                                                                         // 27
    class: "collapse navbar-collapse"                                                                                 // 28
  }, "\n            ", HTML.UL({                                                                                      // 29
    class: "nav navbar-nav am-nav-center"                                                                             // 30
  }, "\n              ", HTML.LI(HTML.A({                                                                             // 31
    href: function() {                                                                                                // 32
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                                // 33
        route: "home"                                                                                                 // 34
      }));                                                                                                            // 35
    }                                                                                                                 // 36
  }, HTML.Raw('<span class="glyphicon glyphicon-home" aria-hidden="true"></span>'))), "\n              ", HTML.Raw("<!-- <li><a href=\"{{pathFor route='tutorial'}}\">Tutorial</a></li>\n              <li><a href=\"{{pathFor route='downloads'}}\">Downloads</a></li> -->"), "\n              ", HTML.Raw("<!-- langue-->"), "\n              ", HTML.LI(HTML.A({
    href: function() {                                                                                                // 38
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                                // 39
        route: "groups"                                                                                               // 40
      }));                                                                                                            // 41
    }                                                                                                                 // 42
  }, Blaze.View("lookup:_", function() {                                                                              // 43
    return Spacebars.mustache(view.lookup("_"), "groups");                                                            // 44
  }))), "\n              ", HTML.LI({                                                                                 // 45
    class: "dropdown"                                                                                                 // 46
  }, "\n                ", HTML.A({                                                                                   // 47
    href: "#",                                                                                                        // 48
    "data-toggle": "dropdown",                                                                                        // 49
    role: "button",                                                                                                   // 50
    "aria-expanded": "false",                                                                                         // 51
    class: "dropdown-toggle"                                                                                          // 52
  }, Blaze.View("lookup:_", function() {                                                                              // 53
    return Spacebars.mustache(view.lookup("_"), "lang");                                                              // 54
  }), "\n                  ", HTML.Raw('<span class="glyphicon glyphicon-globe" aria-hidden="true"></span>'), "\n                "), "\n                ", HTML.UL({
    role: "menu",                                                                                                     // 56
    class: "dropdown-menu"                                                                                            // 57
  }, "\n                  ", HTML.LI(Spacebars.include(view.lookupTemplate("i18n_buttons"))), "\n                "), "\n              "), "\n              ", HTML.Raw("<!--fin -->"), "\n\n              "), "\n              ", HTML.LI({
    class: "nav navbar-nav navbar-right"                                                                              // 59
  }, "\n                ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n              "), "\n          "), "\n\n\n          ", HTML.Raw('<div class="collapse navbar-collapse" id="navigation">\n            <ul class="nav navbar-nav navbar-right">\n            </ul>\n          </div>'), "\n        "), "\n      "), "\n\n\n      ", HTML.DIV({
    class: "am-content"                                                                                               // 61
  }, "\n        ", Spacebars.include(view.lookupTemplate("yield")), "\n      "), "\n      ", HTML.Raw("<footer>\n        <p>\n          <!-- Ici ajout d'informations pour le footer (plan du site, formulaire de contact, copyrights....) -->\n        </p>\n      </footer>"), "\n    "), "\n    ", HTML.SCRIPT({
    type: "text/javascript"                                                                                           // 63
  }, "\n\n"), "\n  ") ];                                                                                              // 64
}));                                                                                                                  // 65
                                                                                                                      // 66
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"helpers":{"config.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/helpers/config.js                                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Accounts.ui.config({                                                                                                  // 1
    passwordSignupFields: 'USERNAME_AND_EMAIL',                                                                       // 2
    extraSignupFields: [{                                                                                             // 3
        fieldName: 'last-name',                                                                                       // 5
        fieldLabel: 'Last name',                                                                                      // 6
        inputType: 'text',                                                                                            // 7
        visible: true                                                                                                 // 8
    }, {                                                                                                              // 4
        fieldName: 'meetingId',                                                                                       // 11
        fieldLabel: 'meetingId',                                                                                      // 12
        inputType: 'text',                                                                                            // 13
        visible: false                                                                                                // 14
    }]                                                                                                                // 10
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"js":{"create.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/js/create.js                                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.create.events({                                                                                              // 3
  //Création d'un nouveau champ de saisie lorsqu'un caractère est renseigné                                           // 4
  'keyup .participant-email-input': function (e) {                                                                    // 5
    var input = $(e.target);                                                                                          // 6
                                                                                                                      //
    if (input.val().length > 0) {                                                                                     // 7
      var rank = input.parents(".participant-email")[0].getAttribute('rank');                                         // 8
      var form = input.parents("#create-form");                                                                       // 9
      var nextRank = parseInt(rank) + 1;                                                                              // 10
                                                                                                                      //
      if ($(form).find('.participant-email[rank="' + nextRank + '"]').length < 1) {                                   // 12
        var newInput = $(input.parents(".participant-email")[0].cloneNode(true));                                     // 13
        newInput.find(".participant-email-input").val("");                                                            // 14
        newInput.attr('rank', nextRank);                                                                              // 15
        $(input.parents(".participant-email-group")[0]).append(newInput);                                             // 16
      }                                                                                                               // 17
    }                                                                                                                 // 18
  },                                                                                                                  // 19
  'submit form': function (e) {                                                                                       // 22
    e.preventDefault(); //Récupération des éléments DOM des champs de saisie                                          // 23
                                                                                                                      //
    var ordreInputs = e.target.ordreDuJour;                                                                           // 25
    var ordreTimeInputs = e.target.ordreDuJourTemps;                                                                  // 26
    var participantsInputs = e.target.participantsEmails; //Récupération des valeurs de l'ordre du jour, temps estimés et des emails d'invitation
                                                                                                                      //
    var ordres = [];                                                                                                  // 30
    var ordreTimes = [];                                                                                              // 31
    var participantsEmails = [];                                                                                      // 32
    var participantActivity = []; //Récupération des éléments DOM des champs de saisie                                // 33
                                                                                                                      //
    var participantsInputs = $(e.target).find('[name=participantsEmails]');                                           // 36
                                                                                                                      //
    for (i = 0; i < participantsInputs.length; i++) {                                                                 // 40
      if (participantsInputs[i].value != "") {                                                                        // 41
        participantsEmails.push(participantsInputs[i].value);                                                         // 42
        participantActivity.push(false);                                                                              // 43
      }                                                                                                               // 44
    } //Création du meeting                                                                                           // 45
    //voir comment rajouter des personnes au meeting                                                                  // 48
    //idée : création d'un tableau qui est rempli en faisant Meteor.user().mettingId = meetingId                      // 49
                                                                                                                      //
                                                                                                                      //
    var meeting = {                                                                                                   // 51
      name: e.target.meetingName.value,                                                                               // 52
      duration: e.target.meetingDuration.value,                                                                       // 53
      animatorName: e.target.animatorName.value,                                                                      // 54
      animatorMail: e.target.animatorEmail.value,                                                                     // 55
      participantsEmails: participantsEmails,                                                                         // 56
      participantActivity: participantActivity,                                                                       // 57
      status: 'ongoing',                                                                                              // 58
      ordres: ordres,                                                                                                 // 59
      ordreTimes: ordreTimes,                                                                                         // 60
      speaker: e.target.animatorEmail.value                                                                           // 61
    };                                                                                                                // 51
    Meteor.call('meetingInsert', meeting, function (error, result) {                                                  // 64
      // affiche l'erreur à l'utilisateur et s'interrompt                                                             // 65
      if (error) return alert(error.reason);                                                                          // 66
      var meetingId = result._id;                                                                                     // 69
      var emailBody = 'Here is the link for the meeting : taketalk.meteor.com/join/' + meetingId + '\n';              // 71
      Meteor.call('sendEmail', e.target.animatorEmail.value, 'noreply@taketalk.com', 'TakeTalk session created', 'You have just created a session of TakeTalk. \n\n' + emailBody);
                                                                                                                      //
      for (var i = 0; i < participantsEmails.length; i++) {                                                           // 80
        Meteor.call('sendEmail', participantsEmails[i], 'noreply@taketalk.com', 'TakeTalk invitation', 'You are invited to a session of TakeTalk. \n\n' + emailBody);
      }                                                                                                               // 84
                                                                                                                      //
      console.log("mail envoyé"); //Redirection vers la page du meeting                                               // 86
                                                                                                                      //
      Router.go('/meeting/' + meetingId);                                                                             // 88
    });                                                                                                               // 90
  }                                                                                                                   // 91
});                                                                                                                   // 3
Template.create.onRendered(function () {                                                                              // 94
  if (Meteor.userId() != null) {                                                                                      // 95
    $(' #animatorName').val(Meteor.user().username);                                                                  // 96
    $(' #animatorEmail').val(Meteor.user().emails[0].address);                                                        // 97
  }                                                                                                                   // 98
                                                                                                                      //
  ;                                                                                                                   // 98
});                                                                                                                   // 99
Template.tempName.onRendered(function () {                                                                            // 100
  var d = new Date();                                                                                                 // 102
  d.setHours(0, 0, 0);                                                                                                // 103
  $('.datetimepicker').datetimepicker({                                                                               // 104
    format: 'HH:mm',                                                                                                  // 105
    defaultDate: d //  defaultViewDate : {hours : 00, minutes: 00}                                                    // 106
                                                                                                                      //
  });                                                                                                                 // 104
});                                                                                                                   // 109
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"home.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/js/home.js                                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.home.events({                                                                                                // 1
    //Redirection vers la page de création de meeting                                                                 // 2
    'click #open': function (e) {                                                                                     // 3
        Router.go('create');                                                                                          // 4
    }                                                                                                                 // 5
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"meeting.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/js/meeting.js                                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
//import { Template } from 'meteor/templating';                                                                       // 1
//import { ReactiveVar } from 'meteor/reactive-var';                                                                  // 2
var sortableList;                                                                                                     // 4
var meeting; //Template.meeting.isTrue = true;                                                                        // 5
//console.log(Template.meeting.isTrue);                                                                               // 8
                                                                                                                      //
Presence.state = function () {                                                                                        // 10
  return {                                                                                                            // 11
    online: true,                                                                                                     // 12
    currentRoomId: Session.get('currentRoomId')                                                                       // 13
  };                                                                                                                  // 11
};                                                                                                                    // 15
                                                                                                                      //
Template.meeting.helpers({                                                                                            // 18
  users: function () {                                                                                                // 19
    // exclude the currentUser                                                                                        // 20
    var userIds = Presences.find().map(function (presence) {                                                          // 21
      return presence.userId;                                                                                         // 21
    });                                                                                                               // 21
    var userPres = Presences.find().map(function (presence) {                                                         // 22
      if (presence.state.currentRoomId === Session.get('currentRoomId')) return presence.userId;                      // 23
    }); /*                                                                                                            // 25
        console.log("je suis connecté  " +userIds);                                                                   //
        console.log("je suis ici  " + userPres);*/                                                                    //
    return Meteor.users.find({                                                                                        // 29
      _id: {                                                                                                          // 29
        $in: userPres,                                                                                                // 29
        $ne: Meteor.userId()                                                                                          // 29
      }                                                                                                               // 29
    });                                                                                                               // 29
  },                                                                                                                  // 30
  getSpeaker: function () {                                                                                           // 32
    meeting = Session.get("meeting");                                                                                 // 33
    var speaker = Meetings.findOne({                                                                                  // 34
      _id: meeting._id                                                                                                // 34
    }).speaker;                                                                                                       // 34
    Session.set("speaker", speaker);                                                                                  // 35
  },                                                                                                                  // 37
  isSpeaker: function () {                                                                                            // 39
    meeting = Session.get("meeting");                                                                                 // 40
    speaker = Session.get("speaker");                                                                                 // 41
    var mail;                                                                                                         // 42
    if (this.animatorMail) mail = this.animatorMail;else mail = "" + this;                                            // 43
    return Meetings.findOne({                                                                                         // 47
      _id: meeting._id                                                                                                // 47
    }).speaker === mail;                                                                                              // 47
  },                                                                                                                  // 48
  isAsking: function () {                                                                                             // 51
    meeting = Session.get("meeting");                                                                                 // 52
    var mail;                                                                                                         // 53
    if (this.animatorMail) mail = this.animatorMail;else mail = "" + this;                                            // 54
    return Speeches.find({                                                                                            // 58
      myMeetingId: meeting._id,                                                                                       // 58
      speakers: mail                                                                                                  // 58
    }).count();                                                                                                       // 58
  },                                                                                                                  // 59
  /*                                                                                                                  // 62
    onLoad:function(){                                                                                                //
      var meeting = this;                                                                                             //
      Session.set("meeting",this);                                                                                    //
      Session.set('currentRoomId',this._id);                                                                          //
      var idMeeting=this._id;                                                                                         //
      var meetingParticipant= this.participantsEmails;                                                                //
      var meetingParticipantActivity = this.participantActivity;                                                      //
                                                                                                                      //
    },                                                                                                                //
  */ownMeeting: function () {                                                                                         //
    meeting = Session.get("meeting");                                                                                 // 74
    return meeting.animatorMail === Meteor.user().emails[0].address;                                                  // 75
  },                                                                                                                  // 76
  partMeeting: function () {                                                                                          // 77
    var res = 0;                                                                                                      // 78
                                                                                                                      //
    if (this.animatorMail === Meteor.user().emails[0].address) {                                                      // 79
      res = 1;                                                                                                        // 80
    } else {                                                                                                          // 81
      var mail = "" + this;                                                                                           // 83
      if (mail === Meteor.user().emails[0].address) res = 1;                                                          // 84
      meeting = Session.get("meeting"); /*                                                                            // 87
                                              for(i=0;i<meeting.participantsEmails.length;i++){                       //
                                                if(meeting.participantsEmails[i]===Meteor.user().emails[0].address){  //
                                                                                                                      //
                                                  Meetings.update(idMeeting,{$set: {"meetingParticipantActivity[i]": true}});
                                                                                                                      //
                                                  i=this.participantsEmails.length;                                   //
                                                }                                                                     //
                                              }                                                                       //
                                        */                                                                            //
    }                                                                                                                 // 99
                                                                                                                      //
    return res;                                                                                                       // 101
  }                                                                                                                   // 102
});                                                                                                                   // 18
Template.meeting.events({                                                                                             // 105
  'click #speakControl': function (e) {                                                                               // 106
    console.log(meeting._id);                                                                                         // 107
    meeting = Session.get("meeting");                                                                                 // 108
    speeches = Speeches.findOne({                                                                                     // 109
      myMeetingId: meeting._id                                                                                        // 109
    });                                                                                                               // 109
                                                                                                                      //
    if (this.animatorMail) {                                                                                          // 110
      Meetings.update(meeting._id, {                                                                                  // 111
        $set: {                                                                                                       // 111
          speaker: this.animatorMail                                                                                  // 111
        }                                                                                                             // 111
      });                                                                                                             // 111
    } else {                                                                                                          // 112
      var mail = "" + this;                                                                                           // 114
      Meetings.update(meeting._id, {                                                                                  // 115
        $set: {                                                                                                       // 115
          speaker: mail                                                                                               // 115
        }                                                                                                             // 115
      });                                                                                                             // 115
      Speeches.update(speeches._id, {                                                                                 // 116
        $pull: {                                                                                                      // 116
          speakers: mail                                                                                              // 116
        }                                                                                                             // 116
      });                                                                                                             // 116
    }                                                                                                                 // 117
  },                                                                                                                  // 119
  'click #speakAsk': function (e) {                                                                                   // 121
    meeting = Session.get("meeting");                                                                                 // 122
    speeches = Speeches.findOne({                                                                                     // 123
      myMeetingId: meeting._id                                                                                        // 123
    });                                                                                                               // 123
    var mail = "" + this;                                                                                             // 127
    Speeches.update(speeches._id, {                                                                                   // 128
      $push: {                                                                                                        // 128
        speakers: mail                                                                                                // 128
      }                                                                                                               // 128
    });                                                                                                               // 128
  },                                                                                                                  // 129
  'click #talkCancel': function (e) {                                                                                 // 132
    console.log("I click on Talk"); //à modifier                                                                      // 133
                                                                                                                      //
    var userId = Meteor.user().username;                                                                              // 135
    var meetingId = Meteor.user().meeting;                                                                            // 136
    var rank = 1;                                                                                                     // 137
    console.log("userId = " + userId);                                                                                // 138
    console.log("meeting = " + meetingId);                                                                            // 139
  },                                                                                                                  // 140
  /** A click on waitProceed starts or stops the timer */'click #waitProceed': function (e) {                         // 143
    //Arret du timer                                                                                                  // 145
    if (e.target.value == "Wait") {                                                                                   // 146
      Meteor.clearInterval(timerId);                                                                                  // 147
      Speeches.update(Speeches.findOne({                                                                              // 148
        meeting: Session.get("meetingId"),                                                                            // 149
        status: "ongoing"                                                                                             // 149
      })._id, {                                                                                                       // 149
        $set: {                                                                                                       // 150
          status: "pending"                                                                                           // 150
        }                                                                                                             // 150
      });                                                                                                             // 150
    } else {                                                                                                          // 152
      Speeches.update(Speeches.findOne({                                                                              // 153
        meeting: Session.get("meetingId"),                                                                            // 154
        status: "pending"                                                                                             // 154
      }, {                                                                                                            // 154
        sort: {                                                                                                       // 154
          rank: 1                                                                                                     // 154
        }                                                                                                             // 154
      })._id, {                                                                                                       // 154
        $set: {                                                                                                       // 155
          status: "ongoing"                                                                                           // 155
        }                                                                                                             // 155
      }); //Lancement du timer                                                                                        // 155
                                                                                                                      //
      timerId = Meteor.setInterval(function () {                                                                      // 159
        var currentSpeech = Speeches.findOne({                                                                        // 160
          meeting: Session.get("meetingId"),                                                                          // 160
          status: "ongoing"                                                                                           // 160
        });                                                                                                           // 160
        var user = Users.findOne({                                                                                    // 161
          _id: currentSpeech.user                                                                                     // 161
        });                                                                                                           // 161
        var paroles = [];                                                                                             // 162
        var time = 1; //Incrémentation du compteur associé a l'ordre du speech                                        // 163
                                                                                                                      //
        if (user.paroles === undefined) {                                                                             // 166
          paroles.push({                                                                                              // 167
            "order": currentSpeech.orderChoose,                                                                       // 167
            "time": 1                                                                                                 // 167
          });                                                                                                         // 167
        } else {                                                                                                      // 168
          var paroleFound = false;                                                                                    // 169
          paroles = user.paroles;                                                                                     // 170
          paroles.forEach(function (el) {                                                                             // 171
            if (el['order'] == currentSpeech.orderChoose) {                                                           // 172
              paroleFound = true;                                                                                     // 173
              el['time'] = parseInt(el['time']) + 1;                                                                  // 174
            }                                                                                                         // 175
          });                                                                                                         // 176
                                                                                                                      //
          if (!paroleFound) {                                                                                         // 177
            paroles.push({                                                                                            // 178
              "order": currentSpeech.orderChoose,                                                                     // 178
              "time": 1                                                                                               // 178
            });                                                                                                       // 178
          }                                                                                                           // 179
        }                                                                                                             // 180
                                                                                                                      //
        Users.update(user._id, {                                                                                      // 182
          $set: {                                                                                                     // 182
            paroles: paroles                                                                                          // 182
          }                                                                                                           // 182
        }); //Update du temps restant du speech                                                                       // 182
                                                                                                                      //
        Speeches.update(currentSpeech._id, {                                                                          // 185
          $set: {                                                                                                     // 187
            timeLeft: Speeches.findOne({                                                                              // 187
              meeting: Session.get("meetingId"),                                                                      // 187
              status: "ongoing"                                                                                       // 187
            }).timeLeft + 1                                                                                           // 187
          }                                                                                                           // 187
        }); //Update du statut du speech si celui ci est terminé                                                      // 187
                                                                                                                      //
        if (Speeches.findOne({                                                                                        // 190
          meeting: Session.get("meetingId"),                                                                          // 190
          status: "ongoing"                                                                                           // 190
        }).timeLeft == Speeches.findOne({                                                                             // 190
          meeting: Session.get("meetingId"),                                                                          // 190
          status: "ongoing"                                                                                           // 190
        }).time) {                                                                                                    // 190
          Speeches.update(Speeches.findOne({                                                                          // 191
            meeting: Session.get("meetingId"),                                                                        // 192
            status: "ongoing"                                                                                         // 192
          })._id, {                                                                                                   // 192
            $set: {                                                                                                   // 193
              status: "done"                                                                                          // 193
            }                                                                                                         // 193
          });                                                                                                         // 193
          Meteor.clearInterval(timerId);                                                                              // 195
        }                                                                                                             // 196
      }, 1000);                                                                                                       // 197
    } //Rafraichi la fonction de drag'n'drop                                                                          // 198
    //Utile pour empêcher le déplacement du premier meeting quand on clique sur 'proceed'                             // 200
    //trouver une autre solution (la méthode "refresh" semble inefficace)                                             // 201
                                                                                                                      //
                                                                                                                      //
    setTimeout(function () {                                                                                          // 202
      sortableList.sortable("destroy");                                                                               // 203
      computeSortable(sortableList);                                                                                  // 204
    }, 100);                                                                                                          // 205
  }                                                                                                                   // 207
});                                                                                                                   // 105
Template.meeting.onCreated(function () {                                                                              // 212
  Meteor.subscribe("presences");                                                                                      // 213
  Meteor.subscribe("users"); //   meeting = this.data;                                                                // 214
                                                                                                                      //
  Session.set("meeting", this.data);                                                                                  // 217
  Session.set('currentRoomId', this._id);                                                                             // 218
}); //summernote : don't touch                                                                                        // 220
                                                                                                                      //
Template.meeting.onRendered(function () {                                                                             // 229
  $(document).ready(function () {                                                                                     // 230
    $('#textareaRich').summernote({                                                                                   // 231
      height: 300                                                                                                     // 232
    });                                                                                                               // 231
  });                                                                                                                 // 234
});                                                                                                                   // 235
Template.meeting.events({                                                                                             // 239
  'click #saveReport': function (e) {                                                                                 // 240
    // increment the counter when button is clicked                                                                   // 241
    console.log("I click on Talk");                                                                                   // 242
    var title = $(' #TitleReport').val();                                                                             // 243
    var data = $('#textareaRich').summernote('code'); //$('.click2edit').summernote('destroy');                       // 244
                                                                                                                      //
    console.log("title :" + title + " data = " + data);                                                               // 246
    var doc = new jsPDF();                                                                                            // 247
    doc.text(10, 10, data);                                                                                           // 248
    doc.save(title); //Fonctionne mais enregistre en .txt                                                             // 249
    //var blob = new Blob([data], {type: "text/plain;charset=utf-8"});                                                // 251
    //saveAs(blob, title+".txt");                                                                                     // 252
  }                                                                                                                   // 253
});                                                                                                                   // 239
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"meetingLeft.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/js/meetingLeft.js                                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.meetingReport.onRendered(function () {                                                                       // 2
  $(document).ready(function () {                                                                                     // 3
    $('#textareaRich').summernote({                                                                                   // 4
      height: 300                                                                                                     // 5
    });                                                                                                               // 4
  });                                                                                                                 // 7
});                                                                                                                   // 8
Template.meetingReport.events({                                                                                       // 12
  'click #saveReport': function (e) {                                                                                 // 13
    // increment the counter when button is clicked                                                                   // 14
    console.log("I click on Talk");                                                                                   // 15
    var title = $(' #TitleReport').val();                                                                             // 16
    var data = $('#textareaRich').summernote('code'); //$('.click2edit').summernote('destroy');                       // 17
                                                                                                                      //
    console.log("title :" + title + " data = " + data);                                                               // 19
    var doc = new jsPDF();                                                                                            // 20
    doc.text(10, 10, data);                                                                                           // 21
    doc.save(title); //Fonctionne mais enregistre en .txt                                                             // 22
    //var blob = new Blob([data], {type: "text/plain;charset=utf-8"});                                                // 24
    //saveAs(blob, title+".txt");                                                                                     // 25
  },                                                                                                                  // 26
  'click #goppt': function (e) {                                                                                      // 27
    console.log("GoPPT");                                                                                             // 28
    Template.meeting.isTrue = false;                                                                                  // 29
    console.log(Template.meeting.isTrue);                                                                             // 30
  }                                                                                                                   // 32
});                                                                                                                   // 12
Template.pptcont.events({                                                                                             // 35
  'click #gomt': function (e) {                                                                                       // 36
    console.log("GoMT");                                                                                              // 37
    console.log(Template.meeting.isTrue.value());                                                                     // 38
    Template.meeting.isTrue = true;                                                                                   // 40
  }                                                                                                                   // 41
});                                                                                                                   // 35
Template.meetingReport.isTrue = true;                                                                                 // 46
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"lib":{"Collections":{"Groups.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/Collections/Groups.js                                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Groups = new Meteor.Collection('groups');                                                                             // 1
Groups.allow({                                                                                                        // 3
    update: function (userId, group) {                                                                                // 4
        return true; /*return ownsDocument(userId, group);*/                                                          // 4
    },                                                                                                                // 4
    remove: function (userId, group) {                                                                                // 5
        return ownsDocument(userId, group);                                                                           // 5
    },                                                                                                                // 5
    insert: function (userId, doc) {                                                                                  // 6
        // autoriser les posts seulement si l'utilisateur est authentifié                                             // 7
        return !!userId;                                                                                              // 8
    }                                                                                                                 // 9
});                                                                                                                   // 3
Meteor.methods({                                                                                                      // 12
    groupInsert: function (groupAttributes) {                                                                         // 13
        check(Meteor.userId(), String);                                                                               // 14
        check(groupAttributes, {                                                                                      // 15
            name: String,                                                                                             // 16
            members: [String]                                                                                         // 17
        });                                                                                                           // 15
        var user = Meteor.user();                                                                                     // 20
                                                                                                                      //
        var group = _.extend(groupAttributes, {                                                                       // 21
            userId: user._id,                                                                                         // 22
            author: user.emails,                                                                                      // 23
            authorAdress: user.emails[0].address,                                                                     // 24
            authorName: user.username,                                                                                // 25
            submitted: new Date()                                                                                     // 26
        });                                                                                                           // 21
                                                                                                                      //
        var groupId = Groups.insert(group);                                                                           // 28
        return {                                                                                                      // 29
            _id: groupId                                                                                              // 30
        };                                                                                                            // 29
    }                                                                                                                 // 32
});                                                                                                                   // 12
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Meetings.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/Collections/Meetings.js                                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/** The collection that contains the meetings */Meetings = new Mongo.Collection("meetings");                          // 1
Meetings.allow({                                                                                                      // 4
    update: function () {                                                                                             // 5
        return true; /*return ownsDocument(userId, group);*/                                                          // 5
    },                                                                                                                // 5
    remove: function () {                                                                                             // 6
        return true;                                                                                                  // 6
    },                                                                                                                // 6
    insert: function () {                                                                                             // 7
        return true;                                                                                                  // 8
    }                                                                                                                 // 9
});                                                                                                                   // 4
Meteor.methods({                                                                                                      // 13
    meetingInsert: function (meetingAttributes) {                                                                     // 14
        check(meetingAttributes, {                                                                                    // 16
            name: String,                                                                                             // 17
            duration: String,                                                                                         // 18
            animatorName: String,                                                                                     // 19
            animatorMail: String,                                                                                     // 20
            participantsEmails: [String],                                                                             // 21
            participantActivity: [Boolean],                                                                           // 22
            status: String,                                                                                           // 23
            ordres: [String],                                                                                         // 24
            ordreTimes: [Number],                                                                                     // 25
            speaker: String /*,                                                                                       // 26
                            pwd : "" */                                                                               //
        });                                                                                                           // 16
                                                                                                                      //
        var meeting = _.extend(meetingAttributes, {                                                                   // 30
            submitted: new Date()                                                                                     // 31
        });                                                                                                           // 30
                                                                                                                      //
        var meetingId = Meetings.insert(meeting);                                                                     // 33
        return {                                                                                                      // 36
            _id: meetingId                                                                                            // 37
        };                                                                                                            // 36
    }                                                                                                                 // 39
}); /*                                                                                                                // 13
     Exemple :                                                                                                        //
                                                                                                                      //
     name: 'test',                                                                                                    //
     status: "ongoing",                                                                                               //
     ordres: ['ordre1', 'ordre2', 'ordre3'],                                                                          //
     ordreTimes: [90, 130, 268],                                                                                      //
     _id: id                                                                                                          //
     pwd : ""                                                                                                         //
     */                                                                                                               //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Speeches.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/Collections/Speeches.js                                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/** The collection that contains the speeches */Speeches = new Mongo.Collection("speeches");                          // 1
Speeches.allow({                                                                                                      // 4
    update: function () {                                                                                             // 5
        return true; /*return ownsDocument(userId, group);*/                                                          // 5
    },                                                                                                                // 5
    remove: function () {                                                                                             // 6
        return true;                                                                                                  // 6
    },                                                                                                                // 6
    insert: function () {                                                                                             // 7
        return true;                                                                                                  // 8
    }                                                                                                                 // 9
});                                                                                                                   // 4
Meteor.methods({                                                                                                      // 13
    speechesInsert: function (speechesAttributes) {                                                                   // 14
        check(speechesAttributes, {                                                                                   // 16
            meetingID: String /*,                                                                                     // 17
                              speakers: [String]                                                                      //
                              */                                                                                      //
        });                                                                                                           // 16
        var speechesId = Speeches.insert(speechesAttributes);                                                         // 24
        return {                                                                                                      // 27
            _id: speechesId                                                                                           // 28
        };                                                                                                            // 27
    }                                                                                                                 // 30
});                                                                                                                   // 13
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"Router.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/Router.js                                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Router.configure({                                                                                                    // 1
  layoutTemplate: 'layout',                                                                                           // 2
  waitOn: function () {                                                                                               // 3
    return [Meteor.subscribe('groups'), Meteor.subscribe('meetings')];                                                // 4
  }                                                                                                                   // 7
}); /** The route to the home page */                                                                                 // 1
Router.route('/', {                                                                                                   // 14
  name: 'home'                                                                                                        // 14
});                                                                                                                   // 14
Router.route('/create/:_id?', {                                                                                       // 16
  name: 'create',                                                                                                     // 17
  data: function () {                                                                                                 // 18
    return Groups.findOne(this.params._id);                                                                           // 18
  }                                                                                                                   // 18
});                                                                                                                   // 16
Router.route('/groups', {                                                                                             // 21
  name: 'groups'                                                                                                      // 21
});                                                                                                                   // 21
Router.route('/groupSubmit', {                                                                                        // 22
  name: 'groupSubmit'                                                                                                 // 22
});                                                                                                                   // 22
Router.route('/groups/:_id', {                                                                                        // 23
  name: 'groupPage',                                                                                                  // 24
  data: function () {                                                                                                 // 25
    return Groups.findOne(this.params._id);                                                                           // 25
  }                                                                                                                   // 25
});                                                                                                                   // 23
Router.route('/meeting/:_meetingId', {                                                                                // 29
  name: 'meeting',                                                                                                    // 30
  data: function () {                                                                                                 // 31
    // Recherche du meeting dont l'id est passé en paramètre                                                          // 32
    // Redirection vers une page d'erreur "404 not found" lorsqu'aucun meeting n'est trouvé                           // 33
    var meeting = Meetings.findOne({                                                                                  // 34
      _id: this.params._meetingId,                                                                                    // 34
      status: "ongoing"                                                                                               // 34
    }); //  console.log(meeting);                                                                                     // 34
                                                                                                                      //
    if (meeting === undefined) {                                                                                      // 37
      //  console.log('undefined meeting...');                                                                        // 38
      Router.configure({                                                                                              // 39
        layoutTemplate: 'layout',                                                                                     // 39
        notFoundTemplate: '404'                                                                                       // 39
      });                                                                                                             // 39
    } else return Meetings.findOne({                                                                                  // 40
      _id: this.params._meetingId,                                                                                    // 42
      status: "ongoing"                                                                                               // 42
    });                                                                                                               // 42
  }                                                                                                                   // 44
});                                                                                                                   // 29
Router.route('/join/:_meetingId/:_userId', {                                                                          // 47
  name: 'join',                                                                                                       // 48
  data: function () {                                                                                                 // 49
    // Recherche du meeting dont l'id est passé en paramètre                                                          // 51
    // Redirection vers une page d'erreur "404 not found" lorsqu'aucun meeting n'est trouvé                           // 52
    var meeting = Meetings.findOne({                                                                                  // 53
      _id: this.params._meetingId                                                                                     // 53
    });                                                                                                               // 53
                                                                                                                      //
    if (meeting === undefined) {                                                                                      // 54
      console.log('meeting undefined');                                                                               // 55
      Router.configure({                                                                                              // 56
        layoutTemplate: 'layout',                                                                                     // 56
        notFoundTemplate: '404'                                                                                       // 56
      });                                                                                                             // 56
    } //Recherche de l'utilisateur                                                                                    // 57
    //Redirection vers une page d'erreur "404 not found" lorsqu'aucun utilisateur n'est trouvé                        // 60
    //Ne permet qu'aux utilisateurs invités de rejoindre un meeting                                                   // 61
                                                                                                                      //
                                                                                                                      //
    var user = MeetingUsers.findOne({                                                                                 // 62
      _id: this.params._userId                                                                                        // 62
    });                                                                                                               // 62
                                                                                                                      //
    if (user === undefined) {                                                                                         // 63
      console.log('user undefined');                                                                                  // 64
      Router.configure({                                                                                              // 65
        layoutTemplate: 'layout',                                                                                     // 65
        notFoundTemplate: '404'                                                                                       // 65
      });                                                                                                             // 65
    }                                                                                                                 // 66
                                                                                                                      //
    Session.set("meetingId", this.params._meetingId);                                                                 // 68
    Session.set("userId", this.params._userId);                                                                       // 69
    return {};                                                                                                        // 71
  }                                                                                                                   // 72
});                                                                                                                   // 47
Router.route('/meeting/:_meetingId/lineup', function () {                                                             // 75
  this.render('lineup');                                                                                              // 76
});                                                                                                                   // 77
Router.route('/end', function () {                                                                                    // 79
  this.render('end');                                                                                                 // 80
});                                                                                                                   // 81
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"i18n":{"en.i18n.json":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// i18n/en.i18n.json                                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];                                                                // 9
// integrate the fallback language translations                                                                       // 10
translations = {};                                                                                                    // 11
translations[namespace] = {"mainTitle":"TakeTalk | The new meeting manager","lang":"Language","tuto":"Tutorial","downloads":"Downloads","groups":"Groups","menu":"Menu","menuGroup":"My groups","createGroup":"Create a group","groupTitle":"Groups","groupBodyTitle":"Your groups","groupInfo":"managed groups","groupSubmit":"Submit a group","name":"Name","members":"Members","addMembers":"Add members","openMeeting":"Open a meeting","managedBy":"managed by ","noGroup":"You haven't group yet.","tutoTitle":"Tutorial","tutoBodyTitle":"How to use TakeTalk","downloadTitle":"Downloads","downloadBodyTitle":"Documents to downloads","presentationApp":"Presentation of the application (PDF)","access":"access","joinTitle":"Join a meeting","joinName":"Your name","joinPwd":"Meeting's password","joinSubmit":"Join","lineupTitle":"Line up to talk","lineupOrder":"Order","lineupKeywords":"Keywords","lineupSpeach":"Speach time","lineupQuick":"Quick line up","lineupAs":"Line up as : ","lineupSubmit":"Line up","lineupCancel":"Cancel","homeTitle":"TakeTalk is your new companion app!","homeBody":"With TakeTalk manage your contributors' speech time to make the best out of your meetings!","endThanks":"Thank you for having choose TakeTalk!","endSum":"Here a summary of what happened during this meeting","warning":"Warning ! ","warningLogInfo":"You should be log in for viewing this features","meetingLink":"Link of the report","meetingLineUp":"People lining up","meetingKeywords":"Keywords:","meetingMembers":"People on this meeting","meetingAdd":"Add local participant","meetingInvite":"Invite participants","meetingClose":"Close meeting","meetingNewParticipant":"New Local Participant","meetingParticipantsName":"Participants' Name","meetingParticipantsMail":"Your participants' e-mails","meetingByMail":"By email address","meetingSpeechDeleted":"Your speech have been deleted","meetingMinEstimated":"min estimated","meetingNoDuration":"no duration scheduled","createTitle":"Create a meeting","createAnimatorName":"Your name *","createMail":"Your e-mail *","createMeetingName":"Your meeting's name *","createLink":"Link of the report","createParticipantsMail":"Your participants' e-mails","createMeeting":"Create your meeting","timeMeeting":"Time of Meeting","close":"Close","add":"Add","invite":"Invite"};
TAPi18n._loadLangFileObject("en", translations);                                                                      // 13
                                                                                                                      // 14
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"fr.i18n.json":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// i18n/fr.i18n.json                                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["fr"] = ["French (France)","Français"];                                                       // 8
                                                                                                                      // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/application/template.create.js");
require("./client/application/template.home.js");
require("./client/application/template.input.js");
require("./client/application/template.meeting.js");
require("./client/application/template.meetingLeft.js");
require("./client/group/template.group_item.js");
require("./client/group/template.group_list.js");
require("./client/group/template.group_page.js");
require("./client/group/template.group_submit.js");
require("./client/group/template.groups.js");
require("./client/template.layout.js");
require("./lib/Collections/Groups.js");
require("./lib/Collections/Meetings.js");
require("./lib/Collections/Speeches.js");
require("./lib/Router.js");
require("./client/group/group_item.js");
require("./client/group/group_list.js");
require("./client/group/group_page.js");
require("./client/group/group_submit.js");
require("./client/helpers/config.js");
require("./client/js/create.js");
require("./client/js/home.js");
require("./client/js/meeting.js");
require("./client/js/meetingLeft.js");
require("./i18n/en.i18n.json");
require("./i18n/fr.i18n.json");