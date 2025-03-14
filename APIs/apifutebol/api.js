const express = require('express')
const app = express()

app.use(express.json());

const paises = {
    Brasil: {pais:"Brasil", 
    jogadores:{
        Neymar:{jogador:'neymar',gols:'700',altura:'1.70'},
        Pele:{jogador:'neymar',gols:'700',altura:'1.70'},
        ronaldinho:{jogador:'neymar',gols:'700',altura:'1.70'},
        ronaldo:{jogador:'ronaldo',gols:'700',altura:'1.70'}
    }},
    Italia: {pais:"Italia"},
    Alemanha: {pais:"Alemanha"},
    Argentina: {pais:"Argentina",
        jogadores:{
            Maradona:{jogador:'Maradona',gols:'680',altura:'168'}
        }
        
    },
    França: {pais:"França"}
}

app.get('/copadomundo', (req,res)=>{
    res.json(paises)
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
        else{

        }
    
})

app.listen(3000, () => {console.log('bola rolando')})