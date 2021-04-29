const express = require('express') //on importe express
const {response} = require('express')
const userModel = require('../models/user.model')
const router = express.Router()

router.get('/', async (req,res) =>{
    let user = await userModel.find({}) // 
    if(users) res.json(users)
    else res.status(500).send({error:"Internal Server Error"})
})
router.post('/', async (req,res) =>{
    let user = new userModel(req.body)
    await user.save()
    res.json(user)
})
router.put('/', (req,res) =>{
    
})
router.delete('/', (req,res) =>{
    
})

module.exports = router