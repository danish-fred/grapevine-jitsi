import './moneyLogin.html';
import {  Session } from 'meteor/session';
import {  Template} from 'meteor/templating';
import {  ReactiveVar} from 'meteor/reactive-var';
import {  Tracker} from 'meteor/tracker';

// window.funds = funds;

// googleReady = new ReactiveVar(false);

Template.moneyLogin.onCreated(function () {
  Session.set('fundsTemplate', "");
});

Template.moneyLogin.onRendered(function () {
});

Template.moneyLogin.helpers({
  itemFunds () {
      return Session.get('fundsTemplate');
  },
});

Template.moneyLogin.events({
  'click .btnWelcome'(event) {
    event.preventDefault();

    const targetName = $(event.currentTarget).attr('data-target');
    Session.set('fundsTemplate', targetName)
  },
  'click .btnBalance'(event) {
    event.preventDefault();

    const targetName = $(event.currentTarget).attr('data-target');
    Session.set('fundsTemplate', targetName)
  },
  'click .btnActivities'(event) {
    event.preventDefault();

    const targetName = $(event.currentTarget).attr('data-target');
    Session.set('fundsTemplate', targetName)
  },
  'click .btnDeposite'(event) {
    event.preventDefault();

    const targetName = $(event.currentTarget).attr('data-target');
    Session.set('fundsTemplate', targetName)
  },
  'click .btnNewCard'(event) {
    event.preventDefault();

    const targetName = $(event.currentTarget).attr('data-target');
    Session.set('fundsTemplate', targetName)
  },
  'click .btnTransfere'(event) {
    event.preventDefault();

    const targetName = $(event.currentTarget).attr('data-target');
    Session.set('fundsTemplate', targetName)
  }
});

