var require = meteorInstall({"client":{"application":{"template.create.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/application/template.create.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("create");                                                                                        // 2
Template["create"] = new Template("Template.create", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "main-content"                                                                                              // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    class: "row"                                                                                                       // 8
  }, "\n      ", HTML.DIV({                                                                                            // 9
    class: "col-md-8 col-md-offset-2"                                                                                  // 10
  }, "\n        ", HTML.DIV({                                                                                          // 11
    class: "panel panel-default"                                                                                       // 12
  }, "\n          ", HTML.DIV({                                                                                        // 13
    class: "panel-heading"                                                                                             // 14
  }, HTML.SPAN({                                                                                                       // 15
    class: "title"                                                                                                     // 16
  }, Blaze.View("lookup:_", function() {                                                                               // 17
    return Spacebars.mustache(view.lookup("_"), "createTitle");                                                        // 18
  }))), "\n          ", HTML.DIV({                                                                                     // 19
    class: "panel-body"                                                                                                // 20
  }, "\n            ", HTML.FORM({                                                                                     // 21
    role: "form",                                                                                                      // 22
    id: "create-form"                                                                                                  // 23
  }, "\n              ", HTML.DIV({                                                                                    // 24
    class: "form-group"                                                                                                // 25
  }, "\n                ", HTML.LABEL({                                                                                // 26
    for: "animatorName"                                                                                                // 27
  }, Blaze.View("lookup:_", function() {                                                                               // 28
    return Spacebars.mustache(view.lookup("_"), "createAnimatorName");                                                 // 29
  })), "\n                ", HTML.INPUT({                                                                              // 30
    id: "animatorName",                                                                                                // 31
    name: "animatorName",                                                                                              // 32
    type: "text",                                                                                                      // 33
    class: "form-control",                                                                                             // 34
    value: function() {                                                                                                // 35
      return Spacebars.mustache(view.lookup("authorName"));                                                            // 36
    },                                                                                                                 // 37
    required: "",                                                                                                      // 38
    autofocus: ""                                                                                                      // 39
  }), "\n              "), "\n              ", HTML.DIV({                                                              // 40
    class: "form-group"                                                                                                // 41
  }, "\n                ", HTML.LABEL({                                                                                // 42
    for: "animatorEmail"                                                                                               // 43
  }, Blaze.View("lookup:_", function() {                                                                               // 44
    return Spacebars.mustache(view.lookup("_"), "createMail");                                                         // 45
  })), "\n                ", HTML.DIV({                                                                                // 46
    class: "input-group"                                                                                               // 47
  }, HTML.Raw('<span class="input-group-addon">@</span>'), "\n                  ", HTML.INPUT({                        // 48
    id: "animatorEmail",                                                                                               // 49
    name: "animatorEmail",                                                                                             // 50
    type: "email",                                                                                                     // 51
    "parsley-type": "email",                                                                                           // 52
    class: "form-control",                                                                                             // 53
    value: function() {                                                                                                // 54
      return Spacebars.mustache(view.lookup("authorAdress"));                                                          // 55
    },                                                                                                                 // 56
    required: ""                                                                                                       // 57
  }), "\n                "), "\n              "), "\n              ", HTML.DIV({                                       // 58
    class: "form-group"                                                                                                // 59
  }, "\n                ", HTML.LABEL({                                                                                // 60
    for: "meetingName"                                                                                                 // 61
  }, Blaze.View("lookup:_", function() {                                                                               // 62
    return Spacebars.mustache(view.lookup("_"), "createMeetingName");                                                  // 63
  })), "\n                ", HTML.Raw('<input id="meetingName" name="meetingName" type="text" class="form-control" required="">'), "\n              "), "\n              ", HTML.DIV({
    class: "form-group"                                                                                                // 65
  }, "\n                            ", HTML.Raw("<label>Duration (h:min)</label>"), "\n                            ", HTML.DIV({
    class: "duration-group",                                                                                           // 67
    rank: "1"                                                                                                          // 68
  }, "\n\n                                  ", Spacebars.include(view.lookupTemplate("tempName")), "\n\n\n                            "), "\n              "), "\n              ", HTML.DIV({
    class: "form-group participant-email-group"                                                                        // 70
  }, "\n                ", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 71
    return Spacebars.mustache(view.lookup("_"), "createParticipantsMail");                                             // 72
  })), "\n                ", Blaze.Each(function() {                                                                   // 73
    return Spacebars.call(view.lookup("members"));                                                                     // 74
  }, function() {                                                                                                      // 75
    return [ "\n                ", HTML.DIV({                                                                          // 76
      class: "participant-email",                                                                                      // 77
      rank: function() {                                                                                               // 78
        return Spacebars.mustache(view.lookup("@index"));                                                              // 79
      }                                                                                                                // 80
    }, "\n                  ", HTML.DIV({                                                                              // 81
      class: "input-group xs-mb-15"                                                                                    // 82
    }, HTML.SPAN({                                                                                                     // 83
      class: "input-group-addon"                                                                                       // 84
    }, "@"), "\n                    ", HTML.INPUT({                                                                    // 85
      class: "participant-email-input form-control",                                                                   // 86
      name: "participantsEmails",                                                                                      // 87
      type: "email",                                                                                                   // 88
      "parsley-type": "email",                                                                                         // 89
      value: function() {                                                                                              // 90
        return Spacebars.mustache(view.lookup("."));                                                                   // 91
      }                                                                                                                // 92
    }), "\n                  "), "\n                "), "\n\n                " ];                                      // 93
  }), "\n                ", HTML.DIV({                                                                                 // 94
    class: "participant-email",                                                                                        // 95
    rank: function() {                                                                                                 // 96
      return Spacebars.mustache(Spacebars.dot(view.lookup("members"), "length"));                                      // 97
    }                                                                                                                  // 98
  }, "\n                  ", HTML.Raw('<div class="input-group xs-mb-15"><span class="input-group-addon">@</span>\n                    <input class="participant-email-input form-control" name="participantsEmails" type="email" parsley-type="email">\n                  </div>'), "\n                "), "\n              "), "\n              ", HTML.Raw('<div class="spacer text-right">\n                <button type="submit" class="btn btn-space btn-primary">Create your meeting</button>\n              </div>'), "\n            "), "\n          "), "\n        "), "\n      "), "\n    "), "\n  ");
}));                                                                                                                   // 100
                                                                                                                       // 101
Template.__checkName("tempName");                                                                                      // 102
Template["tempName"] = new Template("Template.tempName", (function() {                                                 // 103
  var view = this;                                                                                                     // 104
  return HTML.Raw('<div class="input-group datetimepicker">\n    <span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>\n    <input class="set-due-date form-control" type="text" name="meetingDuration">\n  </div>');
}));                                                                                                                   // 106
                                                                                                                       // 107
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.home.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/application/template.home.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("home");                                                                                          // 2
Template["home"] = new Template("Template.home", (function() {                                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "main-content"                                                                                              // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    class: "row"                                                                                                       // 8
  }, "\n        ", HTML.DIV({                                                                                          // 9
    class: "col-xs-12 col-md-6 col-md-offset-3"                                                                        // 10
  }, "\n            ", HTML.DIV({                                                                                      // 11
    class: "panel panel-default"                                                                                       // 12
  }, "\n                ", HTML.DIV({                                                                                  // 13
    class: "panel-heading"                                                                                             // 14
  }, HTML.SPAN({                                                                                                       // 15
    class: "title"                                                                                                     // 16
  }, Blaze.View("lookup:_", function() {                                                                               // 17
    return Spacebars.mustache(view.lookup("_"), "homeTitle");                                                          // 18
  }))), "\n                ", HTML.DIV({                                                                               // 19
    class: "panel-body"                                                                                                // 20
  }, "\n                    ", HTML.P(Blaze.View("lookup:_", function() {                                              // 21
    return Spacebars.mustache(view.lookup("_"), "homeBody");                                                           // 22
  })), "\n                    ", HTML.DIV({                                                                            // 23
    class: "spacer text-right"                                                                                         // 24
  }, "\n                        ", HTML.BUTTON({                                                                       // 25
    type: "button",                                                                                                    // 26
    class: "btn btn-space btn-primary btn-rounded btn-lg",                                                             // 27
    id: "open"                                                                                                         // 28
  }, "\n                            ", HTML.A({                                                                        // 29
    style: "color:#fff",                                                                                               // 30
    href: function() {                                                                                                 // 31
      return Spacebars.mustache(view.lookup("pathFor"), "create");                                                     // 32
    }                                                                                                                  // 33
  }, HTML.Raw('<i class="glyphicon glyphicon-plus-sign"></i>'), "  ", Blaze.View("lookup:_", function() {              // 34
    return Spacebars.mustache(view.lookup("_"), "openMeeting");                                                        // 35
  })), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    "), "\n");
}));                                                                                                                   // 37
                                                                                                                       // 38
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.input.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/application/template.input.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("input");                                                                                         // 2
Template["input"] = new Template("Template.input", (function() {                                                       // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw('<!--  <input name=\'testinput\' class=\'test-input\' type=\'text\' uniqid="{{uniqid}}" value="{{value}}">\n  <button class=\'remove-input\' uniqid="{{uniqid}}">Remove</button>\n-->\n<!--\n<div class="controls">\n  <input name="member" id="member{{uniqid}}" type="text" value="{{value}}" placeholder="member" class="form-control"/>\n  <span class="glyphicon glyphicon-minus" id=\'remove-input\' uniqid="{{uniqid}}" role="button"></span>\n</div>\n-->\n\n'), HTML.DIV({
    class: "input-group"                                                                                               // 6
  }, HTML.Raw('<span class="input-group-addon">@</span>'), "\n    ", HTML.INPUT({                                      // 7
    name: "member",                                                                                                    // 8
    id: function() {                                                                                                   // 9
      return [ "member", Spacebars.mustache(view.lookup("uniqid")) ];                                                  // 10
    },                                                                                                                 // 11
    type: "email",                                                                                                     // 12
    "parsley-type": "email",                                                                                           // 13
    value: function() {                                                                                                // 14
      return Spacebars.mustache(view.lookup("value"));                                                                 // 15
    },                                                                                                                 // 16
    placeholder: "member mail",                                                                                        // 17
    class: "form-control"                                                                                              // 18
  }), "\n    ", HTML.SPAN({                                                                                            // 19
    class: "input-group-addon",                                                                                        // 20
    id: "remove-input",                                                                                                // 21
    uniqid: function() {                                                                                               // 22
      return Spacebars.mustache(view.lookup("uniqid"));                                                                // 23
    },                                                                                                                 // 24
    role: "button"                                                                                                     // 25
  }, HTML.Raw("<b>-</b>")), "\n"), HTML.Raw("\n\n<br>") ];                                                             // 26
}));                                                                                                                   // 27
                                                                                                                       // 28
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.meeting.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/application/template.meeting.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("meeting");                                                                                       // 2
Template["meeting"] = new Template("Template.meeting", (function() {                                                   // 3
  var view = this;                                                                                                     // 4
  return [ HTML.DIV({                                                                                                  // 5
    class: "main-content"                                                                                              // 6
  }, "\n    ", Blaze.If(function() {                                                                                   // 7
    return Spacebars.call(view.lookup("currentUser"));                                                                 // 8
  }, function() {                                                                                                      // 9
    return [ "\n\n    ", HTML.DIV({                                                                                    // 10
      class: "col-md-8"                                                                                                // 11
    }, "\n\n      ", Spacebars.include(view.lookupTemplate("meetingReport")), "\n      ", Spacebars.include(view.lookupTemplate("hello")), "\n\n    "), "\n\n    ", HTML.Comment("START PREMIER PANL DROITE : Time Management "), "\n    ", HTML.DIV({
      class: "col-md-4"                                                                                                // 13
    }, "\n      ", HTML.DIV({                                                                                          // 14
      class: "panel panel-default panel-heading-fullwidth panel-warning"                                               // 15
    }, "\n        ", HTML.DIV({                                                                                        // 16
      class: "panel-heading"                                                                                           // 17
    }, HTML.SPAN({                                                                                                     // 18
      class: "title"                                                                                                   // 19
    }, "Time Management")), "\n        ", HTML.DIV({                                                                   // 20
      class: "panel-body"                                                                                              // 21
    }, "\n          ", HTML.DIV({                                                                                      // 22
      class: "row"                                                                                                     // 23
    }, "\n            ", HTML.Comment(" Bouton pour cr�er une demande d'intervention "), "\n            ", HTML.DIV({  // 24
      class: "col-md-5"                                                                                                // 25
    }, "\n              ", HTML.DIV({                                                                                  // 26
      class: "input-group"                                                                                             // 27
    }, "\n                ", HTML.SPAN({                                                                               // 28
      class: "input-group-addon",                                                                                      // 29
      id: "sizing-addon2"                                                                                              // 30
    }, HTML.B("Duration: ")), "\n                ", HTML.SPAN({                                                        // 31
      type: "text",                                                                                                    // 32
      class: "form-control",                                                                                           // 33
      placeholder: "Time",                                                                                             // 34
      "aria-describedby": "sizing-addon2",                                                                             // 35
      id: "meetingTime",                                                                                               // 36
      style: "width:70%"                                                                                               // 37
    }, Blaze.View("lookup:testVariable", function() {                                                                  // 38
      return Spacebars.mustache(view.lookup("testVariable"));                                                          // 39
    })), "\n              "), "\n            "), "\n            ", HTML.Comment(" {{#if isAnimator}} "), "\n            ", HTML.Comment(" Boutons de gestion du don de temps de parole "), "\n            ", HTML.DIV({
      class: "col-md-7 text-right"                                                                                     // 41
    }, "\n              ", HTML.INPUT(HTML.Attrs({                                                                     // 42
      type: "button",                                                                                                  // 43
      class: "btn btn-primary",                                                                                        // 44
      role: "button",                                                                                                  // 45
      id: "startTime",                                                                                                 // 46
      value: "start"                                                                                                   // 47
    }, function() {                                                                                                    // 48
      return Spacebars.attrMustache(view.lookup("disabled"));                                                          // 49
    })), "\n              ", HTML.INPUT(HTML.Attrs({                                                                   // 50
      type: "button",                                                                                                  // 51
      class: "btn btn-primary",                                                                                        // 52
      role: "button",                                                                                                  // 53
      id: "PauseTime",                                                                                                 // 54
      value: "stop"                                                                                                    // 55
    }, function() {                                                                                                    // 56
      return Spacebars.attrMustache(view.lookup("disabled"));                                                          // 57
    })), "\n            "), "\n            ", HTML.Comment(" {{/if}} "), "\n          "), "\n        "), "\n      "), "\n    "), "\n    ", HTML.Comment("END PREMIER PANL DROITE : Time Management "), "\n\n\n    ", HTML.Comment("START SECOND PANL DROITE : Participant "), "\n    ", HTML.DIV({
      class: "col-md-4"                                                                                                // 59
    }, "\n      ", HTML.DIV({                                                                                          // 60
      class: "panel panel-default panel-heading-fullwidth panel-primary"                                               // 61
    }, "\n        ", HTML.DIV({                                                                                        // 62
      class: "panel-heading"                                                                                           // 63
    }, HTML.SPAN({                                                                                                     // 64
      class: "title"                                                                                                   // 65
    }, "Participant")), "\n        ", HTML.DIV({                                                                       // 66
      class: "panel-body"                                                                                              // 67
    }, "\n          ", HTML.DIV({                                                                                      // 68
      class: "row"                                                                                                     // 69
    }, "\n            ", HTML.Comment(" {{#each Users} "), "\n            ", HTML.Comment(" Liste des intervenant "), "\n\n            ", HTML.DIV({
      class: "col-md-6"                                                                                                // 71
    }, "\n              ", HTML.SPAN({                                                                                 // 72
      class: "label label-info input-group-addon"                                                                      // 73
    }, "\n                ", Blaze.View("lookup:animatorMail", function() {                                            // 74
      return Spacebars.mustache(view.lookup("animatorMail"));                                                          // 75
    }), "\n\n                ", Blaze.View("lookup:getSpeaker", function() {                                           // 76
      return Spacebars.mustache(view.lookup("getSpeaker"));                                                            // 77
    }), "\n\n                ", Blaze.If(function() {                                                                  // 78
      return Spacebars.call(view.lookup("ownMeeting"));                                                                // 79
    }, function() {                                                                                                    // 80
      return [ "\n                ", HTML.SPAN({                                                                       // 81
        class: "glyphicon glyphicon-user",                                                                             // 82
        "aria-hidden": "true"                                                                                          // 83
      }), "\n                " ];                                                                                      // 84
    }), "\n              "), "\n            "), "\n            ", Blaze.If(function() {                                // 85
      return Spacebars.call(view.lookup("isSpeaker"));                                                                 // 86
    }, function() {                                                                                                    // 87
      return [ "\n            ", HTML.DIV({                                                                            // 88
        class: "col-md-3"                                                                                              // 89
      }, "\n              ", HTML.SPAN({                                                                               // 90
        class: "label label-info input-group-addon"                                                                    // 91
      }, "\n                ", HTML.SPAN({                                                                             // 92
        class: "glyphicon glyphicon-volume-up",                                                                        // 93
        "aria-hidden": "true"                                                                                          // 94
      }), "\n              "), "\n            "), "\n\n            " ];                                                // 95
    }), "\n            ", HTML.DIV({                                                                                   // 96
      class: "col-md-3 text-right"                                                                                     // 97
    }, "\n              ", HTML.INPUT(HTML.Attrs({                                                                     // 98
      type: "button",                                                                                                  // 99
      class: "btn btn-primary",                                                                                        // 100
      role: "button",                                                                                                  // 101
      id: "speakControl",                                                                                              // 102
      value: "take"                                                                                                    // 103
    }, function() {                                                                                                    // 104
      return Spacebars.attrMustache(view.lookup("disabled"));                                                          // 105
    })), "\n            "), "\n            ", HTML.BR(), " ", HTML.BR(), HTML.BR(), "\n            ", HTML.Comment(' <div class="col-md-11" style="padding-right:0">\n            <div class="list-group">\n            <h4 class="list-group-item-heading">{{Meteor.username}}</h4>\n            <p>\n            {{#each paroles}}\n            {{>parole}}\n            {{/each}}\n          </p>\n        </div>\n      </div> '), "\n      ", HTML.Comment(" Actions possibles en rapport avec l'intervenant "), "\n      ", HTML.Comment(' <div class="col-md-1" style="padding-left:0">\n      {{#if isSessionGuest name}}\n      <div class="input-group guestRemove" guest="{{name}}">\n      <button type="button" class="btn btn-danger btn-xs removeGuest">\n      <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>\n    </button>\n  </div>\n  {{/if}}\n</div> '), "\n", HTML.Comment(" {{/each}} "), "\n"), "\n", Blaze.Each(function() {
      return Spacebars.call(view.lookup("participantsEmails"));                                                        // 107
    }, function() {                                                                                                    // 108
      return [ "\n", HTML.DIV({                                                                                        // 109
        class: "row"                                                                                                   // 110
      }, "\n  ", HTML.DIV({                                                                                            // 111
        class: "col-md-5"                                                                                              // 112
      }, "\n    ", HTML.SPAN({                                                                                         // 113
        class: "label label-info input-group-addon"                                                                    // 114
      }, "\n      ", Blaze.View("lookup:.", function() {                                                               // 115
        return Spacebars.mustache(view.lookup("."));                                                                   // 116
      }), "\n      ", Blaze.If(function() {                                                                            // 117
        return Spacebars.call(view.lookup("partMeeting"));                                                             // 118
      }, function() {                                                                                                  // 119
        return [ "\n      ", HTML.SPAN({                                                                               // 120
          class: "glyphicon glyphicon-user",                                                                           // 121
          "aria-hidden": "true"                                                                                        // 122
        }), "\n      " ];                                                                                              // 123
      }), "\n    "), "\n    ", Blaze.If(function() {                                                                   // 124
        return Spacebars.call(view.lookup("isSpeaker"));                                                               // 125
      }, function() {                                                                                                  // 126
        return [ "\n    ", HTML.SPAN({                                                                                 // 127
          class: "label label-info input-group-addon"                                                                  // 128
        }, "\n      ", HTML.SPAN({                                                                                     // 129
          class: "glyphicon glyphicon-volume-up",                                                                      // 130
          "aria-hidden": "true"                                                                                        // 131
        }), "\n    "), "\n    " ];                                                                                     // 132
      }, function() {                                                                                                  // 133
        return [ "\n    ", Blaze.If(function() {                                                                       // 134
          return Spacebars.call(view.lookup("isAsking"));                                                              // 135
        }, function() {                                                                                                // 136
          return [ "\n    ", HTML.SPAN({                                                                               // 137
            class: "label label-info input-group-addon"                                                                // 138
          }, "\n      ", HTML.SPAN({                                                                                   // 139
            class: "glyphicon glyphicon-hourglass",                                                                    // 140
            "aria-hidden": "true"                                                                                      // 141
          }), "\n    "), "\n    " ];                                                                                   // 142
        }), "\n    " ];                                                                                                // 143
      }), "\n\n  "), "\n  ", HTML.DIV({                                                                                // 144
        class: "col-md-7 text-right"                                                                                   // 145
      }, "\n    ", Blaze.If(function() {                                                                               // 146
        return Spacebars.call(view.lookup("ownMeeting"));                                                              // 147
      }, function() {                                                                                                  // 148
        return [ "\n    ", HTML.INPUT(HTML.Attrs({                                                                     // 149
          type: "button",                                                                                              // 150
          class: "btn btn-primary",                                                                                    // 151
          role: "button",                                                                                              // 152
          id: "speakControl",                                                                                          // 153
          value: "give"                                                                                                // 154
        }, function() {                                                                                                // 155
          return Spacebars.attrMustache(view.lookup("disabled"));                                                      // 156
        })), "\n    " ];                                                                                               // 157
      }), "\n    ", HTML.INPUT(HTML.Attrs({                                                                            // 158
        type: "button",                                                                                                // 159
        class: "btn btn-primary",                                                                                      // 160
        role: "button",                                                                                                // 161
        id: "speakAsk",                                                                                                // 162
        value: "ask"                                                                                                   // 163
      }, function() {                                                                                                  // 164
        return Spacebars.attrMustache(view.lookup("disabled"));                                                        // 165
      })), "\n\n  "), "\n"), "\n", HTML.BR(), "\n", HTML.BR(), "\n" ];                                                 // 166
    }), "\n"), "\n", HTML.Comment(" panel-body "), "\n"), "\n"), "\n\n", HTML.DIV({                                    // 167
      class: "col-md-4"                                                                                                // 168
    }, "\n  ", HTML.DIV({                                                                                              // 169
      class: "panel panel-default panel-heading-fullwidth panel-primary"                                               // 170
    }, "\n    ", HTML.DIV({                                                                                            // 171
      class: "panel-heading"                                                                                           // 172
    }, HTML.SPAN({                                                                                                     // 173
      class: "title"                                                                                                   // 174
    }, "People on this meeting")), "\n    ", HTML.DIV({                                                                // 175
      class: "panel-body"                                                                                              // 176
    }, "\n      ", HTML.DIV({                                                                                          // 177
      class: "row"                                                                                                     // 178
    }, "\n        ", HTML.Comment(" {{#each Users} "), "\n        ", HTML.Comment(" Liste des intervenant "), "\n        ", HTML.DIV({
      class: "col-md-11",                                                                                              // 180
      style: "padding-right:0"                                                                                         // 181
    }, "\n          ", HTML.DIV({                                                                                      // 182
      class: "list-group"                                                                                              // 183
    }, "\n\n            ", Blaze.Each(function() {                                                                     // 184
      return Spacebars.call(view.lookup("users"));                                                                     // 185
    }, function() {                                                                                                    // 186
      return [ "\n            ", HTML.P(HTML.A({                                                                       // 187
        href: "#",                                                                                                     // 188
        id: "makeCall"                                                                                                 // 189
      }, "Call ", Blaze.Each(function() {                                                                              // 190
        return Spacebars.call(view.lookup("emails"));                                                                  // 191
      }, function() {                                                                                                  // 192
        return Blaze.View("lookup:address", function() {                                                               // 193
          return Spacebars.mustache(view.lookup("address"));                                                           // 194
        });                                                                                                            // 195
      }))), "\n            " ];                                                                                        // 196
    }), "\n\n            ", HTML.Comment(' <h4 class="list-group-item-heading">{{Meteor.username}}</h4> '), "\n            ", HTML.P("\n              ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("paroles"));                                                                   // 198
    }, function() {                                                                                                    // 199
      return [ "\n              ", Spacebars.include(view.lookupTemplate("parole")), "\n              " ];             // 200
    }), "\n            "), "\n          "), "\n        "), "\n        ", HTML.Comment(" Actions possibles en rapport avec l'intervenant "), "\n        ", HTML.Comment(' <div class="col-md-1" style="padding-left:0">\n        {{#if isSessionGuest name}}\n        <div class="input-group guestRemove" guest="{{name}}">\n        <button type="button" class="btn btn-danger btn-xs removeGuest">\n        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>\n      </button>\n    </div>\n    {{/if}}\n  </div> '), "\n  ", HTML.Comment(" {{/each}} "), "\n"), "\n"), " ", HTML.Comment(" panel-body "), "\n"), "\n"), "\n", HTML.Comment("FIN PREMIER PANEL DROITE : participant "), "\n\n\n", HTML.Comment("START THIRD PANEL DROITE : Bouton "), "\n\n", HTML.DIV({
      class: "col-md-4"                                                                                                // 202
    }, "\n  ", HTML.Comment(' <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#localModal">Add local participant</button> '), "\n  ", HTML.BUTTON({
      type: "button",                                                                                                  // 204
      class: "btn btn-primary",                                                                                        // 205
      "data-toggle": "modal",                                                                                          // 206
      "data-target": "#invitationModal"                                                                                // 207
    }, "Invite participants"), "\n  ", HTML.Comment(' <button type="button" class="btn btn-danger" role="button" id="closeMeeting">Close meeting</button> '), "\n\n"), "\n", HTML.Comment("FIN THIRD PANEL DROITE : bouton "), "\n\n\n", HTML.Comment("FIN PREMIER PANEL DROITE"), "\n\n\n", HTML.Comment("START PREMIER PANEL  : PPT "), "\n\n", HTML.DIV({
      class: "col-md-12"                                                                                               // 209
    }, "\n  ", Spacebars.include(view.lookupTemplate("pptcont")), "\n"), "\n\n" ];                                     // 210
  }, function() {                                                                                                      // 211
    return [ "\n", HTML.DIV({                                                                                          // 212
      class: "panel-body"                                                                                              // 213
    }, "\n  ", HTML.P({                                                                                                // 214
      class: "alert alert-warning"                                                                                     // 215
    }, HTML.SPAN({                                                                                                     // 216
      class: "glyphicon glyphicon-warning-sign"                                                                        // 217
    }), HTML.STRONG(Blaze.View("lookup:_", function() {                                                                // 218
      return Spacebars.mustache(view.lookup("_"), "warning");                                                          // 219
    })), Blaze.View("lookup:_", function() {                                                                           // 220
      return Spacebars.mustache(view.lookup("_"), "warningLogInfo");                                                   // 221
    })), "\n"), "\n" ];                                                                                                // 222
  }), "\n"), HTML.Raw('\n\n\n<!-- **************************************** -->\n<!-- Modal d\'ajout d\'un participant ext�rieur -->\n<!-- **************************************** -->\n<div class="modal fade" id="invitationModal" tabindex="-1" role="dialog" aria-labelledby="invitationModalLabel">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n        <h4 class="modal-title" id="invitationModalLabel">Invite Participants</h4>\n      </div>\n      <div class="modal-body">\n        <!--\n        <h3>By QR Code</h3>\n        <div id="qrcode"></div>\n      -->\n      <h3>By email address</h3>\n      <form role="form" id="inviteForm">\n        <div class="form-group email-input-group">\n          <label class="control-label">Your participants\' e-mails</label>\n          <div class="participantEmailInput" rank="1">\n            <div class="input-group xs-mb-15"><span class="input-group-addon">@</span>\n              <input class="participantsEmails form-control" name="participantsEmails" type="email" parsley-type="email">\n            </div>\n          </div>\n        </div>\n        <div class="modal-footer">\n          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n          <button id="inviteSubmit" type="submit" class="btn btn-primary">Invite</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n</div>\n<!-- ************************************************************************************************************* -->\n<!-- Modal de notification qui s\'affiche sur le dashboard d\'un intervenant auquel l\'animateur a supprim� le speech -->\n<!-- ************************************************************************************************************* -->\n<div class="modal fade" id="speech-delete-modal" tabindex="-1" role="dialog" aria-labelledby="speech-delete-label">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n        <h4 class="modal-title" id="speech-delete-label">Invite Participants</h4>\n      </div>\n      <div class="modal-body">\n        Your speech have been deleted\n      </div>\n    </div>\n  </div>\n</div>') ];
}));                                                                                                                   // 224
                                                                                                                       // 225
Template.__checkName("parole");                                                                                        // 226
Template["parole"] = new Template("Template.parole", (function() {                                                     // 227
  var view = this;                                                                                                     // 228
  return [ HTML.SPAN("Speech Duration : ", Blaze.View("lookup:displayTime", function() {                               // 229
    return Spacebars.mustache(view.lookup("displayTime"), view.lookup("time"));                                        // 230
  })), HTML.Raw("<br>") ];                                                                                             // 231
}));                                                                                                                   // 232
                                                                                                                       // 233
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.meetingLeft.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/application/template.meetingLeft.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("meetingReport");                                                                                 // 2
Template["meetingReport"] = new Template("Template.meetingReport", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return HTML.Raw('<div class="panel panel-default panel-heading-fullwidth panel-primary">\n    <div class="panel-heading"><span class="title">Meeting Report</span></div>\n    <div class="panel-body" id="report-cont">\n      <div class="container-fluid" style="margin-bottom:5px">\n        <div class="input-group">\n          <span class="input-group-addon" id="sizing-addon2"><b>Report Title : </b></span>\n          <input type="text" class="form-control" placeholder="Title" aria-describedby="sizing-addon2" id="TitleReport" style="width:70%">\n          <button type="button" class="btn btn-success" id="saveReport" style="margin-left:10px;">Save Meeting Report</button>\n        </div>\n      </div>\n      <div class="row">\n        <div id="textareaRich">\n          Your Report\'s Meetings !!\n        </div>\n      </div>\n    </div>\n  </div>');
}));                                                                                                                   // 6
                                                                                                                       // 7
Template.__checkName("pptcont");                                                                                       // 8
Template["pptcont"] = new Template("Template.pptcont", (function() {                                                   // 9
  var view = this;                                                                                                     // 10
  return HTML.Raw('<div class="panel panel-default panel-heading-fullwidth panel-primary">\n    <div class="panel-heading"><span class="title">Presentation</span> </div>\n    <div class="panel-body">\n      <iframe src="https://docs.google.com/presentation/d/1Y6LU1__oSxTFL8Ykw9sEcikwvGcVNhUtT3JZ5Auiqos/embed?start=false&amp;loop=false&amp;delayms=5000" frameborder="0" width="100%" height="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>    </div>\n    </div>');
}));                                                                                                                   // 12
                                                                                                                       // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"group":{"template.group_item.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/group/template.group_item.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("groupItem");                                                                                     // 2
Template["groupItem"] = new Template("Template.groupItem", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("partGroup"));                                                                   // 6
  }, function() {                                                                                                      // 7
    return [ "\n  ", HTML.DIV({                                                                                        // 8
      class: "group"                                                                                                   // 9
    }, "\n    ", HTML.DIV({                                                                                            // 10
      class: "post-content"                                                                                            // 11
    }, "\n      ", HTML.LI(Blaze.If(function() {                                                                       // 12
      return Spacebars.call(view.lookup("ownGroup"));                                                                  // 13
    }, function() {                                                                                                    // 14
      return [ HTML.U(Blaze.View("lookup:name", function() {                                                           // 15
        return Spacebars.mustache(view.lookup("name"));                                                                // 16
      })), " " ];                                                                                                      // 17
    }, function() {                                                                                                    // 18
      return [ " ", Blaze.View("lookup:name", function() {                                                             // 19
        return Spacebars.mustache(view.lookup("name"));                                                                // 20
      }), " " ];                                                                                                       // 21
    }), HTML.A({                                                                                                       // 22
      href: function() {                                                                                               // 23
        return Spacebars.mustache(view.lookup("pathFor"), "groupPage");                                                // 24
      },                                                                                                               // 25
      class: "discuss btn btn-info"                                                                                    // 26
    }, Blaze.View("lookup:_", function() {                                                                             // 27
      return Spacebars.mustache(view.lookup("_"), "access");                                                           // 28
    }))), "\n      ", HTML.BR(), "\n    "), "\n  "), "\n  " ];                                                         // 29
  });                                                                                                                  // 30
}));                                                                                                                   // 31
                                                                                                                       // 32
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.group_list.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/group/template.group_list.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("groupsList");                                                                                    // 2
Template["groupsList"] = new Template("Template.groupsList", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "groups"                                                                                                    // 6
  }, "\n    ", Blaze.Each(function() {                                                                                 // 7
    return Spacebars.call(view.lookup("groups"));                                                                      // 8
  }, function() {                                                                                                      // 9
    return [ "\n      ", Spacebars.include(view.lookupTemplate("groupItem")), "\n    " ];                              // 10
  }, function() {                                                                                                      // 11
    return [ "\n      ", HTML.LI({                                                                                     // 12
      class: "placeholder"                                                                                             // 13
    }, Blaze.View("lookup:_", function() {                                                                             // 14
      return Spacebars.mustache(view.lookup("_"), "noGroup");                                                          // 15
    }), " "), "\n    " ];                                                                                              // 16
  }), "\n  ");                                                                                                         // 17
}));                                                                                                                   // 18
                                                                                                                       // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.group_page.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/group/template.group_page.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("groupPage");                                                                                     // 2
