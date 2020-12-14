import express from 'express';
const router = express.Router();
import {getUsers, createNewUsers, fetchUser, editUser, deleteUser} from '../controllers/users.js';

router.get('/', getUsers);
router.post('/',createNewUsers);

router.get('/:id', fetchUser)

router.delete('/:id', deleteUser)

router.patch('/:id', editUser)

export default router;