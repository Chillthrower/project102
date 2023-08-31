const {db} = require('../db.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')




const register  =  function Register(req,res){
//check for existing user
const q= "SELECT * FROM users WHERE email = ? OR username = ?"
db.query(q,[req.body.email,req.body.username],(err,data)=>{
    if(err){
        return res.json(err)
    }
    if(data.length){
        return   res.status(409).send({message:"User already exists"})
    }
    //hashing the pass and creates a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password,salt);

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)"
    const values =[
        req.body.username,
        req.body.email,
        hash
    ]
    db.query(q,[values],(err,data)=>{
        if (err) return res.json(err);
        return res.status(200).json("User has beeen created");
    })
})
}
const login  =  function Login(req,res){
    //checks for user
    const q= "SELECT * FROM users WHERE username = ?"
    
    db.query(q,[req.body.username],(err,data)=>{
        if(err) return res.json(err);
        if(data.length===0) return res.status(404).json("User not found!");

        //check for pass
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
        if(!isPasswordCorrect) return res.status(400).json("Wrong username and password");


        const token = jwt.sign({id:data[0].id}, "jwtkey");

        const{password, ...other}=data[0];


        res.cookieparser("access_token", token ,{
            httpOnly:true

        }).status(200).json(other)

    });

}
const logout  =  function Logout(req,res){
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
    }).status(200).json("user has been logged out")
}

module.exports=register
module.exports=login
module.exports=logout