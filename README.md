# Math Formula Express App

This is a Node.js web application built with the Express framework that calculates various mathematical formulas based on user input. The app is deployed on Heroku and can be accessed at https://maths-fomula.herokuapp.com/

>(Data can be passed to a Node.js server using either URL **parameters** or request **body** data in JSON format.)

## Features

### * Equations of motion

1. V =  U + at   -   [/api/motion/velocity](https://maths-fomula.herokuapp.com/api/motion/velocity)

Ex: json format
 ```javascript
 {
    "u" : 10,
    "a" : 10,
    "t" : 5
}
 ```
 OR pass the param
 ```
 /api/motion/velocity?u=10&a=10&t=10
 ```
 2. s = ((u + v) / 2) * t     -   [/api/motion/distance](https://maths-fomula.herokuapp.com/api/motion/distance)
