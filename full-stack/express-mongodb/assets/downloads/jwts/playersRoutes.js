import express from 'express'
const router = express.Router();
import { player_add, player_delete, player_get, player_update, players_index } from '../controllers/playersControllers.js';;

// Home page with link
router.get('/', async (req, res) => {
    res.send('index.html');
});

// List all players
router.get('/soccer_players/list', players_index);

// View selected player by id
router.get('/soccer_players/view/:id', player_get);

// Add a new player
router.post('/soccer_players/add', verifyToken, player_add);

// Update a player selected by id 
router.put('/soccer_players/update/:id', verifyToken, player_update);

// Delete a player selected by id
router.delete('/soccer_players/delete/:id', verifyToken, player_delete);

export default router;