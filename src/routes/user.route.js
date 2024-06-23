// user.route.js

import { Router } from 'express';
import { getAllUser, getUser, createUser, updateUser, deleteUser } from '../controllers/user.controller.js';

const router = Router();

router.route('/').get(getAllUser).post(createUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

export default router;