Template["groupPage"] = new Template("Template.groupPage", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "main-content"                                                                                              // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    class: "row"                                                                                                       // 8
  }, "\n      ", HTML.DIV({                                                                                            // 9
    class: "col-xs-12 col-md-6 col-md-offset-3"                                                                        // 10
  }, "\n        ", HTML.DIV({                                                                                          // 11
    class: "panel panel-default"                                                                                       // 12
  }, "\n          ", HTML.DIV({                                                                                        // 13
    class: "panel-heading"                                                                                             // 14
  }, HTML.SPAN({                                                                                                       // 15
    class: "title"                                                                                                     // 16
  }, Blaze.View("lookup:name", function() {                                                                            // 17
    return Spacebars.mustache(view.lookup("name"));                                                                    // 18
  }), " ", Blaze.If(function() {                                                                                       // 19
    return Spacebars.call(view.lookup("ownGroup"));                                                                    // 20
  }, function() {                                                                                                      // 21
    return HTML.BUTTON({                                                                                               // 22
      type: "button",                                                                                                  // 23
      class: "btn btn-danger delete"                                                                                   // 24
    }, "Delete");                                                                                                      // 25
  }, function() {                                                                                                      // 26
    return [ HTML.BUTTON({                                                                                             // 27
      type: "button",                                                                                                  // 28
      class: "btn btn-danger quit"                                                                                     // 29
    }, "Quit"), " " ];                                                                                                 // 30
  }))), "\n          ", HTML.DIV({                                                                                     // 31
    class: "panel-body"                                                                                                // 32
  }, "\n            ", Blaze.Each(function() {                                                                         // 33
    return Spacebars.call(view.lookup("members"));                                                                     // 34
  }, function() {                                                                                                      // 35
    return [ "\n\n            ", HTML.DIV({                                                                            // 36
      class: "input-group"                                                                                             // 37
    }, "\n              ", Blaze.View("lookup:.", function() {                                                         // 38
      return Spacebars.mustache(view.lookup("."));                                                                     // 39
    }), "\n              ", HTML.SPAN({                                                                                // 40
      class: "input-group-addon",                                                                                      // 41
      id: "min-input",                                                                                                 // 42
      role: "button"                                                                                                   // 43
    }, HTML.B("-")), "\n\n            "), "\n            ", HTML.BR(), "\n\n            " ];                           // 44
  }), "\n            ", HTML.DIV({                                                                                     // 45
    class: "input-group"                                                                                               // 46
  }, HTML.Raw('<span class="input-group-addon">@</span>'), "\n              ", HTML.INPUT({                            // 47
    name: "AddedMember",                                                                                               // 48
    type: "email",                                                                                                     // 49
    "parsley-type": "email",                                                                                           // 50
    value: function() {                                                                                                // 51
      return Spacebars.mustache(view.lookup("value"));                                                                 // 52
    },                                                                                                                 // 53
    placeholder: "member mail",                                                                                        // 54
    class: "form-control"                                                                                              // 55
  }), "\n              ", HTML.Raw('<span class="input-group-addon" id="add-member" role="button"><b>+</b></span>'), "\n            "), "\n\n            ", HTML.Raw("<br>"), HTML.Raw("<br>"), "\n            ", HTML.DIV({
    class: "text-center"                                                                                               // 57
  }, "\n              ", HTML.BUTTON({                                                                                 // 58
    type: "button",                                                                                                    // 59
    class: "btn btn-space btn-primary btn-rounded btn-lg",                                                             // 60
    id: "open"                                                                                                         // 61
  }, "\n                ", HTML.A({                                                                                    // 62
    style: "color:#fff",                                                                                               // 63
    href: function() {                                                                                                 // 64
      return Spacebars.mustache(view.lookup("pathFor"), "create");                                                     // 65
    }                                                                                                                  // 66
  }, HTML.Raw('<i class="icon icon-left s7-users"></i>'), " ", Blaze.View("lookup:_", function() {                     // 67
    return Spacebars.mustache(view.lookup("_"), "openMeeting");                                                        // 68
  })), "\n              "), "\n            "), "\n          "), "\n          ", HTML.Raw('<div class="panel-heading"></div>'), "\n          ", HTML.DIV({
    class: "panel-body"                                                                                                // 70
  }, "\n            ", HTML.SPAN(" ", Blaze.View("lookup:_", function() {                                              // 71
    return Spacebars.mustache(view.lookup("_"), "managedBy");                                                          // 72
  }), " ", Blaze.View("lookup:authorName", function() {                                                                // 73
    return Spacebars.mustache(view.lookup("authorName"));                                                              // 74
  }), " - ", Blaze.View("lookup:authorAdress", function() {                                                            // 75
    return Spacebars.mustache(view.lookup("authorAdress"));                                                            // 76
  }), " "), "\n          "), "\n        "), "\n      "), "\n    "), "\n  ");                                           // 77
}));                                                                                                                   // 78
                                                                                                                       // 79
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.group_submit.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/group/template.group_submit.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("groupSubmit");                                                                                   // 2
Template["groupSubmit"] = new Template("Template.groupSubmit", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return [ HTML.ASIDE({                                                                                                // 5
    class: "page-aside"                                                                                                // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    class: "am-scroller nano has-scrollbar"                                                                            // 8
  }, "\n      ", HTML.DIV({                                                                                            // 9
    class: "nano-content",                                                                                             // 10
    tabindex: "0",                                                                                                     // 11
    style: "right: -17px;"                                                                                             // 12
  }, "\n        ", HTML.DIV({                                                                                          // 13
    class: "content"                                                                                                   // 14
  }, "\n          ", HTML.Raw("<h2>Menu</h2>"), "\n          ", HTML.UL({                                              // 15
    class: "nav nav-pills nav-stacked"                                                                                 // 16
  }, "\n            ", HTML.LI(HTML.A({                                                                                // 17
    href: function() {                                                                                                 // 18
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                                 // 19
        route: "groups"                                                                                                // 20
      }));                                                                                                             // 21
    }                                                                                                                  // 22
  }, Blaze.View("lookup:_", function() {                                                                               // 23
    return Spacebars.mustache(view.lookup("_"), "menuGroup");                                                          // 24
  }))), "\n            ", HTML.LI({                                                                                    // 25
    class: "active"                                                                                                    // 26
  }, HTML.A({                                                                                                          // 27
    href: "#"                                                                                                          // 28
  }, Blaze.View("lookup:_", function() {                                                                               // 29
    return Spacebars.mustache(view.lookup("_"), "createGroup");                                                        // 30
  }))), "\n          "), "\n        "), "\n      "), "\n      ", HTML.Raw('<div class="nano-pane" style="display: none;"><div class="nano-slider" style="height: 268px; transform: translate(0px, 0px);"></div></div>')), "\n    "), "\n    ", HTML.DIV({
    class: "page-head",                                                                                                // 32
    style: "left:250px"                                                                                                // 33
  }, "\n      ", HTML.H2(Blaze.View("lookup:_", function() {                                                           // 34
    return Spacebars.mustache(view.lookup("_"), "groupSubTitle");                                                      // 35
  })), "\n    "), "\n    ", HTML.DIV({                                                                                 // 36
    class: "main-content"                                                                                              // 37
  }, "\n      ", HTML.DIV({                                                                                            // 38
    class: "row"                                                                                                       // 39
  }, "\n        ", HTML.DIV({                                                                                          // 40
    class: "col-xs-12 col-md-8 col-md-offset-3"                                                                        // 41
  }, "\n          ", HTML.DIV({                                                                                        // 42
    class: "panel panel-default"                                                                                       // 43
  }, "\n            ", Blaze.If(function() {                                                                           // 44
    return Spacebars.call(view.lookup("currentUser"));                                                                 // 45
  }, function() {                                                                                                      // 46
    return [ "\n            ", HTML.DIV({                                                                              // 47
      class: "panel-heading"                                                                                           // 48
    }, HTML.SPAN({                                                                                                     // 49
      class: "title"                                                                                                   // 50
    }, Blaze.View("lookup:_", function() {                                                                             // 51
      return Spacebars.mustache(view.lookup("_"), "groupSubmit");                                                      // 52
    }))), "\n            ", HTML.DIV({                                                                                 // 53
      class: "panel-body"                                                                                              // 54
    }, "\n\n              ", HTML.FORM({                                                                               // 55
      class: "main form page"                                                                                          // 56
    }, "\n                ", HTML.DIV({                                                                                // 57
      class: "form-group"                                                                                              // 58
    }, "\n                  ", HTML.LABEL({                                                                            // 59
      class: "control-label",                                                                                          // 60
      for: "url"                                                                                                       // 61
    }, Blaze.View("lookup:_", function() {                                                                             // 62
      return Spacebars.mustache(view.lookup("_"), "name");                                                             // 63
    })), "\n                  ", HTML.DIV({                                                                            // 64
      class: "controls"                                                                                                // 65
    }, "\n                    ", HTML.INPUT({                                                                          // 66
      name: "name",                                                                                                    // 67
      id: "groupName",                                                                                                 // 68
      type: "text",                                                                                                    // 69
      value: "",                                                                                                       // 70
      placeholder: "Group name",                                                                                       // 71
      class: "form-control"                                                                                            // 72
    }), "\n                  "), "\n                "), "\n                ", HTML.DIV({                               // 73
      class: "form-group"                                                                                              // 74
    }, "\n                  ", HTML.LABEL({                                                                            // 75
      class: "control-label",                                                                                          // 76
      for: "title"                                                                                                     // 77
    }, Blaze.View("lookup:_", function() {                                                                             // 78
      return Spacebars.mustache(view.lookup("_"), "members");                                                          // 79
    })), "\n                  ", HTML.DIV({                                                                            // 80
      class: "controls"                                                                                                // 81
    }, "\n                    ", HTML.SPAN(" ", Blaze.View("lookup:_", function() {                                    // 82
      return Spacebars.mustache(view.lookup("_"), "addMembers");                                                       // 83
    }), " "), "\n                    ", HTML.SPAN({                                                                    // 84
      class: "glyphicon glyphicon-plus",                                                                               // 85
      id: "add-input",                                                                                                 // 86
      role: "button"                                                                                                   // 87
    }), "\n                  "), "\n                  ", HTML.Comment("\n                  <a href=\"#\" id='add-input'>\n                    Add Input\n                  </a>"), "\n\n                  ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("inputs"));                                                                    // 89
    }, function() {                                                                                                    // 90
      return [ "\n                  ", Spacebars.include(view.lookupTemplate("input")), "\n                  " ];      // 91
    }), "\n                "), "\n                ", HTML.INPUT({                                                      // 92
      type: "submit",                                                                                                  // 93
      value: "Submit",                                                                                                 // 94
      class: "btn btn-primary"                                                                                         // 95
    }), "\n              "), "\n            "), "\n\n            " ];                                                  // 96
  }, function() {                                                                                                      // 97
    return [ "\n            ", HTML.DIV({                                                                              // 98
      class: "panel-body"                                                                                              // 99
    }, "\n              ", HTML.P({                                                                                    // 100
      class: "alert alert-warning"                                                                                     // 101
    }, HTML.SPAN({                                                                                                     // 102
      class: "glyphicon glyphicon-warning-sign"                                                                        // 103
    }), HTML.STRONG(Blaze.View("lookup:_", function() {                                                                // 104
      return Spacebars.mustache(view.lookup("_"), "warning");                                                          // 105
    })), Blaze.View("lookup:_", function() {                                                                           // 106
      return Spacebars.mustache(view.lookup("_"), "warningLogInfo");                                                   // 107
    })), "\n            "), "\n            " ];                                                                        // 108
  }), "\n\n          "), "\n        "), "\n      "), "\n    ") ];                                                      // 109
}));                                                                                                                   // 110
                                                                                                                       // 111
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.groups.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/group/template.groups.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("groups");                                                                                        // 2
Template["groups"] = new Template("Template.groups", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return [ HTML.ASIDE({                                                                                                // 5
    class: "page-aside"                                                                                                // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    class: "am-scroller nano has-scrollbar"                                                                            // 8
  }, "\n      ", HTML.DIV({                                                                                            // 9
    class: "nano-content",                                                                                             // 10
    tabindex: "0",                                                                                                     // 11
    style: "right: -17px;"                                                                                             // 12
  }, "\n        ", HTML.DIV({                                                                                          // 13
    class: "content"                                                                                                   // 14
  }, "\n          ", HTML.H2(Blaze.View("lookup:_", function() {                                                       // 15
    return Spacebars.mustache(view.lookup("_"), "menu");                                                               // 16
  })), "\n          ", HTML.UL({                                                                                       // 17
    class: "nav nav-pills nav-stacked"                                                                                 // 18
  }, "\n            ", HTML.LI({                                                                                       // 19
    class: "active"                                                                                                    // 20
  }, HTML.A({                                                                                                          // 21
    href: "#"                                                                                                          // 22
  }, Blaze.View("lookup:_", function() {                                                                               // 23
    return Spacebars.mustache(view.lookup("_"), "menuGroup");                                                          // 24
  }))), "\n            ", HTML.LI(HTML.A({                                                                             // 25
    href: function() {                                                                                                 // 26
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                                 // 27
        route: "groupSubmit"                                                                                           // 28
      }));                                                                                                             // 29
    }                                                                                                                  // 30
  }, Blaze.View("lookup:_", function() {                                                                               // 31
    return Spacebars.mustache(view.lookup("_"), "createGroup");                                                        // 32
  }))), "\n          "), "\n        "), "\n      "), "\n      ", HTML.Raw('<div class="nano-pane" style="display: none;"><div class="nano-slider" style="height: 268px; transform: translate(0px, 0px);"></div></div>')), "\n    "), "\n    ", HTML.DIV({
    class: "page-head",                                                                                                // 34
    style: "left:250px"                                                                                                // 35
  }, "\n      ", HTML.H2(Blaze.View("lookup:_", function() {                                                           // 36
    return Spacebars.mustache(view.lookup("_"), "groupTitle");                                                         // 37
  })), "\n    "), "\n    ", HTML.DIV({                                                                                 // 38
    class: "main-content"                                                                                              // 39
  }, "\n      ", HTML.DIV({                                                                                            // 40
    class: "row"                                                                                                       // 41
  }, "\n        ", HTML.DIV({                                                                                          // 42
    class: "col-xs-12 col-md-8 col-md-offset-3"                                                                        // 43
  }, "\n\n\n          ", HTML.DIV({                                                                                    // 44
    class: "panel panel-default"                                                                                       // 45
  }, "\n            ", Blaze.If(function() {                                                                           // 46
    return Spacebars.call(view.lookup("currentUser"));                                                                 // 47
  }, function() {                                                                                                      // 48
    return [ "\n            ", HTML.DIV({                                                                              // 49
      class: "panel-heading"                                                                                           // 50
    }, HTML.SPAN({                                                                                                     // 51
      class: "title"                                                                                                   // 52
    }, Blaze.View("lookup:_", function() {                                                                             // 53
      return Spacebars.mustache(view.lookup("_"), "groupBodyTitle");                                                   // 54
    }))), "\n\n            ", HTML.DIV({                                                                               // 55
      class: "panel-body"                                                                                              // 56
    }, "\n              ", HTML.U(" ", Blaze.View("lookup:_", function() {                                             // 57
      return Spacebars.mustache(view.lookup("_"), "groupInfo");                                                        // 58
    })), "\n              ", HTML.BR(), HTML.BR(), HTML.BR(), "\n              ", Spacebars.include(view.lookupTemplate("groupsList")), "\n            "), "\n\n\n            " ];
  }, function() {                                                                                                      // 60
    return [ "\n            ", HTML.DIV({                                                                              // 61
      class: "panel-body"                                                                                              // 62
    }, "\n              ", HTML.P({                                                                                    // 63
      class: "alert alert-warning"                                                                                     // 64
    }, HTML.SPAN({                                                                                                     // 65
      class: "glyphicon glyphicon-warning-sign"                                                                        // 66
    }), HTML.STRONG(Blaze.View("lookup:_", function() {                                                                // 67
      return Spacebars.mustache(view.lookup("_"), "warning");                                                          // 68
    })), Blaze.View("lookup:_", function() {                                                                           // 69
      return Spacebars.mustache(view.lookup("_"), "warningLogInfo");                                                   // 70
    })), "\n            "), "\n            " ];                                                                        // 71
  }), "\n\n          "), "\n        "), "\n      "), "\n    ") ];                                                      // 72
}));                                                                                                                   // 73
                                                                                                                       // 74
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"group_item.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/group/group_item.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.groupItem.helpers({                                                                                           // 1
  ownGroup: function () {                                                                                              // 2
    return this.userId === Meteor.userId();                                                                            // 3
  },                                                                                                                   // 4
  partGroup: function () {                                                                                             // 5
    var res = 0;                                                                                                       // 6
                                                                                                                       //
    if (this.userId === Meteor.userId()) {                                                                             // 7
      res = 1;                                                                                                         // 8
    } else {                                                                                                           // 9
      for (i = 0; i < this.members.length; i++) {                                                                      // 11
        if (this.members[i] === Meteor.user().emails[0].address) {                                                     // 12
          res = 1;                                                                                                     // 13
          i = this.members.length;                                                                                     // 14
        }                                                                                                              // 15
      }                                                                                                                // 16
    }                                                                                                                  // 17
                                                                                                                       //
    return res;                                                                                                        // 18
  }                                                                                                                    // 19
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"group_list.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/group/group_list.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.groupsList.helpers({                                                                                          // 1
  groups: function () {                                                                                                // 2
    return Groups.find();                                                                                              // 3
  }                                                                                                                    // 4
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"group_page.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/group/group_page.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.groupPage.helpers({                                                                                           // 1
  ownGroup: function () {                                                                                              // 2
    return this.userId === Meteor.userId();                                                                            // 3
  },                                                                                                                   // 4
  partGroup: function () {                                                                                             // 5
    var res = 0;                                                                                                       // 6
                                                                                                                       //
    if (this.userId === Meteor.userId()) {                                                                             // 7
      res = 1;                                                                                                         // 8
    } else {                                                                                                           // 9
      for (i = 0; i < this.members.length; i++) {                                                                      // 11
        if (this.members[i] === Meteor.user().emails[0].address) {                                                     // 12
          res = 1;                                                                                                     // 13
          i = this.members.length;                                                                                     // 14
        }                                                                                                              // 15
      }                                                                                                                // 16
    }                                                                                                                  // 17
                                                                                                                       //
    return res;                                                                                                        // 18
  }                                                                                                                    // 19
});                                                                                                                    // 1
Template.groupPage.events({                                                                                            // 22
  'click .delete': function (e) {                                                                                      // 24
    e.preventDefault();                                                                                                // 25
                                                                                                                       //
    if (confirm("Delete this group?")) {                                                                               // 27
      var currentGroupId = this._id;                                                                                   // 28
      Groups.remove(currentGroupId);                                                                                   // 29
      Router.go('groups');                                                                                             // 30
    }                                                                                                                  // 32
  },                                                                                                                   // 33
  'click .quit': function (e) {                                                                                        // 34
    e.preventDefault();                                                                                                // 35
                                                                                                                       //
    if (confirm("Do you want to leave this group?")) {                                                                 // 37
      var currentGroupId = this._id;                                                                                   // 38
      var member = Meteor.user().emails[0].address;                                                                    // 39
      Groups.update(currentGroupId, {                                                                                  // 40
        $pull: {                                                                                                       // 40
          members: member                                                                                              // 40
        }                                                                                                              // 40
      });                                                                                                              // 40
      Router.go('groups');                                                                                             // 41
    }                                                                                                                  // 43
  },                                                                                                                   // 44
  'click #min-input': function (e) {                                                                                   // 45
    e.preventDefault();                                                                                                // 48
                                                                                                                       //
    if (confirm("Do you want to kik " + this + " ?")) {                                                                // 50
      var parentId = Template.parentData(1)._id;                                                                       // 51
                                                                                                                       //
      var target = "" + this; //  console.log("taille parent : "+Template.parentData(1).members.length);               // 52
                                                                                                                       //
      console.log(target);                                                                                             // 56
      Groups.update({                                                                                                  // 57
        _id: parentId                                                                                                  // 57
      }, {                                                                                                             // 57
        $pull: {                                                                                                       // 57
          members: target                                                                                              // 57
        }                                                                                                              // 57
      }); //alert("member removed!");                                                                                  // 57
    }                                                                                                                  // 59
  },                                                                                                                   // 61
  'click #add-member': function (e) {                                                                                  // 62
    e.preventDefault(); //Récupération des éléments DOM des champs de saisie                                           // 63
                                                                                                                       //
    var currentGroupId = this._id;                                                                                     // 65
    var AddedMember = document.querySelector('[name=AddedMember]');                                                    // 67
    Groups.update(currentGroupId, {                                                                                    // 69
      $push: {                                                                                                         // 69
        members: AddedMember.value                                                                                     // 69
      }                                                                                                                // 69
    });                                                                                                                // 69
    AddedMember.value = "";                                                                                            // 71
  },                                                                                                                   // 72
  'click #open': function (e) {                                                                                        // 73
    Router.go('create', this);                                                                                         // 74
  }                                                                                                                    // 75
});                                                                                                                    // 22
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"group_submit.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/group/group_submit.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.groupSubmit.onCreated(function () {                                                                           // 1
  Session.set('inputs', []); // on page load, set this to have no inputs                                               // 2
});                                                                                                                    // 3
Template.groupSubmit.helpers({                                                                                         // 5
  inputs: function () {                                                                                                // 6
    return Session.get('inputs'); // reactively watches the Session variable, so when it changes, this result will change and our template will change
  }                                                                                                                    // 8
}); // Now we'll set up a click handler to add inputs to our array when we   click the "add" button                    // 5
                                                                                                                       //
Template.groupSubmit.events({                                                                                          // 12
  'click #add-input': function () {                                                                                    // 13
    var inputs = Session.get('inputs');                                                                                // 15
    var uniqid = Math.floor(Math.random() * 100000); // Give a unique ID so you can pull _this_ input when you click remove
                                                                                                                       //
    inputs.push({                                                                                                      // 17
      uniqid: uniqid,                                                                                                  // 17
      value: ""                                                                                                        // 17
    });                                                                                                                // 17
    Session.set('inputs', inputs);                                                                                     // 18
  },                                                                                                                   // 19
  'submit form': function (e) {                                                                                        // 21
    e.preventDefault(); //Récupération des éléments DOM des champs de saisie                                           // 22
                                                                                                                       //
    var membersInputs = $(e.target).find('[name=member]'); //Récupération des valeurs de l'ordre du jour, temps estimés et des emails d'invitation
                                                                                                                       //
    var name = [];                                                                                                     // 28
    ;                                                                                                                  // 28
    var members = [];                                                                                                  // 29
                                                                                                                       //
    for (i = 0; i < membersInputs.length; i++) {                                                                       // 32
      if (membersInputs[i].value != "") {                                                                              // 33
        members.push(membersInputs[i].value);                                                                          // 34
      }                                                                                                                // 35
    } //  name.push(nameInput[0].value);                                                                               // 36
                                                                                                                       //
                                                                                                                       //
    var group = {                                                                                                      // 40
      name: $(e.target).find('[name=name]').val(),                                                                     // 41
      members: members                                                                                                 // 42
    };                                                                                                                 // 40
    Meteor.call('groupInsert', group, function (error, result) {                                                       // 45
      // affiche l'erreur à l'utilisateur et s'interrompt                                                              // 46
      if (error) return alert(error.reason);                                                                           // 47
      Router.go('groups', {                                                                                            // 49
        _id: result._id                                                                                                // 49
      });                                                                                                              // 49
    });                                                                                                                // 50
  }                                                                                                                    // 51
}); // We also need handlers for when the inputs themselves are changed / removed                                      // 12
                                                                                                                       //
