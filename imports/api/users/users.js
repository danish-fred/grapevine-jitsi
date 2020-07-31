// Definition of the Request collection

// import {  Mongo} from 'meteor/mongo';
// import {  ReactiveAggregate } from 'meteor/tunguska:reactive-aggregate';

import './userStatus.js';


import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

Meteor.users.allow({
  update: () => false,
  remove: () => false,
  insert: () => false
});

Meteor.users.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

const Schema = {};

Schema.UserBasics = new SimpleSchema({
  
  firstName: {
    type: String,
    optional: true
  },
  middleName: {
    type: String,
    optional: true
  },
  lastName: {
    type: String,
    optional: true
  },
  birthday: {
    type: Date,
    optional: true
  },
  gender: {
    type: String,
    allowedValues: ['Male', 'Female','Company', 'Not-relevant'],
    optional: true
  },
  phone: {
    type: String,
    optional: true
  },
  organization: {
    type: String,
    optional: true
  },
  website: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  },
  bio: {
    type: String,
    optional: true
  },
  avatar: {
    type: String,
    optional: true
  },
}),

Schema.userWorks = new SimpleSchema({
  Works: {
    type: Array,
    optional: true,
    minCount: 0,
    maxCount: 5
  },
  'Works.$': {
    type: Object
  },
  'Works.$.Company': {
    type: String
  },
  'Works.$.Occupation': {
    type: String
  },
  'Works.$.City': {
    type: String
  },
  'Works.$.Describtion': {
    type: String,
    min: 0,
    max: 1000,
    autoform: {
      rows: 2
    }
  },
  'Works.$.StartDate': {
    type: Date,
    optional: true,
    label: 'Start Date:',
    min: new Date('2020-01-01T00:00:00.000Z'),
    autoform: {
      value: new Date()
    }
  },
});

Schema.userSkills = new SimpleSchema({
  skills: {
    type: Array,
    optional: true,
    minCount: 1,
    maxCount: 10
  },
  'skills.$': {
    type: String
  }
});

Schema.furtherEducations = new SimpleSchema({

  educations: {
    type: Array,
    optional: true,
    minCount: 0,
    maxCount: 5
  },
  'educations.$': {
    type: Object,
    label:'',
  },
  'educations.$.school': {
    type: String,
    label: 'HighSchool/University'
  },
  'educations.$.startschool': {
    type: Number,
    allowedValues: [
      2011,
      2010,
      2009,
      2008,
      2007,
      2006,
      2005,
      2004,
      2003,
      2001,
      2000,
      1999,
      1998,
      1997,
      1996,
      1995,
      1994,
      1993,
      1992,
      1991,
      1990,
      1989,
      1988,
      1987,
      1986,
      1985,
      1984,
      1983,
      1982,
      1981,
      1980,
      1979,
      1978,
      1977,
      1976,
      1975,
      1974,
      1973,
      1972,
      1971,
      1970,
      1969,
      1968,
      1967,
      1966,
      1965,
      1964,
      1963,
      1962,
      1961,
      1960,
      1959,
      1958,
      1957,
      1956,
      1955,
      1954,
      1953,
      1952,
      1951,
      1950
    ],
    defaultValue: 2000,
    label: 'Choose the year you started here'
  },
  'educations.$.endschool': {
    type: Number,
    allowedValues: [
      2011,
      2010,
      2009,
      2008,
      2007,
      2006,
      2005,
      2004,
      2003,
      2001,
      2000,
      1999,
      1998,
      1997,
      1996,
      1995,
      1994,
      1993,
      1992,
      1991,
      1990,
      1989,
      1988,
      1987,
      1986,
      1985,
      1984,
      1983,
      1982,
      1981,
      1980,
      1979,
      1978,
      1977,
      1976,
      1975,
      1974,
      1973,
      1972,
      1971,
      1970,
      1969,
      1968,
      1967,
      1966,
      1965,
      1964,
      1963,
      1962,
      1961,
      1960,
      1959,
      1958,
      1957,
      1956,
      1955,
      1954,
      1953,
      1952,
      1951,
      1950
    ],
    defaultValue: 2000,
    label: 'Choose the year you stoped here'
  },
  'educations.$.gratuated': {
    type: Boolean,
    defaultValue: true,
    label: 'Graduated?'
  },
  'educations.$.description': {
    type: String,
    min: 20,
    max: 1000,
    autoform: {
      rows: 3
    }
  },
  'educations.$.study1': {
    type: String,
    label: 'Field of Study'
  },
  'educations.$.study2': {
    type: String,
    label: 'Field of Study'
  },
});

