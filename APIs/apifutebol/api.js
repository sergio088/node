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
    
    Brasil: {
        seleçao:"Brasileira",
        pais: "Brasil",
        jogadores: {
            Neymar: { jogador: "Neymar", gols: 77, altura: "1.75m" },
            ViniciusJunior: { jogador: "Vinícius Júnior", gols: 15, altura: "1.76m" },
            Richarlison: { jogador: "Richarlison", gols: 25, altura: "1.84m" }
        }
    },
    
    Argentina: {
        seleçao:"Argentina",
        pais: "Argentina",
        jogadores: {
            Messi: { jogador: "Lionel Messi", gols: 103, altura: "1.70m" },
            DiMaria: { jogador: "Ángel Di María", gols: 29, altura: "1.80m" },
            Lautaro: { jogador: "Lautaro Martínez", gols: 21, altura: "1.74m" }
        }
    },
    
    França: {
        seleçao:"Francesa",
        pais: "França",
        jogadores: {
            Mbappe: { jogador: "Kylian Mbappé", gols: 46, altura: "1.78m" },
            Griezmann: { jogador: "Antoine Griezmann", gols: 44, altura: "1.76m" },
            Giroud: { jogador: "Olivier Giroud", gols: 53, altura: "1.93m" }
        }
    },
    
    Alemanha: {
        seleçao:"Alemã",
        pais: "Alemanha",
        jogadores: {
            Muller: { jogador: "Thomas Müller", gols: 44, altura: "1.85m" },
            Havertz: { jogador: "Kai Havertz", gols: 13, altura: "1.88m" },
            Gnabry: { jogador: "Serge Gnabry", gols: 22, altura: "1.75m" }
        }
    },
    
    Espanha: {
        seleçao:"Espanhola",
        pais: "Espanha",
        jogadores: {
            Morata: { jogador: "Álvaro Morata", gols: 30, altura: "1.90m" },
            Pedri: { jogador: "Pedri", gols: 5, altura: "1.74m" },
            Gavi: { jogador: "Gavi", gols: 3, altura: "1.73m" }
        }
    },
    
    Portugal: {
        seleçao:"Portuguesa",
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

app.get('/:pais', (req, res)=>{
    const pais = req.params.pais
    const jogadorespais = paises[pais].jogadores
    res.render('jogadores', {jogadores: Object.keys(jogadorespais), pais})
})

app.get('/:pais/:jogador', (req,res)=>{
    const pais = req.params.pais
    const jogador = req.params.jogador
    const gols = paises[pais].jogadores[jogador].gols
    const altura = paises[pais].jogadores[jogador].altura
    const seleçao = paises[pais].seleçao

    res.render('futgrafia', {jogador, gols, altura, seleçao, pais})
    
})

app.listen(3000, () => {console.log('bola rolando')})