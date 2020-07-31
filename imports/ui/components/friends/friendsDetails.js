import './friendsDetails.html';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';

Template.friendsDetails.onCreated(function () {
  SubsCache.subscribe('users.all');
  Session.set('chatTemplate', "");
});

Template.friendsDetails.onRendered(function () {
 
});

Template.friendsDetails.helpers({
  useContacts () {
    return Session.get('chatTemplate');
  },
  friendsDetails () {
      return Meteor.users.find({_id: Session.get('itemFriend')})
    },
});

Template.friendsDetails.events({
  'click .btnHistory'(event) {
    event.preventDefault();

    const targetName = $(event.currentTarget).attr('data-target');
    Session.set('chatTemplate', targetName)
  },
  'click .btnVideo'(event) {
    event.preventDefault();

    const targetName = $(event.currentTarget).attr('data-target');
    Session.set('chatTemplate', targetName)
  },
  'click .btnPhone'(event) {
    event.preventDefault();

    const targetName = $(event.currentTarget).attr('data-target');
    Session.set('chatTemplate', targetName)
  },
  
  'click .btnChat'(event) {
    event.preventDefault();

    const targetName = $(event.currentTarget).attr('data-target');
    Session.set('chatTemplate', targetName)
  },
});