Template.input.events({                                                                                                // 58
  'click #remove-input': function (event) {                                                                            // 59
    var uniqid = $(event.currentTarget).attr('uniqid');                                                                // 60
    inputs = Session.get('inputs');                                                                                    // 61
    inputs = _.filter(inputs, function (x) {                                                                           // 62
      return x.uniqid != uniqid;                                                                                       // 62
    });                                                                                                                // 62
    Session.set('inputs', inputs);                                                                                     // 63
  } /*,                                                                                                                // 64
    'change input': function(event) {                                                                                  //
     var $input = $(event.currentTarget);                                                                              //
     var uniqid = $input.attr('uniqid');                                                                               //
     inputs = Session.get('inputs');                                                                                   //
     index = inputs.findIndex(function(x) { return x.uniqid == uniqid; });                                             //
     inputs[index].value = $input.val();                                                                               //
     Session.set('inputs', inputs);                                                                                    //
    }*/                                                                                                                //
});                                                                                                                    // 58
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"peerjs":{"template.webrtc-peerjs.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/peerjs/template.webrtc-peerjs.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("hello");                                                                                         // 2
Template["hello"] = new Template("Template.hello", (function() {                                                       // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw('<!-- <h2>Video Chat</h2> -->\n    <div id="video-container">\n      <!-- note the \'autoplay\' -->\n      <video id="theirVideo" class="theirVideo" autoplay=""></video>\n      <video id="myVideo" muted="true" class="myVideo" autoplay="" display="none"></video>\n    </div>\n\n    <h2>Controls</h2>\n    '), HTML.DIV("\n      ", HTML.Raw('<p>Your id: <span id="myPeerId">...</span></p>'), "\n      ", HTML.Raw("<p>Make a call</p>"), HTML.Raw("<br>"), "\n      ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("users"));                                                                       // 6
  }, function() {                                                                                                      // 7
    return [ "\n        ", HTML.P(HTML.A({                                                                             // 8
      href: "#",                                                                                                       // 9
      id: "makeCall"                                                                                                   // 10
    }, "Call ", Blaze.Each(function() {                                                                                // 11
      return Spacebars.call(view.lookup("emails"));                                                                    // 12
    }, function() {                                                                                                    // 13
      return Blaze.View("lookup:address", function() {                                                                 // 14
        return Spacebars.mustache(view.lookup("address"));                                                             // 15
      });                                                                                                              // 16
    }))), "\n      " ];                                                                                                // 17
  }), "\n      ", HTML.Raw('<p><a href="#" id="endCall">End Call</a></p>'), "\n    ") ];                               // 18
}));                                                                                                                   // 19
                                                                                                                       // 20
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"peer.js":["babel-runtime/helpers/typeof","./util","eventemitter3","./negotiator","reliable","./socket","./mediaconnection","./dataconnection","./peer","./adapter","js-binarypack","./bufferbuilder",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/peerjs/peer.js                                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _typeof2 = require("babel-runtime/helpers/typeof");                                                                //
                                                                                                                       //
var _typeof3 = _interopRequireDefault(_typeof2);                                                                       //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
/*! peerjs build:0.3.13, development. Copyright(c) 2013 Michelle Bu <michelle@michellebu.com> */(function () {         // 1
  function e(t, n, r) {                                                                                                // 1
    function s(o, u) {                                                                                                 // 1
      if (!n[o]) {                                                                                                     // 1
        if (!t[o]) {                                                                                                   // 1
          var a = typeof require == "function" && require;                                                             // 1
          if (!u && a) return a(o, !0);                                                                                // 1
          if (i) return i(o, !0);                                                                                      // 1
          var f = new Error("Cannot find module '" + o + "'");                                                         // 1
          throw f.code = "MODULE_NOT_FOUND", f;                                                                        // 1
        }                                                                                                              // 1
                                                                                                                       //
        var l = n[o] = {                                                                                               // 1
          exports: {}                                                                                                  // 1
        };                                                                                                             // 1
        t[o][0].call(l.exports, function (e) {                                                                         // 1
          var n = t[o][1][e];                                                                                          // 1
          return s(n ? n : e);                                                                                         // 1
        }, l, l.exports, e, t, n, r);                                                                                  // 1
      }                                                                                                                // 1
                                                                                                                       //
      return n[o].exports;                                                                                             // 1
    }                                                                                                                  // 1
                                                                                                                       //
    var i = typeof require == "function" && require;                                                                   // 1
                                                                                                                       //
    for (var o = 0; o < r.length; o++) {                                                                               // 1
      s(r[o]);                                                                                                         // 1
    }                                                                                                                  // 1
                                                                                                                       //
    return s;                                                                                                          // 1
  }                                                                                                                    // 1
                                                                                                                       //
  return e;                                                                                                            // 1
})()({                                                                                                                 // 1
  1: [function (require, module, exports) {                                                                            // 1
    module.exports.RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription;            // 2
    module.exports.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    module.exports.RTCIceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate;                              // 6
  }, {}],                                                                                                              // 9
  2: [function (require, module, exports) {                                                                            // 9
    var util = require('./util');                                                                                      // 10
                                                                                                                       //
    var EventEmitter = require('eventemitter3');                                                                       // 11
                                                                                                                       //
    var Negotiator = require('./negotiator');                                                                          // 12
                                                                                                                       //
    var Reliable = require('reliable'); /**                                                                            // 13
                                         * Wraps a DataChannel between two Peers.                                      //
                                         */                                                                            //
                                                                                                                       //
    function DataConnection(peer, provider, options) {                                                                 // 18
      if (!(this instanceof DataConnection)) return new DataConnection(peer, provider, options);                       // 19
      EventEmitter.call(this);                                                                                         // 20
      this.options = util.extend({                                                                                     // 22
        serialization: 'binary',                                                                                       // 23
        reliable: false                                                                                                // 24
      }, options); // Connection is not open yet.                                                                      // 22
                                                                                                                       //
      this.open = false;                                                                                               // 28
      this.type = 'data';                                                                                              // 29
      this.peer = peer;                                                                                                // 30
      this.provider = provider;                                                                                        // 31
      this.id = this.options.connectionId || DataConnection._idPrefix + util.randomToken();                            // 33
      this.label = this.options.label || this.id;                                                                      // 35
      this.metadata = this.options.metadata;                                                                           // 36
      this.serialization = this.options.serialization;                                                                 // 37
      this.reliable = this.options.reliable; // Data channel buffering.                                                // 38
                                                                                                                       //
      this._buffer = [];                                                                                               // 41
      this._buffering = false;                                                                                         // 42
      this.bufferSize = 0; // For storing large data.                                                                  // 43
                                                                                                                       //
      this._chunkedData = {};                                                                                          // 46
                                                                                                                       //
      if (this.options._payload) {                                                                                     // 48
        this._peerBrowser = this.options._payload.browser;                                                             // 49
      }                                                                                                                // 50
                                                                                                                       //
      Negotiator.startConnection(this, this.options._payload || {                                                      // 52
        originator: true                                                                                               // 55
      });                                                                                                              // 54
    }                                                                                                                  // 58
                                                                                                                       //
    util.inherits(DataConnection, EventEmitter);                                                                       // 60
    DataConnection._idPrefix = 'dc_'; /** Called by the Negotiator when the DataChannel is ready. */                   // 62
                                                                                                                       //
    DataConnection.prototype.initialize = function (dc) {                                                              // 65
      this._dc = this.dataChannel = dc;                                                                                // 66
                                                                                                                       //
      this._configureDataChannel();                                                                                    // 67
    };                                                                                                                 // 68
                                                                                                                       //
    DataConnection.prototype._configureDataChannel = function () {                                                     // 70
      var self = this;                                                                                                 // 71
                                                                                                                       //
      if (util.supports.sctp) {                                                                                        // 72
        this._dc.binaryType = 'arraybuffer';                                                                           // 73
      }                                                                                                                // 74
                                                                                                                       //
      this._dc.onopen = function () {                                                                                  // 75
        util.log('Data channel connection success');                                                                   // 76
        self.open = true;                                                                                              // 77
        self.emit('open');                                                                                             // 78
      }; // Use the Reliable shim for non Firefox browsers                                                             // 79
                                                                                                                       //
                                                                                                                       //
      if (!util.supports.sctp && this.reliable) {                                                                      // 82
        this._reliable = new Reliable(this._dc, util.debug);                                                           // 83
      }                                                                                                                // 84
                                                                                                                       //
      if (this._reliable) {                                                                                            // 86
        this._reliable.onmessage = function (msg) {                                                                    // 87
          self.emit('data', msg);                                                                                      // 88
        };                                                                                                             // 89
      } else {                                                                                                         // 90
        this._dc.onmessage = function (e) {                                                                            // 91
          self._handleDataMessage(e);                                                                                  // 92
        };                                                                                                             // 93
      }                                                                                                                // 94
                                                                                                                       //
      this._dc.onclose = function (e) {                                                                                // 95
        util.log('DataChannel closed for:', self.peer);                                                                // 96
        self.close();                                                                                                  // 97
      };                                                                                                               // 98
    }; // Handles a DataChannel message.                                                                               // 99
                                                                                                                       //
                                                                                                                       //
    DataConnection.prototype._handleDataMessage = function (e) {                                                       // 102
      var self = this;                                                                                                 // 103
      var data = e.data;                                                                                               // 104
      var datatype = data.constructor;                                                                                 // 105
                                                                                                                       //
      if (this.serialization === 'binary' || this.serialization === 'binary-utf8') {                                   // 106
        if (datatype === Blob) {                                                                                       // 107
          // Datatype should never be blob                                                                             // 108
          util.blobToArrayBuffer(data, function (ab) {                                                                 // 109
            data = util.unpack(ab);                                                                                    // 110
            self.emit('data', data);                                                                                   // 111
          });                                                                                                          // 112
          return;                                                                                                      // 113
        } else if (datatype === ArrayBuffer) {                                                                         // 114
          data = util.unpack(data);                                                                                    // 115
        } else if (datatype === String) {                                                                              // 116
          // String fallback for binary data for browsers that don't support binary yet                                // 117
          var ab = util.binaryStringToArrayBuffer(data);                                                               // 118
          data = util.unpack(ab);                                                                                      // 119
        }                                                                                                              // 120
      } else if (this.serialization === 'json') {                                                                      // 121
        data = JSON.parse(data);                                                                                       // 122
      } // Check if we've chunked--if so, piece things back together.                                                  // 123
      // We're guaranteed that this isn't 0.                                                                           // 126
                                                                                                                       //
                                                                                                                       //
      if (data.__peerData) {                                                                                           // 127
        var id = data.__peerData;                                                                                      // 128
        var chunkInfo = this._chunkedData[id] || {                                                                     // 129
          data: [],                                                                                                    // 129
          count: 0,                                                                                                    // 129
          total: data.total                                                                                            // 129
        };                                                                                                             // 129
        chunkInfo.data[data.n] = data.data;                                                                            // 131
        chunkInfo.count += 1;                                                                                          // 132
                                                                                                                       //
        if (chunkInfo.total === chunkInfo.count) {                                                                     // 134
          // Clean up before making the recursive call to `_handleDataMessage`.                                        // 135
          delete this._chunkedData[id]; // We've received all the chunks--time to construct the complete data.         // 136
                                                                                                                       //
          data = new Blob(chunkInfo.data);                                                                             // 139
                                                                                                                       //
          this._handleDataMessage({                                                                                    // 140
            data: data                                                                                                 // 140
          });                                                                                                          // 140
        }                                                                                                              // 141
                                                                                                                       //
        this._chunkedData[id] = chunkInfo;                                                                             // 143
        return;                                                                                                        // 144
      }                                                                                                                // 145
                                                                                                                       //
      this.emit('data', data);                                                                                         // 147
    }; /**                                                                                                             // 148
        * Exposed functionality for users.                                                                             //
        */ /** Allows user to close connection. */                                                                     //
                                                                                                                       //
    DataConnection.prototype.close = function () {                                                                     // 155
      if (!this.open) {                                                                                                // 156
        return;                                                                                                        // 157
      }                                                                                                                // 158
                                                                                                                       //
      this.open = false;                                                                                               // 159
      Negotiator.cleanup(this);                                                                                        // 160
      this.emit('close');                                                                                              // 161
    }; /** Allows user to send data. */                                                                                // 162
                                                                                                                       //
    DataConnection.prototype.send = function (data, chunked) {                                                         // 165
      if (!this.open) {                                                                                                // 166
        this.emit('error', new Error('Connection is not open. You should listen for the `open` event before sending messages.'));
        return;                                                                                                        // 168
      }                                                                                                                // 169
                                                                                                                       //
      if (this._reliable) {                                                                                            // 170
        // Note: reliable shim sending will make it so that you cannot customize                                       // 171
        // serialization.                                                                                              // 172
        this._reliable.send(data);                                                                                     // 173
                                                                                                                       //
        return;                                                                                                        // 174
      }                                                                                                                // 175
                                                                                                                       //
      var self = this;                                                                                                 // 176
                                                                                                                       //
      if (this.serialization === 'json') {                                                                             // 177
        this._bufferedSend(JSON.stringify(data));                                                                      // 178
      } else if (this.serialization === 'binary' || this.serialization === 'binary-utf8') {                            // 179
        var blob = util.pack(data); // For Chrome-Firefox interoperability, we need to make Firefox "chunk"            // 180
        // the data it sends out.                                                                                      // 183
                                                                                                                       //
        var needsChunking = util.chunkedBrowsers[this._peerBrowser] || util.chunkedBrowsers[util.browser];             // 184
                                                                                                                       //
        if (needsChunking && !chunked && blob.size > util.chunkedMTU) {                                                // 185
          this._sendChunks(blob);                                                                                      // 186
                                                                                                                       //
          return;                                                                                                      // 187
        } // DataChannel currently only supports strings.                                                              // 188
                                                                                                                       //
                                                                                                                       //
        if (!util.supports.sctp) {                                                                                     // 191
          util.blobToBinaryString(blob, function (str) {                                                               // 192
            self._bufferedSend(str);                                                                                   // 193
          });                                                                                                          // 194
        } else if (!util.supports.binaryBlob) {                                                                        // 195
          // We only do this if we really need to (e.g. blobs are not supported),                                      // 196
          // because this conversion is costly.                                                                        // 197
          util.blobToArrayBuffer(blob, function (ab) {                                                                 // 198
            self._bufferedSend(ab);                                                                                    // 199
          });                                                                                                          // 200
        } else {                                                                                                       // 201
          this._bufferedSend(blob);                                                                                    // 202
        }                                                                                                              // 203
      } else {                                                                                                         // 204
        this._bufferedSend(data);                                                                                      // 205
      }                                                                                                                // 206
    };                                                                                                                 // 207
                                                                                                                       //
    DataConnection.prototype._bufferedSend = function (msg) {                                                          // 209
      if (this._buffering || !this._trySend(msg)) {                                                                    // 210
        this._buffer.push(msg);                                                                                        // 211
                                                                                                                       //
        this.bufferSize = this._buffer.length;                                                                         // 212
      }                                                                                                                // 213
    }; // Returns true if the send succeeds.                                                                           // 214
                                                                                                                       //
                                                                                                                       //
    DataConnection.prototype._trySend = function (msg) {                                                               // 217
      try {                                                                                                            // 218
        this._dc.send(msg);                                                                                            // 219
      } catch (e) {                                                                                                    // 220
        this._buffering = true;                                                                                        // 221
        var self = this;                                                                                               // 223
        setTimeout(function () {                                                                                       // 224
          // Try again.                                                                                                // 225
          self._buffering = false;                                                                                     // 226
                                                                                                                       //
          self._tryBuffer();                                                                                           // 227
        }, 100);                                                                                                       // 228
        return false;                                                                                                  // 229
      }                                                                                                                // 230
                                                                                                                       //
      return true;                                                                                                     // 231
    }; // Try to send the first message in the buffer.                                                                 // 232
                                                                                                                       //
                                                                                                                       //
    DataConnection.prototype._tryBuffer = function () {                                                                // 235
      if (this._buffer.length === 0) {                                                                                 // 236
        return;                                                                                                        // 237
      }                                                                                                                // 238
                                                                                                                       //
      var msg = this._buffer[0];                                                                                       // 240
                                                                                                                       //
      if (this._trySend(msg)) {                                                                                        // 242
        this._buffer.shift();                                                                                          // 243
                                                                                                                       //
        this.bufferSize = this._buffer.length;                                                                         // 244
                                                                                                                       //
        this._tryBuffer();                                                                                             // 245
      }                                                                                                                // 246
    };                                                                                                                 // 247
                                                                                                                       //
    DataConnection.prototype._sendChunks = function (blob) {                                                           // 249
      var blobs = util.chunk(blob);                                                                                    // 250
                                                                                                                       //
      for (var i = 0, ii = blobs.length; i < ii; i += 1) {                                                             // 251
        var blob = blobs[i];                                                                                           // 252
        this.send(blob, true);                                                                                         // 253
      }                                                                                                                // 254
    };                                                                                                                 // 255
                                                                                                                       //
    DataConnection.prototype.handleMessage = function (message) {                                                      // 257
      var payload = message.payload;                                                                                   // 258
                                                                                                                       //
      switch (message.type) {                                                                                          // 260
        case 'ANSWER':                                                                                                 // 261
          this._peerBrowser = payload.browser; // Forward to negotiator                                                // 262
                                                                                                                       //
          Negotiator.handleSDP(message.type, this, payload.sdp);                                                       // 265
          break;                                                                                                       // 266
                                                                                                                       //
        case 'CANDIDATE':                                                                                              // 267
          Negotiator.handleCandidate(this, payload.candidate);                                                         // 268
          break;                                                                                                       // 269
                                                                                                                       //
        default:                                                                                                       // 270
          util.warn('Unrecognized message type:', message.type, 'from peer:', this.peer);                              // 271
          break;                                                                                                       // 272
      }                                                                                                                // 260
    };                                                                                                                 // 274
                                                                                                                       //
    module.exports = DataConnection;                                                                                   // 276
  }, {                                                                                                                 // 278
    "./negotiator": 5,                                                                                                 // 278
    "./util": 8,                                                                                                       // 278
    "eventemitter3": 9,                                                                                                // 278
    "reliable": 12                                                                                                     // 278
  }],                                                                                                                  // 278
  3: [function (require, module, exports) {                                                                            // 278
    window.Socket = require('./socket');                                                                               // 279
    window.MediaConnection = require('./mediaconnection');                                                             // 280
    window.DataConnection = require('./dataconnection');                                                               // 281
    window.Peer = require('./peer');                                                                                   // 282
    window.RTCPeerConnection = require('./adapter').RTCPeerConnection;                                                 // 283
    window.RTCSessionDescription = require('./adapter').RTCSessionDescription;                                         // 284
    window.RTCIceCandidate = require('./adapter').RTCIceCandidate;                                                     // 285
    window.Negotiator = require('./negotiator');                                                                       // 286
    window.util = require('./util');                                                                                   // 287
    window.BinaryPack = require('js-binarypack');                                                                      // 288
  }, {                                                                                                                 // 290
    "./adapter": 1,                                                                                                    // 290
    "./dataconnection": 2,                                                                                             // 290
    "./mediaconnection": 4,                                                                                            // 290
    "./negotiator": 5,                                                                                                 // 290
    "./peer": 6,                                                                                                       // 290
    "./socket": 7,                                                                                                     // 290
    "./util": 8,                                                                                                       // 290
    "js-binarypack": 10                                                                                                // 290
  }],                                                                                                                  // 290
  4: [function (require, module, exports) {                                                                            // 290
    var util = require('./util');                                                                                      // 291
                                                                                                                       //
    var EventEmitter = require('eventemitter3');                                                                       // 292
                                                                                                                       //
    var Negotiator = require('./negotiator'); /**                                                                      // 293
                                               * Wraps the streaming interface between two Peers.                      //
                                               */                                                                      //
                                                                                                                       //
    function MediaConnection(peer, provider, options) {                                                                // 298
      if (!(this instanceof MediaConnection)) return new MediaConnection(peer, provider, options);                     // 299
      EventEmitter.call(this);                                                                                         // 300
      this.options = util.extend({}, options);                                                                         // 302
      this.open = false;                                                                                               // 304
      this.type = 'media';                                                                                             // 305
      this.peer = peer;                                                                                                // 306
      this.provider = provider;                                                                                        // 307
      this.metadata = this.options.metadata;                                                                           // 308
      this.localStream = this.options._stream;                                                                         // 309
      this.id = this.options.connectionId || MediaConnection._idPrefix + util.randomToken();                           // 311
                                                                                                                       //
      if (this.localStream) {                                                                                          // 312
        Negotiator.startConnection(this, {                                                                             // 313
          _stream: this.localStream,                                                                                   // 315
          originator: true                                                                                             // 315
        });                                                                                                            // 315
      }                                                                                                                // 317
    }                                                                                                                  // 318
                                                                                                                       //
    ;                                                                                                                  // 318
    util.inherits(MediaConnection, EventEmitter);                                                                      // 320
    MediaConnection._idPrefix = 'mc_';                                                                                 // 322
                                                                                                                       //
    MediaConnection.prototype.addStream = function (remoteStream) {                                                    // 324
      util.log('Receiving stream', remoteStream);                                                                      // 325
      this.remoteStream = remoteStream;                                                                                // 327
      this.emit('stream', remoteStream); // Should we call this `open`?                                                // 328
    };                                                                                                                 // 330
                                                                                                                       //
    MediaConnection.prototype.handleMessage = function (message) {                                                     // 332
      var payload = message.payload;                                                                                   // 333
                                                                                                                       //
      switch (message.type) {                                                                                          // 335
        case 'ANSWER':                                                                                                 // 336
          // Forward to negotiator                                                                                     // 337
          Negotiator.handleSDP(message.type, this, payload.sdp);                                                       // 338
          this.open = true;                                                                                            // 339
          break;                                                                                                       // 340
                                                                                                                       //
        case 'CANDIDATE':                                                                                              // 341
          Negotiator.handleCandidate(this, payload.candidate);                                                         // 342
          break;                                                                                                       // 343
                                                                                                                       //
        default:                                                                                                       // 344
          util.warn('Unrecognized message type:', message.type, 'from peer:', this.peer);                              // 345
          break;                                                                                                       // 346
      }                                                                                                                // 335
    };                                                                                                                 // 348
                                                                                                                       //
    MediaConnection.prototype.answer = function (stream) {                                                             // 350
      if (this.localStream) {                                                                                          // 351
        util.warn('Local stream already exists on this MediaConnection. Are you answering a call twice?');             // 352
        return;                                                                                                        // 353
      }                                                                                                                // 354
                                                                                                                       //
      this.options._payload._stream = stream;                                                                          // 356
      this.localStream = stream;                                                                                       // 358
      Negotiator.startConnection(this, this.options._payload); // Retrieve lost messages stored because PeerConnection not set up.
                                                                                                                       //
      var messages = this.provider._getMessages(this.id);                                                              // 364
                                                                                                                       //
      for (var i = 0, ii = messages.length; i < ii; i += 1) {                                                          // 365
        this.handleMessage(messages[i]);                                                                               // 366
      }                                                                                                                // 367
                                                                                                                       //
      this.open = true;                                                                                                // 368
    }; /**                                                                                                             // 369
        * Exposed functionality for users.                                                                             //
        */ /** Allows user to close connection. */                                                                     //
                                                                                                                       //
    MediaConnection.prototype.close = function () {                                                                    // 376
      if (!this.open) {                                                                                                // 377
        return;                                                                                                        // 378
      }                                                                                                                // 379
                                                                                                                       //
      this.open = false;                                                                                               // 380
      Negotiator.cleanup(this);                                                                                        // 381
      this.emit('close');                                                                                              // 382
    };                                                                                                                 // 383
                                                                                                                       //
    module.exports = MediaConnection;                                                                                  // 385
  }, {                                                                                                                 // 387
    "./negotiator": 5,                                                                                                 // 387
    "./util": 8,                                                                                                       // 387
    "eventemitter3": 9                                                                                                 // 387
  }],                                                                                                                  // 387
  5: [function (require, module, exports) {                                                                            // 387
    var util = require('./util');                                                                                      // 388
                                                                                                                       //
    var RTCPeerConnection = require('./adapter').RTCPeerConnection;                                                    // 389
                                                                                                                       //
    var RTCSessionDescription = require('./adapter').RTCSessionDescription;                                            // 390
                                                                                                                       //
    var RTCIceCandidate = require('./adapter').RTCIceCandidate; /**                                                    // 391
                                                                 * Manages all negotiations between Peers.             //
                                                                 */                                                    //
                                                                                                                       //
    var Negotiator = {                                                                                                 // 396
      pcs: {                                                                                                           // 397
        data: {},                                                                                                      // 398
        media: {}                                                                                                      // 399
      },                                                                                                               // 397
      // type => {peerId: {pc_id: pc}}.                                                                                // 400
      //providers: {}, // provider's id => providers (there may be multiple providers/client.                          // 401
      queue: [] // connections that are delayed due to a PC being in use.                                              // 402
                                                                                                                       //
    };                                                                                                                 // 396
    Negotiator._idPrefix = 'pc_'; /** Returns a PeerConnection object set up correctly (for data, media). */           // 405
                                                                                                                       //
    Negotiator.startConnection = function (connection, options) {                                                      // 408
      var pc = Negotiator._getPeerConnection(connection, options);                                                     // 409
                                                                                                                       //
      if (connection.type === 'media' && options._stream) {                                                            // 411
        // Add the stream.                                                                                             // 412
        pc.addStream(options._stream);                                                                                 // 413
      } // Set the connection's PC.                                                                                    // 414
                                                                                                                       //
                                                                                                                       //
      connection.pc = connection.peerConnection = pc; // What do we need to do now?                                    // 417
                                                                                                                       //
      if (options.originator) {                                                                                        // 419
        if (connection.type === 'data') {                                                                              // 420
          // Create the datachannel.                                                                                   // 421
          var config = {}; // Dropping reliable:false support, since it seems to be crashing                           // 422
          // Chrome.                                                                                                   // 424
          /*if (util.supports.sctp && !options.reliable) {                                                             // 425
            // If we have canonical reliable support...                                                                //
            config = {maxRetransmits: 0};                                                                              //
          }*/ // Fallback to ensure older browsers don't crash.                                                        //
                                                                                                                       //
          if (!util.supports.sctp) {                                                                                   // 430
            config = {                                                                                                 // 431
              reliable: options.reliable                                                                               // 431
            };                                                                                                         // 431
          }                                                                                                            // 432
                                                                                                                       //
          var dc = pc.createDataChannel(connection.label, config);                                                     // 433
          connection.initialize(dc);                                                                                   // 434
        }                                                                                                              // 435
                                                                                                                       //
        if (!util.supports.onnegotiationneeded) {                                                                      // 437
          Negotiator._makeOffer(connection);                                                                           // 438
        }                                                                                                              // 439
      } else {                                                                                                         // 440
        Negotiator.handleSDP('OFFER', connection, options.sdp);                                                        // 441
      }                                                                                                                // 442
    };                                                                                                                 // 443
                                                                                                                       //
    Negotiator._getPeerConnection = function (connection, options) {                                                   // 445
      if (!Negotiator.pcs[connection.type]) {                                                                          // 446
        util.error(connection.type + ' is not a valid connection type. Maybe you overrode the `type` property somewhere.');
      }                                                                                                                // 448
                                                                                                                       //
      if (!Negotiator.pcs[connection.type][connection.peer]) {                                                         // 450
        Negotiator.pcs[connection.type][connection.peer] = {};                                                         // 451
      }                                                                                                                // 452
                                                                                                                       //
      var peerConnections = Negotiator.pcs[connection.type][connection.peer];                                          // 453
      var pc; // Not multiplexing while FF and Chrome have not-great support for it.                                   // 455
      /*if (options.multiplex) {                                                                                       // 457
        ids = Object.keys(peerConnections);                                                                            //
        for (var i = 0, ii = ids.length; i < ii; i += 1) {                                                             //
          pc = peerConnections[ids[i]];                                                                                //
          if (pc.signalingState === 'stable') {                                                                        //
            break; // We can go ahead and use this PC.                                                                 //
          }                                                                                                            //
        }                                                                                                              //
      } else */                                                                                                        //
                                                                                                                       //
      if (options.pc) {                                                                                                // 466
        // Simplest case: PC id already provided for us.                                                               // 466
        pc = Negotiator.pcs[connection.type][connection.peer][options.pc];                                             // 467
      }                                                                                                                // 468
                                                                                                                       //
      if (!pc || pc.signalingState !== 'stable') {                                                                     // 470
        pc = Negotiator._startPeerConnection(connection);                                                              // 471
      }                                                                                                                // 472
                                                                                                                       //
      return pc;                                                                                                       // 473
    }; /*                                                                                                              // 474
       Negotiator._addProvider = function(provider) {                                                                  //
         if ((!provider.id && !provider.disconnected) || !provider.socket.open) {                                      //
           // Wait for provider to obtain an ID.                                                                       //
           provider.on('open', function(id) {                                                                          //
             Negotiator._addProvider(provider);                                                                        //
           });                                                                                                         //
         } else {                                                                                                      //
           Negotiator.providers[provider.id] = provider;                                                               //
         }                                                                                                             //
       }*/ /** Start a PC. */                                                                                          //
                                                                                                                       //
    Negotiator._startPeerConnection = function (connection) {                                                          // 490
      util.log('Creating RTCPeerConnection.');                                                                         // 491
      var id = Negotiator._idPrefix + util.randomToken();                                                              // 493
      var optional = {};                                                                                               // 494
                                                                                                                       //
      if (connection.type === 'data' && !util.supports.sctp) {                                                         // 496
        optional = {                                                                                                   // 497
          optional: [{                                                                                                 // 497
            RtpDataChannels: true                                                                                      // 497
          }]                                                                                                           // 497
        };                                                                                                             // 497
      } else if (connection.type === 'media') {                                                                        // 498
        // Interop req for chrome.                                                                                     // 499
        optional = {                                                                                                   // 500
          optional: [{                                                                                                 // 500
            DtlsSrtpKeyAgreement: true                                                                                 // 500
          }]                                                                                                           // 500
        };                                                                                                             // 500
      }                                                                                                                // 501
                                                                                                                       //
      var pc = new RTCPeerConnection(connection.provider.options.config, optional);                                    // 503
      Negotiator.pcs[connection.type][connection.peer][id] = pc;                                                       // 504
                                                                                                                       //
      Negotiator._setupListeners(connection, pc, id);                                                                  // 506
                                                                                                                       //
      return pc;                                                                                                       // 508
    }; /** Set up various WebRTC listeners. */                                                                         // 509
                                                                                                                       //
    Negotiator._setupListeners = function (connection, pc, pc_id) {                                                    // 512
      var peerId = connection.peer;                                                                                    // 513
      var connectionId = connection.id;                                                                                // 514
      var provider = connection.provider; // ICE CANDIDATES.                                                           // 515
                                                                                                                       //
      util.log('Listening for ICE candidates.');                                                                       // 518
                                                                                                                       //
      pc.onicecandidate = function (evt) {                                                                             // 519
        if (evt.candidate) {                                                                                           // 520
          util.log('Received ICE candidates for:', connection.peer);                                                   // 521
          provider.socket.send({                                                                                       // 522
            type: 'CANDIDATE',                                                                                         // 523
            payload: {                                                                                                 // 524
              candidate: evt.candidate,                                                                                // 525
              type: connection.type,                                                                                   // 526
              connectionId: connection.id                                                                              // 527
            },                                                                                                         // 524
            dst: peerId                                                                                                // 529
          });                                                                                                          // 522
        }                                                                                                              // 531
      };                                                                                                               // 532
                                                                                                                       //
      pc.oniceconnectionstatechange = function () {                                                                    // 534
        switch (pc.iceConnectionState) {                                                                               // 535
          case 'disconnected':                                                                                         // 536
          case 'failed':                                                                                               // 537
            util.log('iceConnectionState is disconnected, closing connections to ' + peerId);                          // 538
            connection.close();                                                                                        // 539
            break;                                                                                                     // 540
                                                                                                                       //
          case 'completed':                                                                                            // 541
            pc.onicecandidate = util.noop;                                                                             // 542
            break;                                                                                                     // 543
        }                                                                                                              // 535
      }; // Fallback for older Chrome impls.                                                                           // 545
                                                                                                                       //
                                                                                                                       //
      pc.onicechange = pc.oniceconnectionstatechange; // ONNEGOTIATIONNEEDED (Chrome)                                  // 548
                                                                                                                       //
      util.log('Listening for `negotiationneeded`');                                                                   // 551
                                                                                                                       //
      pc.onnegotiationneeded = function () {                                                                           // 552
        util.log('`negotiationneeded` triggered');                                                                     // 553
                                                                                                                       //
        if (pc.signalingState == 'stable') {                                                                           // 554
          Negotiator._makeOffer(connection);                                                                           // 555
        } else {                                                                                                       // 556
          util.log('onnegotiationneeded triggered when not stable. Is another connection being established?');         // 557
        }                                                                                                              // 558
      }; // DATACONNECTION.                                                                                            // 559
                                                                                                                       //
                                                                                                                       //
      util.log('Listening for data channel'); // Fired between offer and answer, so options should already be saved    // 562
      // in the options hash.                                                                                          // 564
                                                                                                                       //
      pc.ondatachannel = function (evt) {                                                                              // 565
        util.log('Received data channel');                                                                             // 566
        var dc = evt.channel;                                                                                          // 567
        var connection = provider.getConnection(peerId, connectionId);                                                 // 568
        connection.initialize(dc);                                                                                     // 569
      }; // MEDIACONNECTION.                                                                                           // 570
                                                                                                                       //
                                                                                                                       //
      util.log('Listening for remote stream');                                                                         // 573
                                                                                                                       //
      pc.onaddstream = function (evt) {                                                                                // 574
        util.log('Received remote stream');                                                                            // 575
        var stream = evt.stream;                                                                                       // 576
        var connection = provider.getConnection(peerId, connectionId); // 10/10/2014: looks like in Chrome 38, onaddstream is triggered after
        // setting the remote description. Our connection object in these cases                                        // 579
        // is actually a DATA connection, so addStream fails.                                                          // 580
        // TODO: This is hopefully just a temporary fix. We should try to                                              // 581
        // understand why this is happening.                                                                           // 582
                                                                                                                       //
        if (connection.type === 'media') {                                                                             // 583
          connection.addStream(stream);                                                                                // 584
        }                                                                                                              // 585
      };                                                                                                               // 586
    };                                                                                                                 // 587
                                                                                                                       //
    Negotiator.cleanup = function (connection) {                                                                       // 589
      util.log('Cleaning up PeerConnection to ' + connection.peer);                                                    // 590
      var pc = connection.pc;                                                                                          // 592
                                                                                                                       //
      if (!!pc && (pc.readyState !== 'closed' || pc.signalingState !== 'closed')) {                                    // 594
        pc.close();                                                                                                    // 595
        connection.pc = null;                                                                                          // 596
      }                                                                                                                // 597
    };                                                                                                                 // 598
                                                                                                                       //
    Negotiator._makeOffer = function (connection) {                                                                    // 600
      var pc = connection.pc;                                                                                          // 601
      pc.createOffer(function (offer) {                                                                                // 602
        util.log('Created offer.');                                                                                    // 603
                                                                                                                       //
        if (!util.supports.sctp && connection.type === 'data' && connection.reliable) {                                // 605
          offer.sdp = Reliable.higherBandwidthSDP(offer.sdp);                                                          // 606
        }                                                                                                              // 607
                                                                                                                       //
        pc.setLocalDescription(offer, function () {                                                                    // 609
          util.log('Set localDescription: offer', 'for:', connection.peer);                                            // 610
          connection.provider.socket.send({                                                                            // 611
            type: 'OFFER',                                                                                             // 612
            payload: {                                                                                                 // 613
              sdp: offer,                                                                                              // 614
              type: connection.type,                                                                                   // 615
              label: connection.label,                                                                                 // 616
              connectionId: connection.id,                                                                             // 617
              reliable: connection.reliable,                                                                           // 618
              serialization: connection.serialization,                                                                 // 619
              metadata: connection.metadata,                                                                           // 620
              browser: util.browser                                                                                    // 621
            },                                                                                                         // 613
            dst: connection.peer                                                                                       // 623
          });                                                                                                          // 611
        }, function (err) {                                                                                            // 625
          connection.provider.emitError('webrtc', err);                                                                // 626
          util.log('Failed to setLocalDescription, ', err);                                                            // 627
        });                                                                                                            // 628
      }, function (err) {                                                                                              // 629
        connection.provider.emitError('webrtc', err);                                                                  // 630
        util.log('Failed to createOffer, ', err);                                                                      // 631
      }, connection.options.constraints);                                                                              // 632
    };                                                                                                                 // 633
                                                                                                                       //
    Negotiator._makeAnswer = function (connection) {                                                                   // 635
      var pc = connection.pc;                                                                                          // 636
      pc.createAnswer(function (answer) {                                                                              // 638
        util.log('Created answer.');                                                                                   // 639
                                                                                                                       //
        if (!util.supports.sctp && connection.type === 'data' && connection.reliable) {                                // 641
          answer.sdp = Reliable.higherBandwidthSDP(answer.sdp);                                                        // 642
        }                                                                                                              // 643
                                                                                                                       //
        pc.setLocalDescription(answer, function () {                                                                   // 645
          util.log('Set localDescription: answer', 'for:', connection.peer);                                           // 646
          connection.provider.socket.send({                                                                            // 647
            type: 'ANSWER',                                                                                            // 648
            payload: {                                                                                                 // 649
              sdp: answer,                                                                                             // 650
              type: connection.type,                                                                                   // 651
              connectionId: connection.id,                                                                             // 652
              browser: util.browser                                                                                    // 653
            },                                                                                                         // 649
            dst: connection.peer                                                                                       // 655
          });                                                                                                          // 647
        }, function (err) {                                                                                            // 657
          connection.provider.emitError('webrtc', err);                                                                // 658
          util.log('Failed to setLocalDescription, ', err);                                                            // 659
        });                                                                                                            // 660
      }, function (err) {                                                                                              // 661
        connection.provider.emitError('webrtc', err);                                                                  // 662
        util.log('Failed to create answer, ', err);                                                                    // 663
      });                                                                                                              // 664
    }; /** Handle an SDP. */                                                                                           // 665
                                                                                                                       //
    Negotiator.handleSDP = function (type, connection, sdp) {                                                          // 668
      sdp = new RTCSessionDescription(sdp);                                                                            // 669
      var pc = connection.pc;                                                                                          // 670
      util.log('Setting remote description', sdp);                                                                     // 672
      pc.setRemoteDescription(sdp, function () {                                                                       // 673
        util.log('Set remoteDescription:', type, 'for:', connection.peer);                                             // 674
                                                                                                                       //
        if (type === 'OFFER') {                                                                                        // 676
          Negotiator._makeAnswer(connection);                                                                          // 677
        }                                                                                                              // 678
      }, function (err) {                                                                                              // 679
        connection.provider.emitError('webrtc', err);                                                                  // 680
        util.log('Failed to setRemoteDescription, ', err);                                                             // 681
      });                                                                                                              // 682
    }; /** Handle a candidate. */                                                                                      // 683
                                                                                                                       //
    Negotiator.handleCandidate = function (connection, ice) {                                                          // 686
      var candidate = ice.candidate;                                                                                   // 687
      var sdpMLineIndex = ice.sdpMLineIndex;                                                                           // 688
      connection.pc.addIceCandidate(new RTCIceCandidate({                                                              // 689
        sdpMLineIndex: sdpMLineIndex,                                                                                  // 690
        candidate: candidate                                                                                           // 691
      }));                                                                                                             // 689
      util.log('Added ICE candidate for:', connection.peer);                                                           // 693
    };                                                                                                                 // 694
                                                                                                                       //
    module.exports = Negotiator;                                                                                       // 696
  }, {                                                                                                                 // 698
    "./adapter": 1,                                                                                                    // 698
    "./util": 8                                                                                                        // 698
  }],                                                                                                                  // 698
  6: [function (require, module, exports) {                                                                            // 698
    var util = require('./util');                                                                                      // 699
                                                                                                                       //
    var EventEmitter = require('eventemitter3');                                                                       // 700
                                                                                                                       //
    var Socket = require('./socket');                                                                                  // 701
                                                                                                                       //
    var MediaConnection = require('./mediaconnection');                                                                // 702
                                                                                                                       //
    var DataConnection = require('./dataconnection'); /**                                                              // 703
                                                       * A peer who can initiate connections with other peers.         //
                                                       */                                                              //
                                                                                                                       //
    function Peer(id, options) {                                                                                       // 708
      if (!(this instanceof Peer)) return new Peer(id, options);                                                       // 709
      EventEmitter.call(this); // Deal with overloading                                                                // 710
                                                                                                                       //
      if (id && id.constructor == Object) {                                                                            // 713
        options = id;                                                                                                  // 714
        id = undefined;                                                                                                // 715
      } else if (id) {                                                                                                 // 716
        // Ensure id is a string                                                                                       // 717
        id = id.toString();                                                                                            // 718
      } //                                                                                                             // 719
      // Configurize options                                                                                           // 722
                                                                                                                       //
                                                                                                                       //
      options = util.extend({                                                                                          // 723
        debug: 0,                                                                                                      // 724
        // 1: Errors, 2: Warnings, 3: All logs                                                                         // 724
        host: util.CLOUD_HOST,                                                                                         // 725
        port: util.CLOUD_PORT,                                                                                         // 726
        key: 'peerjs',                                                                                                 // 727
        path: '/',                                                                                                     // 728
        token: util.randomToken(),                                                                                     // 729
        config: util.defaultConfig                                                                                     // 730
      }, options);                                                                                                     // 723
      this.options = options; // Detect relative URL host.                                                             // 732
                                                                                                                       //
      if (options.host === '/') {                                                                                      // 734
        options.host = window.location.hostname;                                                                       // 735
      } // Set path correctly.                                                                                         // 736
                                                                                                                       //
                                                                                                                       //
      if (options.path[0] !== '/') {                                                                                   // 738
        options.path = '/' + options.path;                                                                             // 739
      }                                                                                                                // 740
                                                                                                                       //
      if (options.path[options.path.length - 1] !== '/') {                                                             // 741
        options.path += '/';                                                                                           // 742
      } // Set whether we use SSL to same as current host                                                              // 743
                                                                                                                       //
                                                                                                                       //
      if (options.secure === undefined && options.host !== util.CLOUD_HOST) {                                          // 746
        options.secure = util.isSecure();                                                                              // 747
      } // Set a custom log function if present                                                                        // 748
                                                                                                                       //
                                                                                                                       //
      if (options.logFunction) {                                                                                       // 750
        util.setLogFunction(options.logFunction);                                                                      // 751
      }                                                                                                                // 752
                                                                                                                       //
      util.setLogLevel(options.debug); //                                                                              // 753
      // Sanity checks                                                                                                 // 756
      // Ensure WebRTC supported                                                                                       // 757
                                                                                                                       //
      if (!util.supports.audioVideo && !util.supports.data) {                                                          // 758
        this._delayedAbort('browser-incompatible', 'The current browser does not support WebRTC');                     // 759
                                                                                                                       //
        return;                                                                                                        // 760
      } // Ensure alphanumeric id                                                                                      // 761
                                                                                                                       //
                                                                                                                       //
      if (!util.validateId(id)) {                                                                                      // 763
        this._delayedAbort('invalid-id', 'ID "' + id + '" is invalid');                                                // 764
                                                                                                                       //
        return;                                                                                                        // 765
      } // Ensure valid key                                                                                            // 766
                                                                                                                       //
                                                                                                                       //
      if (!util.validateKey(options.key)) {                                                                            // 768
        this._delayedAbort('invalid-key', 'API KEY "' + options.key + '" is invalid');                                 // 769
                                                                                                                       //
        return;                                                                                                        // 770
      } // Ensure not using unsecure cloud server on SSL page                                                          // 771
                                                                                                                       //
                                                                                                                       //
      if (options.secure && options.host === '0.peerjs.com') {                                                         // 773
        this._delayedAbort('ssl-unavailable', 'The cloud server currently does not support HTTPS. Please run your own PeerServer to use HTTPS.');
                                                                                                                       //
        return;                                                                                                        // 776
      } //                                                                                                             // 777
      // States.                                                                                                       // 780
                                                                                                                       //
                                                                                                                       //
      this.destroyed = false; // Connections have been killed                                                          // 781
                                                                                                                       //
      this.disconnected = false; // Connection to PeerServer killed but P2P connections still active                   // 782
                                                                                                                       //
      this.open = false; // Sockets and such are not yet open.                                                         // 783
      //                                                                                                               // 784
      // References                                                                                                    // 786
                                                                                                                       //
      this.connections = {}; // DataConnections for this peer.                                                         // 787
                                                                                                                       //
      this._lostMessages = {}; // src => [list of messages]                                                            // 788
      //                                                                                                               // 789
      // Start the server connection                                                                                   // 791
                                                                                                                       //
      this._initializeServerConnection();                                                                              // 792
                                                                                                                       //
      if (id) {                                                                                                        // 793
        this._initialize(id);                                                                                          // 794
      } else {                                                                                                         // 795
        this._retrieveId();                                                                                            // 796
      } //                                                                                                             // 797
                                                                                                                       //
    }                                                                                                                  // 799
                                                                                                                       //
    util.inherits(Peer, EventEmitter); // Initialize the 'socket' (which is actually a mix of XHR streaming and        // 801
    // websockets.)                                                                                                    // 804
                                                                                                                       //
    Peer.prototype._initializeServerConnection = function () {                                                         // 805
      var self = this;                                                                                                 // 806
      this.socket = new Socket(this.options.secure, this.options.host, this.options.port, this.options.path, this.options.key);
      this.socket.on('message', function (data) {                                                                      // 808
        self._handleMessage(data);                                                                                     // 809
      });                                                                                                              // 810
      this.socket.on('error', function (error) {                                                                       // 811
        self._abort('socket-error', error);                                                                            // 812
      });                                                                                                              // 813
      this.socket.on('disconnected', function () {                                                                     // 814
        // If we haven't explicitly disconnected, emit error and disconnect.                                           // 815
        if (!self.disconnected) {                                                                                      // 816
          self.emitError('network', 'Lost connection to server.');                                                     // 817
          self.disconnect();                                                                                           // 818
        }                                                                                                              // 819
      });                                                                                                              // 820
      this.socket.on('close', function () {                                                                            // 821
        // If we haven't explicitly disconnected, emit error.                                                          // 822
        if (!self.disconnected) {                                                                                      // 823
          self._abort('socket-closed', 'Underlying socket is already closed.');                                        // 824
        }                                                                                                              // 825
      });                                                                                                              // 826
    }; /** Get a unique ID from the server via XHR. */                                                                 // 827
                                                                                                                       //
    Peer.prototype._retrieveId = function (cb) {                                                                       // 830
      var self = this;                                                                                                 // 831
      var http = new XMLHttpRequest();                                                                                 // 832
      var protocol = this.options.secure ? 'https://' : 'http://';                                                     // 833
      var url = protocol + this.options.host + ':' + this.options.port + this.options.path + this.options.key + '/id';
      var queryString = '?ts=' + new Date().getTime() + '' + Math.random();                                            // 836
      url += queryString; // If there's no ID we need to wait for one before trying to init socket.                    // 837
                                                                                                                       //
      http.open('get', url, true);                                                                                     // 840
                                                                                                                       //
      http.onerror = function (e) {                                                                                    // 841
        util.error('Error retrieving ID', e);                                                                          // 842
        var pathError = '';                                                                                            // 843
                                                                                                                       //
        if (self.options.path === '/' && self.options.host !== util.CLOUD_HOST) {                                      // 844
          pathError = ' If you passed in a `path` to your self-hosted PeerServer, ' + 'you\'ll also need to pass in that same path when creating a new ' + 'Peer.';
        }                                                                                                              // 848
                                                                                                                       //
        self._abort('server-error', 'Could not get an ID from the server.' + pathError);                               // 849
      };                                                                                                               // 850
                                                                                                                       //
      http.onreadystatechange = function () {                                                                          // 851
        if (http.readyState !== 4) {                                                                                   // 852
          return;                                                                                                      // 853
        }                                                                                                              // 854
                                                                                                                       //
        if (http.status !== 200) {                                                                                     // 855
          http.onerror();                                                                                              // 856
          return;                                                                                                      // 857
        }                                                                                                              // 858
                                                                                                                       //
        self._initialize(http.responseText);                                                                           // 859
      };                                                                                                               // 860
                                                                                                                       //
      http.send(null);                                                                                                 // 861
    }; /** Initialize a connection with the server. */                                                                 // 862
                                                                                                                       //
    Peer.prototype._initialize = function (id) {                                                                       // 865
      this.id = id;                                                                                                    // 866
      this.socket.start(this.id, this.options.token);                                                                  // 867
    }; /** Handles messages from the server. */                                                                        // 868
                                                                                                                       //
    Peer.prototype._handleMessage = function (message) {                                                               // 871
      var type = message.type;                                                                                         // 872
      var payload = message.payload;                                                                                   // 873
      var peer = message.src;                                                                                          // 874
      var connection;                                                                                                  // 875
                                                                                                                       //
      switch (type) {                                                                                                  // 877
        case 'OPEN':                                                                                                   // 878
          // The connection to the server is open.                                                                     // 878
          this.emit('open', this.id);                                                                                  // 879
          this.open = true;                                                                                            // 880
          break;                                                                                                       // 881
                                                                                                                       //
        case 'ERROR':                                                                                                  // 882
          // Server error.                                                                                             // 882
          this._abort('server-error', payload.msg);                                                                    // 883
                                                                                                                       //
          break;                                                                                                       // 884
                                                                                                                       //
        case 'ID-TAKEN':                                                                                               // 885
          // The selected ID is taken.                                                                                 // 885
          this._abort('unavailable-id', 'ID `' + this.id + '` is taken');                                              // 886
                                                                                                                       //
          break;                                                                                                       // 887
                                                                                                                       //
        case 'INVALID-KEY':                                                                                            // 888
          // The given API key cannot be found.                                                                        // 888
          this._abort('invalid-key', 'API KEY "' + this.options.key + '" is invalid');                                 // 889
                                                                                                                       //
          break;                                                                                                       // 890
        //                                                                                                             // 892
                                                                                                                       //
        case 'LEAVE':                                                                                                  // 893
          // Another peer has closed its connection to this peer.                                                      // 893
          util.log('Received leave message from', peer);                                                               // 894
                                                                                                                       //
          this._cleanupPeer(peer);                                                                                     // 895
                                                                                                                       //
          break;                                                                                                       // 896
                                                                                                                       //
        case 'EXPIRE':                                                                                                 // 898
          // The offer sent to a peer has expired without response.                                                    // 898
          this.emitError('peer-unavailable', 'Could not connect to peer ' + peer);                                     // 899
          break;                                                                                                       // 900
                                                                                                                       //
        case 'OFFER':                                                                                                  // 901
          // we should consider switching this to CALL/CONNECT, but this is the least breaking option.                 // 901
          var connectionId = payload.connectionId;                                                                     // 902
          connection = this.getConnection(peer, connectionId);                                                         // 903
                                                                                                                       //
          if (connection) {                                                                                            // 905
            util.warn('Offer received for existing Connection ID:', connectionId); //connection.handleMessage(message);
          } else {                                                                                                     // 908
            // Create a new connection.                                                                                // 909
            if (payload.type === 'media') {                                                                            // 910
              connection = new MediaConnection(peer, this, {                                                           // 911
                connectionId: connectionId,                                                                            // 912
                _payload: payload,                                                                                     // 913
                metadata: payload.metadata                                                                             // 914
              });                                                                                                      // 911
                                                                                                                       //
              this._addConnection(peer, connection);                                                                   // 916
                                                                                                                       //
              this.emit('call', connection);                                                                           // 917
            } else if (payload.type === 'data') {                                                                      // 918
              connection = new DataConnection(peer, this, {                                                            // 919
                connectionId: connectionId,                                                                            // 920
                _payload: payload,                                                                                     // 921
                metadata: payload.metadata,                                                                            // 922
                label: payload.label,                                                                                  // 923
                serialization: payload.serialization,                                                                  // 924
                reliable: payload.reliable                                                                             // 925
              });                                                                                                      // 919
                                                                                                                       //
              this._addConnection(peer, connection);                                                                   // 927
                                                                                                                       //
              this.emit('connection', connection);                                                                     // 928
            } else {                                                                                                   // 929
              util.warn('Received malformed connection type:', payload.type);                                          // 930
              return;                                                                                                  // 931
            } // Find messages.                                                                                        // 932
                                                                                                                       //
                                                                                                                       //
            var messages = this._getMessages(connectionId);                                                            // 934
                                                                                                                       //
            for (var i = 0, ii = messages.length; i < ii; i += 1) {                                                    // 935
              connection.handleMessage(messages[i]);                                                                   // 936
            }                                                                                                          // 937
          }                                                                                                            // 938
                                                                                                                       //
          break;                                                                                                       // 939
                                                                                                                       //
        default:                                                                                                       // 940
          if (!payload) {                                                                                              // 941
            util.warn('You received a malformed message from ' + peer + ' of type ' + type);                           // 942
            return;                                                                                                    // 943
          }                                                                                                            // 944
                                                                                                                       //
          var id = payload.connectionId;                                                                               // 946
          connection = this.getConnection(peer, id);                                                                   // 947
                                                                                                                       //
          if (connection && connection.pc) {                                                                           // 949
            // Pass it on.                                                                                             // 950
            connection.handleMessage(message);                                                                         // 951
          } else if (id) {                                                                                             // 952
            // Store for possible later use                                                                            // 953
            this._storeMessage(id, message);                                                                           // 954
          } else {                                                                                                     // 955
            util.warn('You received an unrecognized message:', message);                                               // 956
          }                                                                                                            // 957
                                                                                                                       //
          break;                                                                                                       // 958
      }                                                                                                                // 877
    }; /** Stores messages without a set up connection, to be claimed later. */                                        // 960
                                                                                                                       //
    Peer.prototype._storeMessage = function (connectionId, message) {                                                  // 963
      if (!this._lostMessages[connectionId]) {                                                                         // 964
        this._lostMessages[connectionId] = [];                                                                         // 965
      }                                                                                                                // 966
                                                                                                                       //
      this._lostMessages[connectionId].push(message);                                                                  // 967
    }; /** Retrieve messages from lost message store */                                                                // 968
                                                                                                                       //
    Peer.prototype._getMessages = function (connectionId) {                                                            // 971
      var messages = this._lostMessages[connectionId];                                                                 // 972
                                                                                                                       //
      if (messages) {                                                                                                  // 973
        delete this._lostMessages[connectionId];                                                                       // 974
        return messages;                                                                                               // 975
      } else {                                                                                                         // 976
        return [];                                                                                                     // 977
      }                                                                                                                // 978
    }; /**                                                                                                             // 979
        * Returns a DataConnection to the specified peer. See documentation for a                                      //
        * complete list of options.                                                                                    //
        */                                                                                                             //
                                                                                                                       //
    Peer.prototype.connect = function (peer, options) {                                                                // 985
      if (this.disconnected) {                                                                                         // 986
        util.warn('You cannot connect to a new Peer because you called ' + '.disconnect() on this Peer and ended your connection with the ' + 'server. You can create a new Peer to reconnect, or call reconnect ' + 'on this peer if you believe its ID to still be available.');
        this.emitError('disconnected', 'Cannot connect to new Peer after disconnecting from server.');                 // 991
        return;                                                                                                        // 992
      }                                                                                                                // 993
                                                                                                                       //
      var connection = new DataConnection(peer, this, options);                                                        // 994
                                                                                                                       //
      this._addConnection(peer, connection);                                                                           // 995
                                                                                                                       //
      return connection;                                                                                               // 996
    }; /**                                                                                                             // 997
        * Returns a MediaConnection to the specified peer. See documentation for a                                     //
        * complete list of options.                                                                                    //
        */                                                                                                             //
                                                                                                                       //
    Peer.prototype.call = function (peer, stream, options) {                                                           // 1003
      if (this.disconnected) {                                                                                         // 1004
        util.warn('You cannot connect to a new Peer because you called ' + '.disconnect() on this Peer and ended your connection with the ' + 'server. You can create a new Peer to reconnect.');
        this.emitError('disconnected', 'Cannot connect to new Peer after disconnecting from server.');                 // 1008
        return;                                                                                                        // 1009
      }                                                                                                                // 1010
                                                                                                                       //
      if (!stream) {                                                                                                   // 1011
        util.error('To call a peer, you must provide a stream from your browser\'s `getUserMedia`.');                  // 1012
        return;                                                                                                        // 1013
      }                                                                                                                // 1014
                                                                                                                       //
      options = options || {};                                                                                         // 1015
      options._stream = stream;                                                                                        // 1016
      var call = new MediaConnection(peer, this, options);                                                             // 1017
                                                                                                                       //
      this._addConnection(peer, call);                                                                                 // 1018
                                                                                                                       //
      return call;                                                                                                     // 1019
    }; /** Add a data/media connection to this peer. */                                                                // 1020
                                                                                                                       //
    Peer.prototype._addConnection = function (peer, connection) {                                                      // 1023
      if (!this.connections[peer]) {                                                                                   // 1024
        this.connections[peer] = [];                                                                                   // 1025
      }                                                                                                                // 1026
                                                                                                                       //
      this.connections[peer].push(connection);                                                                         // 1027
    }; /** Retrieve a data/media connection for this peer. */                                                          // 1028
                                                                                                                       //
    Peer.prototype.getConnection = function (peer, id) {                                                               // 1031
      var connections = this.connections[peer];                                                                        // 1032
                                                                                                                       //
      if (!connections) {                                                                                              // 1033
        return null;                                                                                                   // 1034
      }                                                                                                                // 1035
                                                                                                                       //
      for (var i = 0, ii = connections.length; i < ii; i++) {                                                          // 1036
        if (connections[i].id === id) {                                                                                // 1037
          return connections[i];                                                                                       // 1038
        }                                                                                                              // 1039
      }                                                                                                                // 1040
                                                                                                                       //
      return null;                                                                                                     // 1041
    };                                                                                                                 // 1042
                                                                                                                       //
    Peer.prototype._delayedAbort = function (type, message) {                                                          // 1044
      var self = this;                                                                                                 // 1045
      util.setZeroTimeout(function () {                                                                                // 1046
        self._abort(type, message);                                                                                    // 1047
      });                                                                                                              // 1048
    }; /**                                                                                                             // 1049
        * Destroys the Peer and emits an error message.                                                                //
        * The Peer is not destroyed if it's in a disconnected state, in which case                                     //
        * it retains its disconnected state and its existing connections.                                              //
        */                                                                                                             //
                                                                                                                       //
    Peer.prototype._abort = function (type, message) {                                                                 // 1056
      util.error('Aborting!');                                                                                         // 1057
                                                                                                                       //
      if (!this._lastServerId) {                                                                                       // 1058
        this.destroy();                                                                                                // 1059
      } else {                                                                                                         // 1060
        this.disconnect();                                                                                             // 1061
      }                                                                                                                // 1062
                                                                                                                       //
      this.emitError(type, message);                                                                                   // 1063
    }; /** Emits a typed error message. */                                                                             // 1064
                                                                                                                       //
    Peer.prototype.emitError = function (type, err) {                                                                  // 1067
      util.error('Error:', err);                                                                                       // 1068
                                                                                                                       //
      if (typeof err === 'string') {                                                                                   // 1069
        err = new Error(err);                                                                                          // 1070
      }                                                                                                                // 1071
                                                                                                                       //
      err.type = type;                                                                                                 // 1072
      this.emit('error', err);                                                                                         // 1073
    }; /**                                                                                                             // 1074
        * Destroys the Peer: closes all active connections as well as the connection                                   //
        *  to the server.                                                                                              //
        * Warning: The peer can no longer create or accept connections after being                                     //
        *  destroyed.                                                                                                  //
        */                                                                                                             //
                                                                                                                       //
    Peer.prototype.destroy = function () {                                                                             // 1082
      if (!this.destroyed) {                                                                                           // 1083
        this._cleanup();                                                                                               // 1084
                                                                                                                       //
        this.disconnect();                                                                                             // 1085
        this.destroyed = true;                                                                                         // 1086
      }                                                                                                                // 1087
    }; /** Disconnects every connection on this peer. */                                                               // 1088
                                                                                                                       //
    Peer.prototype._cleanup = function () {                                                                            // 1092
      if (this.connections) {                                                                                          // 1093
        var peers = Object.keys(this.connections);                                                                     // 1094
                                                                                                                       //
        for (var i = 0, ii = peers.length; i < ii; i++) {                                                              // 1095
          this._cleanupPeer(peers[i]);                                                                                 // 1096
        }                                                                                                              // 1097
      }                                                                                                                // 1098
                                                                                                                       //
      this.emit('close');                                                                                              // 1099
    }; /** Closes all connections to this peer. */                                                                     // 1100
                                                                                                                       //
    Peer.prototype._cleanupPeer = function (peer) {                                                                    // 1103
      var connections = this.connections[peer];                                                                        // 1104
                                                                                                                       //
      for (var j = 0, jj = connections.length; j < jj; j += 1) {                                                       // 1105
        connections[j].close();                                                                                        // 1106
      }                                                                                                                // 1107
    }; /**                                                                                                             // 1108
        * Disconnects the Peer's connection to the PeerServer. Does not close any                                      //
        *  active connections.                                                                                         //
        * Warning: The peer can no longer create or accept connections after being                                     //
        *  disconnected. It also cannot reconnect to the server.                                                       //
        */                                                                                                             //
                                                                                                                       //
    Peer.prototype.disconnect = function () {                                                                          // 1116
      var self = this;                                                                                                 // 1117
      util.setZeroTimeout(function () {                                                                                // 1118
        if (!self.disconnected) {                                                                                      // 1119
          self.disconnected = true;                                                                                    // 1120
          self.open = false;                                                                                           // 1121
                                                                                                                       //
          if (self.socket) {                                                                                           // 1122
            self.socket.close();                                                                                       // 1123
          }                                                                                                            // 1124
                                                                                                                       //
          self.emit('disconnected', self.id);                                                                          // 1125
          self._lastServerId = self.id;                                                                                // 1126
          self.id = null;                                                                                              // 1127
        }                                                                                                              // 1128
      });                                                                                                              // 1129
    }; /** Attempts to reconnect with the same ID. */                                                                  // 1130
                                                                                                                       //
    Peer.prototype.reconnect = function () {                                                                           // 1133
      if (this.disconnected && !this.destroyed) {                                                                      // 1134
        util.log('Attempting reconnection to server with ID ' + this._lastServerId);                                   // 1135
        this.disconnected = false;                                                                                     // 1136
                                                                                                                       //
        this._initializeServerConnection();                                                                            // 1137
                                                                                                                       //
        this._initialize(this._lastServerId);                                                                          // 1138
      } else if (this.destroyed) {                                                                                     // 1139
        throw new Error('This peer cannot reconnect to the server. It has already been destroyed.');                   // 1140
      } else if (!this.disconnected && !this.open) {                                                                   // 1141
        // Do nothing. We're still connecting the first time.                                                          // 1142
        util.error('In a hurry? We\'re still trying to make the initial connection!');                                 // 1143
      } else {                                                                                                         // 1144
        throw new Error('Peer ' + this.id + ' cannot reconnect because it is not disconnected from the server!');      // 1145
      }                                                                                                                // 1146
    }; /**                                                                                                             // 1147
        * Get a list of available peer IDs. If you're running your own server, you'll                                  //
        * want to set allow_discovery: true in the PeerServer options. If you're using                                 //
        * the cloud server, email team@peerjs.com to get the functionality enabled for                                 //
        * your key.                                                                                                    //
        */                                                                                                             //
                                                                                                                       //
    Peer.prototype.listAllPeers = function (cb) {                                                                      // 1155
      cb = cb || function () {};                                                                                       // 1156
                                                                                                                       //
      var self = this;                                                                                                 // 1157
      var http = new XMLHttpRequest();                                                                                 // 1158
      var protocol = this.options.secure ? 'https://' : 'http://';                                                     // 1159
      var url = protocol + this.options.host + ':' + this.options.port + this.options.path + this.options.key + '/peers';
      var queryString = '?ts=' + new Date().getTime() + '' + Math.random();                                            // 1162
      url += queryString; // If there's no ID we need to wait for one before trying to init socket.                    // 1163
                                                                                                                       //
      http.open('get', url, true);                                                                                     // 1166
                                                                                                                       //
      http.onerror = function (e) {                                                                                    // 1167
        self._abort('server-error', 'Could not get peers from the server.');                                           // 1168
                                                                                                                       //
        cb([]);                                                                                                        // 1169
      };                                                                                                               // 1170
                                                                                                                       //
      http.onreadystatechange = function () {                                                                          // 1171
        if (http.readyState !== 4) {                                                                                   // 1172
          return;                                                                                                      // 1173
        }                                                                                                              // 1174
                                                                                                                       //
        if (http.status === 401) {                                                                                     // 1175
          var helpfulError = '';                                                                                       // 1176
                                                                                                                       //
          if (self.options.host !== util.CLOUD_HOST) {                                                                 // 1177
            helpfulError = 'It looks like you\'re using the cloud server. You can email ' + 'team@peerjs.com to enable peer listing for your API key.';
          } else {                                                                                                     // 1180
            helpfulError = 'You need to enable `allow_discovery` on your self-hosted ' + 'PeerServer to use this feature.';
          }                                                                                                            // 1183
                                                                                                                       //
          cb([]);                                                                                                      // 1184
          throw new Error('It doesn\'t look like you have permission to list peers IDs. ' + helpfulError);             // 1185
        } else if (http.status !== 200) {                                                                              // 1186
          cb([]);                                                                                                      // 1187
        } else {                                                                                                       // 1188
          cb(JSON.parse(http.responseText));                                                                           // 1189
        }                                                                                                              // 1190
      };                                                                                                               // 1191
                                                                                                                       //
      http.send(null);                                                                                                 // 1192
    };                                                                                                                 // 1193
                                                                                                                       //
    module.exports = Peer;                                                                                             // 1195
  }, {                                                                                                                 // 1197
    "./dataconnection": 2,                                                                                             // 1197
    "./mediaconnection": 4,                                                                                            // 1197
    "./socket": 7,                                                                                                     // 1197
    "./util": 8,                                                                                                       // 1197
    "eventemitter3": 9                                                                                                 // 1197
  }],                                                                                                                  // 1197
  7: [function (require, module, exports) {                                                                            // 1197
    var util = require('./util');                                                                                      // 1198
                                                                                                                       //
    var EventEmitter = require('eventemitter3'); /**                                                                   // 1199
                                                  * An abstraction on top of WebSockets and XHR streaming to provide fastest
                                                  * possible connection for peers.                                     //
                                                  */                                                                   //
                                                                                                                       //
    function Socket(secure, host, port, path, key) {                                                                   // 1205
      if (!(this instanceof Socket)) return new Socket(secure, host, port, path, key);                                 // 1206
      EventEmitter.call(this); // Disconnected manually.                                                               // 1208
                                                                                                                       //
      this.disconnected = false;                                                                                       // 1211
      this._queue = [];                                                                                                // 1212
      var httpProtocol = secure ? 'https://' : 'http://';                                                              // 1214
      var wsProtocol = secure ? 'wss://' : 'ws://';                                                                    // 1215
      this._httpUrl = httpProtocol + host + ':' + port + path + key;                                                   // 1216
      this._wsUrl = wsProtocol + host + ':' + port + path + 'peerjs?key=' + key;                                       // 1217
    }                                                                                                                  // 1218
                                                                                                                       //
    util.inherits(Socket, EventEmitter); /** Check in with ID or get one from server. */                               // 1220
                                                                                                                       //
    Socket.prototype.start = function (id, token) {                                                                    // 1224
      this.id = id;                                                                                                    // 1225
      this._httpUrl += '/' + id + '/' + token;                                                                         // 1227
      this._wsUrl += '&id=' + id + '&token=' + token;                                                                  // 1228
                                                                                                                       //
      this._startXhrStream();                                                                                          // 1230
                                                                                                                       //
      this._startWebSocket();                                                                                          // 1231
    }; /** Start up websocket communications. */                                                                       // 1232
                                                                                                                       //
    Socket.prototype._startWebSocket = function (id) {                                                                 // 1236
      var self = this;                                                                                                 // 1237
                                                                                                                       //
      if (this._socket) {                                                                                              // 1239
        return;                                                                                                        // 1240
      }                                                                                                                // 1241
                                                                                                                       //
      this._socket = new WebSocket(this._wsUrl);                                                                       // 1243
                                                                                                                       //
      this._socket.onmessage = function (event) {                                                                      // 1245
        try {                                                                                                          // 1246
          var data = JSON.parse(event.data);                                                                           // 1247
        } catch (e) {                                                                                                  // 1248
          util.log('Invalid server message', event.data);                                                              // 1249
          return;                                                                                                      // 1250
        }                                                                                                              // 1251
                                                                                                                       //
        self.emit('message', data);                                                                                    // 1252
      };                                                                                                               // 1253
                                                                                                                       //
      this._socket.onclose = function (event) {                                                                        // 1255
        util.log('Socket closed.');                                                                                    // 1256
        self.disconnected = true;                                                                                      // 1257
        self.emit('disconnected');                                                                                     // 1258
      }; // Take care of the queue of connections if necessary and make sure Peer knows                                // 1259
      // socket is open.                                                                                               // 1262
                                                                                                                       //
                                                                                                                       //
      this._socket.onopen = function () {                                                                              // 1263
        if (self._timeout) {                                                                                           // 1264
          clearTimeout(self._timeout);                                                                                 // 1265
          setTimeout(function () {                                                                                     // 1266
            self._http.abort();                                                                                        // 1267
                                                                                                                       //
            self._http = null;                                                                                         // 1268
          }, 5000);                                                                                                    // 1269
        }                                                                                                              // 1270
                                                                                                                       //
        self._sendQueuedMessages();                                                                                    // 1271
                                                                                                                       //
        util.log('Socket open');                                                                                       // 1272
      };                                                                                                               // 1273
    }; /** Start XHR streaming. */                                                                                     // 1274
                                                                                                                       //
    Socket.prototype._startXhrStream = function (n) {                                                                  // 1277
      try {                                                                                                            // 1278
        var self = this;                                                                                               // 1279
        this._http = new XMLHttpRequest();                                                                             // 1280
        this._http._index = 1;                                                                                         // 1281
        this._http._streamIndex = n || 0;                                                                              // 1282
                                                                                                                       //
        this._http.open('post', this._httpUrl + '/id?i=' + this._http._streamIndex, true);                             // 1283
                                                                                                                       //
        this._http.onerror = function () {                                                                             // 1284
          // If we get an error, likely something went wrong.                                                          // 1285
          // Stop streaming.                                                                                           // 1286
          clearTimeout(self._timeout);                                                                                 // 1287
          self.emit('disconnected');                                                                                   // 1288
        };                                                                                                             // 1289
                                                                                                                       //
        this._http.onreadystatechange = function () {                                                                  // 1290
          if (this.readyState == 2 && this.old) {                                                                      // 1291
            this.old.abort();                                                                                          // 1292
            delete this.old;                                                                                           // 1293
          } else if (this.readyState > 2 && this.status === 200 && this.responseText) {                                // 1294
            self._handleStream(this);                                                                                  // 1295
          }                                                                                                            // 1296
        };                                                                                                             // 1297
                                                                                                                       //
        this._http.send(null);                                                                                         // 1298
                                                                                                                       //
        this._setHTTPTimeout();                                                                                        // 1299
      } catch (e) {                                                                                                    // 1300
        util.log('XMLHttpRequest not available; defaulting to WebSockets');                                            // 1301
      }                                                                                                                // 1302
    }; /** Handles onreadystatechange response as a stream. */                                                         // 1303
                                                                                                                       //
    Socket.prototype._handleStream = function (http) {                                                                 // 1307
      // 3 and 4 are loading/done state. All others are not relevant.                                                  // 1308
      var messages = http.responseText.split('\n'); // Check to see if anything needs to be processed on buffer.       // 1309
                                                                                                                       //
      if (http._buffer) {                                                                                              // 1312
        while (http._buffer.length > 0) {                                                                              // 1313
          var index = http._buffer.shift();                                                                            // 1314
                                                                                                                       //
          var bufferedMessage = messages[index];                                                                       // 1315
                                                                                                                       //
          try {                                                                                                        // 1316
            bufferedMessage = JSON.parse(bufferedMessage);                                                             // 1317
          } catch (e) {                                                                                                // 1318
            http._buffer.shift(index);                                                                                 // 1319
                                                                                                                       //
            break;                                                                                                     // 1320
          }                                                                                                            // 1321
                                                                                                                       //
          this.emit('message', bufferedMessage);                                                                       // 1322
        }                                                                                                              // 1323
      }                                                                                                                // 1324
                                                                                                                       //
      var message = messages[http._index];                                                                             // 1326
                                                                                                                       //
      if (message) {                                                                                                   // 1327
        http._index += 1; // Buffering--this message is incomplete and we'll get to it next time.                      // 1328
        // This checks if the httpResponse ended in a `\n`, in which case the last                                     // 1330
        // element of messages should be the empty string.                                                             // 1331
                                                                                                                       //
        if (http._index === messages.length) {                                                                         // 1332
          if (!http._buffer) {                                                                                         // 1333
            http._buffer = [];                                                                                         // 1334
          }                                                                                                            // 1335
                                                                                                                       //
          http._buffer.push(http._index - 1);                                                                          // 1336
        } else {                                                                                                       // 1337
          try {                                                                                                        // 1338
            message = JSON.parse(message);                                                                             // 1339
          } catch (e) {                                                                                                // 1340
            util.log('Invalid server message', message);                                                               // 1341
            return;                                                                                                    // 1342
          }                                                                                                            // 1343
                                                                                                                       //
          this.emit('message', message);                                                                               // 1344
        }                                                                                                              // 1345
      }                                                                                                                // 1346
    };                                                                                                                 // 1347
                                                                                                                       //
    Socket.prototype._setHTTPTimeout = function () {                                                                   // 1349
      var self = this;                                                                                                 // 1350
      this._timeout = setTimeout(function () {                                                                         // 1351
        var old = self._http;                                                                                          // 1352
                                                                                                                       //
        if (!self._wsOpen()) {                                                                                         // 1353
          self._startXhrStream(old._streamIndex + 1);                                                                  // 1354
                                                                                                                       //
          self._http.old = old;                                                                                        // 1355
        } else {                                                                                                       // 1356
          old.abort();                                                                                                 // 1357
        }                                                                                                              // 1358
      }, 25000);                                                                                                       // 1359
    }; /** Is the websocket currently open? */                                                                         // 1360
                                                                                                                       //
    Socket.prototype._wsOpen = function () {                                                                           // 1363
      return this._socket && this._socket.readyState == 1;                                                             // 1364
    }; /** Send queued messages. */                                                                                    // 1365
                                                                                                                       //
    Socket.prototype._sendQueuedMessages = function () {                                                               // 1368
      for (var i = 0, ii = this._queue.length; i < ii; i += 1) {                                                       // 1369
        this.send(this._queue[i]);                                                                                     // 1370
      }                                                                                                                // 1371
    }; /** Exposed send for DC & Peer. */                                                                              // 1372
                                                                                                                       //
    Socket.prototype.send = function (data) {                                                                          // 1375
      if (this.disconnected) {                                                                                         // 1376
        return;                                                                                                        // 1377
      } // If we didn't get an ID yet, we can't yet send anything so we should queue                                   // 1378
      // up these messages.                                                                                            // 1381
                                                                                                                       //
                                                                                                                       //
      if (!this.id) {                                                                                                  // 1382
        this._queue.push(data);                                                                                        // 1383
                                                                                                                       //
        return;                                                                                                        // 1384
      }                                                                                                                // 1385
                                                                                                                       //
      if (!data.type) {                                                                                                // 1387
        this.emit('error', 'Invalid message');                                                                         // 1388
        return;                                                                                                        // 1389
      }                                                                                                                // 1390
                                                                                                                       //
      var message = JSON.stringify(data);                                                                              // 1392
                                                                                                                       //
      if (this._wsOpen()) {                                                                                            // 1393
        this._socket.send(message);                                                                                    // 1394
      } else {                                                                                                         // 1395
        var http = new XMLHttpRequest();                                                                               // 1396
        var url = this._httpUrl + '/' + data.type.toLowerCase();                                                       // 1397
        http.open('post', url, true);                                                                                  // 1398
        http.setRequestHeader('Content-Type', 'application/json');                                                     // 1399
        http.send(message);                                                                                            // 1400
      }                                                                                                                // 1401
    };                                                                                                                 // 1402
                                                                                                                       //
    Socket.prototype.close = function () {                                                                             // 1404
      if (!this.disconnected && this._wsOpen()) {                                                                      // 1405
        this._socket.close();                                                                                          // 1406
                                                                                                                       //
        this.disconnected = true;                                                                                      // 1407
      }                                                                                                                // 1408
    };                                                                                                                 // 1409
                                                                                                                       //
    module.exports = Socket;                                                                                           // 1411
  }, {                                                                                                                 // 1413
    "./util": 8,                                                                                                       // 1413
    "eventemitter3": 9                                                                                                 // 1413
  }],                                                                                                                  // 1413
  8: [function (require, module, exports) {                                                                            // 1413
    var defaultConfig = {                                                                                              // 1414
      'iceServers': [{                                                                                                 // 1414
        'url': 'stun:stun.l.google.com:19302'                                                                          // 1414
      }]                                                                                                               // 1414
    };                                                                                                                 // 1414
    var dataCount = 1;                                                                                                 // 1415
                                                                                                                       //
    var BinaryPack = require('js-binarypack');                                                                         // 1417
                                                                                                                       //
    var RTCPeerConnection = require('./adapter').RTCPeerConnection;                                                    // 1418
                                                                                                                       //
    var util = {                                                                                                       // 1420
      noop: function () {},                                                                                            // 1421
      CLOUD_HOST: '0.peerjs.com',                                                                                      // 1423
      CLOUD_PORT: 9000,                                                                                                // 1424
      // Browsers that need chunking:                                                                                  // 1426
      chunkedBrowsers: {                                                                                               // 1427
        'Chrome': 1                                                                                                    // 1427
      },                                                                                                               // 1427
      chunkedMTU: 16300,                                                                                               // 1428
      // The original 60000 bytes setting does not work when sending data from Firefox to Chrome, which is "cut off" after 16384 bytes and delivered individually.
      // Logging logic                                                                                                 // 1430
      logLevel: 0,                                                                                                     // 1431
      setLogLevel: function (level) {                                                                                  // 1432
        var debugLevel = parseInt(level, 10);                                                                          // 1433
                                                                                                                       //
        if (!isNaN(parseInt(level, 10))) {                                                                             // 1434
          util.logLevel = debugLevel;                                                                                  // 1435
        } else {                                                                                                       // 1436
          // If they are using truthy/falsy values for debug                                                           // 1437
          util.logLevel = level ? 3 : 0;                                                                               // 1438
        }                                                                                                              // 1439
                                                                                                                       //
        util.log = util.warn = util.error = util.noop;                                                                 // 1440
                                                                                                                       //
        if (util.logLevel > 0) {                                                                                       // 1441
          util.error = util._printWith('ERROR');                                                                       // 1442
        }                                                                                                              // 1443
                                                                                                                       //
        if (util.logLevel > 1) {                                                                                       // 1444
          util.warn = util._printWith('WARNING');                                                                      // 1445
        }                                                                                                              // 1446
                                                                                                                       //
        if (util.logLevel > 2) {                                                                                       // 1447
          util.log = util._print;                                                                                      // 1448
        }                                                                                                              // 1449
      },                                                                                                               // 1450
      setLogFunction: function (fn) {                                                                                  // 1451
        if (fn.constructor !== Function) {                                                                             // 1452
          util.warn('The log function you passed in is not a function. Defaulting to regular logs.');                  // 1453
        } else {                                                                                                       // 1454
          util._print = fn;                                                                                            // 1455
        }                                                                                                              // 1456
      },                                                                                                               // 1457
      _printWith: function (prefix) {                                                                                  // 1459
        return function () {                                                                                           // 1460
          var copy = Array.prototype.slice.call(arguments);                                                            // 1461
          copy.unshift(prefix);                                                                                        // 1462
                                                                                                                       //
          util._print.apply(util, copy);                                                                               // 1463
        };                                                                                                             // 1464
      },                                                                                                               // 1465
      _print: function () {                                                                                            // 1466
        var err = false;                                                                                               // 1467
        var copy = Array.prototype.slice.call(arguments);                                                              // 1468
        copy.unshift('PeerJS: ');                                                                                      // 1469
                                                                                                                       //
        for (var i = 0, l = copy.length; i < l; i++) {                                                                 // 1470
          if (copy[i] instanceof Error) {                                                                              // 1471
            copy[i] = '(' + copy[i].name + ') ' + copy[i].message;                                                     // 1472
            err = true;                                                                                                // 1473
          }                                                                                                            // 1474
        }                                                                                                              // 1475
                                                                                                                       //
        err ? console.error.apply(console, copy) : console.log.apply(console, copy);                                   // 1476
      },                                                                                                               // 1477
      //                                                                                                               // 1478
      // Returns browser-agnostic default config                                                                       // 1480
      defaultConfig: defaultConfig,                                                                                    // 1481
      //                                                                                                               // 1482
      // Returns the current browser.                                                                                  // 1484
      browser: function () {                                                                                           // 1485
        if (window.mozRTCPeerConnection) {                                                                             // 1486
          return 'Firefox';                                                                                            // 1487
        } else if (window.webkitRTCPeerConnection) {                                                                   // 1488
          return 'Chrome';                                                                                             // 1489
        } else if (window.RTCPeerConnection) {                                                                         // 1490
          return 'Supported';                                                                                          // 1491
        } else {                                                                                                       // 1492
          return 'Unsupported';                                                                                        // 1493
        }                                                                                                              // 1494
      }(),                                                                                                             // 1495
      //                                                                                                               // 1496
      // Lists which features are supported                                                                            // 1498
      supports: function () {                                                                                          // 1499
        if (typeof RTCPeerConnection === 'undefined') {                                                                // 1500
          return {};                                                                                                   // 1501
        }                                                                                                              // 1502
                                                                                                                       //
        var data = true;                                                                                               // 1504
        var audioVideo = true;                                                                                         // 1505
        var binaryBlob = false;                                                                                        // 1507
        var sctp = false;                                                                                              // 1508
        var onnegotiationneeded = !!window.webkitRTCPeerConnection;                                                    // 1509
        var pc, dc;                                                                                                    // 1511
                                                                                                                       //
        try {                                                                                                          // 1512
          pc = new RTCPeerConnection(defaultConfig, {                                                                  // 1513
            optional: [{                                                                                               // 1513
              RtpDataChannels: true                                                                                    // 1513
            }]                                                                                                         // 1513
          });                                                                                                          // 1513
        } catch (e) {                                                                                                  // 1514
          data = false;                                                                                                // 1515
          audioVideo = false;                                                                                          // 1516
        }                                                                                                              // 1517
                                                                                                                       //
        if (data) {                                                                                                    // 1519
          try {                                                                                                        // 1520
            dc = pc.createDataChannel('_PEERJSTEST');                                                                  // 1521
          } catch (e) {                                                                                                // 1522
            data = false;                                                                                              // 1523
          }                                                                                                            // 1524
        }                                                                                                              // 1525
                                                                                                                       //
        if (data) {                                                                                                    // 1527
          // Binary test                                                                                               // 1528
          try {                                                                                                        // 1529
            dc.binaryType = 'blob';                                                                                    // 1530
            binaryBlob = true;                                                                                         // 1531
          } catch (e) {} // Reliable test.                                                                             // 1532
          // Unfortunately Chrome is a bit unreliable about whether or not they                                        // 1536
          // support reliable.                                                                                         // 1537
                                                                                                                       //
                                                                                                                       //
          var reliablePC = new RTCPeerConnection(defaultConfig, {});                                                   // 1538
                                                                                                                       //
          try {                                                                                                        // 1539
            var reliableDC = reliablePC.createDataChannel('_PEERJSRELIABLETEST', {});                                  // 1540
            sctp = reliableDC.reliable;                                                                                // 1541
          } catch (e) {}                                                                                               // 1542
                                                                                                                       //
          reliablePC.close();                                                                                          // 1544
        } // FIXME: not really the best check...                                                                       // 1545
                                                                                                                       //
                                                                                                                       //
        if (audioVideo) {                                                                                              // 1548
          audioVideo = !!pc.addStream;                                                                                 // 1549
        } // FIXME: this is not great because in theory it doesn't work for                                            // 1550
        // av-only browsers (?).                                                                                       // 1553
                                                                                                                       //
                                                                                                                       //
        if (!onnegotiationneeded && data) {                                                                            // 1554
          // sync default check.                                                                                       // 1555
          var negotiationPC = new RTCPeerConnection(defaultConfig, {                                                   // 1556
            optional: [{                                                                                               // 1556
              RtpDataChannels: true                                                                                    // 1556
            }]                                                                                                         // 1556
          });                                                                                                          // 1556
                                                                                                                       //
          negotiationPC.onnegotiationneeded = function () {                                                            // 1557
            onnegotiationneeded = true; // async check.                                                                // 1558
                                                                                                                       //
            if (util && util.supports) {                                                                               // 1560
              util.supports.onnegotiationneeded = true;                                                                // 1561
            }                                                                                                          // 1562
          };                                                                                                           // 1563
                                                                                                                       //
          negotiationPC.createDataChannel('_PEERJSNEGOTIATIONTEST');                                                   // 1564
          setTimeout(function () {                                                                                     // 1566
            negotiationPC.close();                                                                                     // 1567
          }, 1000);                                                                                                    // 1568
        }                                                                                                              // 1569
                                                                                                                       //
        if (pc) {                                                                                                      // 1571
          pc.close();                                                                                                  // 1572
        }                                                                                                              // 1573
                                                                                                                       //
        return {                                                                                                       // 1575
          audioVideo: audioVideo,                                                                                      // 1576
          data: data,                                                                                                  // 1577
          binaryBlob: binaryBlob,                                                                                      // 1578
          binary: sctp,                                                                                                // 1579
          // deprecated; sctp implies binary support.                                                                  // 1579
          reliable: sctp,                                                                                              // 1580
          // deprecated; sctp implies reliable data.                                                                   // 1580
          sctp: sctp,                                                                                                  // 1581
          onnegotiationneeded: onnegotiationneeded                                                                     // 1582
        };                                                                                                             // 1575
      }(),                                                                                                             // 1584
      //                                                                                                               // 1585
      // Ensure alphanumeric ids                                                                                       // 1587
      validateId: function (id) {                                                                                      // 1588
        // Allow empty ids                                                                                             // 1589
        return !id || /^[A-Za-z0-9_-]+(?:[ _-][A-Za-z0-9]+)*$/.exec(id);                                               // 1590
      },                                                                                                               // 1591
      validateKey: function (key) {                                                                                    // 1593
        // Allow empty keys                                                                                            // 1594
        return !key || /^[A-Za-z0-9_-]+(?:[ _-][A-Za-z0-9]+)*$/.exec(key);                                             // 1595
      },                                                                                                               // 1596
      debug: false,                                                                                                    // 1599
      inherits: function (ctor, superCtor) {                                                                           // 1601
        ctor.super_ = superCtor;                                                                                       // 1602
        ctor.prototype = Object.create(superCtor.prototype, {                                                          // 1603
          constructor: {                                                                                               // 1604
            value: ctor,                                                                                               // 1605
            enumerable: false,                                                                                         // 1606
            writable: true,                                                                                            // 1607
            configurable: true                                                                                         // 1608
          }                                                                                                            // 1604
        });                                                                                                            // 1603
      },                                                                                                               // 1611
      extend: function (dest, source) {                                                                                // 1612
        for (var key in meteorBabelHelpers.sanitizeForInObject(source)) {                                              // 1613
          if (source.hasOwnProperty(key)) {                                                                            // 1614
            dest[key] = source[key];                                                                                   // 1615
          }                                                                                                            // 1616
        }                                                                                                              // 1617
                                                                                                                       //
        return dest;                                                                                                   // 1618
      },                                                                                                               // 1619
      pack: BinaryPack.pack,                                                                                           // 1620
      unpack: BinaryPack.unpack,                                                                                       // 1621
      log: function () {                                                                                               // 1623
        if (util.debug) {                                                                                              // 1624
          var err = false;                                                                                             // 1625
          var copy = Array.prototype.slice.call(arguments);                                                            // 1626
          copy.unshift('PeerJS: ');                                                                                    // 1627
                                                                                                                       //
          for (var i = 0, l = copy.length; i < l; i++) {                                                               // 1628
            if (copy[i] instanceof Error) {                                                                            // 1629
              copy[i] = '(' + copy[i].name + ') ' + copy[i].message;                                                   // 1630
              err = true;                                                                                              // 1631
            }                                                                                                          // 1632
          }                                                                                                            // 1633
                                                                                                                       //
          err ? console.error.apply(console, copy) : console.log.apply(console, copy);                                 // 1634
        }                                                                                                              // 1635
      },                                                                                                               // 1636
      setZeroTimeout: function (global) {                                                                              // 1638
        var timeouts = [];                                                                                             // 1639
        var messageName = 'zero-timeout-message'; // Like setTimeout, but only takes a function argument.	 There's     // 1640
        // no time argument (always zero) and no arguments (you have to                                                // 1643
        // use a closure).                                                                                             // 1644
                                                                                                                       //
        function setZeroTimeoutPostMessage(fn) {                                                                       // 1645
          timeouts.push(fn);                                                                                           // 1646
          global.postMessage(messageName, '*');                                                                        // 1647
        }                                                                                                              // 1648
                                                                                                                       //
        function handleMessage(event) {                                                                                // 1650
          if (event.source == global && event.data == messageName) {                                                   // 1651
            if (event.stopPropagation) {                                                                               // 1652
              event.stopPropagation();                                                                                 // 1653
            }                                                                                                          // 1654
                                                                                                                       //
            if (timeouts.length) {                                                                                     // 1655
              timeouts.shift()();                                                                                      // 1656
            }                                                                                                          // 1657
          }                                                                                                            // 1658
        }                                                                                                              // 1659
                                                                                                                       //
        if (global.addEventListener) {                                                                                 // 1660
          global.addEventListener('message', handleMessage, true);                                                     // 1661
        } else if (global.attachEvent) {                                                                               // 1662
          global.attachEvent('onmessage', handleMessage);                                                              // 1663
        }                                                                                                              // 1664
                                                                                                                       //
        return setZeroTimeoutPostMessage;                                                                              // 1665
      }(window),                                                                                                       // 1666
      // Binary stuff                                                                                                  // 1668
      // chunks a blob.                                                                                                // 1670
      chunk: function (bl) {                                                                                           // 1671
        var chunks = [];                                                                                               // 1672
        var size = bl.size;                                                                                            // 1673
        var start = index = 0;                                                                                         // 1674
        var total = Math.ceil(size / util.chunkedMTU);                                                                 // 1675
                                                                                                                       //
        while (start < size) {                                                                                         // 1676
          var end = Math.min(size, start + util.chunkedMTU);                                                           // 1677
          var b = bl.slice(start, end);                                                                                // 1678
          var chunk = {                                                                                                // 1680
            __peerData: dataCount,                                                                                     // 1681
            n: index,                                                                                                  // 1682
            data: b,                                                                                                   // 1683
            total: total                                                                                               // 1684
          };                                                                                                           // 1680
          chunks.push(chunk);                                                                                          // 1687
          start = end;                                                                                                 // 1689
          index += 1;                                                                                                  // 1690
        }                                                                                                              // 1691
                                                                                                                       //
        dataCount += 1;                                                                                                // 1692
        return chunks;                                                                                                 // 1693
      },                                                                                                               // 1694
      blobToArrayBuffer: function (blob, cb) {                                                                         // 1696
        var fr = new FileReader();                                                                                     // 1697
                                                                                                                       //
        fr.onload = function (evt) {                                                                                   // 1698
          cb(evt.target.result);                                                                                       // 1699
        };                                                                                                             // 1700
                                                                                                                       //
        fr.readAsArrayBuffer(blob);                                                                                    // 1701
      },                                                                                                               // 1702
      blobToBinaryString: function (blob, cb) {                                                                        // 1703
        var fr = new FileReader();                                                                                     // 1704
                                                                                                                       //
        fr.onload = function (evt) {                                                                                   // 1705
          cb(evt.target.result);                                                                                       // 1706
        };                                                                                                             // 1707
                                                                                                                       //
        fr.readAsBinaryString(blob);                                                                                   // 1708
      },                                                                                                               // 1709
      binaryStringToArrayBuffer: function (binary) {                                                                   // 1710
        var byteArray = new Uint8Array(binary.length);                                                                 // 1711
                                                                                                                       //
        for (var i = 0; i < binary.length; i++) {                                                                      // 1712
          byteArray[i] = binary.charCodeAt(i) & 0xff;                                                                  // 1713
        }                                                                                                              // 1714
                                                                                                                       //
        return byteArray.buffer;                                                                                       // 1715
      },                                                                                                               // 1716
      randomToken: function () {                                                                                       // 1717
        return Math.random().toString(36).substr(2);                                                                   // 1718
      },                                                                                                               // 1719
      //                                                                                                               // 1720
      isSecure: function () {                                                                                          // 1722
        return location.protocol === 'https:';                                                                         // 1723
      }                                                                                                                // 1724
    };                                                                                                                 // 1420
    module.exports = util;                                                                                             // 1727
  }, {                                                                                                                 // 1729
    "./adapter": 1,                                                                                                    // 1729
    "js-binarypack": 10                                                                                                // 1729
  }],                                                                                                                  // 1729
  9: [function (require, module, exports) {                                                                            // 1729
    'use strict'; /**                                                                                                  // 1730
                   * Representation of a single EventEmitter function.                                                 //
                   *                                                                                                   //
                   * @param {Function} fn Event handler to be called.                                                  //
                   * @param {Mixed} context Context for function execution.                                            //
                   * @param {Boolean} once Only emit once                                                              //
                   * @api private                                                                                      //
                   */                                                                                                  //
                                                                                                                       //
    function EE(fn, context, once) {                                                                                   // 1740
      this.fn = fn;                                                                                                    // 1741
      this.context = context;                                                                                          // 1742
      this.once = once || false;                                                                                       // 1743
    } /**                                                                                                              // 1744
       * Minimal EventEmitter interface that is molded against the Node.js                                             //
       * EventEmitter interface.                                                                                       //
       *                                                                                                               //
       * @constructor                                                                                                  //
       * @api public                                                                                                   //
       */                                                                                                              //
                                                                                                                       //
    function EventEmitter() {} /* Nothing to set */ /**                                                                // 1753
                                                     * Holds the assigned EventEmitters by name.                       //
                                                     *                                                                 //
                                                     * @type {Object}                                                  //
                                                     * @private                                                        //
                                                     */                                                                //
                                                                                                                       //
    EventEmitter.prototype._events = undefined; /**                                                                    // 1761
                                                 * Return a list of assigned event listeners.                          //
                                                 *                                                                     //
                                                 * @param {String} event The events that should be listed.             //
                                                 * @returns {Array}                                                    //
                                                 * @api public                                                         //
                                                 */                                                                    //
                                                                                                                       //
    EventEmitter.prototype.listeners = function () {                                                                   // 1770
      function listeners(event) {                                                                                      // 1770
        if (!this._events || !this._events[event]) return [];                                                          // 1771
                                                                                                                       //
        for (var i = 0, l = this._events[event].length, ee = []; i < l; i++) {                                         // 1773
          ee.push(this._events[event][i].fn);                                                                          // 1774
        }                                                                                                              // 1775
                                                                                                                       //
        return ee;                                                                                                     // 1777
      }                                                                                                                // 1778
                                                                                                                       //
      return listeners;                                                                                                // 1770
    }(); /**                                                                                                           // 1770
          * Emit an event to all registered event listeners.                                                           //
          *                                                                                                            //
          * @param {String} event The name of the event.                                                               //
          * @returns {Boolean} Indication if we've emitted an event.                                                   //
          * @api public                                                                                                //
          */                                                                                                           //
                                                                                                                       //
    EventEmitter.prototype.emit = function () {                                                                        // 1787
      function emit(event, a1, a2, a3, a4, a5) {                                                                       // 1787
        if (!this._events || !this._events[event]) return false;                                                       // 1788
        var listeners = this._events[event],                                                                           // 1790
            length = listeners.length,                                                                                 // 1790
            len = arguments.length,                                                                                    // 1790
            ee = listeners[0],                                                                                         // 1790
            args,                                                                                                      // 1790
            i,                                                                                                         // 1790
            j;                                                                                                         // 1790
                                                                                                                       //
        if (1 === length) {                                                                                            // 1797
          if (ee.once) this.removeListener(event, ee.fn, true);                                                        // 1798
                                                                                                                       //
          switch (len) {                                                                                               // 1800
            case 1:                                                                                                    // 1801
              return ee.fn.call(ee.context), true;                                                                     // 1801
                                                                                                                       //
            case 2:                                                                                                    // 1802
              return ee.fn.call(ee.context, a1), true;                                                                 // 1802
                                                                                                                       //
            case 3:                                                                                                    // 1803
              return ee.fn.call(ee.context, a1, a2), true;                                                             // 1803
                                                                                                                       //
            case 4:                                                                                                    // 1804
              return ee.fn.call(ee.context, a1, a2, a3), true;                                                         // 1804
                                                                                                                       //
            case 5:                                                                                                    // 1805
              return ee.fn.call(ee.context, a1, a2, a3, a4), true;                                                     // 1805
                                                                                                                       //
            case 6:                                                                                                    // 1806
              return ee.fn.call(ee.context, a1, a2, a3, a4, a5), true;                                                 // 1806
          }                                                                                                            // 1800
                                                                                                                       //
          for (i = 1, args = new Array(len - 1); i < len; i++) {                                                       // 1809
            args[i - 1] = arguments[i];                                                                                // 1810
          }                                                                                                            // 1811
                                                                                                                       //
          ee.fn.apply(ee.context, args);                                                                               // 1813
        } else {                                                                                                       // 1814
          for (i = 0; i < length; i++) {                                                                               // 1815
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, true);                                  // 1816
                                                                                                                       //
            switch (len) {                                                                                             // 1818
              case 1:                                                                                                  // 1819
                listeners[i].fn.call(listeners[i].context);                                                            // 1819
                break;                                                                                                 // 1819
                                                                                                                       //
              case 2:                                                                                                  // 1820
                listeners[i].fn.call(listeners[i].context, a1);                                                        // 1820
                break;                                                                                                 // 1820
                                                                                                                       //
              case 3:                                                                                                  // 1821
                listeners[i].fn.call(listeners[i].context, a1, a2);                                                    // 1821
                break;                                                                                                 // 1821
                                                                                                                       //
              default:                                                                                                 // 1822
                if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {                                      // 1823
                  args[j - 1] = arguments[j];                                                                          // 1824
                }                                                                                                      // 1825
                listeners[i].fn.apply(listeners[i].context, args);                                                     // 1827
            }                                                                                                          // 1818
          }                                                                                                            // 1829
        }                                                                                                              // 1830
                                                                                                                       //
        return true;                                                                                                   // 1832
      }                                                                                                                // 1833
                                                                                                                       //
      return emit;                                                                                                     // 1787
    }(); /**                                                                                                           // 1787
          * Register a new EventListener for the given event.                                                          //
          *                                                                                                            //
          * @param {String} event Name of the event.                                                                   //
          * @param {Functon} fn Callback function.                                                                     //
          * @param {Mixed} context The context of the function.                                                        //
          * @api public                                                                                                //
          */                                                                                                           //
                                                                                                                       //
    EventEmitter.prototype.on = function () {                                                                          // 1843
      function on(event, fn, context) {                                                                                // 1843
        if (!this._events) this._events = {};                                                                          // 1844
        if (!this._events[event]) this._events[event] = [];                                                            // 1845
                                                                                                                       //
        this._events[event].push(new EE(fn, context || this));                                                         // 1846
                                                                                                                       //
        return this;                                                                                                   // 1848
      }                                                                                                                // 1849
                                                                                                                       //
      return on;                                                                                                       // 1843
    }(); /**                                                                                                           // 1843
          * Add an EventListener that's only called once.                                                              //
          *                                                                                                            //
          * @param {String} event Name of the event.                                                                   //
          * @param {Function} fn Callback function.                                                                    //
          * @param {Mixed} context The context of the function.                                                        //
          * @api public                                                                                                //
          */                                                                                                           //
                                                                                                                       //
    EventEmitter.prototype.once = function () {                                                                        // 1859
      function once(event, fn, context) {                                                                              // 1859
        if (!this._events) this._events = {};                                                                          // 1860
        if (!this._events[event]) this._events[event] = [];                                                            // 1861
                                                                                                                       //
        this._events[event].push(new EE(fn, context || this, true));                                                   // 1862
                                                                                                                       //
        return this;                                                                                                   // 1864
      }                                                                                                                // 1865
                                                                                                                       //
      return once;                                                                                                     // 1859
    }(); /**                                                                                                           // 1859
          * Remove event listeners.                                                                                    //
          *                                                                                                            //
          * @param {String} event The event we want to remove.                                                         //
          * @param {Function} fn The listener that we need to find.                                                    //
          * @param {Boolean} once Only remove once listeners.                                                          //
          * @api public                                                                                                //
          */                                                                                                           //
                                                                                                                       //
    EventEmitter.prototype.removeListener = function () {                                                              // 1875
      function removeListener(event, fn, once) {                                                                       // 1875
        if (!this._events || !this._events[event]) return this;                                                        // 1876
        var listeners = this._events[event],                                                                           // 1878
            events = [];                                                                                               // 1878
        if (fn) for (var i = 0, length = listeners.length; i < length; i++) {                                          // 1881
          if (listeners[i].fn !== fn && listeners[i].once !== once) {                                                  // 1882
            events.push(listeners[i]);                                                                                 // 1883
          }                                                                                                            // 1884
        } //                                                                                                           // 1885
        // Reset the array, or remove it completely if we have no more listeners.                                      // 1888
        //                                                                                                             // 1889
                                                                                                                       //
        if (events.length) this._events[event] = events;else this._events[event] = null;                               // 1890
        return this;                                                                                                   // 1893
      }                                                                                                                // 1894
                                                                                                                       //
      return removeListener;                                                                                           // 1875
    }(); /**                                                                                                           // 1875
          * Remove all listeners or only the listeners for the specified event.                                        //
          *                                                                                                            //
          * @param {String} event The event want to remove all listeners for.                                          //
          * @api public                                                                                                //
          */                                                                                                           //
                                                                                                                       //
    EventEmitter.prototype.removeAllListeners = function () {                                                          // 1902
      function removeAllListeners(event) {                                                                             // 1902
        if (!this._events) return this;                                                                                // 1903
        if (event) this._events[event] = null;else this._events = {};                                                  // 1905
        return this;                                                                                                   // 1908
      }                                                                                                                // 1909
                                                                                                                       //
      return removeAllListeners;                                                                                       // 1902
    }(); //                                                                                                            // 1902
    // Alias methods names because people roll like that.                                                              // 1912
    //                                                                                                                 // 1913
                                                                                                                       //
                                                                                                                       //
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;                                                // 1914
    EventEmitter.prototype.addListener = EventEmitter.prototype.on; //                                                 // 1915
    // This function doesn't apply anymore.                                                                            // 1918
    //                                                                                                                 // 1919
                                                                                                                       //
    EventEmitter.prototype.setMaxListeners = function () {                                                             // 1920
      function setMaxListeners() {                                                                                     // 1920
        return this;                                                                                                   // 1921
      }                                                                                                                // 1922
                                                                                                                       //
      return setMaxListeners;                                                                                          // 1920
    }(); //                                                                                                            // 1920
    // Expose the module.                                                                                              // 1925
    //                                                                                                                 // 1926
                                                                                                                       //
                                                                                                                       //
    EventEmitter.EventEmitter = EventEmitter;                                                                          // 1927
    EventEmitter.EventEmitter2 = EventEmitter;                                                                         // 1928
    EventEmitter.EventEmitter3 = EventEmitter;                                                                         // 1929
                                                                                                                       //
    if ('object' === (typeof module === "undefined" ? "undefined" : (0, _typeof3.default)(module)) && module.exports) {
      module.exports = EventEmitter;                                                                                   // 1932
    }                                                                                                                  // 1933
  }, {}],                                                                                                              // 1935
  10: [function (require, module, exports) {                                                                           // 1935
    var BufferBuilder = require('./bufferbuilder').BufferBuilder;                                                      // 1936
                                                                                                                       //
    var binaryFeatures = require('./bufferbuilder').binaryFeatures;                                                    // 1937
                                                                                                                       //
    var BinaryPack = {                                                                                                 // 1939
      unpack: function (data) {                                                                                        // 1940
        var unpacker = new Unpacker(data);                                                                             // 1941
        return unpacker.unpack();                                                                                      // 1942
      },                                                                                                               // 1943
      pack: function (data) {                                                                                          // 1944
        var packer = new Packer();                                                                                     // 1945
        packer.pack(data);                                                                                             // 1946
        var buffer = packer.getBuffer();                                                                               // 1947
        return buffer;                                                                                                 // 1948
      }                                                                                                                // 1949
    };                                                                                                                 // 1939
    module.exports = BinaryPack;                                                                                       // 1952
                                                                                                                       //
    function Unpacker(data) {                                                                                          // 1954
      // Data is ArrayBuffer                                                                                           // 1955
      this.index = 0;                                                                                                  // 1956
      this.dataBuffer = data;                                                                                          // 1957
      this.dataView = new Uint8Array(this.dataBuffer);                                                                 // 1958
      this.length = this.dataBuffer.byteLength;                                                                        // 1959
    }                                                                                                                  // 1960
                                                                                                                       //
    Unpacker.prototype.unpack = function () {                                                                          // 1962
      var type = this.unpack_uint8();                                                                                  // 1963
                                                                                                                       //
      if (type < 0x80) {                                                                                               // 1964
        var positive_fixnum = type;                                                                                    // 1965
        return positive_fixnum;                                                                                        // 1966
      } else if ((type ^ 0xe0) < 0x20) {                                                                               // 1967
        var negative_fixnum = (type ^ 0xe0) - 0x20;                                                                    // 1968
        return negative_fixnum;                                                                                        // 1969
      }                                                                                                                // 1970
                                                                                                                       //
      var size;                                                                                                        // 1971
                                                                                                                       //
      if ((size = type ^ 0xa0) <= 0x0f) {                                                                              // 1972
        return this.unpack_raw(size);                                                                                  // 1973
      } else if ((size = type ^ 0xb0) <= 0x0f) {                                                                       // 1974
        return this.unpack_string(size);                                                                               // 1975
      } else if ((size = type ^ 0x90) <= 0x0f) {                                                                       // 1976
        return this.unpack_array(size);                                                                                // 1977
      } else if ((size = type ^ 0x80) <= 0x0f) {                                                                       // 1978
        return this.unpack_map(size);                                                                                  // 1979
      }                                                                                                                // 1980
                                                                                                                       //
      switch (type) {                                                                                                  // 1981
        case 0xc0:                                                                                                     // 1982
          return null;                                                                                                 // 1983
                                                                                                                       //
        case 0xc1:                                                                                                     // 1984
          return undefined;                                                                                            // 1985
                                                                                                                       //
        case 0xc2:                                                                                                     // 1986
          return false;                                                                                                // 1987
                                                                                                                       //
        case 0xc3:                                                                                                     // 1988
          return true;                                                                                                 // 1989
                                                                                                                       //
        case 0xca:                                                                                                     // 1990
          return this.unpack_float();                                                                                  // 1991
                                                                                                                       //
        case 0xcb:                                                                                                     // 1992
          return this.unpack_double();                                                                                 // 1993
                                                                                                                       //
        case 0xcc:                                                                                                     // 1994
          return this.unpack_uint8();                                                                                  // 1995
                                                                                                                       //
        case 0xcd:                                                                                                     // 1996
          return this.unpack_uint16();                                                                                 // 1997
                                                                                                                       //
        case 0xce:                                                                                                     // 1998
          return this.unpack_uint32();                                                                                 // 1999
                                                                                                                       //
        case 0xcf:                                                                                                     // 2000
          return this.unpack_uint64();                                                                                 // 2001
                                                                                                                       //
        case 0xd0:                                                                                                     // 2002
          return this.unpack_int8();                                                                                   // 2003
                                                                                                                       //
        case 0xd1:                                                                                                     // 2004
          return this.unpack_int16();                                                                                  // 2005
                                                                                                                       //
        case 0xd2:                                                                                                     // 2006
          return this.unpack_int32();                                                                                  // 2007
                                                                                                                       //
        case 0xd3:                                                                                                     // 2008
          return this.unpack_int64();                                                                                  // 2009
                                                                                                                       //
        case 0xd4:                                                                                                     // 2010
          return undefined;                                                                                            // 2011
                                                                                                                       //
        case 0xd5:                                                                                                     // 2012
          return undefined;                                                                                            // 2013
                                                                                                                       //
        case 0xd6:                                                                                                     // 2014
          return undefined;                                                                                            // 2015
                                                                                                                       //
        case 0xd7:                                                                                                     // 2016
          return undefined;                                                                                            // 2017
                                                                                                                       //
        case 0xd8:                                                                                                     // 2018
          size = this.unpack_uint16();                                                                                 // 2019
          return this.unpack_string(size);                                                                             // 2020
                                                                                                                       //
        case 0xd9:                                                                                                     // 2021
          size = this.unpack_uint32();                                                                                 // 2022
          return this.unpack_string(size);                                                                             // 2023
                                                                                                                       //
        case 0xda:                                                                                                     // 2024
          size = this.unpack_uint16();                                                                                 // 2025
          return this.unpack_raw(size);                                                                                // 2026
                                                                                                                       //
        case 0xdb:                                                                                                     // 2027
          size = this.unpack_uint32();                                                                                 // 2028
          return this.unpack_raw(size);                                                                                // 2029
                                                                                                                       //
        case 0xdc:                                                                                                     // 2030
          size = this.unpack_uint16();                                                                                 // 2031
          return this.unpack_array(size);                                                                              // 2032
                                                                                                                       //
        case 0xdd:                                                                                                     // 2033
          size = this.unpack_uint32();                                                                                 // 2034
          return this.unpack_array(size);                                                                              // 2035
                                                                                                                       //
        case 0xde:                                                                                                     // 2036
          size = this.unpack_uint16();                                                                                 // 2037
          return this.unpack_map(size);                                                                                // 2038
                                                                                                                       //
        case 0xdf:                                                                                                     // 2039
          size = this.unpack_uint32();                                                                                 // 2040
          return this.unpack_map(size);                                                                                // 2041
      }                                                                                                                // 1981
    };                                                                                                                 // 2043
                                                                                                                       //
    Unpacker.prototype.unpack_uint8 = function () {                                                                    // 2045
      var byte = this.dataView[this.index] & 0xff;                                                                     // 2046
      this.index++;                                                                                                    // 2047
      return byte;                                                                                                     // 2048
    };                                                                                                                 // 2049
                                                                                                                       //
    Unpacker.prototype.unpack_uint16 = function () {                                                                   // 2051
      var bytes = this.read(2);                                                                                        // 2052
      var uint16 = (bytes[0] & 0xff) * 256 + (bytes[1] & 0xff);                                                        // 2053
      this.index += 2;                                                                                                 // 2055
      return uint16;                                                                                                   // 2056
    };                                                                                                                 // 2057
                                                                                                                       //
    Unpacker.prototype.unpack_uint32 = function () {                                                                   // 2059
      var bytes = this.read(4);                                                                                        // 2060
      var uint32 = ((bytes[0] * 256 + bytes[1]) * 256 + bytes[2]) * 256 + bytes[3];                                    // 2061
      this.index += 4;                                                                                                 // 2066
      return uint32;                                                                                                   // 2067
    };                                                                                                                 // 2068
                                                                                                                       //
    Unpacker.prototype.unpack_uint64 = function () {                                                                   // 2070
      var bytes = this.read(8);                                                                                        // 2071
      var uint64 = ((((((bytes[0] * 256 + bytes[1]) * 256 + bytes[2]) * 256 + bytes[3]) * 256 + bytes[4]) * 256 + bytes[5]) * 256 + bytes[6]) * 256 + bytes[7];
      this.index += 8;                                                                                                 // 2081
      return uint64;                                                                                                   // 2082
    };                                                                                                                 // 2083
                                                                                                                       //
    Unpacker.prototype.unpack_int8 = function () {                                                                     // 2086
      var uint8 = this.unpack_uint8();                                                                                 // 2087
      return uint8 < 0x80 ? uint8 : uint8 - (1 << 8);                                                                  // 2088
    };                                                                                                                 // 2089
                                                                                                                       //
    Unpacker.prototype.unpack_int16 = function () {                                                                    // 2091
      var uint16 = this.unpack_uint16();                                                                               // 2092
      return uint16 < 0x8000 ? uint16 : uint16 - (1 << 16);                                                            // 2093
    };                                                                                                                 // 2094
                                                                                                                       //
    Unpacker.prototype.unpack_int32 = function () {                                                                    // 2096
      var uint32 = this.unpack_uint32();                                                                               // 2097
      return uint32 < Math.pow(2, 31) ? uint32 : uint32 - Math.pow(2, 32);                                             // 2098
    };                                                                                                                 // 2100
                                                                                                                       //
    Unpacker.prototype.unpack_int64 = function () {                                                                    // 2102
      var uint64 = this.unpack_uint64();                                                                               // 2103
      return uint64 < Math.pow(2, 63) ? uint64 : uint64 - Math.pow(2, 64);                                             // 2104
    };                                                                                                                 // 2106
                                                                                                                       //
    Unpacker.prototype.unpack_raw = function (size) {                                                                  // 2108
      if (this.length < this.index + size) {                                                                           // 2109
        throw new Error('BinaryPackFailure: index is out of range' + ' ' + this.index + ' ' + size + ' ' + this.length);
      }                                                                                                                // 2112
                                                                                                                       //
      var buf = this.dataBuffer.slice(this.index, this.index + size);                                                  // 2113
      this.index += size; //buf = util.bufferToString(buf);                                                            // 2114
                                                                                                                       //
      return buf;                                                                                                      // 2118
    };                                                                                                                 // 2119
                                                                                                                       //
    Unpacker.prototype.unpack_string = function (size) {                                                               // 2121
      var bytes = this.read(size);                                                                                     // 2122
      var i = 0,                                                                                                       // 2123
          str = '',                                                                                                    // 2123
          c,                                                                                                           // 2123
          code;                                                                                                        // 2123
                                                                                                                       //
      while (i < size) {                                                                                               // 2124
        c = bytes[i];                                                                                                  // 2125
                                                                                                                       //
        if (c < 128) {                                                                                                 // 2126
          str += String.fromCharCode(c);                                                                               // 2127
          i++;                                                                                                         // 2128
        } else if ((c ^ 0xc0) < 32) {                                                                                  // 2129
          code = (c ^ 0xc0) << 6 | bytes[i + 1] & 63;                                                                  // 2130
          str += String.fromCharCode(code);                                                                            // 2131
          i += 2;                                                                                                      // 2132
        } else {                                                                                                       // 2133
          code = (c & 15) << 12 | (bytes[i + 1] & 63) << 6 | bytes[i + 2] & 63;                                        // 2134
          str += String.fromCharCode(code);                                                                            // 2136
          i += 3;                                                                                                      // 2137
        }                                                                                                              // 2138
      }                                                                                                                // 2139
                                                                                                                       //
      this.index += size;                                                                                              // 2140
      return str;                                                                                                      // 2141
    };                                                                                                                 // 2142
                                                                                                                       //
    Unpacker.prototype.unpack_array = function (size) {                                                                // 2144
      var objects = new Array(size);                                                                                   // 2145
                                                                                                                       //
      for (var i = 0; i < size; i++) {                                                                                 // 2146
        objects[i] = this.unpack();                                                                                    // 2147
      }                                                                                                                // 2148
                                                                                                                       //
      return objects;                                                                                                  // 2149
    };                                                                                                                 // 2150
                                                                                                                       //
    Unpacker.prototype.unpack_map = function (size) {                                                                  // 2152
      var map = {};                                                                                                    // 2153
                                                                                                                       //
      for (var i = 0; i < size; i++) {                                                                                 // 2154
        var key = this.unpack();                                                                                       // 2155
        var value = this.unpack();                                                                                     // 2156
        map[key] = value;                                                                                              // 2157
      }                                                                                                                // 2158
                                                                                                                       //
      return map;                                                                                                      // 2159
    };                                                                                                                 // 2160
                                                                                                                       //
    Unpacker.prototype.unpack_float = function () {                                                                    // 2162
      var uint32 = this.unpack_uint32();                                                                               // 2163
      var sign = uint32 >> 31;                                                                                         // 2164
      var exp = (uint32 >> 23 & 0xff) - 127;                                                                           // 2165
      var fraction = uint32 & 0x7fffff | 0x800000;                                                                     // 2166
      return (sign == 0 ? 1 : -1) * fraction * Math.pow(2, exp - 23);                                                  // 2167
    };                                                                                                                 // 2169
                                                                                                                       //
    Unpacker.prototype.unpack_double = function () {                                                                   // 2171
      var h32 = this.unpack_uint32();                                                                                  // 2172
      var l32 = this.unpack_uint32();                                                                                  // 2173
      var sign = h32 >> 31;                                                                                            // 2174
      var exp = (h32 >> 20 & 0x7ff) - 1023;                                                                            // 2175
      var hfrac = h32 & 0xfffff | 0x100000;                                                                            // 2176
      var frac = hfrac * Math.pow(2, exp - 20) + l32 * Math.pow(2, exp - 52);                                          // 2177
      return (sign == 0 ? 1 : -1) * frac;                                                                              // 2179
    };                                                                                                                 // 2180
                                                                                                                       //
    Unpacker.prototype.read = function (length) {                                                                      // 2182
      var j = this.index;                                                                                              // 2183
                                                                                                                       //
      if (j + length <= this.length) {                                                                                 // 2184
        return this.dataView.subarray(j, j + length);                                                                  // 2185
      } else {                                                                                                         // 2186
        throw new Error('BinaryPackFailure: read index out of range');                                                 // 2187
      }                                                                                                                // 2188
    };                                                                                                                 // 2189
                                                                                                                       //
    function Packer() {                                                                                                // 2191
      this.bufferBuilder = new BufferBuilder();                                                                        // 2192
    }                                                                                                                  // 2193
                                                                                                                       //
    Packer.prototype.getBuffer = function () {                                                                         // 2195
      return this.bufferBuilder.getBuffer();                                                                           // 2196
    };                                                                                                                 // 2197
                                                                                                                       //
    Packer.prototype.pack = function (value) {                                                                         // 2199
      var type = typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value);                            // 2200
                                                                                                                       //
      if (type == 'string') {                                                                                          // 2201
        this.pack_string(value);                                                                                       // 2202
      } else if (type == 'number') {                                                                                   // 2203
        if (Math.floor(value) === value) {                                                                             // 2204
          this.pack_integer(value);                                                                                    // 2205
        } else {                                                                                                       // 2206
          this.pack_double(value);                                                                                     // 2207
        }                                                                                                              // 2208
      } else if (type == 'boolean') {                                                                                  // 2209
        if (value === true) {                                                                                          // 2210
          this.bufferBuilder.append(0xc3);                                                                             // 2211
        } else if (value === false) {                                                                                  // 2212
          this.bufferBuilder.append(0xc2);                                                                             // 2213
        }                                                                                                              // 2214
      } else if (type == 'undefined') {                                                                                // 2215
        this.bufferBuilder.append(0xc0);                                                                               // 2216
      } else if (type == 'object') {                                                                                   // 2217
        if (value === null) {                                                                                          // 2218
          this.bufferBuilder.append(0xc0);                                                                             // 2219
        } else {                                                                                                       // 2220
          var constructor = value.constructor;                                                                         // 2221
                                                                                                                       //
          if (constructor == Array) {                                                                                  // 2222
            this.pack_array(value);                                                                                    // 2223
          } else if (constructor == Blob || constructor == File) {                                                     // 2224
            this.pack_bin(value);                                                                                      // 2225
          } else if (constructor == ArrayBuffer) {                                                                     // 2226
            if (binaryFeatures.useArrayBufferView) {                                                                   // 2227
              this.pack_bin(new Uint8Array(value));                                                                    // 2228
            } else {                                                                                                   // 2229
              this.pack_bin(value);                                                                                    // 2230
            }                                                                                                          // 2231
          } else if ('BYTES_PER_ELEMENT' in value) {                                                                   // 2232
            if (binaryFeatures.useArrayBufferView) {                                                                   // 2233
              this.pack_bin(new Uint8Array(value.buffer));                                                             // 2234
            } else {                                                                                                   // 2235
              this.pack_bin(value.buffer);                                                                             // 2236
            }                                                                                                          // 2237
          } else if (constructor == Object) {                                                                          // 2238
            this.pack_object(value);                                                                                   // 2239
          } else if (constructor == Date) {                                                                            // 2240
            this.pack_string(value.toString());                                                                        // 2241
          } else if (typeof value.toBinaryPack == 'function') {                                                        // 2242
            this.bufferBuilder.append(value.toBinaryPack());                                                           // 2243
          } else {                                                                                                     // 2244
            throw new Error('Type "' + constructor.toString() + '" not yet supported');                                // 2245
          }                                                                                                            // 2246
        }                                                                                                              // 2247
      } else {                                                                                                         // 2248
        throw new Error('Type "' + type + '" not yet supported');                                                      // 2249
      }                                                                                                                // 2250
                                                                                                                       //
      this.bufferBuilder.flush();                                                                                      // 2251
    };                                                                                                                 // 2252
                                                                                                                       //
    Packer.prototype.pack_bin = function (blob) {                                                                      // 2255
      var length = blob.length || blob.byteLength || blob.size;                                                        // 2256
                                                                                                                       //
      if (length <= 0x0f) {                                                                                            // 2257
        this.pack_uint8(0xa0 + length);                                                                                // 2258
      } else if (length <= 0xffff) {                                                                                   // 2259
        this.bufferBuilder.append(0xda);                                                                               // 2260
        this.pack_uint16(length);                                                                                      // 2261
      } else if (length <= 0xffffffff) {                                                                               // 2262
        this.bufferBuilder.append(0xdb);                                                                               // 2263
        this.pack_uint32(length);                                                                                      // 2264
      } else {                                                                                                         // 2265
        throw new Error('Invalid length');                                                                             // 2266
      }                                                                                                                // 2267
                                                                                                                       //
      this.bufferBuilder.append(blob);                                                                                 // 2268
    };                                                                                                                 // 2269
                                                                                                                       //
    Packer.prototype.pack_string = function (str) {                                                                    // 2271
      var length = utf8Length(str);                                                                                    // 2272
                                                                                                                       //
      if (length <= 0x0f) {                                                                                            // 2274
        this.pack_uint8(0xb0 + length);                                                                                // 2275
      } else if (length <= 0xffff) {                                                                                   // 2276
        this.bufferBuilder.append(0xd8);                                                                               // 2277
        this.pack_uint16(length);                                                                                      // 2278
      } else if (length <= 0xffffffff) {                                                                               // 2279
        this.bufferBuilder.append(0xd9);                                                                               // 2280
        this.pack_uint32(length);                                                                                      // 2281
      } else {                                                                                                         // 2282
        throw new Error('Invalid length');                                                                             // 2283
      }                                                                                                                // 2284
                                                                                                                       //
      this.bufferBuilder.append(str);                                                                                  // 2285
    };                                                                                                                 // 2286
                                                                                                                       //
    Packer.prototype.pack_array = function (ary) {                                                                     // 2288
      var length = ary.length;                                                                                         // 2289
                                                                                                                       //
      if (length <= 0x0f) {                                                                                            // 2290
        this.pack_uint8(0x90 + length);                                                                                // 2291
      } else if (length <= 0xffff) {                                                                                   // 2292
        this.bufferBuilder.append(0xdc);                                                                               // 2293
        this.pack_uint16(length);                                                                                      // 2294
      } else if (length <= 0xffffffff) {                                                                               // 2295
        this.bufferBuilder.append(0xdd);                                                                               // 2296
        this.pack_uint32(length);                                                                                      // 2297
      } else {                                                                                                         // 2298
        throw new Error('Invalid length');                                                                             // 2299
      }                                                                                                                // 2300
                                                                                                                       //
      for (var i = 0; i < length; i++) {                                                                               // 2301
        this.pack(ary[i]);                                                                                             // 2302
      }                                                                                                                // 2303
    };                                                                                                                 // 2304
                                                                                                                       //
    Packer.prototype.pack_integer = function (num) {                                                                   // 2306
      if (-0x20 <= num && num <= 0x7f) {                                                                               // 2307
        this.bufferBuilder.append(num & 0xff);                                                                         // 2308
      } else if (0x00 <= num && num <= 0xff) {                                                                         // 2309
        this.bufferBuilder.append(0xcc);                                                                               // 2310
        this.pack_uint8(num);                                                                                          // 2311
      } else if (-0x80 <= num && num <= 0x7f) {                                                                        // 2312
        this.bufferBuilder.append(0xd0);                                                                               // 2313
        this.pack_int8(num);                                                                                           // 2314
      } else if (0x0000 <= num && num <= 0xffff) {                                                                     // 2315
        this.bufferBuilder.append(0xcd);                                                                               // 2316
        this.pack_uint16(num);                                                                                         // 2317
      } else if (-0x8000 <= num && num <= 0x7fff) {                                                                    // 2318
        this.bufferBuilder.append(0xd1);                                                                               // 2319
        this.pack_int16(num);                                                                                          // 2320
      } else if (0x00000000 <= num && num <= 0xffffffff) {                                                             // 2321
        this.bufferBuilder.append(0xce);                                                                               // 2322
        this.pack_uint32(num);                                                                                         // 2323
      } else if (-0x80000000 <= num && num <= 0x7fffffff) {                                                            // 2324
        this.bufferBuilder.append(0xd2);                                                                               // 2325
        this.pack_int32(num);                                                                                          // 2326
      } else if (-0x8000000000000000 <= num && num <= 0x7FFFFFFFFFFFFFFF) {                                            // 2327
        this.bufferBuilder.append(0xd3);                                                                               // 2328
        this.pack_int64(num);                                                                                          // 2329
      } else if (0x0000000000000000 <= num && num <= 0xFFFFFFFFFFFFFFFF) {                                             // 2330
        this.bufferBuilder.append(0xcf);                                                                               // 2331
        this.pack_uint64(num);                                                                                         // 2332
      } else {                                                                                                         // 2333
        throw new Error('Invalid integer');                                                                            // 2334
      }                                                                                                                // 2335
    };                                                                                                                 // 2336
                                                                                                                       //
    Packer.prototype.pack_double = function (num) {                                                                    // 2338
      var sign = 0;                                                                                                    // 2339
                                                                                                                       //
      if (num < 0) {                                                                                                   // 2340
        sign = 1;                                                                                                      // 2341
        num = -num;                                                                                                    // 2342
      }                                                                                                                // 2343
                                                                                                                       //
      var exp = Math.floor(Math.log(num) / Math.LN2);                                                                  // 2344
      var frac0 = num / Math.pow(2, exp) - 1;                                                                          // 2345
      var frac1 = Math.floor(frac0 * Math.pow(2, 52));                                                                 // 2346
      var b32 = Math.pow(2, 32);                                                                                       // 2347
      var h32 = sign << 31 | exp + 1023 << 20 | frac1 / b32 & 0x0fffff;                                                // 2348
      var l32 = frac1 % b32;                                                                                           // 2350
      this.bufferBuilder.append(0xcb);                                                                                 // 2351
      this.pack_int32(h32);                                                                                            // 2352
      this.pack_int32(l32);                                                                                            // 2353
    };                                                                                                                 // 2354
                                                                                                                       //
    Packer.prototype.pack_object = function (obj) {                                                                    // 2356
      var keys = Object.keys(obj);                                                                                     // 2357
      var length = keys.length;                                                                                        // 2358
                                                                                                                       //
      if (length <= 0x0f) {                                                                                            // 2359
        this.pack_uint8(0x80 + length);                                                                                // 2360
      } else if (length <= 0xffff) {                                                                                   // 2361
        this.bufferBuilder.append(0xde);                                                                               // 2362
        this.pack_uint16(length);                                                                                      // 2363
      } else if (length <= 0xffffffff) {                                                                               // 2364
        this.bufferBuilder.append(0xdf);                                                                               // 2365
        this.pack_uint32(length);                                                                                      // 2366
      } else {                                                                                                         // 2367
        throw new Error('Invalid length');                                                                             // 2368
      }                                                                                                                // 2369
                                                                                                                       //
      for (var prop in meteorBabelHelpers.sanitizeForInObject(obj)) {                                                  // 2370
        if (obj.hasOwnProperty(prop)) {                                                                                // 2371
          this.pack(prop);                                                                                             // 2372
          this.pack(obj[prop]);                                                                                        // 2373
        }                                                                                                              // 2374
      }                                                                                                                // 2375
    };                                                                                                                 // 2376
                                                                                                                       //
    Packer.prototype.pack_uint8 = function (num) {                                                                     // 2378
      this.bufferBuilder.append(num);                                                                                  // 2379
    };                                                                                                                 // 2380
                                                                                                                       //
    Packer.prototype.pack_uint16 = function (num) {                                                                    // 2382
      this.bufferBuilder.append(num >> 8);                                                                             // 2383
      this.bufferBuilder.append(num & 0xff);                                                                           // 2384
    };                                                                                                                 // 2385
                                                                                                                       //
    Packer.prototype.pack_uint32 = function (num) {                                                                    // 2387
      var n = num & 0xffffffff;                                                                                        // 2388
      this.bufferBuilder.append((n & 0xff000000) >>> 24);                                                              // 2389
      this.bufferBuilder.append((n & 0x00ff0000) >>> 16);                                                              // 2390
      this.bufferBuilder.append((n & 0x0000ff00) >>> 8);                                                               // 2391
      this.bufferBuilder.append(n & 0x000000ff);                                                                       // 2392
    };                                                                                                                 // 2393
                                                                                                                       //
    Packer.prototype.pack_uint64 = function (num) {                                                                    // 2395
      var high = num / Math.pow(2, 32);                                                                                // 2396
      var low = num % Math.pow(2, 32);                                                                                 // 2397
      this.bufferBuilder.append((high & 0xff000000) >>> 24);                                                           // 2398
      this.bufferBuilder.append((high & 0x00ff0000) >>> 16);                                                           // 2399
      this.bufferBuilder.append((high & 0x0000ff00) >>> 8);                                                            // 2400
      this.bufferBuilder.append(high & 0x000000ff);                                                                    // 2401
      this.bufferBuilder.append((low & 0xff000000) >>> 24);                                                            // 2402
      this.bufferBuilder.append((low & 0x00ff0000) >>> 16);                                                            // 2403
      this.bufferBuilder.append((low & 0x0000ff00) >>> 8);                                                             // 2404
      this.bufferBuilder.append(low & 0x000000ff);                                                                     // 2405
    };                                                                                                                 // 2406
                                                                                                                       //
    Packer.prototype.pack_int8 = function (num) {                                                                      // 2408
      this.bufferBuilder.append(num & 0xff);                                                                           // 2409
    };                                                                                                                 // 2410
                                                                                                                       //
    Packer.prototype.pack_int16 = function (num) {                                                                     // 2412
      this.bufferBuilder.append((num & 0xff00) >> 8);                                                                  // 2413
      this.bufferBuilder.append(num & 0xff);                                                                           // 2414
    };                                                                                                                 // 2415
                                                                                                                       //
    Packer.prototype.pack_int32 = function (num) {                                                                     // 2417
      this.bufferBuilder.append(num >>> 24 & 0xff);                                                                    // 2418
      this.bufferBuilder.append((num & 0x00ff0000) >>> 16);                                                            // 2419
      this.bufferBuilder.append((num & 0x0000ff00) >>> 8);                                                             // 2420
      this.bufferBuilder.append(num & 0x000000ff);                                                                     // 2421
    };                                                                                                                 // 2422
                                                                                                                       //
    Packer.prototype.pack_int64 = function (num) {                                                                     // 2424
      var high = Math.floor(num / Math.pow(2, 32));                                                                    // 2425
      var low = num % Math.pow(2, 32);                                                                                 // 2426
      this.bufferBuilder.append((high & 0xff000000) >>> 24);                                                           // 2427
      this.bufferBuilder.append((high & 0x00ff0000) >>> 16);                                                           // 2428
      this.bufferBuilder.append((high & 0x0000ff00) >>> 8);                                                            // 2429
      this.bufferBuilder.append(high & 0x000000ff);                                                                    // 2430
      this.bufferBuilder.append((low & 0xff000000) >>> 24);                                                            // 2431
      this.bufferBuilder.append((low & 0x00ff0000) >>> 16);                                                            // 2432
      this.bufferBuilder.append((low & 0x0000ff00) >>> 8);                                                             // 2433
      this.bufferBuilder.append(low & 0x000000ff);                                                                     // 2434
    };                                                                                                                 // 2435
                                                                                                                       //
    function _utf8Replace(m) {                                                                                         // 2437
      var code = m.charCodeAt(0);                                                                                      // 2438
      if (code <= 0x7ff) return '00';                                                                                  // 2440
      if (code <= 0xffff) return '000';                                                                                // 2441
      if (code <= 0x1fffff) return '0000';                                                                             // 2442
      if (code <= 0x3ffffff) return '00000';                                                                           // 2443
      return '000000';                                                                                                 // 2444
    }                                                                                                                  // 2445
                                                                                                                       //
    function utf8Length(str) {                                                                                         // 2447
      if (str.length > 600) {                                                                                          // 2448
        // Blob method faster for large strings                                                                        // 2449
        return new Blob([str]).size;                                                                                   // 2450
      } else {                                                                                                         // 2451
        return str.replace(/[^\u0000-\u007F]/g, _utf8Replace).length;                                                  // 2452
      }                                                                                                                // 2453
    }                                                                                                                  // 2454
  }, {                                                                                                                 // 2456
    "./bufferbuilder": 11                                                                                              // 2456
  }],                                                                                                                  // 2456
  11: [function (require, module, exports) {                                                                           // 2456
    var binaryFeatures = {};                                                                                           // 2457
                                                                                                                       //
    binaryFeatures.useBlobBuilder = function () {                                                                      // 2458
      try {                                                                                                            // 2459
        new Blob([]);                                                                                                  // 2460
        return false;                                                                                                  // 2461
      } catch (e) {                                                                                                    // 2462
        return true;                                                                                                   // 2463
      }                                                                                                                // 2464
    }();                                                                                                               // 2465
                                                                                                                       //
    binaryFeatures.useArrayBufferView = !binaryFeatures.useBlobBuilder && function () {                                // 2467
      try {                                                                                                            // 2468
        return new Blob([new Uint8Array([])]).size === 0;                                                              // 2469
      } catch (e) {                                                                                                    // 2470
        return true;                                                                                                   // 2471
      }                                                                                                                // 2472
    }();                                                                                                               // 2473
                                                                                                                       //
    module.exports.binaryFeatures = binaryFeatures;                                                                    // 2475
    var BlobBuilder = module.exports.BlobBuilder;                                                                      // 2476
                                                                                                                       //
    if (typeof window != 'undefined') {                                                                                // 2477
      BlobBuilder = module.exports.BlobBuilder = window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder || window.BlobBuilder;
    }                                                                                                                  // 2480
                                                                                                                       //
    function BufferBuilder() {                                                                                         // 2482
      this._pieces = [];                                                                                               // 2483
      this._parts = [];                                                                                                // 2484
    }                                                                                                                  // 2485
                                                                                                                       //
    BufferBuilder.prototype.append = function (data) {                                                                 // 2487
      if (typeof data === 'number') {                                                                                  // 2488
        this._pieces.push(data);                                                                                       // 2489
      } else {                                                                                                         // 2490
        this.flush();                                                                                                  // 2491
                                                                                                                       //
        this._parts.push(data);                                                                                        // 2492
      }                                                                                                                // 2493
    };                                                                                                                 // 2494
                                                                                                                       //
    BufferBuilder.prototype.flush = function () {                                                                      // 2496
      if (this._pieces.length > 0) {                                                                                   // 2497
        var buf = new Uint8Array(this._pieces);                                                                        // 2498
                                                                                                                       //
        if (!binaryFeatures.useArrayBufferView) {                                                                      // 2499
          buf = buf.buffer;                                                                                            // 2500
        }                                                                                                              // 2501
                                                                                                                       //
        this._parts.push(buf);                                                                                         // 2502
                                                                                                                       //
        this._pieces = [];                                                                                             // 2503
      }                                                                                                                // 2504
    };                                                                                                                 // 2505
                                                                                                                       //
    BufferBuilder.prototype.getBuffer = function () {                                                                  // 2507
      this.flush();                                                                                                    // 2508
                                                                                                                       //
      if (binaryFeatures.useBlobBuilder) {                                                                             // 2509
        var builder = new BlobBuilder();                                                                               // 2510
                                                                                                                       //
        for (var i = 0, ii = this._parts.length; i < ii; i++) {                                                        // 2511
          builder.append(this._parts[i]);                                                                              // 2512
        }                                                                                                              // 2513
                                                                                                                       //
        return builder.getBlob();                                                                                      // 2514
      } else {                                                                                                         // 2515
        return new Blob(this._parts);                                                                                  // 2516
      }                                                                                                                // 2517
    };                                                                                                                 // 2518
                                                                                                                       //
    module.exports.BufferBuilder = BufferBuilder;                                                                      // 2520
  }, {}],                                                                                                              // 2522
  12: [function (require, module, exports) {                                                                           // 2522
    var util = require('./util'); /**                                                                                  // 2523
                                   * Reliable transfer for Chrome Canary DataChannel impl.                             //
                                   * Author: @michellebu                                                               //
                                   */                                                                                  //
                                                                                                                       //
    function Reliable(dc, debug) {                                                                                     // 2529
      if (!(this instanceof Reliable)) return new Reliable(dc);                                                        // 2530
      this._dc = dc;                                                                                                   // 2531
      util.debug = debug; // Messages sent/received so far.                                                            // 2533
      // id: { ack: n, chunks: [...] }                                                                                 // 2536
                                                                                                                       //
      this._outgoing = {}; // id: { ack: ['ack', id, n], chunks: [...] }                                               // 2537
                                                                                                                       //
      this._incoming = {};                                                                                             // 2539
      this._received = {}; // Window size.                                                                             // 2540
                                                                                                                       //
      this._window = 1000; // MTU.                                                                                     // 2543
                                                                                                                       //
      this._mtu = 500; // Interval for setInterval. In ms.                                                             // 2545
                                                                                                                       //
      this._interval = 0; // Messages sent.                                                                            // 2547
                                                                                                                       //
      this._count = 0; // Outgoing message queue.                                                                      // 2550
                                                                                                                       //
      this._queue = [];                                                                                                // 2553
                                                                                                                       //
      this._setupDC();                                                                                                 // 2555
    }                                                                                                                  // 2556
                                                                                                                       //
    ; // Send a message reliably.                                                                                      // 2556
                                                                                                                       //
    Reliable.prototype.send = function (msg) {                                                                         // 2559
      // Determine if chunking is necessary.                                                                           // 2560
      var bl = util.pack(msg);                                                                                         // 2561
                                                                                                                       //
      if (bl.size < this._mtu) {                                                                                       // 2562
        this._handleSend(['no', bl]);                                                                                  // 2563
                                                                                                                       //
        return;                                                                                                        // 2564
      }                                                                                                                // 2565
                                                                                                                       //
      this._outgoing[this._count] = {                                                                                  // 2567
        ack: 0,                                                                                                        // 2568
        chunks: this._chunk(bl)                                                                                        // 2569
      };                                                                                                               // 2567
                                                                                                                       //
      if (util.debug) {                                                                                                // 2572
        this._outgoing[this._count].timer = new Date();                                                                // 2573
      } // Send prelim window.                                                                                         // 2574
                                                                                                                       //
                                                                                                                       //
      this._sendWindowedChunks(this._count);                                                                           // 2577
                                                                                                                       //
      this._count += 1;                                                                                                // 2578
    }; // Set up interval for processing queue.                                                                        // 2579
                                                                                                                       //
                                                                                                                       //
    Reliable.prototype._setupInterval = function () {                                                                  // 2582
      // TODO: fail gracefully.                                                                                        // 2583
      var self = this;                                                                                                 // 2585
      this._timeout = setInterval(function () {                                                                        // 2586
        // FIXME: String stuff makes things terribly async.                                                            // 2587
        var msg = self._queue.shift();                                                                                 // 2588
                                                                                                                       //
        if (msg._multiple) {                                                                                           // 2589
          for (var i = 0, ii = msg.length; i < ii; i += 1) {                                                           // 2590
            self._intervalSend(msg[i]);                                                                                // 2591
          }                                                                                                            // 2592
        } else {                                                                                                       // 2593
          self._intervalSend(msg);                                                                                     // 2594
        }                                                                                                              // 2595
      }, this._interval);                                                                                              // 2596
    };                                                                                                                 // 2597
                                                                                                                       //
    Reliable.prototype._intervalSend = function (msg) {                                                                // 2599
      var self = this;                                                                                                 // 2600
      msg = util.pack(msg);                                                                                            // 2601
      util.blobToBinaryString(msg, function (str) {                                                                    // 2602
        self._dc.send(str);                                                                                            // 2603
      });                                                                                                              // 2604
                                                                                                                       //
      if (self._queue.length === 0) {                                                                                  // 2605
        clearTimeout(self._timeout);                                                                                   // 2606
        self._timeout = null; //self._processAcks();                                                                   // 2607
      }                                                                                                                // 2609
    }; // Go through ACKs to send missing pieces.                                                                      // 2610
                                                                                                                       //
                                                                                                                       //
    Reliable.prototype._processAcks = function () {                                                                    // 2613
      for (var id in meteorBabelHelpers.sanitizeForInObject(this._outgoing)) {                                         // 2614
        if (this._outgoing.hasOwnProperty(id)) {                                                                       // 2615
          this._sendWindowedChunks(id);                                                                                // 2616
        }                                                                                                              // 2617
      }                                                                                                                // 2618
    }; // Handle sending a message.                                                                                    // 2619
    // FIXME: Don't wait for interval time for all messages...                                                         // 2622
                                                                                                                       //
                                                                                                                       //
    Reliable.prototype._handleSend = function (msg) {                                                                  // 2623
      var push = true;                                                                                                 // 2624
                                                                                                                       //
      for (var i = 0, ii = this._queue.length; i < ii; i += 1) {                                                       // 2625
        var item = this._queue[i];                                                                                     // 2626
                                                                                                                       //
        if (item === msg) {                                                                                            // 2627
          push = false;                                                                                                // 2628
        } else if (item._multiple && item.indexOf(msg) !== -1) {                                                       // 2629
          push = false;                                                                                                // 2630
        }                                                                                                              // 2631
      }                                                                                                                // 2632
                                                                                                                       //
      if (push) {                                                                                                      // 2633
        this._queue.push(msg);                                                                                         // 2634
                                                                                                                       //
        if (!this._timeout) {                                                                                          // 2635
          this._setupInterval();                                                                                       // 2636
        }                                                                                                              // 2637
      }                                                                                                                // 2638
    }; // Set up DataChannel handlers.                                                                                 // 2639
                                                                                                                       //
                                                                                                                       //
    Reliable.prototype._setupDC = function () {                                                                        // 2642
      // Handle various message types.                                                                                 // 2643
      var self = this;                                                                                                 // 2644
                                                                                                                       //
      this._dc.onmessage = function (e) {                                                                              // 2645
        var msg = e.data;                                                                                              // 2646
        var datatype = msg.constructor; // FIXME: msg is String until binary is supported.                             // 2647
        // Once that happens, this will have to be smarter.                                                            // 2649
                                                                                                                       //
        if (datatype === String) {                                                                                     // 2650
          var ab = util.binaryStringToArrayBuffer(msg);                                                                // 2651
          msg = util.unpack(ab);                                                                                       // 2652
                                                                                                                       //
          self._handleMessage(msg);                                                                                    // 2653
        }                                                                                                              // 2654
      };                                                                                                               // 2655
    }; // Handles an incoming message.                                                                                 // 2656
                                                                                                                       //
                                                                                                                       //
    Reliable.prototype._handleMessage = function (msg) {                                                               // 2659
      var id = msg[1];                                                                                                 // 2660
      var idata = this._incoming[id];                                                                                  // 2661
      var odata = this._outgoing[id];                                                                                  // 2662
      var data;                                                                                                        // 2663
                                                                                                                       //
      switch (msg[0]) {                                                                                                // 2664
        // No chunking was done.                                                                                       // 2665
        case 'no':                                                                                                     // 2666
          var message = id;                                                                                            // 2667
                                                                                                                       //
          if (!!message) {                                                                                             // 2668
            this.onmessage(util.unpack(message));                                                                      // 2669
          }                                                                                                            // 2670
                                                                                                                       //
          break;                                                                                                       // 2671
        // Reached the end of the message.                                                                             // 2672
                                                                                                                       //
        case 'end':                                                                                                    // 2673
          data = idata; // In case end comes first.                                                                    // 2674
                                                                                                                       //
          this._received[id] = msg[2];                                                                                 // 2677
                                                                                                                       //
          if (!data) {                                                                                                 // 2679
            break;                                                                                                     // 2680
          }                                                                                                            // 2681
                                                                                                                       //
          this._ack(id);                                                                                               // 2683
                                                                                                                       //
          break;                                                                                                       // 2684
                                                                                                                       //
        case 'ack':                                                                                                    // 2685
          data = odata;                                                                                                // 2686
                                                                                                                       //
          if (!!data) {                                                                                                // 2687
            var ack = msg[2]; // Take the larger ACK, for out of order messages.                                       // 2688
                                                                                                                       //
            data.ack = Math.max(ack, data.ack); // Clean up when all chunks are ACKed.                                 // 2690
                                                                                                                       //
            if (data.ack >= data.chunks.length) {                                                                      // 2693
              util.log('Time: ', new Date() - data.timer);                                                             // 2694
              delete this._outgoing[id];                                                                               // 2695
            } else {                                                                                                   // 2696
              this._processAcks();                                                                                     // 2697
            }                                                                                                          // 2698
          } // If !data, just ignore.                                                                                  // 2699
                                                                                                                       //
                                                                                                                       //
          break;                                                                                                       // 2701
        // Received a chunk of data.                                                                                   // 2702
                                                                                                                       //
        case 'chunk':                                                                                                  // 2703
          // Create a new entry if none exists.                                                                        // 2704
          data = idata;                                                                                                // 2705
                                                                                                                       //
          if (!data) {                                                                                                 // 2706
            var end = this._received[id];                                                                              // 2707
                                                                                                                       //
            if (end === true) {                                                                                        // 2708
              break;                                                                                                   // 2709
            }                                                                                                          // 2710
                                                                                                                       //
            data = {                                                                                                   // 2711
              ack: ['ack', id, 0],                                                                                     // 2712
              chunks: []                                                                                               // 2713
            };                                                                                                         // 2711
            this._incoming[id] = data;                                                                                 // 2715
          }                                                                                                            // 2716
                                                                                                                       //
          var n = msg[2];                                                                                              // 2718
          var chunk = msg[3];                                                                                          // 2719
          data.chunks[n] = new Uint8Array(chunk); // If we get the chunk we're looking for, ACK for next missing.      // 2720
          // Otherwise, ACK the same N again.                                                                          // 2723
                                                                                                                       //
          if (n === data.ack[2]) {                                                                                     // 2724
            this._calculateNextAck(id);                                                                                // 2725
          }                                                                                                            // 2726
                                                                                                                       //
          this._ack(id);                                                                                               // 2727
                                                                                                                       //
          break;                                                                                                       // 2728
                                                                                                                       //
        default:                                                                                                       // 2729
          // Shouldn't happen, but would make sense for message to just go                                             // 2730
          // through as is.                                                                                            // 2731
          this._handleSend(msg);                                                                                       // 2732
                                                                                                                       //
          break;                                                                                                       // 2733
      }                                                                                                                // 2664
    }; // Chunks BL into smaller messages.                                                                             // 2735
                                                                                                                       //
                                                                                                                       //
    Reliable.prototype._chunk = function (bl) {                                                                        // 2738
      var chunks = [];                                                                                                 // 2739
      var size = bl.size;                                                                                              // 2740
      var start = 0;                                                                                                   // 2741
                                                                                                                       //
      while (start < size) {                                                                                           // 2742
        var end = Math.min(size, start + this._mtu);                                                                   // 2743
        var b = bl.slice(start, end);                                                                                  // 2744
        var chunk = {                                                                                                  // 2745
          payload: b                                                                                                   // 2746
        };                                                                                                             // 2745
        chunks.push(chunk);                                                                                            // 2748
        start = end;                                                                                                   // 2749
      }                                                                                                                // 2750
                                                                                                                       //
      util.log('Created', chunks.length, 'chunks.');                                                                   // 2751
      return chunks;                                                                                                   // 2752
    }; // Sends ACK N, expecting Nth blob chunk for message ID.                                                        // 2753
                                                                                                                       //
                                                                                                                       //
    Reliable.prototype._ack = function (id) {                                                                          // 2756
      var ack = this._incoming[id].ack; // if ack is the end value, then call _complete.                               // 2757
                                                                                                                       //
      if (this._received[id] === ack[2]) {                                                                             // 2760
        this._complete(id);                                                                                            // 2761
                                                                                                                       //
        this._received[id] = true;                                                                                     // 2762
      }                                                                                                                // 2763
                                                                                                                       //
      this._handleSend(ack);                                                                                           // 2765
    }; // Calculates the next ACK number, given chunks.                                                                // 2766
                                                                                                                       //
                                                                                                                       //
    Reliable.prototype._calculateNextAck = function (id) {                                                             // 2769
      var data = this._incoming[id];                                                                                   // 2770
      var chunks = data.chunks;                                                                                        // 2771
                                                                                                                       //
      for (var i = 0, ii = chunks.length; i < ii; i += 1) {                                                            // 2772
        // This chunk is missing!!! Better ACK for it.                                                                 // 2773
        if (chunks[i] === undefined) {                                                                                 // 2774
          data.ack[2] = i;                                                                                             // 2775
          return;                                                                                                      // 2776
        }                                                                                                              // 2777
      }                                                                                                                // 2778
                                                                                                                       //
      data.ack[2] = chunks.length;                                                                                     // 2779
    }; // Sends the next window of chunks.                                                                             // 2780
                                                                                                                       //
                                                                                                                       //
    Reliable.prototype._sendWindowedChunks = function (id) {                                                           // 2783
      util.log('sendWindowedChunks for: ', id);                                                                        // 2784
      var data = this._outgoing[id];                                                                                   // 2785
      var ch = data.chunks;                                                                                            // 2786
      var chunks = [];                                                                                                 // 2787
      var limit = Math.min(data.ack + this._window, ch.length);                                                        // 2788
                                                                                                                       //
      for (var i = data.ack; i < limit; i += 1) {                                                                      // 2789
        if (!ch[i].sent || i === data.ack) {                                                                           // 2790
          ch[i].sent = true;                                                                                           // 2791
          chunks.push(['chunk', id, i, ch[i].payload]);                                                                // 2792
        }                                                                                                              // 2793
      }                                                                                                                // 2794
                                                                                                                       //
      if (data.ack + this._window >= ch.length) {                                                                      // 2795
        chunks.push(['end', id, ch.length]);                                                                           // 2796
      }                                                                                                                // 2797
                                                                                                                       //
      chunks._multiple = true;                                                                                         // 2798
                                                                                                                       //
      this._handleSend(chunks);                                                                                        // 2799
    }; // Puts together a message from chunks.                                                                         // 2800
                                                                                                                       //
                                                                                                                       //
    Reliable.prototype._complete = function (id) {                                                                     // 2803
      util.log('Completed called for', id);                                                                            // 2804
      var self = this;                                                                                                 // 2805
      var chunks = this._incoming[id].chunks;                                                                          // 2806
      var bl = new Blob(chunks);                                                                                       // 2807
      util.blobToArrayBuffer(bl, function (ab) {                                                                       // 2808
        self.onmessage(util.unpack(ab));                                                                               // 2809
      });                                                                                                              // 2810
      delete this._incoming[id];                                                                                       // 2811
    }; // Ups bandwidth limit on SDP. Meant to be called during offer/answer.                                          // 2812
                                                                                                                       //
                                                                                                                       //
    Reliable.higherBandwidthSDP = function (sdp) {                                                                     // 2815
      // AS stands for Application-Specific Maximum.                                                                   // 2816
      // Bandwidth number is in kilobits / sec.                                                                        // 2817
      // See RFC for more info: http://www.ietf.org/rfc/rfc2327.txt                                                    // 2818
      // Chrome 31+ doesn't want us munging the SDP, so we'll let them have their                                      // 2820
      // way.                                                                                                          // 2821
      var version = navigator.appVersion.match(/Chrome\/(.*?) /);                                                      // 2822
                                                                                                                       //
      if (version) {                                                                                                   // 2823
        version = parseInt(version[1].split('.').shift());                                                             // 2824
                                                                                                                       //
        if (version < 31) {                                                                                            // 2825
          var parts = sdp.split('b=AS:30');                                                                            // 2826
          var replace = 'b=AS:102400'; // 100 Mbps                                                                     // 2827
                                                                                                                       //
          if (parts.length > 1) {                                                                                      // 2828
            return parts[0] + replace + parts[1];                                                                      // 2829
          }                                                                                                            // 2830
        }                                                                                                              // 2831
      }                                                                                                                // 2832
                                                                                                                       //
      return sdp;                                                                                                      // 2834
    }; // Overwritten, typically.                                                                                      // 2835
                                                                                                                       //
                                                                                                                       //
    Reliable.prototype.onmessage = function (msg) {};                                                                  // 2838
                                                                                                                       //
    module.exports.Reliable = Reliable;                                                                                // 2840
  }, {                                                                                                                 // 2842
    "./util": 13                                                                                                       // 2842
  }],                                                                                                                  // 2842
  13: [function (require, module, exports) {                                                                           // 2842
    var BinaryPack = require('js-binarypack');                                                                         // 2843
                                                                                                                       //
    var util = {                                                                                                       // 2845
      debug: false,                                                                                                    // 2846
      inherits: function (ctor, superCtor) {                                                                           // 2848
        ctor.super_ = superCtor;                                                                                       // 2849
        ctor.prototype = Object.create(superCtor.prototype, {                                                          // 2850
          constructor: {                                                                                               // 2851
            value: ctor,                                                                                               // 2852
            enumerable: false,                                                                                         // 2853
            writable: true,                                                                                            // 2854
            configurable: true                                                                                         // 2855
          }                                                                                                            // 2851
        });                                                                                                            // 2850
      },                                                                                                               // 2858
      extend: function (dest, source) {                                                                                // 2859
        for (var key in meteorBabelHelpers.sanitizeForInObject(source)) {                                              // 2860
          if (source.hasOwnProperty(key)) {                                                                            // 2861
            dest[key] = source[key];                                                                                   // 2862
          }                                                                                                            // 2863
        }                                                                                                              // 2864
                                                                                                                       //
        return dest;                                                                                                   // 2865
      },                                                                                                               // 2866
      pack: BinaryPack.pack,                                                                                           // 2867
      unpack: BinaryPack.unpack,                                                                                       // 2868
      log: function () {                                                                                               // 2870
        if (util.debug) {                                                                                              // 2871
          var copy = [];                                                                                               // 2872
                                                                                                                       //
          for (var i = 0; i < arguments.length; i++) {                                                                 // 2873
            copy[i] = arguments[i];                                                                                    // 2874
          }                                                                                                            // 2875
                                                                                                                       //
          copy.unshift('Reliable: ');                                                                                  // 2876
          console.log.apply(console, copy);                                                                            // 2877
        }                                                                                                              // 2878
      },                                                                                                               // 2879
      setZeroTimeout: function (global) {                                                                              // 2881
        var timeouts = [];                                                                                             // 2882
        var messageName = 'zero-timeout-message'; // Like setTimeout, but only takes a function argument.	 There's     // 2883
        // no time argument (always zero) and no arguments (you have to                                                // 2886
        // use a closure).                                                                                             // 2887
                                                                                                                       //
        function setZeroTimeoutPostMessage(fn) {                                                                       // 2888
          timeouts.push(fn);                                                                                           // 2889
          global.postMessage(messageName, '*');                                                                        // 2890
        }                                                                                                              // 2891
                                                                                                                       //
        function handleMessage(event) {                                                                                // 2893
          if (event.source == global && event.data == messageName) {                                                   // 2894
            if (event.stopPropagation) {                                                                               // 2895
              event.stopPropagation();                                                                                 // 2896
            }                                                                                                          // 2897
                                                                                                                       //
            if (timeouts.length) {                                                                                     // 2898
              timeouts.shift()();                                                                                      // 2899
            }                                                                                                          // 2900
          }                                                                                                            // 2901
        }                                                                                                              // 2902
                                                                                                                       //
        if (global.addEventListener) {                                                                                 // 2903
          global.addEventListener('message', handleMessage, true);                                                     // 2904
        } else if (global.attachEvent) {                                                                               // 2905
          global.attachEvent('onmessage', handleMessage);                                                              // 2906
        }                                                                                                              // 2907
                                                                                                                       //
        return setZeroTimeoutPostMessage;                                                                              // 2908
      }(this),                                                                                                         // 2909
      blobToArrayBuffer: function (blob, cb) {                                                                         // 2911
        var fr = new FileReader();                                                                                     // 2912
                                                                                                                       //
        fr.onload = function (evt) {                                                                                   // 2913
          cb(evt.target.result);                                                                                       // 2914
        };                                                                                                             // 2915
                                                                                                                       //
        fr.readAsArrayBuffer(blob);                                                                                    // 2916
      },                                                                                                               // 2917
      blobToBinaryString: function (blob, cb) {                                                                        // 2918
        var fr = new FileReader();                                                                                     // 2919
                                                                                                                       //
        fr.onload = function (evt) {                                                                                   // 2920
          cb(evt.target.result);                                                                                       // 2921
        };                                                                                                             // 2922
                                                                                                                       //
        fr.readAsBinaryString(blob);                                                                                   // 2923
      },                                                                                                               // 2924
      binaryStringToArrayBuffer: function (binary) {                                                                   // 2925
        var byteArray = new Uint8Array(binary.length);                                                                 // 2926
                                                                                                                       //
        for (var i = 0; i < binary.length; i++) {                                                                      // 2927
          byteArray[i] = binary.charCodeAt(i) & 0xff;                                                                  // 2928
        }                                                                                                              // 2929
                                                                                                                       //
        return byteArray.buffer;                                                                                       // 2930
      },                                                                                                               // 2931
      randomToken: function () {                                                                                       // 2932
        return Math.random().toString(36).substr(2);                                                                   // 2933
      }                                                                                                                // 2934
    };                                                                                                                 // 2845
    module.exports = util;                                                                                             // 2937
  }, {                                                                                                                 // 2939
    "js-binarypack": 10                                                                                                // 2939
  }]                                                                                                                   // 2939
}, {}, [3]);                                                                                                           // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"webrtc-peerjs.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/peerjs/webrtc-peerjs.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 1
  Template.hello.events({                                                                                              // 2
    "click #makeCall": function () {                                                                                   // 3
      var user = this;                                                                                                 // 4
      var outgoingCall = peer.call(user.profile.peerId, window.localStream);                                           // 5
      window.currentCall = outgoingCall;                                                                               // 6
      outgoingCall.on('stream', function (remoteStream) {                                                              // 7
        window.remoteStream = remoteStream;                                                                            // 8
        var video = document.getElementById("theirVideo");                                                             // 9
        video.src = URL.createObjectURL(remoteStream);                                                                 // 10
      });                                                                                                              // 11
    },                                                                                                                 // 12
    "click #endCall": function () {                                                                                    // 13
      window.currentCall.close();                                                                                      // 14
    }                                                                                                                  // 15
  });                                                                                                                  // 2
  Template.hello.helpers({                                                                                             // 18
    users: function () {                                                                                               // 19
      // exclude the currentUser                                                                                       // 20
      var userIds = Presences.find().map(function (presence) {                                                         // 21
        return presence.userId;                                                                                        // 21
      });                                                                                                              // 21
      return Meteor.users.find({                                                                                       // 22
        _id: {                                                                                                         // 22
          $in: userIds,                                                                                                // 22
          $ne: Meteor.userId()                                                                                         // 22
        }                                                                                                              // 22
      });                                                                                                              // 22
    }                                                                                                                  // 23
  });                                                                                                                  // 18
  Template.hello.onCreated(function () {                                                                               // 26
    Meteor.subscribe("presences");                                                                                     // 27
    Meteor.subscribe("users");                                                                                         // 28
    window.peer = new Peer({                                                                                           // 30
      key: 's5fcjmfdi5vfs9k9',                                                                                         // 31
      // change this key                                                                                               // 31
      debug: 3,                                                                                                        // 32
      config: {                                                                                                        // 33
        'iceServers': [{                                                                                               // 33
          url: 'stun:stun.l.google.com:19302'                                                                          // 34
        }, {                                                                                                           // 34
          url: 'stun:stun1.l.google.com:19302'                                                                         // 35
        }]                                                                                                             // 35
      }                                                                                                                // 33
    }); // This event: remote peer receives a call                                                                     // 30
                                                                                                                       //
    peer.on('open', function () {                                                                                      // 40
      $('#myPeerId').text(peer.id); // update the current user's profile                                               // 41
                                                                                                                       //
      Meteor.users.update({                                                                                            // 43
        _id: Meteor.userId()                                                                                           // 43
      }, {                                                                                                             // 43
        $set: {                                                                                                        // 44
          profile: {                                                                                                   // 45
            peerId: peer.id                                                                                            // 45
          }                                                                                                            // 45
        }                                                                                                              // 44
      });                                                                                                              // 43
    }); // This event: remote peer receives a call                                                                     // 48
                                                                                                                       //
    peer.on('call', function (incomingCall) {                                                                          // 51
      window.currentCall = incomingCall;                                                                               // 52
      incomingCall.answer(window.localStream);                                                                         // 53
      incomingCall.on('stream', function (remoteStream) {                                                              // 54
        window.remoteStream = remoteStream;                                                                            // 55
        var video = document.getElementById("theirVideo");                                                             // 56
        video.src = URL.createObjectURL(remoteStream);                                                                 // 57
      });                                                                                                              // 58
    });                                                                                                                // 59
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia; // get audio/video
                                                                                                                       //
    navigator.getUserMedia({                                                                                           // 67
      audio: true,                                                                                                     // 67
      video: true                                                                                                      // 67
    }, function (stream) {                                                                                             // 67
      //display video                                                                                                  // 68
      var video = document.getElementById("myVideo");                                                                  // 69
      video.src = URL.createObjectURL(stream);                                                                         // 70
      window.localStream = stream;                                                                                     // 71
    }, function (error) {                                                                                              // 72
      console.log(error);                                                                                              // 72
    });                                                                                                                // 72
  });                                                                                                                  // 75
}                                                                                                                      // 77
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"template.layout.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/template.layout.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("layout");                                                                                        // 2
Template["layout"] = new Template("Template.layout", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return [ HTML.HEAD("\n    ", HTML.Raw('<meta charset="utf-8">'), "\n    ", HTML.Raw('<meta http-equiv="X-UA-Compatible" content="IE=edge">'), "\n    ", HTML.Raw('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">'), "\n    ", HTML.Raw('<meta name="description" content="TakeTalk is an application to manage your meetings by coordinate time speech">'), "\n    ", HTML.Raw('<link rel="icon" href="/favicon.ico">'), "\n    ", HTML.TITLE(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "mainTitle");                                                          // 6
  })), "\n\n  "), "\n  ", HTML.BODY({                                                                                  // 7
    "cz-shortcut-listen": "true"                                                                                       // 8
  }, "\n\n    ", HTML.DIV({                                                                                            // 9
    class: "am-wrapper am-nosidebar-left"                                                                              // 10
  }, "\n      ", HTML.NAV({                                                                                            // 11
    class: "navbar navbar-default navbar-fixed-top am-top-header"                                                      // 12
  }, "\n        ", HTML.DIV({                                                                                          // 13
    class: "container-fluid"                                                                                           // 14
  }, "\n          ", HTML.DIV({                                                                                        // 15
    class: "navbar-header"                                                                                             // 16
  }, "\n            ", HTML.DIV({                                                                                      // 17
    class: "page-title"                                                                                                // 18
  }, "\n              ", HTML.A({                                                                                      // 19
    href: function() {                                                                                                 // 20
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                                 // 21
        route: "home"                                                                                                  // 22
      }));                                                                                                             // 23
    },                                                                                                                 // 24
    class: "navbar-brand title-font"                                                                                   // 25
  }, "\n                ", HTML.Raw('<img src="/LOGO.png" height="" width="100%" style="display:inline">')), "\n            "), "\n          "), "\n          ", HTML.Raw('<a href="#" data-toggle="collapse" data-target="#am-navbar-collapse" class="am-toggle-top-header-menu collapsed">\n            <span class="glyphicon glyphicon-menu-hamburger"></span>\n          </a>'), "\n          ", HTML.DIV({
    id: "am-navbar-collapse",                                                                                          // 27
    class: "collapse navbar-collapse"                                                                                  // 28
  }, "\n            ", HTML.UL({                                                                                       // 29
    class: "nav navbar-nav am-nav-center"                                                                              // 30
  }, "\n              ", HTML.LI(HTML.A({                                                                              // 31
    href: function() {                                                                                                 // 32
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                                 // 33
        route: "home"                                                                                                  // 34
      }));                                                                                                             // 35
    }                                                                                                                  // 36
  }, HTML.Raw('<span class="glyphicon glyphicon-home" aria-hidden="true"></span>'))), "\n              ", HTML.Raw("<!-- <li><a href=\"{{pathFor route='tutorial'}}\">Tutorial</a></li>\n              <li><a href=\"{{pathFor route='downloads'}}\">Downloads</a></li> -->"), "\n              ", HTML.Raw("<!-- langue-->"), "\n              ", HTML.LI(HTML.A({
    href: function() {                                                                                                 // 38
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                                 // 39
        route: "groups"                                                                                                // 40
      }));                                                                                                             // 41
    }                                                                                                                  // 42
  }, Blaze.View("lookup:_", function() {                                                                               // 43
    return Spacebars.mustache(view.lookup("_"), "groups");                                                             // 44
  }))), "\n              ", HTML.LI({                                                                                  // 45
    class: "dropdown"                                                                                                  // 46
  }, "\n                ", HTML.A({                                                                                    // 47
    href: "#",                                                                                                         // 48
    "data-toggle": "dropdown",                                                                                         // 49
    role: "button",                                                                                                    // 50
    "aria-expanded": "false",                                                                                          // 51
    class: "dropdown-toggle"                                                                                           // 52
  }, Blaze.View("lookup:_", function() {                                                                               // 53
    return Spacebars.mustache(view.lookup("_"), "lang");                                                               // 54
  }), "\n                  ", HTML.Raw('<span class="glyphicon glyphicon-globe" aria-hidden="true"></span>'), "\n                "), "\n                ", HTML.UL({
    role: "menu",                                                                                                      // 56
    class: "dropdown-menu"                                                                                             // 57
  }, "\n                  ", HTML.LI(Spacebars.include(view.lookupTemplate("i18n_buttons"))), "\n                "), "\n              "), "\n              ", HTML.Raw("<!--fin -->"), "\n\n              "), "\n              ", HTML.LI({
    class: "nav navbar-nav navbar-right"                                                                               // 59
  }, "\n                ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n              "), "\n          "), "\n\n\n          ", HTML.Raw('<div class="collapse navbar-collapse" id="navigation">\n            <ul class="nav navbar-nav navbar-right">\n            </ul>\n          </div>'), "\n        "), "\n      "), "\n\n\n      ", HTML.DIV({
    class: "am-content"                                                                                                // 61
  }, "\n        ", Spacebars.include(view.lookupTemplate("yield")), "\n      "), "\n      ", HTML.Raw("<footer>\n        <p>\n          <!-- Ici ajout d'informations pour le footer (plan du site, formulaire de contact, copyrights....) -->\n        </p>\n      </footer>"), "\n    "), "\n    ", HTML.SCRIPT({
    type: "text/javascript"                                                                                            // 63
  }, "\n\n"), "\n  ") ];                                                                                               // 64
}));                                                                                                                   // 65
                                                                                                                       // 66
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"helpers":{"config.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/helpers/config.js                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Accounts.ui.config({                                                                                                   // 1
    passwordSignupFields: 'USERNAME_AND_EMAIL',                                                                        // 2
    extraSignupFields: [{                                                                                              // 3
        fieldName: 'last-name',                                                                                        // 5
        fieldLabel: 'Last name',                                                                                       // 6
        inputType: 'text',                                                                                             // 7
        visible: true                                                                                                  // 8
    }, {                                                                                                               // 4
        fieldName: 'meetingId',                                                                                        // 11
        fieldLabel: 'meetingId',                                                                                       // 12
        inputType: 'text',                                                                                             // 13
        visible: false                                                                                                 // 14
    }]                                                                                                                 // 10
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"js":{"create.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/js/create.js                                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.create.events({                                                                                               // 3
  //Création d'un nouveau champ de saisie lorsqu'un caractère est renseigné                                            // 4
  'keyup .participant-email-input': function (e) {                                                                     // 5
    var input = $(e.target);                                                                                           // 6
                                                                                                                       //
    if (input.val().length > 0) {                                                                                      // 7
      var rank = input.parents(".participant-email")[0].getAttribute('rank');                                          // 8
      var form = input.parents("#create-form");                                                                        // 9
      var nextRank = parseInt(rank) + 1;                                                                               // 10
                                                                                                                       //
      if ($(form).find('.participant-email[rank="' + nextRank + '"]').length < 1) {                                    // 12
        var newInput = $(input.parents(".participant-email")[0].cloneNode(true));                                      // 13
        newInput.find(".participant-email-input").val("");                                                             // 14
        newInput.attr('rank', nextRank);                                                                               // 15
        $(input.parents(".participant-email-group")[0]).append(newInput);                                              // 16
      }                                                                                                                // 17
    }                                                                                                                  // 18
  },                                                                                                                   // 19
  'submit form': function (e) {                                                                                        // 22
    e.preventDefault(); //Récupération des éléments DOM des champs de saisie                                           // 23
                                                                                                                       //
    var ordreInputs = e.target.ordreDuJour;                                                                            // 25
    var ordreTimeInputs = e.target.ordreDuJourTemps;                                                                   // 26
    var participantsInputs = e.target.participantsEmails; //Récupération des valeurs de l'ordre du jour, temps estimés et des emails d'invitation
                                                                                                                       //
    var ordres = [];                                                                                                   // 30
    var ordreTimes = [];                                                                                               // 31
    var participantsEmails = [];                                                                                       // 32
    var participantActivity = []; //Récupération des éléments DOM des champs de saisie                                 // 33
                                                                                                                       //
    var participantsInputs = $(e.target).find('[name=participantsEmails]');                                            // 36
                                                                                                                       //
    for (i = 0; i < participantsInputs.length; i++) {                                                                  // 40
      if (participantsInputs[i].value != "") {                                                                         // 41
        participantsEmails.push(participantsInputs[i].value);                                                          // 42
        participantActivity.push(false);                                                                               // 43
      }                                                                                                                // 44
    } //Création du meeting                                                                                            // 45
    //voir comment rajouter des personnes au meeting                                                                   // 48
    //idée : création d'un tableau qui est rempli en faisant Meteor.user().mettingId = meetingId                       // 49
                                                                                                                       //
                                                                                                                       //
    var meeting = {                                                                                                    // 51
      name: e.target.meetingName.value,                                                                                // 52
      duration: e.target.meetingDuration.value,                                                                        // 53
      animatorName: e.target.animatorName.value,                                                                       // 54
      animatorMail: e.target.animatorEmail.value,                                                                      // 55
      participantsEmails: participantsEmails,                                                                          // 56
      participantActivity: participantActivity,                                                                        // 57
      status: 'ongoing',                                                                                               // 58
      ordres: ordres,                                                                                                  // 59
      ordreTimes: ordreTimes,                                                                                          // 60
      speaker: e.target.animatorEmail.value                                                                            // 61
    };                                                                                                                 // 51
    Meteor.call('meetingInsert', meeting, function (error, result) {                                                   // 64
      // affiche l'erreur à l'utilisateur et s'interrompt                                                              // 65
      if (error) return alert(error.reason);                                                                           // 66
      var meetingId = result._id;                                                                                      // 69
      var emailBody = 'Here is the link for the meeting : taketalk.meteor.com/join/' + meetingId + '\n';               // 71
      Meteor.call('sendEmail', e.target.animatorEmail.value, 'noreply@taketalk.com', 'TakeTalk session created', 'You have just created a session of TakeTalk. \n\n' + emailBody);
                                                                                                                       //
      for (var i = 0; i < participantsEmails.length; i++) {                                                            // 80
        Meteor.call('sendEmail', participantsEmails[i], 'noreply@taketalk.com', 'TakeTalk invitation', 'You are invited to a session of TakeTalk. \n\n' + emailBody);
      }                                                                                                                // 84
                                                                                                                       //
      console.log("mail envoyé"); //Redirection vers la page du meeting                                                // 86
                                                                                                                       //
      Router.go('/meeting/' + meetingId);                                                                              // 88
    });                                                                                                                // 90
  }                                                                                                                    // 91
});                                                                                                                    // 3
Template.create.onRendered(function () {                                                                               // 94
  if (Meteor.userId() != null) {                                                                                       // 95
    $(' #animatorName').val(Meteor.user().username);                                                                   // 96
    $(' #animatorEmail').val(Meteor.user().emails[0].address);                                                         // 97
  }                                                                                                                    // 98
                                                                                                                       //
  ;                                                                                                                    // 98
});                                                                                                                    // 99
Template.tempName.onRendered(function () {                                                                             // 100
  var d = new Date();                                                                                                  // 102
  d.setHours(0, 0, 0);                                                                                                 // 103
  $('.datetimepicker').datetimepicker({                                                                                // 104
    format: 'HH:mm',                                                                                                   // 105
    defaultDate: d //  defaultViewDate : {hours : 00, minutes: 00}                                                     // 106
                                                                                                                       //
  });                                                                                                                  // 104
});                                                                                                                    // 109
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"home.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/js/home.js                                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.home.events({                                                                                                 // 1
    //Redirection vers la page de création de meeting                                                                  // 2
    'click #open': function (e) {                                                                                      // 3
        Router.go('create');                                                                                           // 4
    }                                                                                                                  // 5
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"meeting.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/js/meeting.js                                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//import { Template } from 'meteor/templating';                                                                        // 1
//import { ReactiveVar } from 'meteor/reactive-var';                                                                   // 2
var sortableList;                                                                                                      // 4
var meeting; //Template.meeting.isTrue = true;                                                                         // 5
//console.log(Template.meeting.isTrue);                                                                                // 8
                                                                                                                       //
