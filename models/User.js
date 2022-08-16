const { Schema, model } = require('mongoose')

const userSchema = new mongoose.Schema
{
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    };
}

userSchema
  .virtual('fullName')
  // Getter
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  // Setter to set the first and last name
  .set(function (v) {
    const first = v.split(' ')[0];
    const last = v.split(' ')[1];
    this.set({ first, last });
  });

const User = model('user', userSchema)

module.exports = User;