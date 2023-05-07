import express from 'express'
import { getAllUsers } from '../controllers/user-handler'
const router = express.Router()

router.route('/')
    .get(getAllUsers)

export default router