Presence.state = function () {                                                                                         // 10
  return {                                                                                                             // 11
    online: true,                                                                                                      // 12
    currentRoomId: Session.get('currentRoomId')                                                                        // 13
  };                                                                                                                   // 11
};                                                                                                                     // 15
                                                                                                                       //
Template.meeting.helpers({                                                                                             // 18
  users: function () {                                                                                                 // 19
    // exclude the currentUser                                                                                         // 20
    var userIds = Presences.find().map(function (presence) {                                                           // 21
      return presence.userId;                                                                                          // 21
    });                                                                                                                // 21
    var userPres = Presences.find().map(function (presence) {                                                          // 22
      if (presence.state.currentRoomId === Session.get('currentRoomId')) return presence.userId;                       // 23
    }); /*                                                                                                             // 25
        console.log("je suis connecté  " +userIds);                                                                    //
        console.log("je suis ici  " + userPres);*/                                                                     //
    return Meteor.users.find({                                                                                         // 29
      _id: {                                                                                                           // 29
        $in: userPres,                                                                                                 // 29
        $ne: Meteor.userId()                                                                                           // 29
      }                                                                                                                // 29
    });                                                                                                                // 29
  },                                                                                                                   // 30
  getSpeaker: function () {                                                                                            // 32
    meeting = Session.get("meeting");                                                                                  // 33
    var speaker = Meetings.findOne({                                                                                   // 34
      _id: meeting._id                                                                                                 // 34
    }).speaker;                                                                                                        // 34
    Session.set("speaker", speaker);                                                                                   // 35
  },                                                                                                                   // 37
  isSpeaker: function () {                                                                                             // 39
    meeting = Session.get("meeting");                                                                                  // 40
    speaker = Session.get("speaker");                                                                                  // 41
    var mail;                                                                                                          // 42
    if (this.animatorMail) mail = this.animatorMail;else mail = "" + this;                                             // 43
    return Meetings.findOne({                                                                                          // 47
      _id: meeting._id                                                                                                 // 47
    }).speaker === mail;                                                                                               // 47
  },                                                                                                                   // 48
  isAsking: function () {                                                                                              // 51
    meeting = Session.get("meeting");                                                                                  // 52
    var mail;                                                                                                          // 53
    if (this.animatorMail) mail = this.animatorMail;else mail = "" + this;                                             // 54
    return Speeches.find({                                                                                             // 58
      myMeetingId: meeting._id,                                                                                        // 58
      speakers: mail                                                                                                   // 58
    }).count();                                                                                                        // 58
  },                                                                                                                   // 59
  /*                                                                                                                   // 62
    onLoad:function(){                                                                                                 //
      var meeting = this;                                                                                              //
      Session.set("meeting",this);                                                                                     //
      Session.set('currentRoomId',this._id);                                                                           //
      var idMeeting=this._id;                                                                                          //
      var meetingParticipant= this.participantsEmails;                                                                 //
      var meetingParticipantActivity = this.participantActivity;                                                       //
                                                                                                                       //
    },                                                                                                                 //
  */ownMeeting: function () {                                                                                          //
    meeting = Session.get("meeting");                                                                                  // 74
    return meeting.animatorMail === Meteor.user().emails[0].address;                                                   // 75
  },                                                                                                                   // 76
  partMeeting: function () {                                                                                           // 77
    var res = 0;                                                                                                       // 78
                                                                                                                       //
    if (this.animatorMail === Meteor.user().emails[0].address) {                                                       // 79
      res = 1;                                                                                                         // 80
    } else {                                                                                                           // 81
      var mail = "" + this;                                                                                            // 83
      if (mail === Meteor.user().emails[0].address) res = 1;                                                           // 84
      meeting = Session.get("meeting"); /*                                                                             // 87
                                              for(i=0;i<meeting.participantsEmails.length;i++){                        //
                                                if(meeting.participantsEmails[i]===Meteor.user().emails[0].address){   //
                                                                                                                       //
                                                  Meetings.update(idMeeting,{$set: {"meetingParticipantActivity[i]": true}});
                                                                                                                       //
                                                  i=this.participantsEmails.length;                                    //
                                                }                                                                      //
                                              }                                                                        //
                                        */                                                                             //
    }                                                                                                                  // 99
                                                                                                                       //
    return res;                                                                                                        // 101
  }                                                                                                                    // 102
});                                                                                                                    // 18
Template.meeting.events({                                                                                              // 105
  'click #speakControl': function (e) {                                                                                // 106
    console.log(meeting._id);                                                                                          // 107
    meeting = Session.get("meeting");                                                                                  // 108
    speeches = Speeches.findOne({                                                                                      // 109
      myMeetingId: meeting._id                                                                                         // 109
    });                                                                                                                // 109
                                                                                                                       //
    if (this.animatorMail) {                                                                                           // 110
      Meetings.update(meeting._id, {                                                                                   // 111
        $set: {                                                                                                        // 111
          speaker: this.animatorMail                                                                                   // 111
        }                                                                                                              // 111
      });                                                                                                              // 111
    } else {                                                                                                           // 112
      var mail = "" + this;                                                                                            // 114
      Meetings.update(meeting._id, {                                                                                   // 115
        $set: {                                                                                                        // 115
          speaker: mail                                                                                                // 115
        }                                                                                                              // 115
      });                                                                                                              // 115
      Speeches.update(speeches._id, {                                                                                  // 116
        $pull: {                                                                                                       // 116
          speakers: mail                                                                                               // 116
        }                                                                                                              // 116
      });                                                                                                              // 116
    }                                                                                                                  // 117
  },                                                                                                                   // 119
  'click #speakAsk': function (e) {                                                                                    // 121
    meeting = Session.get("meeting");                                                                                  // 122
    speeches = Speeches.findOne({                                                                                      // 123
      myMeetingId: meeting._id                                                                                         // 123
    });                                                                                                                // 123
    var mail = "" + this;                                                                                              // 127
    Speeches.update(speeches._id, {                                                                                    // 128
      $push: {                                                                                                         // 128
        speakers: mail                                                                                                 // 128
      }                                                                                                                // 128
    });                                                                                                                // 128
  },                                                                                                                   // 129
  'click #inviteSubmit': function (e) {                                                                                // 130
    meeting = Session.get("meeting"); //speeches=Speeches.findOne({myMeetingId:meeting._id});                          // 131
                                                                                                                       //
    var newParticipant = document.querySelectorAll('#newParticipant')[0].value;                                        // 134
    Meetings.update(meeting._id, {                                                                                     // 135
      $push: {                                                                                                         // 135
        participantsEmails: newParticipant                                                                             // 135
      }                                                                                                                // 135
    });                                                                                                                // 135
  },                                                                                                                   // 136
  'click #talkCancel': function (e) {                                                                                  // 138
    console.log("I click on Talk"); //à modifier                                                                       // 139
                                                                                                                       //
    var userId = Meteor.user().username;                                                                               // 141
    var meetingId = Meteor.user().meeting;                                                                             // 142
    var rank = 1;                                                                                                      // 143
    console.log("userId = " + userId);                                                                                 // 144
    console.log("meeting = " + meetingId);                                                                             // 145
  },                                                                                                                   // 146
  /** A click on waitProceed starts or stops the timer */'click #waitProceed': function (e) {                          // 149
    //Arret du timer                                                                                                   // 151
    if (e.target.value == "Wait") {                                                                                    // 152
      Meteor.clearInterval(timerId);                                                                                   // 153
      Speeches.update(Speeches.findOne({                                                                               // 154
        meeting: Session.get("meetingId"),                                                                             // 155
        status: "ongoing"                                                                                              // 155
      })._id, {                                                                                                        // 155
        $set: {                                                                                                        // 156
          status: "pending"                                                                                            // 156
        }                                                                                                              // 156
      });                                                                                                              // 156
    } else {                                                                                                           // 158
      Speeches.update(Speeches.findOne({                                                                               // 159
        meeting: Session.get("meetingId"),                                                                             // 160
        status: "pending"                                                                                              // 160
      }, {                                                                                                             // 160
        sort: {                                                                                                        // 160
          rank: 1                                                                                                      // 160
        }                                                                                                              // 160
      })._id, {                                                                                                        // 160
        $set: {                                                                                                        // 161
          status: "ongoing"                                                                                            // 161
        }                                                                                                              // 161
      }); //Lancement du timer                                                                                         // 161
                                                                                                                       //
      timerId = Meteor.setInterval(function () {                                                                       // 165
        var currentSpeech = Speeches.findOne({                                                                         // 166
          meeting: Session.get("meetingId"),                                                                           // 166
          status: "ongoing"                                                                                            // 166
        });                                                                                                            // 166
        var user = Users.findOne({                                                                                     // 167
          _id: currentSpeech.user                                                                                      // 167
        });                                                                                                            // 167
        var paroles = [];                                                                                              // 168
        var time = 1; //Incrémentation du compteur associé a l'ordre du speech                                         // 169
                                                                                                                       //
        if (user.paroles === undefined) {                                                                              // 172
          paroles.push({                                                                                               // 173
            "order": currentSpeech.orderChoose,                                                                        // 173
            "time": 1                                                                                                  // 173
          });                                                                                                          // 173
        } else {                                                                                                       // 174
          var paroleFound = false;                                                                                     // 175
          paroles = user.paroles;                                                                                      // 176
          paroles.forEach(function (el) {                                                                              // 177
            if (el['order'] == currentSpeech.orderChoose) {                                                            // 178
              paroleFound = true;                                                                                      // 179
              el['time'] = parseInt(el['time']) + 1;                                                                   // 180
            }                                                                                                          // 181
          });                                                                                                          // 182
                                                                                                                       //
          if (!paroleFound) {                                                                                          // 183
            paroles.push({                                                                                             // 184
              "order": currentSpeech.orderChoose,                                                                      // 184
              "time": 1                                                                                                // 184
            });                                                                                                        // 184
          }                                                                                                            // 185
        }                                                                                                              // 186
                                                                                                                       //
        Users.update(user._id, {                                                                                       // 188
          $set: {                                                                                                      // 188
            paroles: paroles                                                                                           // 188
          }                                                                                                            // 188
        }); //Update du temps restant du speech                                                                        // 188
                                                                                                                       //
        Speeches.update(currentSpeech._id, {                                                                           // 191
          $set: {                                                                                                      // 193
            timeLeft: Speeches.findOne({                                                                               // 193
              meeting: Session.get("meetingId"),                                                                       // 193
              status: "ongoing"                                                                                        // 193
            }).timeLeft + 1                                                                                            // 193
          }                                                                                                            // 193
        }); //Update du statut du speech si celui ci est terminé                                                       // 193
                                                                                                                       //
        if (Speeches.findOne({                                                                                         // 196
          meeting: Session.get("meetingId"),                                                                           // 196
          status: "ongoing"                                                                                            // 196
        }).timeLeft == Speeches.findOne({                                                                              // 196
          meeting: Session.get("meetingId"),                                                                           // 196
          status: "ongoing"                                                                                            // 196
        }).time) {                                                                                                     // 196
          Speeches.update(Speeches.findOne({                                                                           // 197
            meeting: Session.get("meetingId"),                                                                         // 198
            status: "ongoing"                                                                                          // 198
          })._id, {                                                                                                    // 198
            $set: {                                                                                                    // 199
              status: "done"                                                                                           // 199
            }                                                                                                          // 199
          });                                                                                                          // 199
          Meteor.clearInterval(timerId);                                                                               // 201
        }                                                                                                              // 202
      }, 1000);                                                                                                        // 203
    } //Rafraichi la fonction de drag'n'drop                                                                           // 204
    //Utile pour empêcher le déplacement du premier meeting quand on clique sur 'proceed'                              // 206
    //trouver une autre solution (la méthode "refresh" semble inefficace)                                              // 207
                                                                                                                       //
                                                                                                                       //
    setTimeout(function () {                                                                                           // 208
      sortableList.sortable("destroy");                                                                                // 209
      computeSortable(sortableList);                                                                                   // 210
    }, 100);                                                                                                           // 211
  }                                                                                                                    // 213
});                                                                                                                    // 105
Template.meeting.onCreated(function () {                                                                               // 218
  Meteor.subscribe("presences");                                                                                       // 219
  Meteor.subscribe("users"); //   meeting = this.data;                                                                 // 220
                                                                                                                       //
  Session.set("meeting", this.data);                                                                                   // 223
  Session.set('currentRoomId', this._id);                                                                              // 224
}); //summernote : don't touch                                                                                         // 226
                                                                                                                       //
