import './bazarHome.html';
import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';


Template.bazarHome.onCreated(function () {
    Session.set('addTemplate', "addProshop");
});

Template.bazarHome.onRendered(function () {
});

Template.bazarHome.helpers({
  addBazar () {
    return Session.get('addTemplate');
    },
});

Template.bazarHome.events({
      'click .btnProshop'(event) {
        event.preventDefault();
    
        const targetName = $(event.currentTarget).attr('data-target');
        Session.set('addTemplate', targetName)
      },
      'click .btnEshop'(event) {
        event.preventDefault();
    
        const targetName = $(event.currentTarget).attr('data-target');
        Session.set('addTemplate', targetName)
      },
      'click .btnAuction'(event) {
        event.preventDefault();
    
        const targetName = $(event.currentTarget).attr('data-target');
        Session.set('addTemplate', targetName)
      },
      'click .btnClose'(event) {
        event.preventDefault();
    
        const targetName = $(event.currentTarget).attr('data-target');
        Session.set('addTemplate', targetName)
      }
});