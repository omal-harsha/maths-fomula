

export const velocity = (req,res) => {

    if(req.query.a && req.query.u && req.query.t) {

        const a = Number(req.query.a)
        const u = Number(req.query.u)
        const t = Number(req.query.t)

        const v = u + (a*t)
        res.json("Velocity is = " +v)
    }else{
  
        const u = req.body.u
        const a = req.body.a
        const t = req.body.t

        const v = u + (a*t)
        res.json("Velocity is = " +v)
    }

    
}
