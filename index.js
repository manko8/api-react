const express = require('express') 
const mongoose = require('mongoose')
const routerFile = require('./routers/file.router')
const routerUser = require('./routers/user.router')

mongoose.Promise = Promise //fonctionne assynchrone
mongoose.connect('mongodb+srv://root:root@cluster0.piovq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser : true , useUnifiedTopology : true , useFindAndModify: true}) //on se connecte ala base en activant des options

const db = mongoose.connection  //instancie la connexion a la base
db.on('error   :', console.error.bind(console, 'connection error:')) //ce qui se passe quand il y a une erreur a chaque fois
db.once('open', () => console.log(db.states[db.readyState])) // on affiche dans la console l'etat de la connexion

const app = express()

app.use(express.json())
app.use(function (req, res, next) {//accepte les requetes qui viennent de l'exterieur 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    next();
})
app.use('/users', routerUser)
app.use('/picture', routerFile)
app.get('/', (req,res) =>{
    res.json('Ok')
})

app.listen(3001)