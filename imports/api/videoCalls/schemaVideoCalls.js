import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
    caller: {
      type: String,
      // type: SimpleSchema.RegEx.Id,
      // optional: true
    },
    invited: {
      type: String,
      // type: SimpleSchema.RegEx.Id,
      // optional: true
    },
    duration: {
      type: Number,
      optional: true
    },
    createdAt: {
      type: Date,
      defaultValue: new Date(),
      // optional: true,
    },
  });