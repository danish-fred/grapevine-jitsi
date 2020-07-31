import './navbarBazar.html';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Session } from 'meteor/session';


Template.navbarBazar.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('videoCalls', function() {
      // we're ready!
    });
  });
});

Template.navbarBazar.onRendered(function () {
 
});

Template.navbarBazar.helpers({
});

Template.navbarBazar.events({
    'click .loadTemplate'(event) {
      event.preventDefault();
      const targetName =  $(event.currentTarget).attr('data-target');
      Session.set('targetTemplate', targetName)
    }
 
});