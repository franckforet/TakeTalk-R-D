import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.summernote.events({
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

Template.summernote.onRendered(function () {
  $(document).ready(function() {
  $('#textareaRich').summernote({
    height:300,
  });
});
});
