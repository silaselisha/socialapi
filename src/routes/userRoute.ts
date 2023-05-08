import express from 'express'
import { getAllUsers, getUser, createUser, updateUser, deleteUser } from '@controllers/user-handler'
const router = express.Router()

router.route('/')
    .get(getAllUsers)
    .post(createUser)

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

export default router