Template.meeting.onRendered(function () {                                                                              // 235
  $(document).ready(function () {                                                                                      // 236
    $('#textareaRich').summernote({                                                                                    // 237
      height: 300                                                                                                      // 238
    });                                                                                                                // 237
  });                                                                                                                  // 240
});                                                                                                                    // 241
Template.meeting.events({                                                                                              // 245
  'click #saveReport': function (e) {                                                                                  // 246
    // increment the counter when button is clicked                                                                    // 247
    console.log("I click on Talk");                                                                                    // 248
    var title = $(' #TitleReport').val();                                                                              // 249
    var data = $('#textareaRich').summernote('code'); //$('.click2edit').summernote('destroy');                        // 250
                                                                                                                       //
    console.log("title :" + title + " data = " + data);                                                                // 252
    var doc = new jsPDF();                                                                                             // 253
    doc.text(10, 10, data);                                                                                            // 254
    doc.save(title); //Fonctionne mais enregistre en .txt                                                              // 255
    //var blob = new Blob([data], {type: "text/plain;charset=utf-8"});                                                 // 257
    //saveAs(blob, title+".txt");                                                                                      // 258
  }                                                                                                                    // 259
});                                                                                                                    // 245
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"meetingLeft.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/js/meetingLeft.js                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.meetingReport.onRendered(function () {                                                                        // 2
  $(document).ready(function () {                                                                                      // 3
    $('#textareaRich').summernote({                                                                                    // 4
      height: 300                                                                                                      // 5
    });                                                                                                                // 4
  });                                                                                                                  // 7
});                                                                                                                    // 8
Template.meetingReport.events({                                                                                        // 12
  'click #saveReport': function (e) {                                                                                  // 13
    // increment the counter when button is clicked                                                                    // 14
    console.log("I click on Talk");                                                                                    // 15
    var title = $(' #TitleReport').val();                                                                              // 16
    var data = $('#textareaRich').summernote('code'); //$('.click2edit').summernote('destroy');                        // 17
                                                                                                                       //
    console.log("title :" + title + " data = " + data);                                                                // 19
    var doc = new jsPDF();                                                                                             // 20
    doc.text(10, 10, data);                                                                                            // 21
    doc.save(title); //Fonctionne mais enregistre en .txt                                                              // 22
    //var blob = new Blob([data], {type: "text/plain;charset=utf-8"});                                                 // 24
    //saveAs(blob, title+".txt");                                                                                      // 25
  },                                                                                                                   // 26
  'click #goppt': function (e) {                                                                                       // 27
    console.log("GoPPT");                                                                                              // 28
    Template.meeting.isTrue = false;                                                                                   // 29
    console.log(Template.meeting.isTrue);                                                                              // 30
  }                                                                                                                    // 32
});                                                                                                                    // 12
Template.pptcont.events({                                                                                              // 35
  'click #gomt': function (e) {                                                                                        // 36
    console.log("GoMT");                                                                                               // 37
    console.log(Template.meeting.isTrue.value());                                                                      // 38
    Template.meeting.isTrue = true;                                                                                    // 40
  }                                                                                                                    // 41
});                                                                                                                    // 35
Template.meetingReport.isTrue = true;                                                                                  // 46
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"lib":{"Collections":{"Groups.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/Collections/Groups.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Groups = new Meteor.Collection('groups');                                                                              // 1
Groups.allow({                                                                                                         // 3
    update: function (userId, group) {                                                                                 // 4
        return true; /*return ownsDocument(userId, group);*/                                                           // 4
    },                                                                                                                 // 4
    remove: function (userId, group) {                                                                                 // 5
        return ownsDocument(userId, group);                                                                            // 5
    },                                                                                                                 // 5
    insert: function (userId, doc) {                                                                                   // 6
        // autoriser les posts seulement si l'utilisateur est authentifié                                              // 7
        return !!userId;                                                                                               // 8
    }                                                                                                                  // 9
});                                                                                                                    // 3
Meteor.methods({                                                                                                       // 12
    groupInsert: function (groupAttributes) {                                                                          // 13
        check(Meteor.userId(), String);                                                                                // 14
        check(groupAttributes, {                                                                                       // 15
            name: String,                                                                                              // 16
            members: [String]                                                                                          // 17
        });                                                                                                            // 15
        var user = Meteor.user();                                                                                      // 20
                                                                                                                       //
        var group = _.extend(groupAttributes, {                                                                        // 21
            userId: user._id,                                                                                          // 22
            author: user.emails,                                                                                       // 23
            authorAdress: user.emails[0].address,                                                                      // 24
            authorName: user.username,                                                                                 // 25
            submitted: new Date()                                                                                      // 26
        });                                                                                                            // 21
                                                                                                                       //
        var groupId = Groups.insert(group);                                                                            // 28
        return {                                                                                                       // 29
            _id: groupId                                                                                               // 30
        };                                                                                                             // 29
    }                                                                                                                  // 32
});                                                                                                                    // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Meetings.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/Collections/Meetings.js                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/** The collection that contains the meetings */Meetings = new Mongo.Collection("meetings");                           // 1
Meetings.allow({                                                                                                       // 4
    update: function () {                                                                                              // 5
        return true; /*return ownsDocument(userId, group);*/                                                           // 5
    },                                                                                                                 // 5
    remove: function () {                                                                                              // 6
        return true;                                                                                                   // 6
    },                                                                                                                 // 6
    insert: function () {                                                                                              // 7
        return true;                                                                                                   // 8
    }                                                                                                                  // 9
});                                                                                                                    // 4
Meteor.methods({                                                                                                       // 13
    meetingInsert: function (meetingAttributes) {                                                                      // 14
        check(meetingAttributes, {                                                                                     // 16
            name: String,                                                                                              // 17
            duration: String,                                                                                          // 18
            animatorName: String,                                                                                      // 19
            animatorMail: String,                                                                                      // 20
            participantsEmails: [String],                                                                              // 21
            participantActivity: [Boolean],                                                                            // 22
            status: String,                                                                                            // 23
            ordres: [String],                                                                                          // 24
            ordreTimes: [Number],                                                                                      // 25
            speaker: String /*,                                                                                        // 26
                            pwd : "" */                                                                                //
        });                                                                                                            // 16
                                                                                                                       //
        var meeting = _.extend(meetingAttributes, {                                                                    // 30
            submitted: new Date()                                                                                      // 31
        });                                                                                                            // 30
                                                                                                                       //
        var meetingId = Meetings.insert(meeting);                                                                      // 33
        return {                                                                                                       // 36
            _id: meetingId                                                                                             // 37
        };                                                                                                             // 36
    }                                                                                                                  // 39
}); /*                                                                                                                 // 13
     Exemple :                                                                                                         //
                                                                                                                       //
     name: 'test',                                                                                                     //
     status: "ongoing",                                                                                                //
     ordres: ['ordre1', 'ordre2', 'ordre3'],                                                                           //
     ordreTimes: [90, 130, 268],                                                                                       //
     _id: id                                                                                                           //
     pwd : ""                                                                                                          //
     */                                                                                                                //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Speeches.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/Collections/Speeches.js                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/** The collection that contains the speeches */Speeches = new Mongo.Collection("speeches");                           // 1
Speeches.allow({                                                                                                       // 4
    update: function () {                                                                                              // 5
        return true; /*return ownsDocument(userId, group);*/                                                           // 5
    },                                                                                                                 // 5
    remove: function () {                                                                                              // 6
        return true;                                                                                                   // 6
    },                                                                                                                 // 6
    insert: function () {                                                                                              // 7
        return true;                                                                                                   // 8
    }                                                                                                                  // 9
});                                                                                                                    // 4
Meteor.methods({                                                                                                       // 13
    speechesInsert: function (speechesAttributes) {                                                                    // 14
        check(speechesAttributes, {                                                                                    // 16
            meetingID: String /*,                                                                                      // 17
                              speakers: [String]                                                                       //
                              */                                                                                       //
        });                                                                                                            // 16
        var speechesId = Speeches.insert(speechesAttributes);                                                          // 24
        return {                                                                                                       // 27
            _id: speechesId                                                                                            // 28
        };                                                                                                             // 27
    }                                                                                                                  // 30
});                                                                                                                    // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"Router.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/Router.js                                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Router.configure({                                                                                                     // 1
  layoutTemplate: 'layout',                                                                                            // 2
  waitOn: function () {                                                                                                // 3
    return [Meteor.subscribe('groups'), Meteor.subscribe('meetings')];                                                 // 4
  }                                                                                                                    // 7
}); /** The route to the home page */                                                                                  // 1
Router.route('/', {                                                                                                    // 14
  name: 'home'                                                                                                         // 14
});                                                                                                                    // 14
Router.route('/create/:_id?', {                                                                                        // 16
  name: 'create',                                                                                                      // 17
  data: function () {                                                                                                  // 18
    return Groups.findOne(this.params._id);                                                                            // 18
  }                                                                                                                    // 18
});                                                                                                                    // 16
Router.route('/groups', {                                                                                              // 21
  name: 'groups'                                                                                                       // 21
});                                                                                                                    // 21
Router.route('/groupSubmit', {                                                                                         // 22
  name: 'groupSubmit'                                                                                                  // 22
});                                                                                                                    // 22
Router.route('/groups/:_id', {                                                                                         // 23
  name: 'groupPage',                                                                                                   // 24
  data: function () {                                                                                                  // 25
    return Groups.findOne(this.params._id);                                                                            // 25
  }                                                                                                                    // 25
});                                                                                                                    // 23
Router.route('/meeting/:_meetingId', {                                                                                 // 29
  name: 'meeting',                                                                                                     // 30
  data: function () {                                                                                                  // 31
    // Recherche du meeting dont l'id est passé en paramètre                                                           // 32
    // Redirection vers une page d'erreur "404 not found" lorsqu'aucun meeting n'est trouvé                            // 33
    var meeting = Meetings.findOne({                                                                                   // 34
      _id: this.params._meetingId,                                                                                     // 34
      status: "ongoing"                                                                                                // 34
    }); //  console.log(meeting);                                                                                      // 34
                                                                                                                       //
    if (meeting === undefined) {                                                                                       // 37
      //  console.log('undefined meeting...');                                                                         // 38
      Router.configure({                                                                                               // 39
        layoutTemplate: 'layout',                                                                                      // 39
        notFoundTemplate: '404'                                                                                        // 39
      });                                                                                                              // 39
    } else return Meetings.findOne({                                                                                   // 40
      _id: this.params._meetingId,                                                                                     // 42
      status: "ongoing"                                                                                                // 42
    });                                                                                                                // 42
  }                                                                                                                    // 44
});                                                                                                                    // 29
Router.route('/join/:_meetingId/:_userId', {                                                                           // 47
  name: 'join',                                                                                                        // 48
  data: function () {                                                                                                  // 49
    // Recherche du meeting dont l'id est passé en paramètre                                                           // 51
    // Redirection vers une page d'erreur "404 not found" lorsqu'aucun meeting n'est trouvé                            // 52
    var meeting = Meetings.findOne({                                                                                   // 53
      _id: this.params._meetingId                                                                                      // 53
    });                                                                                                                // 53
                                                                                                                       //
    if (meeting === undefined) {                                                                                       // 54
      console.log('meeting undefined');                                                                                // 55
      Router.configure({                                                                                               // 56
        layoutTemplate: 'layout',                                                                                      // 56
        notFoundTemplate: '404'                                                                                        // 56
      });                                                                                                              // 56
    } //Recherche de l'utilisateur                                                                                     // 57
    //Redirection vers une page d'erreur "404 not found" lorsqu'aucun utilisateur n'est trouvé                         // 60
    //Ne permet qu'aux utilisateurs invités de rejoindre un meeting                                                    // 61
                                                                                                                       //
                                                                                                                       //
    var user = MeetingUsers.findOne({                                                                                  // 62
      _id: this.params._userId                                                                                         // 62
    });                                                                                                                // 62
                                                                                                                       //
    if (user === undefined) {                                                                                          // 63
      console.log('user undefined');                                                                                   // 64
      Router.configure({                                                                                               // 65
        layoutTemplate: 'layout',                                                                                      // 65
        notFoundTemplate: '404'                                                                                        // 65
      });                                                                                                              // 65
    }                                                                                                                  // 66
                                                                                                                       //
    Session.set("meetingId", this.params._meetingId);                                                                  // 68
    Session.set("userId", this.params._userId);                                                                        // 69
    return {};                                                                                                         // 71
  }                                                                                                                    // 72
});                                                                                                                    // 47
Router.route('/meeting/:_meetingId/lineup', function () {                                                              // 75
  this.render('lineup');                                                                                               // 76
});                                                                                                                    // 77
Router.route('/end', function () {                                                                                     // 79
  this.render('end');                                                                                                  // 80
});                                                                                                                    // 81
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"i18n":{"en.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// i18n/en.i18n.json                                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];                                                                 // 9
// integrate the fallback language translations                                                                        // 10
translations = {};                                                                                                     // 11
translations[namespace] = {"mainTitle":"TakeTalk | The new meeting manager","lang":"Language","tuto":"Tutorial","downloads":"Downloads","groups":"Groups","menu":"Menu","menuGroup":"My groups","createGroup":"Create a group","groupTitle":"Groups","groupBodyTitle":"Your groups","groupInfo":"managed groups","groupSubmit":"Submit a group","name":"Name","members":"Members","addMembers":"Add members","openMeeting":"Open a meeting","managedBy":"managed by ","noGroup":"You haven't group yet.","tutoTitle":"Tutorial","tutoBodyTitle":"How to use TakeTalk","downloadTitle":"Downloads","downloadBodyTitle":"Documents to downloads","presentationApp":"Presentation of the application (PDF)","access":"access","joinTitle":"Join a meeting","joinName":"Your name","joinPwd":"Meeting's password","joinSubmit":"Join","lineupTitle":"Line up to talk","lineupOrder":"Order","lineupKeywords":"Keywords","lineupSpeach":"Speach time","lineupQuick":"Quick line up","lineupAs":"Line up as : ","lineupSubmit":"Line up","lineupCancel":"Cancel","homeTitle":"TakeTalk is your new companion app!","homeBody":"With TakeTalk manage your contributors' speech time to make the best out of your meetings!","endThanks":"Thank you for having choose TakeTalk!","endSum":"Here a summary of what happened during this meeting","warning":"Warning ! ","warningLogInfo":"You should be log in for viewing this features","meetingLink":"Link of the report","meetingLineUp":"People lining up","meetingKeywords":"Keywords:","meetingMembers":"People on this meeting","meetingAdd":"Add local participant","meetingInvite":"Invite participants","meetingClose":"Close meeting","meetingNewParticipant":"New Local Participant","meetingParticipantsName":"Participants' Name","meetingParticipantsMail":"Your participants' e-mails","meetingByMail":"By email address","meetingSpeechDeleted":"Your speech have been deleted","meetingMinEstimated":"min estimated","meetingNoDuration":"no duration scheduled","createTitle":"Create a meeting","createAnimatorName":"Your name *","createMail":"Your e-mail *","createMeetingName":"Your meeting's name *","createLink":"Link of the report","createParticipantsMail":"Your participants' e-mails","createMeeting":"Create your meeting","timeMeeting":"Time of Meeting","close":"Close","add":"Add","invite":"Invite"};
TAPi18n._loadLangFileObject("en", translations);                                                                       // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"fr.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// i18n/fr.i18n.json                                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["fr"] = ["French (France)","Français"];                                                        // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
require("./client/peerjs/template.webrtc-peerjs.js");
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
require("./client/peerjs/peer.js");
require("./client/peerjs/webrtc-peerjs.js");
require("./i18n/en.i18n.json");
require("./i18n/fr.i18n.json");