// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

Meteor.publish("allUsers", function() {
  return Meteor.users.find({});
});

Meteor.startup(() => {
  // process.env.MONGO_URL="mongodb://localhost:27017/work";

  createUsers()
});

function createUsers () {
  var users

  if (Meteor.users.find().fetch().length === 0) {

    console.log('Creating users: ');

    users = [
      {first_name:"Christien", last_name:"Chritsen", avatar:"christian.jpg", email:"cristian@c.dk", roles:[]},
      {first_name:"Clown ", last_name:"Clownsen", avatar:"clown.jpg", email:"clown@c.dk", roles:[]},
      {first_name:"Maler", last_name:"Malersen", avatar:"maler.jpg", email:"maler@m.dk", roles:[]},
      {first_name:"Thief", last_name:"Thiefsen", avatar:"nettyv.jpg", email:"thief@t.dk", roles:[]},
      {first_name:"Shoute", last_name:"Shoutesen", avatar:"opråber.jpg", email:"shoute@s.dk", roles:[]},
      {first_name:"Jimmy", last_name:"Jimsen", avatar:"pizza.jpg", email:"jimmy@j.dk", roles:['secrets']},
      {first_name:"Sara", last_name:"Sarasen", avatar:"post.jpg", email:"sara@s.dk", roles:['manage_roles']},
      {first_name:"Freddy", last_name:"Fredsen", avatar:"freddy.jpg", email:"freddy@f.dk", roles:['admin']},
      {first_name:"Daniel", last_name:"Danielsen", avatar:"pizza2.jpg", email:"daniel@d.dk", roles:[]},
      {first_name:"Tage", last_name:"Tagesen", avatar:"talking.png", email:"talk@t.dk", roles:[]},
    ];

    users.forEach(function (userData) {
      var id

      console.log(userData);

      id = Accounts.createUser({
        email: userData.email,
        password: "6019007",
        profile: {
          usertype: 'customer',
          first_name: userData.first_name,
          last_name: userData.last_name,
          avatar: userData.avatar,
        }
      });

      // email verification
      Meteor.users.update({_id: id},
                          {$set:{'emails.0.verified': true}});

      userData.roles.forEach(function (role) {
        Roles.createRole(role, {unlessExists: true});
      });
      Roles.addUsersToRoles(id, userData.roles);
    });
  }
};
