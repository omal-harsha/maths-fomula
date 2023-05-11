import express from "express"
const app = express()
app.use(express.json())

app.get("/api", (req,res) => {

    const sum = req.body.first + req.body.second
    res.json("total is " + sum)
})

app.listen(process.env.PORT || 5000, () => {
    console.log("connected")
})