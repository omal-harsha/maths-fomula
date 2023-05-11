

export const velocity = (req,res) => {
    let u = ""
    let a = ""
    let t = ""

    if(req.query.a && req.query.u && req.query.t) {

        a = Number(req.query.a)
        u = Number(req.query.u)
        t = Number(req.query.t)

    }else{
  
         u = req.body.u
         a = req.body.a
         t = req.body.t

        
    }
        const v = u + (a*t)
        res.json("Velocity is = " +v)
    
}





