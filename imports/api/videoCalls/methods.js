// Methods related to Invitations

import { Meteor } from 'meteor/meteor';
import { VideoCalls } from './collectionVideoCalls';

Meteor.methods({

  'videoCalls.insert': function (params) {
    VideoCalls.insert(params);
  },
});

   

