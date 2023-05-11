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

app.listen(process.env.PORT || 5000, () => {
    console.log("connected")
})