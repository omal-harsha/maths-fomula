import express from "express"
const app = express()

app.get("/api", (req,res) => {

    res.json({
        "users" : [
            "userone",
            "usertwo",
            "userThree"
        ]
    })
})

app.listen(5000, () => {
    console.log("connected")
})