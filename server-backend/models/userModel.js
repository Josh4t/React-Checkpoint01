import mongoose from 'mongoose';
import validator from 'validator'
import bcrypt from 'bcrypt.js'

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
     
    lastName: {
        type: String,
        required: true,
    },

    userName: {
        type: String,
        required: true,
        unique: true,
    },

    age: {
        type: Number,
        required: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    }

})

userSchema.statics.signup = async function (firstName, lastName, userName, email, age, password){
    try{
          //check if all fields are filled
          if (!email || !password) {
            throw Error("All fields must be filled");
          }
          // Check if email is valid and not already in use
          const user = await this.findOne({email});
          if (!validator.isEmail(email)){
            throw Error("Email is not valid");
          }
          if (exist) {
            throw Error("Email already in use")
          }


          //Check if username is not already in use
          const usernameExists = await this.findOne({userName});
          if (usernameExists) {
            throw Error("Username already in use");
          }
          // Check if password  is strong enough
          if (!validator.isStrongPassword(password)) {
            throw Error("Password is not strong enough, must be at least 8 characters long and contain at least one uppercase letter, one lowerase, one number and one special character")
          }

          // hash and salt password

          const salt = bcrypt.genSaltSync(10);
          const hash = bcrypt.hashSync(password, salt);

          const User = await this.create({first_name, last_name,  username, age, email: email.toLowerCase(), password: hash});
          return user;
    } catch (error) {
        console.log(error)
        throw error;
    }
    
};

userSchema.statics.login = async function (email, password) {
    try{
        if(!email || !password){
            throw Error("All fields required");
        }
    const user = await bcrypt.compare(password, user.password);
    if(!user){
        throw Error("incorrect password");
    }
      return user;
    }catch(error){
        console.log(error)
        throw error;
    }
}

const User = mongoose.model("User", userSchema)

export default User;