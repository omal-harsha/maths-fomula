import express from 'express'
import {velocity} from '../controller/motion.js'

const router = express.Router()


router.get("/velocity" , velocity)


export default router