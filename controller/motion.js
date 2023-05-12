

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



export const distance = (req,res) => {

    let u = ""
    let v = ""
    let t = ""

    if(req.query.a && req.query.u && req.query.t) {

        v = Number(req.query.v)
        u = Number(req.query.u)
        t = Number(req.query.t)

    }else{
  
         u = req.body.u
         v = req.body.v
         t = req.body.t

        
    }
        const s =  (( u + v )/2) * t
        res.json("Distance is = " + s)
  
}





