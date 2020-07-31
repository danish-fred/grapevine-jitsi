// All Request-related publications

import {
  Meteor
} from 'meteor/meteor';

import {
  ReactiveAggregate
} from 'meteor/tunguska:reactive-aggregate';

import {
  User
} from '../users.js';

Meteor.publish("users.all", function () {
  return Meteor.users.find({});
});

Meteor.publish("reportTotals", function () {

  var pipeline = [{
    $match: {
      _id: this.userId
    }
  }, {
    $unwind: "$friends"
  }, {
    $project: {
      _id: 1,
      "friends.friendsId": 1,
      "friends.friendsStatus": 1
    }
  }];

  ReactiveAggregate(this, Meteor.users, pipeline, {
    clientCollection: 'clientReport'
  });
});
/* 
      
      /* Meteor.publish("findFriends", function () {
        var subscription = this;
        var db = MongoInternals.defaultRemoteCollectionDriver().mongo.db;
        var id = this.userId;
        var pipeline = [
          {
            $match: {
              _id: id
            }
          }, {
            $unwind: "$friends"
          }, {
            $projects: {
              "profile.first_name": 1,
              "profile.last_name": 1,
              "profile.avatar": 1,
              friends: 1
            }
          }];
           Meteor.users.aggregate(
             pipeline,
             Meteor.bindEnvironment(
               function(err, result ) {
                 console.log('result', result);
                 _.each(result, function(r) {
                   subscription.added('findFriends', r._id, {friends: r.friends});
                 })
               }
             )
           )
           subscription.ready();
        _(friends).each(function () {
          self.added('friends', Random.id(), {
            name: '',
            avatar: ''
          })
        }) 
      }); */