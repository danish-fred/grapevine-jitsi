import './register.html';
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Accounts } from 'meteor/accounts-base'

Template.register.onCreated(function () {
})

Template.register.helpers({
})


Template.register.events({
  'click .register-link': function (event) {
    $('.card-login').hide();
    $('.card-register').fadeIn();
  },
  'click .login-link': function (event) {
    $('.card-register').hide();
    $('.card-login').fadeIn();
  },
  'submit #registerForm' (event, template) {
    event.preventDefault()
    const target = event.target;
    const email = target.email.value;
    const password = target.password.value;
    const avatar = target.avatar.value;
    const first_name = target.first_name.value;
    const last_name = target.last_name.value;

    const params = {
     
     
     
    }
 
      Accounts.createUser({email: email, 
                          password: password, 
                          profile: {
                            first_name: first_name,
                            last_name : last_name,
                            avatar: avatar }
                          },  (error ) => {
        if (error) {
          Bert.alert("There was an error with registration", 'danger', "growl-top-right"); //hideDelay: 2000,
        } else {
          Bert.alert("Account Created! You are now logged in", 'success', "growl-top-right");
          FlowRouter.go('/bazarHome');
        }
      });
        
  },

  "submit .login-form": function (event) {
    // Get Form Values
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
       FlowRouter.go('/bazarHome');
      }
    }); 
    

    event.target.reset();

    // Prevent Submit
    return false;
  },
  "submit .logout-form": function (event) {
    Meteor.logout(function (error) {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('You are now logged out', 'success');
        FlowRouter.go('/');
      }
    });

    // Prevent Submit
    return false;
  }
});

// VALIDATIONS
// Trim Helper
const trimInput = function (val) {
  return val.replace(/^\s*|\s*$/g, "");
}
// Check For Empty Fields
isNotEmpty = function (value) {
  if (value && value !== '') {
    return true;
  }
  Bert.alert("Please fill in all fields", 'danger');
  return false;
};
// Validate Email
isEmail = function (value) {
  const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (filter.test(value)) {
    return true;
  }
  Bert.alert("Please use a valid email address", 'danger');
  return false;
};
// Check Password Field
isValidPassword = function (password) {
  if (password.length < 6) {
    Bert.alert("Password must be at least 6 characters", 'danger');
    return false;
  }
  return true;
};
// Match Password
areValidPasswords = function (password, confirm) {
  if (!isValidPassword(password)) {
    return false;
  }
  if (password !== confirm) {
    Bert.alert("Passwors do not match", 'danger');
    return false;
  }
  return true;
};

// makeAvatar = function () {
//   if (gender.value =  1) {
//   return upload2.jpg
//   } else if  (gender.value = 2) {
//   return upload3.jpg
//   } else { (gender.value = 3)
//   }
// }