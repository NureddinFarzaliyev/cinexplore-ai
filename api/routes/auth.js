const express = require('express')
const router = express.Router()

const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    movies: {
        type: Array,
        required: true
    },
    tv: {
        type: Array,
        required: true
    }
})

const User = mongoose.model('User', userSchema)


router.get('/', (req, res) => {
    res.send('auth')
})


router.post('/register', async (req, res) => {
    try{
        const existingUser = await User.findOne({username: req.body.username})

        if(existingUser){
            res.status(409)
            res.json({error: "User already exists."})
        }else{
            const hash = await bcrypt.hash(req.body.password, 10)
    
            const user = new User({
                username: req.body.username,
                password: hash,
                avatar: req.body.avatar,
                movies: [],
                tv: []
            })
    
            await user.save()
    
            res.status(201)
            res.json({message: `User ${req.body.username} saved on database.`})
        }
    }catch(error){
        res.json({error: error.message})
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username})

        if(user){
            const isAuth = await bcrypt.compare(req.body.password, user.password)
    
            if(isAuth){
                res.json({isAuth: true})
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




module.exports = router