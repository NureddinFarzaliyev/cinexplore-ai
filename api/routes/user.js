const express = require('express')
const router = express.Router()

const User = require('../schemas/userSchema')


router.get('/:id/:type?', async (req, res) => {
    try{
        const {id, type} = req.params
    
        const user = await User.findOne({_id: id})
    
        if(!type){
            res.json(user)
        }else{
            if(type === 'all'){
                res.json([...user['movie'], ...user['tv']])
            }else{
                res.json(user[type])
            }
        }

    }catch(err){
        res.json({error: err})
    }
})

router.post('/:id/additem', async (req, res) => {
    try{
        const {type, itemid} = req.body
        const user = await User.findOne({_id: req.params.id})

        if(user){
            let updatedList

            if(!user[type].includes(itemid)){
                updatedList = user[type].length == 0 ? [String(itemid)] : [...user[type], String(itemid)]
            }else{
                updatedList = user[type].filter((e) => e != String(itemid))                
            }

            if(type === 'movies' || type === 'movie') await User.updateOne({_id: req.params.id}, {$set: { 'movie': updatedList } })
            if(type === 'tv') await User.updateOne({_id: req.params.id}, {$set: { 'tv': updatedList } })

            res.json(user)
        }else{
            throw new Error('Wrong user id')
        }
    }catch(err){
        res.json({error: err.message})
    }
})




module.exports = router