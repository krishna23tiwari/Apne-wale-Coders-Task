const usermodel = require('../Model/UserModel')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const secret = process.env.JWT


exports.Signup = async(req, res) => {

    const {name, email, password} = req.body

    const user = await usermodel.findOne({email})

    if(user){
        return res.status(400).json({message : "Email is alreday exists.."})
    }

    const salt  = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const SaveUserData = new usermodel({name, email, password : hash})

    await SaveUserData.save()

    return res.status(200).json({message : "Signup Done"})

}

exports.login = async(req, res) =>{
    
    const {email, password} = req.body

    const user = await usermodel.findOne({email});

    if(!user){
        return res.status(400).json({message: "User not found"})
    }

    const match = bcrypt.compareSync(password, user.password)

    if(!match){
        return res.status(400).json({message : "Password does not match"})
    }

    const token = jwt.sign({email}, secret, {expiresIn : '24h'})

    const userdata = {
        message: "Login Successful",
        user,
        token,
        email
    }

    return res.status(200).json(userdata)
}

