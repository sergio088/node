const express = require('express')
const app = express()
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')



app.use(express.json());
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

const paises = {
    pais:'Brasil',
    Brasil: {
        pais: "Brasil",
        jogadores: {
            Neymar: { jogador: "Neymar", gols: 77, altura: "1.75m" },
            ViniciusJunior: { jogador: "Vinícius Júnior", gols: 15, altura: "1.76m" },
            Richarlison: { jogador: "Richarlison", gols: 25, altura: "1.84m" }
        }
    },
    pais:'Argentina',
    Argentina: {
        pais: "Argentina",
        jogadores: {
            Messi: { jogador: "Lionel Messi", gols: 103, altura: "1.70m" },
            DiMaria: { jogador: "Ángel Di María", gols: 29, altura: "1.80m" },
            Lautaro: { jogador: "Lautaro Martínez", gols: 21, altura: "1.74m" }
        }
    },
    pais:'França',
    França: {
        pais: "França",
        jogadores: {
            Mbappe: { jogador: "Kylian Mbappé", gols: 46, altura: "1.78m" },
            Griezmann: { jogador: "Antoine Griezmann", gols: 44, altura: "1.76m" },
            Giroud: { jogador: "Olivier Giroud", gols: 53, altura: "1.93m" }
        }
    },
    pais:'Alemanha',
    Alemanha: {
        pais: "Alemanha",
        jogadores: {
            Muller: { jogador: "Thomas Müller", gols: 44, altura: "1.85m" },
            Havertz: { jogador: "Kai Havertz", gols: 13, altura: "1.88m" },
            Gnabry: { jogador: "Serge Gnabry", gols: 22, altura: "1.75m" }
        }
    },
    pais:'Espanha',
    Espanha: {
        pais: "Espanha",
        jogadores: {
            Morata: { jogador: "Álvaro Morata", gols: 30, altura: "1.90m" },
            Pedri: { jogador: "Pedri", gols: 5, altura: "1.74m" },
            Gavi: { jogador: "Gavi", gols: 3, altura: "1.73m" }
        }
    },
    pais:'Portugal',
    Portugal: {
        pais: "Portugal",
        jogadores: {
            CR7: { jogador: "Cristiano Ronaldo", gols: 128, altura: "1.87m" },
            BrunoFernandes: { jogador: "Bruno Fernandes", gols: 17, altura: "1.79m" },
            BernardoSilva: { jogador: "Bernardo Silva", gols: 10, altura: "1.73m" }
        }
    }
};



app.get('/', (req, res)=>{
    res.render('home', { paises: Object.keys(paises) });
})

app.get('/:pais', (req,res)=>{
    const pais = req.params.pais
    if(jogadores[pais]){
        
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