import './contacts.html';

Template.contacts.onCreated(function () {
    this.subscribe('allUsers')

});

Template.contacts.onRendered(function () {

});

Template.contacts.helpers({
    friend () {
        // find all user but the currentuser  (you dont want to list yourself )
        return Meteor.users.find({_id:{$ne:Meteor.userId()}});
    }
});

Template.contacts.events({

});