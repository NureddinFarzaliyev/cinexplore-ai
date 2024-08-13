const express = require('express')
const router = express.Router()

const {ObjectID} = require('mongodb');

const User = require('../schemas/userSchema')


router.get('/:id/:type?', async (req, res) => {
    try{
        const {id, type} = req.params
    
        const user = await User.findOne({_id: id})
    
        if(!type){
            res.json(user)
        }else{
            res.json(user[type])
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
            if(!user[type].includes(itemid)){
                
                const updatedList = user[type].length == 0 ? [itemid] : [...user[type], itemid]
    
                if(type === 'movies') await User.updateOne({_id: req.params.id}, {$set: { 'movies': updatedList } })
                if(type === 'tv') await User.updateOne({_id: req.params.id}, {$set: { 'tv': updatedList } })
    
                res.json(user)

            }else{
                throw new Error('Item Already Exists in User Profile')
            }

        }else{
            throw new Error('Wrong user id')
        }
    }catch(err){
        res.json({error: err.message})
    }
})




module.exports = router