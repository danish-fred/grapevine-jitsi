import './friendsTemplate.html';

Template.friendsTemplate.onCreated(function () {
    this.subscribe('allUsers')

});

Template.friendsTemplate.onRendered(function () {

});

Template.friendsTemplate.helpers({
    friend () {
        // find all user but the currentuser  (you dont want to list yourself )
        return Meteor.users.find({_id:{$ne:Meteor.userId()}});
    }
});

Template.friendsTemplate.events({

});