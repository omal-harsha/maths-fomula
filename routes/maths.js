import express  from 'express';
import {sum} from "../controller/maths.js"

const router = express.Router()

router.get("/sum", sum)

export default router;
