import './chatHead.html';

import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';
import { VideoCalls } from '/imports/api/collections.js';

Template.chatHead.onCreated(function () {
  SubsCache.subscribe('users.all');
  SubsCache.subscribe('videoCalls.all');
  Session.set('chatTemplate', "");
  Session.set('commuPanel', false)
});

Template.chatHead.onRendered(function () {
  // $('#action_menu_btn').click(function () {
  //   $('.action_menu').toggle();
  // });
});

Template.chatHead.helpers({
  useContacts () {
      return Session.get('chatTemplate');
  },
  member () {
    return Meteor.users.find({_id: Session.get('choosenFriend')})
  }
});

Template.chatHead.events({
  
  'click .btnHistory'(event) {
    event.preventDefault();

    const targetName = $(event.currentTarget).attr('data-target');
    Session.set('chatTemplate', targetName)
  },
  'click .btnVideo'(event) {
    event.preventDefault();

    const targetName = $(event.currentTarget).attr('data-target');
    Session.set('chatTemplate', targetName);

    const caller = Meteor.userId();
    const invited = this._id;
    console.log(this._id);

    params = {
      caller: caller,
      invited: invited,
    }
    Meteor.call('videoCalls.insert', params, (error, result) => {
      if (error) {
        // sAlert.error((error.reason), {effect: 'jelly', position: 'top', timeout: '10000', 
        // onRouteClose: false, beep: './audio/Phone Ringing-SoundBible.com-1358131443.mp3',
        // stack: false, offset: '000px'});
        Bert.alert(error.reason, "danger");
      } else {
        Bert.alert("You have invited", "success");
      }
    });
    Session.set('commuPanel', true)
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

  'click .btnClose'(event) {
    Session.set('commuPanel', false)
  }
});