import SimpleSchema from 'simpl-schema';

const Schema = {};

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