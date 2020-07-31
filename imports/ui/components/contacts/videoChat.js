import './videoChat.html';

Template.videoChat.onRendered(function(){

    var domain = "grape-chat.dk";
  
    var options = { 
        //  PLEASE READ THIS:
        // the roomeName has only meaning for invitations, and it will always be the loggedin
        // user who are inviting - roomName must be unike - therefore we use userId as - 
        // yes its a security risk - but later we hide the roomName
        roomName: Meteor.userId(),
        width: 500,
        height: 300,
        parentNode: document.querySelector('#screen'),
        configOverwrite: { enableWelcomePage: false,},
        
        }
 var api = new JitsiMeetExternalAPI(domain, options);
});