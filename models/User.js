const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, "Must match an email address."]
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought"
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    },
    // prevents virtual from creating duplicates of the id
    id: false
  }
)

//get count of friends
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

//User model created with UserSchema
const User = model('User', UserSchema);

// exports User
module.exports = User;