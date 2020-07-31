// Methods related to Request

import {
  Meteor
} from 'meteor/meteor';
import {
  check
} from 'meteor/check';
import {
  Users
} from './users.js';

Meteor.methods({

  // 'insertUser': function()
  'findUser': function(username) {
    return Meteor.users.findOne({
      username: username
    }, {
      fields: {"username": 1 }
    });
  },
  'recommendUsers': function () {
    if (Meteor.user()) {
      var currentFollowings = UserUtils.findFollowings(Meteor.user().username);

      var recUsers = Meteor.users.find({
        username: {
          $nin: currentFollowings
        }
      }, {
        fields: {
          'username': 1
        },
        limit: 5
      }).fetch();

      return recUsers;
    }
  },
  'inviteFriends': function (id, params) {
    Meteor.users.update({
      _id: id
    }, {
      $push: {
        friends: params
      },

    });
  },
  'addFriendsInviter': function (inviter, invited, paramsInviter) {
    Meteor.users.update({
      _id: inviter,
      "friends.friendsId": invited
    }, {

      $set: {
        "friends.$": paramsInviter
      },
    });
  },
  'addFriendsEgo': function (ego, paramsEgo) {
    Meteor.users.update({
      _id: ego
    }, {

      $push: {
        friends: paramsEgo
      },
    })
  },
  'declineFriendsInviter': function (inviter, invited, paramsDecInv) {
    Meteor.users.update({
      _id: inviter,
      "friends.friendsId": invited
    }, {
      $set: {
        "friends.$": paramsDecInv
      }
    });
  },
  'declineFriendsEgo': function (ego, paramsDecEgo) {
    Meteor.users.update({
      _id: ego
    }, {
      $push: {
        "friends": paramsDecEgo
      }
    });
  },
  'blockFriendsInviter': function (inviter, invited, paramsBlockInv) {
    Meteor.users.update({
      _id: inviter,
      "friends.friendsId": invited
    }, {
      $set: {
        "friends.$": paramsBlockInv
      },
      $pull: {
        /* "friends":{friendsId: 1234} */
      }
    });
  },
  'blockFriendsEgo': function (ego, paramsBlockEgo) {
    Meteor.users.update({
      _id: ego
    }, {
      $push: {
        "friends": paramsBlockEgo
      },
      /* $pull: {
        "friends": {
          friendsId: 1234
        }
      } */
    });
  },

});