Schema.basicEducations = new SimpleSchema({
  educations: {
    type: Array,
    optional: true,
    minCount: 0,
    maxCount: 5
  },
  'educations.$': {
    type: Object
  },
  'educations.$.school': {
    type: String,
    label: 'School'
  },
  'educations.$.startschool': {
    type: Number,
    allowedValues: [
      2011,
      2010,
      2009,
      2008,
      2007,
      2006,
      2005,
      2004,
      2003,
      2001,
      2000,
      1999,
      1998,
      1997,
      1996,
      1995,
      1994,
      1993,
      1992,
      1991,
      1990,
      1989,
      1988,
      1987,
      1986,
      1985,
      1984,
      1983,
      1982,
      1981,
      1980,
      1979,
      1978,
      1977,
      1976,
      1975,
      1974,
      1973,
      1972,
      1971,
      1970,
      1969,
      1968,
      1967,
      1966,
      1965,
      1964,
      1963,
      1962,
      1961,
      1960,
      1959,
      1958,
      1957,
      1956,
      1955,
      1954,
      1953,
      1952,
      1951,
      1950

    ],
    defaultValue: 2,
    label: 'Choose the year you started here'
  },
  'educations.$.endschool': {
    type: Number,
    allowedValues: [
      2011,
      2010,
      2009,
      2008,
      2007,
      2006,
      2005,
      2004,
      2003,
      2001,
      2000,
      1999,
      1998,
      1997,
      1996,
      1995,
      1994,
      1993,
      1992,
      1991,
      1990,
      1989,
      1988,
      1987,
      1986,
      1985,
      1984,
      1983,
      1982,
      1981,
      1980,
      1979,
      1978,
      1977,
      1976,
      1975,
      1974,
      1973,
      1972,
      1971,
      1970,
      1969,
      1968,
      1967,
      1966,
      1965,
      1964,
      1963,
      1962,
      1961,
      1960,
      1959,
      1958,
      1957,
      1956,
      1955,
      1954,
      1953,
      1952,
      1951,
      1950
    ],
    defaultValue: 2,
    label: 'Choose the year you stoped here'
  },
  'educations.$.gratuated': {
    type: Boolean,
    defaultValue: true,
    label: 'Graduated?'
  },
  'educations.$.description': {
    type: String,
    min: 20,
    max: 1000,
    autoform: {
      rows: 3
    }
  },
});

Schema.userCV = new SimpleSchema({});

Schema.UserProfile = new SimpleSchema({
  usertype: {
    type: String,
    optional: true
  },
  first_name: {
    type: String,
    optional: true
  },
  last_name: {
    type: String,
    optional: true
  },
  avatar: {
    type: String,
    optional: true
  },
  birthday: {
    type: Date,
    optional: true
  },
  gender: {
    type: String,
    allowedValues: ['Male', 'Female'],
    optional: true
  },
  organization: {
    type: String,
    optional: true
  },
  website: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  },
  bio: {
    type: String,
    optional: true
  },
});

Schema.UserFollow = new SimpleSchema({});

Schema.LastLogin = new SimpleSchema({

});

Schema.UserStatus = new SimpleSchema({
  status: {
    type: Object
  },
  /* login: {
    type: Schema.LastLogin,
    optional: true
  }, */
  lastLogin: {
    type: Object,
    optional: true
  },
  "lastLogin.date": {
    type: Date
  },
  "lastLogin.ipAddr": {
    type: String
  },
  "lastLogin.userAgent": {
    type: String
  },
  "online": {
    type: Boolean
  },
  "idle": {
    type: Boolean,
    optional: true
  },
});

