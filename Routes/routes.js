const express = require('express')
const router = express.Router()
const dotenv = require('dotenv');

// importing MongoDB schemas
const userDetail = require('../Models/UserModel')

// A custom dates function to provide the registration Time
function dates(){
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    if (String(minutes).length === 1){
        minutes = `0${String(minutes)}`
    }
    console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes)

    return `${date}-${month}-${year}-(${hours}:${minutes})`
}


dotenv.config({
    path: './config.env'
})

// router.get("/", async(req, res)=>{
//     res.status(200).json({
//         connection: true,
//         message:"Hello from Server :)"
//     })
// })

router.post("/register", async(req, res)=>{
    req.body["regTime"] = dates()
    // console.log(req.body)
    try {
        const newUser = new userDetail (req.body)
        const result = await newUser.save()
        console.log(result.regId)
        if(result._id !== null || result._id !== undefined){
            res.status(200).json({
                success : true,
                message : "User registered"
            })
        }else{
            res.status(404).json({
                success:false,
                message:"Server Error"
            })
        }
    } catch (error) {
        console.log(error.message)
        res.status(404).json({
            success:false,
            message:"Server Error"
        })
    }
})

module.exports = router;
