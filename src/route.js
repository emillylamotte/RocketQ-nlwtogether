const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router() //route guarda todas as rotas

route.get('/', (req, res) => res.render("index", {page: 'enter-room'})) //rota para o index.ejs / home
route.get('/create-pass', (req, res) => res.render("index", {page:'create-pass'})) //rota para a create-pass

route.get('/room/:room', RoomController.open) //rota para o room

route.post('/question/create/:room', QuestionController.create)

/*Formato que o formulário de dentro da modal tem que passar a informação*/
route.post('/question/:room/:question/:action', QuestionController.index)

route.post('/create-room', RoomController.create)

module.exports = route