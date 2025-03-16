const express = require('express')
const app = express()
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')



app.use(express.json());
app.set('view engine', 'ejs')

const paises = {
    Brasil: {pais:"Brasil", },
    Italia: {pais:"Italia"},
    Alemanha: {pais:"Alemanha"},
    Argentina: {pais:"Argentina",},
    França: {pais:"França"}
}

const jogadores = {
    Brasil:{
        jogadores:{
            Neymar:{jogador:'neymar',gols:'700',altura:'1.70'},
            Pele:{jogador:'neymar',gols:'700',altura:'1.70'},
            ronaldinho:{jogador:'neymar',gols:'700',altura:'1.70'},
            ronaldo:{jogador:'ronaldo',gols:'700',altura:'1.70'}
        }
    },
    Argentina:{
        jogadores:{
            Maradona:{jogador:'Maradona',gols:'680',altura:'168'}
        }
    }
}


app.get('/', (req, res)=>{
    fs.readFile(
        path.join(__dirname,'view','homepage'),
        (err, content) =>{
            if(err) throw err
            res.end(content)
        },
    )
})

app.get('/:pais', (req,res)=>{
    const pais = req.params.pais
    if(jogadores[pais]){
        res.json(jogadores[pais])
    }
})

app.get('/copadomundo/:pais', (req, res) =>{
    const pais = req.params.pais
    if(paises[pais]){
        res.json(paises[pais])
    }
})

app.get('/copadomundo/:pais/:jogador', (req, res) =>{
    const pais = req.params.pais 
        const jogador = req.params.jogador
           if(paises[pais].jogadores[jogador]){
            res.json(paises[pais].jogadores[jogador])
        }
    
})

app.listen(3000, () => {console.log('bola rolando')})