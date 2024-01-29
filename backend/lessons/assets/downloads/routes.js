import express from 'express'
const router = express.Router();

import SoccerPlayerModel from '../models/models.js';

// List all players
router.get('/soccer_players', async (req, res) => {
    try {
        const players = await SoccerPlayerModel.find();
        res.json(players);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// View one player by id
router.get('/soccer_players/:id', async (req, res) => {
    try {
        const player = await SoccerPlayerModel.findById(req.params.id);
        res.json(player);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Add one new player
router.post('/soccer_players', async (req, res) => {
    try {
        const newPlayer = new SoccerPlayerModel(req.body);
        const savedPlayer = await newPlayer.save();
        res.status(201).json(savedPlayer);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Update one player's document
router.put('/soccer_players/:id', async (req, res) => {
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

// Delete one player's document
router.delete('/soccer_players/:id', async (req, res) => {
    try {
        await SoccerPlayerModel.findByIdAndDelete(req.params.id);
        res.json({ message: 'Player deleted successfully' });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

export default router;