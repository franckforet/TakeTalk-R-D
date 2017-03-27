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
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var _ = Package.underscore._;
var Template = Package['templating-runtime'].Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __coffeescriptShare;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/tap_i18n-ui/i18n_ui_amplify.coffee.js                                                     //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
TAPi18n.setLanguageAmplify = function(language) {                                                     // 2
  amplify.store('tap-i18n-language', language);                                                       // 3
  return TAPi18n.setLanguage(language).always(TAPi18n._afterUILanguageChange);                        //
};                                                                                                    // 2
                                                                                                      //
Meteor.startup(function() {                                                                           // 2
  var ref, storedLanguage;                                                                            // 8
  storedLanguage = amplify.store('tap-i18n-language');                                                // 8
  if (storedLanguage) {                                                                               // 9
    return TAPi18n.setLanguage(storedLanguage);                                                       //
  } else {                                                                                            //
    if ((ref = _.keys(TAPi18n.getLanguages())) != null ? ref[0] : void 0) {                           // 12
      return TAPi18n.setLanguageAmplify(_.keys(TAPi18n.getLanguages())[0]);                           //
    }                                                                                                 //
  }                                                                                                   //
});                                                                                                   // 7
                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/tap_i18n-ui/i18n_ui_client_helpers.coffee.js                                              //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var key, ref, val;                                                                                    // 2
                                                                                                      //
TAPi18n.uiHelpers = {                                                                                 // 2
  enabled: function() {                                                                               // 3
    return TAPi18n.conf != null;                                                                      //
  },                                                                                                  //
  sortedLanguages: function() {                                                                       // 3
    var key, langauges, val;                                                                          // 7
    langauges = TAPi18n.getLanguages();                                                               // 7
    for (key in langauges) {                                                                          // 9
      val = langauges[key];                                                                           //
      langauges[key].tag = key;                                                                       // 10
    }                                                                                                 // 9
    return _.sortBy(_.values(langauges, function(language) {                                          //
      return language.tag;                                                                            //
    }));                                                                                              //
  },                                                                                                  //
  isCurrentLanguage: function(tag) {                                                                  // 3
    return tag === TAPi18n.getLanguage();                                                             //
  },                                                                                                  //
  currentLanguage: function() {                                                                       // 3
    var currentLanguage, ref;                                                                         // 19
    currentLanguage = (ref = TAPi18n.getLanguages()) != null ? ref[TAPi18n.getLanguage()] : void 0;   // 19
    currentLanguage.tag = TAPi18n.getLanguage();                                                      // 19
    return currentLanguage;                                                                           // 21
  }                                                                                                   //
};                                                                                                    //
                                                                                                      //
ref = TAPi18n.uiHelpers;                                                                              // 24
for (key in ref) {                                                                                    // 24
  val = ref[key];                                                                                     //
  UI.registerHelper("i18n_" + key, val);                                                              // 25
}                                                                                                     // 24
                                                                                                      //
TAPi18n._afterUILanguageChange = function() {                                                         // 2
  return null;                                                                                        //
};                                                                                                    // 28
                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/tap_i18n-ui/frameworks/template.i18n_ui_bootstrap.js                                      //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
                                                                                                      // 1
Template.__checkName("i18n_dropdown");                                                                // 2
Template["i18n_dropdown"] = new Template("Template.i18n_dropdown", (function() {                      // 3
  var view = this;                                                                                    // 4
  return HTML.SPAN({                                                                                  // 5
    class: "tap-i18n-dropdown"                                                                        // 6
  }, "\n    ", Blaze.If(function() {                                                                  // 7
    return Spacebars.call(view.lookup("i18n_enabled"));                                               // 8
  }, function() {                                                                                     // 9
    return [ "\n      ", HTML.SELECT({                                                                // 10
      class: "form-control"                                                                           // 11
    }, "\n        ", Blaze.Each(function() {                                                          // 12
      return Spacebars.call(view.lookup("i18n_sortedLanguages"));                                     // 13
    }, function() {                                                                                   // 14
      return [ "\n          ", HTML.OPTION({                                                          // 15
        value: function() {                                                                           // 16
          return Spacebars.mustache(view.lookup("tag"));                                              // 17
        },                                                                                            // 18
        selected: function() {                                                                        // 19
          return Spacebars.mustache(view.lookup("i18n_isCurrentLanguage"), view.lookup("tag"));       // 20
        }                                                                                             // 21
      }, Blaze.View("lookup:name", function() {                                                       // 22
        return Spacebars.mustache(view.lookup("name"));                                               // 23
      })), "\n        " ];                                                                            // 24
    }), "\n      "), "\n    " ];                                                                      // 25
  }, function() {                                                                                     // 26
    return [ "\n      ", HTML.SPAN({                                                                  // 27
      class: "i18n-not-found"                                                                         // 28
    }, "No i18n files found"), "\n    " ];                                                            // 29
  }), "\n  ");                                                                                        // 30
}));                                                                                                  // 31
                                                                                                      // 32
