import './login.html';

Template.login.events({
  'submit .login-form': function (event) {

    const target = event.target;
    const email = target.email.value;
    const password = target.password.value;

    Meteor.loginWithPassword(email, password, function (error) {
      if (error) {
        event.target.email.value = email;
        event.target.password.value = password;
        Bert.alert(error.reason, "danger");
      } else {
        Bert.alert("You are now logged in", "success");
        event.target.reset();
         FlowRouter.go('/bazarHome');
      }
    });
   
    // Prevent submit
    return false;
  }
});