import express from 'express'
const router = express.Router();
import { user_add, user_login }  from '../controllers/usersControllers.js';

// Add a new player
router.post('/soccer_players/users/add', user_add);
router.post('/soccer_players/users/login', user_login);

export default router;