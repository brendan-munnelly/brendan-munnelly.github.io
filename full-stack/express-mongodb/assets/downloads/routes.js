import express from 'express'
const router = express.Router();

import SoccerPlayerModel from '../models/models.js';

// Home page with link
router.get('/', async (req, res) => {
    res.send('index.html');
});

// List all players
router.get('/soccer_players/list', async (req, res) => {
    try {
        const players = await SoccerPlayerModel.find().sort( { "rank": 1 } );
        res.json(players);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// View selected player by id
router.get('/soccer_players/view/:id', async (req, res) => {
    try {
        const player = await SoccerPlayerModel.findById(req.params.id);
        res.json(player);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Add a new player
router.post('/soccer_players/add', async (req, res) => {
    try {
        const newPlayer = new SoccerPlayerModel(req.body);
        const savedPlayer = await newPlayer.save();
        res.status(201).json(savedPlayer);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Update a player selected by id 
router.put('/soccer_players/update/:id', async (req, res) => {
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
router.delete('/soccer_players/delete/:id', async (req, res) => {
    try {
        await SoccerPlayerModel.findByIdAndDelete(req.params.id);
        res.json({ message: 'Player deleted successfully' });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

export default router;