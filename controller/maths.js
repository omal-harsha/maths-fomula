
export const sum = (req,res) => {
    
    const sum = req.body.first + req.body.second
    res.json("total is " + sum)
}
