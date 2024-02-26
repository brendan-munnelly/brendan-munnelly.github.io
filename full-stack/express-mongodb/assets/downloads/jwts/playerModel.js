import mongoose from 'mongoose'

// Create object to contain player schema
const soccerPlayerSchema = new mongoose.Schema({
    rank: Number,
    firstname: String,
    lastname: String,
    age: Number,
    club: String,
    trophies: Number,
    nationality: String,
    profile_image: String
});

// Add data to schema to create model
const SoccerPlayerModel = mongoose.model('SoccerPlayer', soccerPlayerSchema, 'soccer_players_images');

export default SoccerPlayerModel;