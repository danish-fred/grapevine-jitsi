// Definition of the VideoCalls collection

import { Mongo} from 'meteor/mongo';

import VideoCallsSchema from './schemaVideoCalls';

export const VideoCalls = new Mongo.Collection('videoCalls');

VideoCalls.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

VideoCalls.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

VideoCalls.attachSchema(VideoCallsSchema);