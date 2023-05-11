import express from "express"
import mathsRoutes from './routes/maths.js'
import motionRoutes  from './routes/motion.js'

const app = express()
app.use(express.json())

app.get("/api", (req,res) => {

    const sum = req.body.first + req.body.second
    res.json("total is " + sum)
})

app.use("/api/maths", mathsRoutes)
app.use("/api/motion", motionRoutes)

app.listen(process.env.PORT || 5000, () => {
    console.log("connected")
})