/*Arquivo responsável por iniciar o servidor */
const express = require('express')// Importando o express
const route = require('./route') //mostrando onde estão as rotas que o servidor deve utilizar
const path = require('path') //usado para pegar o caminho de uma pasta

const server = express() //Criando um server

server.set('view engine', 'ejs') //definindo que o responsável pela view engine é o ejs

server.use(express.static("public"))//definindo p/ o express que onde estão nossas configurações(styles...)

server.set('views', path.join(__dirname, 'views')) /*dizendo que a pasta views esta dentro do src, pq o express nao encontra já que ela deveria estar fora dele*/

server.use(express.urlencoded({extended: true}))

server.use(route)//manda o server usar o route.js

server.listen(3000, () => console.log("Rodando"))//servidor do node rodando na porta 3000

