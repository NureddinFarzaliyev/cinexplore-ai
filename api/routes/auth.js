const express = require('express')
const router = express.Router()

const bcrypt = require('bcryptjs')
const crypto = require('crypto')

const User = require('../schemas/userSchema')

// ! CHECK USER AUTH

router.post('/', async (req, res) => {

    try{
        const user = await User.findOne({_id: req.body.id})
    
        if(user.token === req.body.token){
            res.json({isAuth: true})
        }else{
            res.json({isAuth: false})
        }

    }catch(err){
        res.json({error: err})

    }

})

// ! REGISTER USER

router.post('/register', async (req, res) => {
    try{
        const existingUser = await User.findOne({username: req.body.username})

        if(existingUser){
            res.status(409)
            res.json({error: "err-same"})
        }else{
            const hash = await bcrypt.hash(req.body.password, 10)
    
            const user = new User({
                username: req.body.username,
                password: hash,
                avatar: req.body.avatar,
                movies: [],
                tv: [],
                token: ' '
            })
    
            await user.save()
    
            res.status(201)
            res.json({success: true, message: `User ${req.body.username} saved on database.`})
            console.log(user)
        }
    }catch(error){
        res.json({success: false, error: error.message})
    }
})

// ! LOGIN USER

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username})

        if(user){
            const isAuth = await bcrypt.compare(req.body.password, user.password)

            if(isAuth){
                const token = crypto.randomBytes(64).toString('hex')
                await User.updateOne({username: req.body.username}, {$set: {token: token}})
                res.json({isAuth: true, token: token, id: user._id})
            }else{
                res.json({isAuth: false, error: "err-pass"})
            }
            
        }else{
            res.json({isAuth: false, error: "err-name"})
        }

    } catch (error) {
        res.json({isAuth: false, error: "err", message: error.message})
    }
})

// ! CHECK IF USERNAME EXISTS

router.post('/usercheck', async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username})

        if(user){
            res.json({isExists: true})
        }else{
            res.json({isExists: false})
        }
    }
    catch(err){
        res.json({error: err})
    }
})


module.exports = router