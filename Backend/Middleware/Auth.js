const usermodel = require('../Model/UserModel')
const jwt = require('jsonwebtoken')
const secret = process.env.JWT


module.exports = async(req, res, next) => {

    const barrertoken = req.headers.authorization

    if(!barrertoken){
        return res.status(400).json({message : "barrer token not found"})
    }

    const token = barrertoken.split(" ")[1]

    if(!token){
        return res.status(400).json({message : "not able to split token from barrertoken"})
    }

    const decode = jwt.verify(token, secret)

    if(!decode){
        return res.status(400).json({message : "Token is not decoded"})
    }

    const user = await usermodel.findOne({email : decode.email})

    if(!user){
        return res.status(400).json({message : "User not found for token"})
    }

    req.user = user

    next()
}
