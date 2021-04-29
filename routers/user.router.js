const express = require('express') //on importe express
const userModel = require('../models/user.model')
const router = express.Router()

router.get('/', async (req,res) =>{
    let users = await userModel.find({}) // instancie la variable user en prenant le dernier modele fait avac la classe user.model
    if(users) res.json(users) //s'il y a des données presente il les renvoie en json
    else res.status(500).send({error:"Internal Server Error"}) // sinon error
})
router.post('/', async (req,res) =>{
    let user = new userModel(req.body)//cree un user avec le request.body 
    await user.save() // sauvegarde dans la base avec la fonction de mongoose .save() 
    res.json(user)
})
router.put('/', (req,res) =>{
    
})
router.delete('/', (req,res) =>{
    
})

module.exports = router