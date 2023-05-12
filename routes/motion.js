import express from 'express'
import {velocity, distance} from '../controller/motion.js'

const router = express.Router()


router.get("/velocity" , velocity)
router.get("/distance" , distance)


export default router