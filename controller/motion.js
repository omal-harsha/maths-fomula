

export const velocity = (req,res) => {
  
    const u = req.body.u
    const a = req.body.a
    const t = req.body.t

    const v = u + (a*t)

    res.json("Velocity is = " +v)
}
