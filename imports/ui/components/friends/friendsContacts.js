import './friendsContacts.html';

Template.friendsContacts.onCreated(function () {
    this.subscribe('allUsers')
});

Template.friendsContacts.onRendered(function () {
});

Template.friendsContacts.helpers({
    friend () {
        // find all user - but the currentuser  (you dont want to list yourself )
        return Meteor.users.find({_id:{$ne:Meteor.userId()}});
    }
});

Template.friendsContacts.events({
});