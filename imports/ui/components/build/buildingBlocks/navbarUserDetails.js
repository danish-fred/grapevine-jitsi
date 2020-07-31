import './navbarUserDetails.html';

Template.navbarUserDetails.onCreated(function (){

});

Template.navbarUserDetails.onRendered(function (){

});
Template.navbarUserDetails.helpers ({

    userDetails: function () {
        return Meteor.user();
    },
    displayName: function () {
        return App.displayName()
    }

});

Template.navbarUserDetails.events ({

    "submit .logout-form": function (event) {
        Meteor.logout(function (error) {
          if (error) {
            Bert.alert(error.reason, 'danger');
          } else {
            Bert.alert('You are now logged out', 'success');
            FlowRouter.go('/');
          }
        });
         FlowRouter.go('/')
        // Prevent Submit
        return false;
    
    },
   
});