Template.__checkName("i18n_buttons");                                                                 // 33
Template["i18n_buttons"] = new Template("Template.i18n_buttons", (function() {                        // 34
  var view = this;                                                                                    // 35
  return HTML.SPAN({                                                                                  // 36
    class: "tap-i18n-buttons"                                                                         // 37
  }, "\n    ", Blaze.If(function() {                                                                  // 38
    return Spacebars.call(view.lookup("i18n_enabled"));                                               // 39
  }, function() {                                                                                     // 40
    return [ "\n      ", Blaze.Each(function() {                                                      // 41
      return Spacebars.call(view.lookup("i18n_sortedLanguages"));                                     // 42
    }, function() {                                                                                   // 43
      return [ "\n        ", HTML.BUTTON({                                                            // 44
        type: "button",                                                                               // 45
        class: function() {                                                                           // 46
          return [ "btn ", Blaze.If(function() {                                                      // 47
            return Spacebars.dataMustache(view.lookup("i18n_isCurrentLanguage"), view.lookup("tag"));
          }, function() {                                                                             // 49
            return "btn-primary";                                                                     // 50
          }, function() {                                                                             // 51
            return "btn-default";                                                                     // 52
          }) ];                                                                                       // 53
        }                                                                                             // 54
      }, Blaze.View("lookup:name", function() {                                                       // 55
        return Spacebars.mustache(view.lookup("name"));                                               // 56
      })), "\n      " ];                                                                              // 57
    }), "\n    " ];                                                                                   // 58
  }, function() {                                                                                     // 59
    return [ "\n      ", HTML.SPAN({                                                                  // 60
      class: "i18n-not-found"                                                                         // 61
    }, "No i18n files found"), "\n    " ];                                                            // 62
  }), "\n  ");                                                                                        // 63
}));                                                                                                  // 64
                                                                                                      // 65
////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/tap_i18n-ui/frameworks/i18n_ui_bootstrap.coffee.js                                        //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.i18n_dropdown.events({                                                                       // 1
  'change .tap-i18n-dropdown select': function(e) {                                                   // 3
    return TAPi18n.setLanguageAmplify($(e.currentTarget).val());                                      //
  }                                                                                                   //
});                                                                                                   //
                                                                                                      //
Template.i18n_buttons.events({                                                                        // 1
  'click .tap-i18n-buttons button': function(e, tmpl) {                                               // 7
    return TAPi18n.setLanguageAmplify(this.tag);                                                      //
  }                                                                                                   //
});                                                                                                   //
                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/tap_i18n-ui/frameworks/template.i18n_ui_semantic.js                                       //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
                                                                                                      // 1
Template.__checkName("i18n_dropdown_semantic");                                                       // 2
Template["i18n_dropdown_semantic"] = new Template("Template.i18n_dropdown_semantic", (function() {    // 3
  var view = this;                                                                                    // 4
  return HTML.SPAN({                                                                                  // 5
    class: "tap-i18n-dropdown"                                                                        // 6
  }, "\n    ", Blaze.If(function() {                                                                  // 7
    return Spacebars.call(view.lookup("i18n_enabled"));                                               // 8
  }, function() {                                                                                     // 9
    return [ "\n    ", HTML.DIV({                                                                     // 10
      class: "ui form"                                                                                // 11
    }, "\n      ", HTML.DIV({                                                                         // 12
      class: "field"                                                                                  // 13
    }, "\n        ", HTML.SELECT({                                                                    // 14
      class: "ui floating compact dropdown search"                                                    // 15
    }, "\n          ", Blaze.Each(function() {                                                        // 16
      return Spacebars.call(view.lookup("i18n_sortedLanguages"));                                     // 17
    }, function() {                                                                                   // 18
      return [ "\n            ", HTML.OPTION({                                                        // 19
        value: function() {                                                                           // 20
          return Spacebars.mustache(view.lookup("tag"));                                              // 21
        },                                                                                            // 22
        selected: function() {                                                                        // 23
          return Spacebars.mustache(view.lookup("i18n_isCurrentLanguage"), view.lookup("tag"));       // 24
        }                                                                                             // 25
      }, Blaze.View("lookup:name", function() {                                                       // 26
        return Spacebars.mustache(view.lookup("name"));                                               // 27
      })), "\n          " ];                                                                          // 28
    }), "\n        "), "\n      "), "\n    "), "\n    " ];                                            // 29
  }, function() {                                                                                     // 30
    return [ "\n      ", HTML.SPAN({                                                                  // 31
      class: "i18n-not-found"                                                                         // 32
    }, "No i18n files found"), "\n    " ];                                                            // 33
  }), "\n  ");                                                                                        // 34
}));                                                                                                  // 35
                                                                                                      // 36