Schema.User1 = new SimpleSchema({
  username: {
    type: String,
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: true
  },
  emails: {
    type: Array,
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: true
  },
  "emails.$": {
    type: Object
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  follow: {
    type: Array
  },
  "follow.$": {
    type: Object
  },
  "follow.$.followId": {
    type: String,
    optional: true,
  },
  "follow.$.followRange": {
    type: String,
    optional: true,
  },
  "follow.$.followRights": {
    type: String,
    optional: true,
  },
  "follow.$.followStatus": {
    type: Number,
    optional: true,
  },
  "follow.$.createdAt": {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date()
        };
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    }
  },
  // Force value to be current date (on server) upon update
  // and don't allow it to be set upon insert.
  "follow.$.updatedAt ": {
    type: Date,
    autoValue: function () {
      if (this.isUpdate) {
        return new Date;
      }
    },
    optional: true
  },

  friends: {
    type: Array,
  },
  "friends.$": {
    type: Object
  },
  "friends.$.friendsId": {
    type: String,
    optional: true,
  },
  "friends.$.friendsRange": {
    type: String,
    optional: true,
  },
  "friends.$.friendsRights": {
    type: String,
    optional: true,
  },
  "friends.$.friendsStatus": {
    type: Number,
    optional: true,
  },
  "friends.$.invitedAt": {
    type: Date,
    optional: true,
  },
  "friends.$.acceptedAt": {
    type: Date,
    optional: true,
  },
  "friends.$.declinedAt": {
    type: Date,
    optional: true,
  },
  "friends.$.blockedAt": {
    type: Date,
    optional: true,
  },
  // Force value to be current date (on server) upon update
  // and don't allow it to be set upon insert.
  "friends.$.updatedAt ": {
    type: Date,
    autoValue: function () {
      if (this.isUpdate) {
        return new Date;
      }
    },
    /* denyInsert: true, */
    optional: true,
  },
  profile: {
    type: Schema.UserProfile,
    //optional: true
  },
  status: {
    type: Schema.UserStatus,
    optional: true
  },
  // Make sure this services field is in your schema if you're using any of the accounts packages
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  // Add `roles` to your schema if you use the meteor-roles package.
  // Option 1: Object type
  // If you specify that type as Object, you must also specify the
  // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
  // Example:
  // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
  // You can't mix and match adding with and without a group since
  // you will fail validation in some cases.
  roles: {
    type: Object,
    optional: true,
    blackbox: true
  },
  // Option 2: [String] type
  // If you are sure you will never need to use role groups, then
  // you can specify [String] as the type
  roles: {
    type: Array,
    optional: true
  },
  'roles.$': {
    type: String
  },
  // In order to avoid an 'Exception in setInterval callback' from Meteor
  heartbeat: {
    type: Date,
    optional: true
  }
});

Schema.User = new SimpleSchema({
  username: {
      type: String,
      // For accounts-password, either emails or username is required, but not both. It is OK to make this
      // optional here because the accounts-password package does its own validation.
      // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
      optional: true
  },
  emails: {
      type: Array,
      // For accounts-password, either emails or username is required, but not both. It is OK to make this
      // optional here because the accounts-password package does its own validation.
      // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
      optional: true
  },
  "emails.$": {
      type: Object
  },
  "emails.$.address": {
      type: String,
      regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
      type: Boolean
  },
  // Use this registered_emails field if you are using splendido:meteor-accounts-emails-field / splendido:meteor-accounts-meld
  registered_emails: {
      type: Array,
      optional: true
  },
  'registered_emails.$': {
      type: Object,
      blackbox: true
  },
  createdAt: {
      type: Date
  },
  profile: {
      type: Schema.UserProfile,
      optional: true
  },
  status: {
    type: Schema.UserStatus,
    optional: true
},
  // Make sure this services field is in your schema if you're using any of the accounts packages
  services: {
      type: Object,
      optional: true,
      blackbox: true
  },
  // DISCLAIMER: This only applies to the first and second version of meteor-roles package.
  // https://github.com/Meteor-Community-Packages/meteor-collection2/issues/399 
  // Add `roles` to your schema if you use the meteor-roles package.
  // Option 1: Object type
  // If you specify that type as Object, you must also specify the
  // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
  // Example:
  // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
  // You can't mix and match adding with and without a group since
  // you will fail validation in some cases.
  roles: {
      type: Object,
      optional: true,
      blackbox: true
  },
  // Option 2: [String] type
  // If you are sure you will never need to use role groups, then
  // you can specify [String] as the type
  roles: {
      type: Array,
      optional: true
  },
  'roles.$': {
      type: String
  },
  // In order to avoid an 'Exception in setInterval callback' from Meteor
  heartbeat: {
      type: Date,
      optional: true
  },
  
});

//Meteor.users.attachSchema(Schema.User);
Meteor.users.schema = Schema.Users;