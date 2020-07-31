import './menuBazar.html';

import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { ShopsMenu } from '/imports/api/collections';

  // subscribing for the menu collection
  Template.menuBazar.onCreated(function () {
    let self = this;
      self.autorun(function () {
      self.subscribe('shopsMenu.all');
    });
  });

  
  Template.menuBazar.helpers({
    // returning the main category name for the list and the category name for the subnames
    maincat: function () {
      return ShopsMenu.find({ category: 'main' }, {});//main: 1
    },
    // returning the sub category name with number coresponding to the main category
    subnames: function () {
      return ShopsMenu.find({ number: this.number, category: 'sub' })
    }
  });

  // Template.menuBazar.events({
  //     'click .loadTemplate'(event) {
  //         event.preventDefault();
  //         const targetName = $(event.currentTarget).attr('data-target');
  //         Session.set('targetTemplate', targetName);
  //     },
  //     'click .loadForm'(event) {
  //       event.preventDefault();
  //       const targetSku = $(event.currentTarget).attr('data-target');
  //       // Session.set('template_shop', 'shop_form');
  //       Session.set('bazarTemplate', 'bazarForm');
  //       Session.set('sku', targetSku);
        
  //       // setting/resetting the form
  //       $('.lots_form').show();
  //       $('#select_cat').hide();
  //       $('#ask_minimum').hide();
        
  //   },
  // });