Template.__checkName("i18n_buttons_semantic");                                                        // 37
Template["i18n_buttons_semantic"] = new Template("Template.i18n_buttons_semantic", (function() {      // 38
  var view = this;                                                                                    // 39
  return HTML.SPAN({                                                                                  // 40
    class: "tap-i18n-buttons"                                                                         // 41
  }, "\n    ", Blaze.If(function() {                                                                  // 42
    return Spacebars.call(view.lookup("i18n_enabled"));                                               // 43
  }, function() {                                                                                     // 44
    return [ "\n      ", Blaze.Each(function() {                                                      // 45
      return Spacebars.call(view.lookup("i18n_sortedLanguages"));                                     // 46
    }, function() {                                                                                   // 47
      return [ "\n        ", HTML.BUTTON({                                                            // 48
        type: "button",                                                                               // 49
        class: function() {                                                                           // 50
          return [ "mini ui ", Blaze.If(function() {                                                  // 51
            return Spacebars.dataMustache(view.lookup("i18n_isCurrentLanguage"), view.lookup("tag"));
          }, function() {                                                                             // 53
            return "primary";                                                                         // 54
          }), " button" ];                                                                            // 55
        }                                                                                             // 56
      }, Blaze.View("lookup:name", function() {                                                       // 57
        return Spacebars.mustache(view.lookup("name"));                                               // 58
      })), "\n      " ];                                                                              // 59
    }), "\n    " ];                                                                                   // 60
  }, function() {                                                                                     // 61
    return [ "\n      ", HTML.SPAN({                                                                  // 62
      class: "i18n-not-found"                                                                         // 63
    }, "No i18n files found"), "\n    " ];                                                            // 64
  }), "\n  ");                                                                                        // 65
}));                                                                                                  // 66
                                                                                                      // 67
Template.__checkName("i18n_flags_semantic");                                                          // 68
Template["i18n_flags_semantic"] = new Template("Template.i18n_flags_semantic", (function() {          // 69
  var view = this;                                                                                    // 70
  return HTML.SPAN({                                                                                  // 71
    class: "tap-i18n-flags"                                                                           // 72
  }, "\n    ", Blaze.If(function() {                                                                  // 73
    return Spacebars.call(view.lookup("i18n_enabled"));                                               // 74
  }, function() {                                                                                     // 75
    return [ "\n      ", Blaze.Each(function() {                                                      // 76
      return Spacebars.call(view.lookup("sortedFlagTags"));                                           // 77
    }, function() {                                                                                   // 78
      return [ "\n        ", HTML.I({                                                                 // 79
        class: function() {                                                                           // 80
          return [ Spacebars.mustache(view.lookup("flagTag")), " flag" ];                             // 81
        }                                                                                             // 82
      }), "\n      " ];                                                                               // 83
    }), "\n    " ];                                                                                   // 84
  }, function() {                                                                                     // 85
    return [ "\n      ", HTML.SPAN({                                                                  // 86
      class: "i18n-not-found"                                                                         // 87
    }, "No i18n files found"), "\n    " ];                                                            // 88
  }), "\n  ");                                                                                        // 89
}));                                                                                                  // 90
                                                                                                      // 91
////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/tap_i18n-ui/frameworks/i18n_ui_semantic.coffee.js                                         //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var flagTagMap;                                                                                       // 1
                                                                                                      //
Template.i18n_dropdown_semantic.rendered = function() {                                               // 1
  return $('select.dropdown').dropdown();                                                             //
};                                                                                                    // 1
                                                                                                      //
Template.i18n_dropdown_semantic.events({                                                              // 1
  'change .tap-i18n-dropdown select': function(e) {                                                   // 6
    return TAPi18n.setLanguageAmplify($(e.currentTarget).val());                                      //
  }                                                                                                   //
});                                                                                                   //
                                                                                                      //
Template.i18n_buttons_semantic.events({                                                               // 1
  'click .tap-i18n-buttons button': function(e, tmpl) {                                               // 10
    return TAPi18n.setLanguageAmplify(this.tag);                                                      //
  }                                                                                                   //
});                                                                                                   //
                                                                                                      //
Template.i18n_flags_semantic.events({                                                                 // 1
  'click .tap-i18n-flags .flag': function(e, tmpl) {                                                  // 13
    return TAPi18n.setLanguageAmplify(this.tag);                                                      //
  }                                                                                                   //
});                                                                                                   //
                                                                                                      //
flagTagMap = {                                                                                        // 1
  'en': 'gb',                                                                                         // 17
  'zh': 'cn',                                                                                         // 17
  'ja': 'jp'                                                                                          // 17
};                                                                                                    //
                                                                                                      //
Template.i18n_flags_semantic.helpers({                                                                // 1
  sortedFlagTags: function() {                                                                        // 22
    var sortedLanguages;                                                                              // 23
    sortedLanguages = TAPi18n.uiHelpers.sortedLanguages();                                            // 23
    return sortedLanguages.map(function(obj) {                                                        // 24
      obj.flagTag = flagTagMap[obj.tag] || obj.tag;                                                   // 25
      return obj;                                                                                     // 26
    });                                                                                               //
  }                                                                                                   //
});                                                                                                   //
                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['tap:i18n-ui'] = {};

})();
