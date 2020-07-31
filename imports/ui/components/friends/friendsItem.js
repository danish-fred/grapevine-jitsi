import './friendsItem.html';
import { Session } from 'meteor/session';

Template.friendsItem.onCreated(function () {
    SubsCache.subscribe('users.all');
    Session.set('itemFriend', "null")
});

Template.friendsItem.onRendered(function () {
});

Template.friendsItem.helpers({
});

Template.friendsItem.events({
    'click .btnItem': function (event) {
        event.preventDefault();
        
        let id = (this._id);
        //  console.log(id)

         Session.set('itemFriend', id );  
    }
});