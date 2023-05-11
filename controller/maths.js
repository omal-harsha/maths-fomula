
export const sum = (req,res) => {
    
    if(req.query.first && req.query.second) {
    const sum = Number(req.query.first) + Number(req.query.second)
    res.json("total is " + sum)
    } else{
        const sum = req.body.first + req.body.second
    res.json("total is " + sum)
    }
}
