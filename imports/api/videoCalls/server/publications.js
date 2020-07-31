import { Meteor } from 'meteor/meteor';
import { VideoCalls } from '../collectionVideoCalls';

Meteor.publish('videoCalls.all', function () {
  return VideoCalls.find();
});
