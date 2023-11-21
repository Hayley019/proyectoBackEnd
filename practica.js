const express = require('express')
const app =  express()

const juegos = {
    halo : {
    "Protagonista": 'MasterChef',
    "Franquicia": 'Halo',
    "Origen": 'Xbox',
    "Cantidad de juegos" : 8,
    "Estado actual" : 'En desarollo'},
    minecraft : {
    "Protagonista": 'Steve',
    "Franquicia": 'Minecraft',
    "Origen": 'PC',
    "Cantidad de juegos" : 1,
    "Estado actual" : 'Actualizaciones'
    },
    mortalKombtat:{"Protagonista": 'SubZero',
    "Franquicia": 'Mortal Kombat',
    "Origen": 'Midway',
    "Cantidad de juegos" : 10,
    "Estado actual" : 'En desarollo'}
}

app.get('/', function(req,res){
    res.send(juegos)
})

app.listen(3000)