import './navAcceptModal.html';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Session } from 'meteor/session';
import { VideoCalls } from '/imports/api/collections.js';

Template.navAcceptModal.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('videoCalls', function() {
      // we're ready!
    });
  });
});

Template.navAcceptModal.onRendered(function () {
  var domain = "grape-chat.dk";
  
    var options = {
        roomName: Meteor.userId(),
        width: 750,
        height: 500,
        parentNode: document.querySelector('#calling'),
        configOverwrite: { enableWelcomePage: false,},
        // interfaceConfigOverwrite: {
        //     filmStripOnly: true
        }

 var api = new JitsiMeetExternalAPI(domain, options);
});

Template.navAcceptModal.helpers({
    
});

Template.navAcceptModal.events({
    
});