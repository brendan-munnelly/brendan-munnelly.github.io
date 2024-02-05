import asyncHandler from 'express-async-handler';
import SoccerPlayerModel from '../models/models.js';

// Get all players
const players_index = asyncHandler(async (req, res) => {
    try {
        const players = await SoccerPlayerModel.find().sort( { "rank": 1 } );
        res.json(players);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Get selected player by id
const player_get = asyncHandler(async (req, res) => {
    try {
        const player = await SoccerPlayerModel.findById(req.params.id);
        res.json(player);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Add a new player
const player_add = asyncHandler(async (req, res) => {
    try {
        const newPlayer = new SoccerPlayerModel(req.body);
        const savedPlayer = newPlayer.save();
        res.status(201).json(savedPlayer);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Update a player selected by id
const player_update = asyncHandler(async (req, res) => {
    try {
        const updatedPlayer = await SoccerPlayerModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Returns the updated document
        );
        res.json(updatedPlayer);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Delete a player selected by id
const player_delete = asyncHandler(async (req, res) => {
    try {
        await SoccerPlayerModel.findByIdAndDelete(req.params.id);
        res.json({ message: 'Player deleted successfully' });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

export { players_index, player_get, player_add, player_update, player_delete }