import './singleContact.html';
import { Session } from 'meteor/session';

Template.singleContact.onCreated(function () {
    SubsCache.subscribe('users.all');

    Session.set('choosenFriend', "null")
});

Template.singleContact.onRendered(function () {
});

Template.singleContact.helpers({
});

Template.singleContact.events({
    'click .btnOpen': function (event) {
        event.preventDefault();

        if (Session.get('commuPanel', true))
        {
            const caller = Meteor.userId();
            const invited = this._id;
            console.log(this._id);

            params = {
                caller: caller,
                invited: invited,
            }
            Meteor.call('videoCalls.insert', params, (error, result) => {
                if (error) {
                    // sAlert.error((error.reason), {effect: 'jelly', position: 'top', timeout: '10000', 
                    // onRouteClose: false, beep: './audio/Phone Ringing-SoundBible.com-1358131443.mp3',
                    // stack: false, offset: '000px'});
                    Bert.alert(error.reason, "danger");
                } else {
                    Bert.alert("new site", "success");
                    
                }
            });
        } 
         else
        {
            document.getElementById("myChatnew").style.width = "90%";
                    let id = (this._id);
                    console.log(id)

                    Session.set('choosenFriend', id);
        }
    },
});