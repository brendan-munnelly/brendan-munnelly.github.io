import mongoose from 'mongoose'

// Create object to contain schema
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

// Add data to schema to create model
const UserModel = mongoose.model("User", userSchema, "users");

export default UserModel;